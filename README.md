# Vue 3 DataTable

Vue3-DataTable is a reusable data table component built using Vue 3, Tailwind CSS, and third-party libraries like VueSelect and VueDatePicker. It provides an easy-to-use, customizable, and feature-rich table that supports sorting, pagination, inline editing, column wise editing, and bulk update functionality.

## Features

- Customizable columns with various data types (text, number, date, select, etc.)
- Pagination support with configurable page size
- Sorting by columns
- Inline editing with VueSelect and VueDatePicker
- Bulk update functionality
- Custom actions for rows

## Installation

Install the library using npm:

```bash
npm install vue3-datatable
```

## Usage

Import and use the component in your Vue 3 application:

```vue
<template>
  <DataTable
    :columns="columns"
    :items="items"
    @update-item="handleUpdateItem"
  />
</template>

<script>
import DataTable from "vue3-datatable";

export default {
  components: { DataTable },
  data() {
    return {
      columns: [
        { key: "name", text: "Name", type: "string", editable: true },
        { key: "age", text: "Age", type: "number", editable: true },
        { key: "dob", text: "Date of Birth", type: "date", editable: true },
        { key: "actions", text: "Actions", type: "actions" },
      ],
      items: [
        { id: 1, name: "John Doe", age: 25, dob: "1996-12-15" },
        { id: 2, name: "Jane Smith", age: 30, dob: "1991-08-22" },
      ],
    };
  },
  methods: {
    handleUpdateItem(index, key, value) {
      // Handle item update logic
    },
  },
};
</script>
```

## Props

- `items`: Array of objects representing the data to display in the table.
- `columns`: Array of objects representing the columns to be displayed.
- `enableDeleteRow`: (optional) Boolean to enable row deletion.
- `actions`: (optional) Array of actions for each row.
- `rowEditState`: (optional) Object to track the edit state of rows.

## Events

- `update-item`: Triggered when an item is updated. Returns the index, key, and updated value.

## Contributing

Feel free to open issues and submit pull requests if you find bugs or want to contribute to the project!

## License

This project is licensed under the MIT License.
