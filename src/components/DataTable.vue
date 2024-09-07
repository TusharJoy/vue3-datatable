<template>
  <div
    class="bg-white rounded-lg text-primary custom-scrollbar overscroll-auto min-w-full"
  >
    <div class="overflow-x-auto">
      <SpinnerIndicator
        v-if="loading"
        :isLoading="loading"
        loadingText="Loading Data..."
      />
      <div v-else>
        <div class="relative" style="max-height: 600px; overflow-y: scroll">
          <table class="table rounded-lg">
            <thead class="bg-gray-100 sticky rounded-lg top-0 z-10 py-3">
              <tr class="text-primary flex">
                <th
                  v-for="(column, index) in columns"
                  :key="column.key"
                  :class="[
                    'font-bold py-6 hover:bg-custom-blue hover:bg-opacity-30 cursor-pointer flex justify-between items-center',
                    column.cellWidth || 'w-[12rem]',
                    index !== columns.length - 1
                      ? 'border-r-2 border-gray-400'
                      : '',
                  ]"
                  @click="sortItems(column.key)"
                >
                  <div class="flex justify-between w-full group">
                    <span class="break-words whitespace-normal"
                      >{{ column.text }}
                      <span
                        v-if="column.bulkColumnUpdate"
                        class="ml-2 icon-[ic--baseline-edit] cursor-pointer text-lg"
                        @click.stop="openBulkUpdateModal(column)"
                      ></span
                    ></span>
                    <span
                      v-if="sortKey === column.key"
                      class="justify-self-end"
                    >
                      <span
                        class="icon-[uil--sort] opacity-0 group-hover:opacity-100"
                      ></span>
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody
              class="text-gray-400 bg-white"
              style="font-family: 'Inter'"
              v-if="items.length > 0"
            >
              <tr
                v-for="(item, index) in sortedItems"
                :key="item.id"
                class="flex"
              >
                <td
                  v-for="(column, columnIndex) in columns"
                  :key="column.key"
                  :class="[
                    'flex items-center',
                    column.cellWidth || 'w-[12rem]',
                  ]"
                >
                  <div v-if="columnIndex === 0" class="inline-flex">
                    <div
                      v-if="actions.length"
                      class="dropdown dropdown-right"
                      @mouseleave="enableDropdownHover = true"
                    >
                      <span
                        tabindex="0"
                        role="button"
                        class="icon-[formkit--reorder] mr-2 cursor-pointer relative"
                      ></span>
                      <ul
                        tabindex="0"
                        class="dropdown-content z-[50] menu p-2 shadow bg-base-100 rounded-box w-52 absolute"
                        style="top: 100%; left: 0"
                      >
                        <li
                          v-for="action in actions"
                          :key="action.text"
                          class="text-primary font-bold hover:bg-custom-blue hover:bg-opacity-30"
                          @click.stop="handleClickDropdownItems(item, action)"
                        >
                          <a>{{ action.text }}</a>
                        </li>
                      </ul>
                    </div>
                    <span
                      v-if="!readonly && singleRowEdit"
                      class="mr-2 icon-[ic--baseline-edit] cursor-pointer"
                      @click="toggleEditMode(index)"
                    ></span>
                    <span
                      v-if="enableDeleteRow"
                      class="icon-[gridicons--cross] text-red-700 cursor-pointer"
                      @click="handleDeleteRow(index, item)"
                    ></span>
                  </div>
                  <div v-if="column.type === 'date'">
                    <span v-if="column.type === 'date'">
                      <VueDatePicker
                        v-model="item[column.key]"
                        :clearable="false"
                        :dark="false"
                        input-class-name="input w-full border-none"
                        auto-apply
                        format="yyyy-MM-dd"
                        :readonly="!isEditable(index, column)"
                        placement="top"
                        teleport="body"
                        @update:modelValue="
                          handleDateUpdate(index, column.key, $event, item)
                        "
                      >
                        <template #action-row=""> </template>
                        <template #clock-icon> </template>
                        <template #input-icon> </template>
                      </VueDatePicker>
                    </span>
                  </div>
                  <input
                    v-else-if="column.type === 'checkbox'"
                    type="checkbox"
                    v-model="item[column.key]"
                    class="checkbox"
                    @change="
                      updateItem(index, column.key, $event.target.checked, item)
                    "
                    :disabled="!isEditable(index, column)"
                  />
                  <span v-else-if="column.type === 'select'" class="grow">
                    <VueSelect
                      v-if="!column.render || isEditable(index, column)"
                      class="w-full"
                      :options="column.options"
                      :label="column.label_key"
                      :clearable="false"
                      :disabled="!isEditable(index, column)"
                      :reduce="(option) => option[column.value_key]"
                      :modelValue="item[column.key]"
                      @update:modelValue="
                        (value) => updateItem(index, column.key, value, item)
                      "
                      append-to-body
                    ></VueSelect>
                    <span v-else>
                      <router-link
                        v-if="column.isLink"
                        :to="{
                          name: column.routeName,
                          params: column.routeParams(item),
                        }"
                        class="text-blue-500 underline w-full"
                      >
                        {{
                          column.render
                            ? column.render(item[column.key])
                            : item[column.key]
                        }}
                      </router-link>
                      <span class="badge mr-2" v-else>
                        {{
                          column.render
                            ? column.render(item[column.key])
                            : item[column.key]
                        }}
                      </span>
                    </span>
                  </span>
                  <span v-else-if="column.type === 'link'">
                    <router-link
                      v-if="!isEditable(index, column) && column.routeName"
                      :to="{
                        name: column.routeName,
                        params: column.routeParams(item),
                      }"
                      class="text-blue-500 underline w-full break-all whitespace-normal"
                    >
                      {{ item[column.key] }}
                    </router-link>
                    <a
                      v-else-if="
                        !isEditable(index, column) && column.manualLink
                      "
                      :href="column.manualLink(item)"
                      class="text-blue-500 underline w-full break-all whitespace-normal"
                    >
                      {{ item[column.key] }}
                    </a>
                    <a
                      :href="item[column.key]"
                      v-else-if="!isEditable(index, column)"
                      target="_blank"
                      class="text-blue-500 underline w-full break-all whitespace-normal"
                    >
                      {{ item[column.key] }}
                    </a>
                    <textarea
                      v-else
                      class="textarea textarea-bordered w-full text-black disabled:bg-white disabled:border-none"
                      v-model="item[column.key]"
                      @input="
                        updateItem(index, column.key, $event.target.value, item)
                      "
                    ></textarea>
                  </span>
                  <span v-else-if="column.type === 'multiselect'" class="grow">
                    <VueSelect
                      v-if="isEditable(index, column)"
                      class="w-full"
                      :options="
                        typeof column.options === 'function'
                          ? column.options(item)
                          : column.options
                      "
                      :label="column.label_key"
                      :clearable="false"
                      multiple
                      :reduce="(option) => option[column.value_key]"
                      :modelValue="
                        column.valueFormat
                          ? column.valueFormat(item[column.key])
                          : item[column.key]
                      "
                      @update:modelValue="
                        (value) =>
                          updateMultiSelectItem(index, column, value, item)
                      "
                      append-to-body
                    >
                    </VueSelect>
                    <span
                      v-else
                      v-for="(badgeText, index) in column.render(item)"
                      :key="index"
                    >
                      <span class="badge mr-2">{{ badgeText }}</span>
                    </span>
                  </span>
                  <span
                    v-else-if="
                      column.type === 'float' || column.type === 'number'
                    "
                  >
                    <input
                      v-if="isEditable(index, column)"
                      type="number"
                      v-model="item[column.key]"
                      :disabled="column.calculative"
                      step="any"
                      class="input input-bordered w-full text-black"
                      :class="column.calculative ? 'disabled:text-black' : ''"
                      @input="
                        handleInputUpdate(
                          column.type,
                          index,
                          column.key,
                          $event.target.value,
                          item
                        )
                      "
                    />
                    <span v-else class="text-base text-primary">{{
                      getDisplayValue(item, column)
                    }}</span>
                  </span>
                  <span v-else>
                    <input
                      v-if="isEditable(index, column)"
                      :type="column.type"
                      v-model="item[column.key]"
                      :disabled="column.calculative"
                      class="input input-bordered w-full text-black"
                      :class="column.calculative ? 'disabled:text-black' : ''"
                      @input="
                        handleInputUpdate(
                          column.type,
                          index,
                          column.key,
                          $event.target.value,
                          item
                        )
                      "
                    />
                    <span v-else class="text-base text-primary">{{
                      getDisplayValue(item, column)
                    }}</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          v-if="items.length === 0"
          class="absolute inset-0 flex items-center justify-center sticky top-0 left-0 right-0 bg-white shadow-lg z-10 py-3"
        >
          <div
            class="text-center bg-gray-50 p-6 rounded-lg border border-dashed border-gray-300"
          >
            <i class="text-4xl mb-4 text-gray-200">🔍</i>
            <p class="text-lg font-semibold text-gray-600">No results found</p>
            <p class="text-sm text-gray-500 mt-2">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        </div>
        <div
          v-if="showBulkUpdateModal"
          class="fixed inset-0 flex items-center justify-center z-50"
        >
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-lg font-bold mb-4">
              Bulk Update {{ bulkUpdateColumn.text }}
            </h3>
            <input
              v-model="bulkUpdateValue"
              type="text"
              class="input input-bordered w-full mb-4"
              placeholder="Enter new value"
            />
            <div class="flex justify-end">
              <button
                @click="closeBulkUpdateModal"
                class="btn btn-secondary mr-2"
              >
                Cancel
              </button>
              <button @click="applyBulkUpdate" class="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
        <!-- Pagination Start -->
        <div
          class="sticky top-0 left-0 right-0 bg-white shadow-lg z-10 py-6"
          v-if="enablePagination"
        >
          <!-- Total Items and Items Per Page Selector -->
          <div class="flex justify-between items-center px-4">
            <div>
              Showing {{ startEntry }} to {{ endEntry }} of
              {{ totalItem }} entries
            </div>
            <!-- Pagination Controls Start -->
            <div class="flex justify-center">
              <div class="btn-group">
                <button
                  class="btn"
                  :class="{ 'btn-disabled': currentPage === 1 }"
                  @click="handlePageChange(currentPage - 1)"
                  :disabled="currentPage === 1"
                >
                  «
                </button>
                <button
                  v-for="page in visiblePages"
                  :key="page"
                  class="btn"
                  :class="{
                    'btn-active': currentPage === page,
                    'btn-disabled': page === '...',
                  }"
                  @click="page !== '...' && handlePageChange(page)"
                  :disabled="page === '...'"
                >
                  {{ page }}
                </button>
                <button
                  class="btn"
                  :class="{ 'btn-disabled': currentPage === totalPages }"
                  @click="handlePageChange(currentPage + 1)"
                  :disabled="currentPage === totalPages"
                >
                  »
                </button>
              </div>
            </div>
            <!-- Pagination Controls End -->
            <div class="flex items-center">
              <label for="itemsPerPage" class="mr-2">Items per page:</label>
              <select
                id="itemsPerPage"
                v-model="itemsPerPage"
                @change="handleItemsPerPageChange"
                class="select select-bordered select-sm"
              >
                <option
                  v-for="option in itemsPerPageOptions"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <!-- Pagination End-->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineComponent } from "vue";
