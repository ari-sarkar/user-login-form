import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../styles/Skills.scss";
import "../styles/Skill.scss";

//import "primeicons/primeicons.css";
import StoreSkills from "../components/StoreSkills";
const Demo = ({ items }) => {
  const [selectedCustomers, setSelectedCustomers] = useState("");
  const [isclicked, setisclicked] = useState(true);
  const individualItem = items.map(item => item);

  //console.log(individualItem)
  //console.log(selectedCustomers)
  const paginatorLeft = (
    <button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <button type="button" icon="pi pi-cloud" className="p-button-text" />
  );

  //console.log(selectedCustomers[0].id)

  const nameBodyTemplate = rowData => {
    return <React.Fragment>{rowData.name}</React.Fragment>;
  };
const handleClick=()=>{
setisclicked(false)
}
//console.log(isclicked)
  ///////////////////////////////////////////////////////
  return (
    <div className="skills-container">
      <div className="skills-wrapper">
      <button className= {selectedCustomers.length > 2 && selectedCustomers.length < 11 ? "submit-btn":"submit-btn disabled"} onClick={selectedCustomers.length > 2 && selectedCustomers.length < 11 ? handleClick: null}>Submit</button>
        <DataTable
          className="p-jc-start"
          selection={selectedCustomers}
          onSelectionChange={e => setSelectedCustomers(e.value)}
          value={individualItem}
          paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
        >
          <Column
            field="skillName"
            header="Skill Name"
            body={nameBodyTemplate}
            filter
            filterPlaceholder="Search by name"
          />

          <Column selectionMode={"multiple"} style={{ width: "3em" }} />
          <Column field="skillName"></Column>
        </DataTable>
        <StoreSkills selectedCustomers={selectedCustomers} isclicked={isclicked}/>
      </div>
    </div>
  );
};

export default Demo;
