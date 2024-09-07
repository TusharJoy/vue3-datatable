import DataTable from "./components/DataTable.vue";
import "./index.css";

export function install(app) {
  app.component("DataTable", DataTable);
}

// Named export for the component
export { DataTable };