import SpinnerIndicator from "./SpinnerIndicator.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import vSelect from "vue-select";

import "@vuepic/vue-datepicker/dist/main.css";
import "vue-select/dist/vue-select.css";

defineComponent({
  components: {
    VueDatePicker,
    VueSelect: vSelect,
  },
});

// Define Props
const props = defineProps({
  items: Array,
  columns: Array,
  enableDeleteRow: {
    type: Boolean,
    default: false,
  },
  deleteRowHandler: {
    type: Function,
    default: () => {},
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  singleRowEdit: {
    type: Boolean,
    default: true,
  },
  rowEditState: Object,
  actions: {
    type: Array,
    default: () => [],
  },
  showExpireDateHighlight: {
    type: Boolean,
    default: false,
    required: false,
  },
  enablePagination: {
    type: Boolean,
    default: false,
    required: false,
  },
  itemsPerPage: {
    type: Number,
    default: 10,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  totalItem: {
    type: Number,
    default: 0,
  },
  loading: {
    type: Boolean,
    default: false,
    required: false,
  },
});

// Define Emits
const emit = defineEmits([
  "toggle-edit-mode",
  "update-item",
  "update:currentPage",
  "update:itemsPerPage",
]);

// Reactive State
const enableDropdownHover = ref(true);
const sortKey = ref("");
const sortOrder = ref("asc");
const currentPage = ref(props.currentPage);
const itemsPerPage = ref(props.itemsPerPage);
const itemsPerPageOptions = [10, 20, 50, 100];
const startEntry = computed(() => {
  if (props.totalItem === 0) {
    return 0;
  }
  return (props.currentPage - 1) * props.itemsPerPage + 1;
});

const endEntry = computed(() => {
  return Math.min(props.currentPage * props.itemsPerPage, props.totalItem);
});
const showBulkUpdateModal = ref(false);
const bulkUpdateValue = ref("");
const bulkUpdateColumn = ref(null);

const openBulkUpdateModal = (column) => {
  bulkUpdateColumn.value = column;
  showBulkUpdateModal.value = true;
};

const closeBulkUpdateModal = () => {
  showBulkUpdateModal.value = false;
  bulkUpdateValue.value = "";
};

const applyBulkUpdate = () => {
  if (bulkUpdateColumn.value && bulkUpdateValue.value !== "") {
    props.items.forEach((item, index) => {
      updateItem(
        index,
        bulkUpdateColumn.value.key,
        bulkUpdateValue.value,
        item
      );
    });
    closeBulkUpdateModal();
  }
};

// Watchers to update internal state when props change
watch(
  () => props.currentPage,
  (newPage) => {
    currentPage.value = newPage;
  }
);

watch(
  () => props.itemsPerPage,
  (newItemsPerPage) => {
    itemsPerPage.value = newItemsPerPage;
  }
);
// Computed Properties
const sortedItems = computed(() => {
  return [...props.items].sort((a, b) => {
    if (a[sortKey.value] < b[sortKey.value])
      return sortOrder.value === "asc" ? -1 : 1;
    if (a[sortKey.value] > b[sortKey.value])
      return sortOrder.value === "asc" ? 1 : -1;
    return 0;
  });
});

const totalPages = computed(() => {
  return Math.ceil(props.totalItem / itemsPerPage.value);
});

const handlePageChange = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    emit("update:currentPage", page);
  }
};

