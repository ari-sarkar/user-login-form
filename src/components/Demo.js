import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import StoreSkills from "../components/StoreSkills"
const Demo = ({ items }) => {
  const [selectedCustomers, setSelectedCustomers] = useState(null);
  const individualItem = items.map(item => item);
  //console.log(individualItem)
  //console.log(selectedCustomers)
  const paginatorLeft = (
    <button type="button" icon="pi pi-refresh" className="p-button-text" /> 
  )
  const paginatorRight = (
    <button type="button" icon="pi pi-cloud" className="p-button-text" />
  )
  //console.log(selectedCustomers[0].id)
  return (
    <div style={{ zIndex: 20 }}>
      <DataTable
        selectionMode={"multiple"}
        selection={selectedCustomers}
        onSelectionChange={e => setSelectedCustomers(e.value)}
        value={
          // {code: individualItem.id, name: individualItem.skillName, category: 'sedan', quantity: 3},
          // {code: individualItem.id, name: individualItem.skillName, category: 'sedan', quantity: 3},
          // {code: individualItem.id, name: individualItem.skillName, category: 'sedan', quantity: 3},
          // {code: individualItem.id, name: individualItem.skillName, category: 'sedan', quantity: 3},
          // {code: individualItem.id, name: individualItem.skillName, category: 'sedan', quanity: 3},
          // {code: individualItem.id, name: individualItem.skillName, category: 'sedan', quantity: 3},
          // {code: individualItem.id, name: individualItem.skillName, category: 'sedan', quantity: 3},
          individualItem
        }
        paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={10}
        rowsPerPageOptions={[10, 20, 50]}
        paginatorLeft={paginatorLeft}
        paginatorRight={paginatorRight}
      >
        <Column selectionMode={"multiple"} style={{ width: "3em" }} />
        <Column field="id" header="id"></Column>
        <Column field="skillName" header="skillName"></Column>
      </DataTable>
      <StoreSkills selectedCustomers={selectedCustomers}/>
    </div>
  );
};

export default Demo;