const handleItemsPerPageChange = () => {
  emit("update:itemsPerPage", itemsPerPage.value);
  currentPage.value = 1; // Reset to the first page
  emit("update:currentPage", 1);
};

const handleDeleteRow = (index, item) => {
  if (props.deleteRowHandler && props.enableDeleteRow && !props.readonly) {
    props.deleteRowHandler(index, item);
  }
};

const sortItems = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = key;
    sortOrder.value = "asc";
  }
};

const updateItem = (index, key, value, item) => {
  emit("update-item", index, key, value, item);
};

const updateMultiSelectItem = (index, column, values, item) => {
  const transformedValue = values.map((option) => ({
    [column.value_key]: option,
  }));
  updateItem(index, column.key, transformedValue, item);
};

const handleClickDropdownItems = (item, action) => {
  action.handler(item);
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  enableDropdownHover.value = false;
};

const toggleEditMode = (index) => {
  emit("toggle-edit-mode", index);
};

const isEditable = (index, column) => {
  if (props.singleRowEdit) {
    return !!props.rowEditState[index] && column.editable;
  } else {
    return !props.readonly && column.editable;
  }
};

const handleDateUpdate = (index, key, date, item) => {
  const formattedDate = date.toISOString().split("T")[0];
  updateItem(index, key, formattedDate, item);
};

const formatValue = (value, type) => {
  switch (type) {
    case "float": {
      const parsedValue = parseFloat(value);
      return isNaN(parsedValue) ? null : parsedValue;
    }
    case "number": {
      const parsedValue = parseInt(value);
      return isNaN(parsedValue) ? null : parsedValue;
    }
    case "string":
      return value.toString();
    default:
      return value;
  }
};

const handleInputUpdate = (type, index, key, value, item) => {
  const parsedValue = formatValue(value, type);
  updateItem(index, key, parsedValue, item);
};

const getDisplayValue = (item, column) => {
  const value = item[column.key];
  const preLabel = column.cellPreLabel;
  if (value === null) return "";
  if (preLabel === undefined) return value;
  return `${preLabel}${value}`;
};

const visiblePages = computed(() => {
  const pages = [];
  const maxVisiblePages = 3;
  const totalPagesCount = totalPages.value;
  const currentPageNumber = currentPage.value;

  let startPage = Math.max(
    1,
    currentPageNumber - Math.floor(maxVisiblePages / 2)
  );
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPagesCount) {
    endPage = totalPagesCount;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) {
      pages.push("...");
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPagesCount) {
    if (endPage < totalPagesCount - 1) {
      pages.push("...");
    }
    pages.push(totalPagesCount);
  }

  return pages;
});
</script>

<style>
@import "../../src/index.css";
:deep() {
  --vs-border-width: 0px;
  --vs-disabled-bg: white;
  --dp-border-color: white;
  --dp-menu-border-color: white;
  --dp-border-color-hover: white;
  --dp-border-color-focus: white;
  --dp-disabled-color-text: white;
  --vs-state-disabled-bg: rgb(248, 248, 248);
  --vs-state-disabled-color: var(--vs-colors--light);
  --vs-state-disabled-controls-color: var(--vs-colors--light);
  --vs-state-disabled-cursor: not-allowed;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
