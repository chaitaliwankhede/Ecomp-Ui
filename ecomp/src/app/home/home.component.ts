
import { ColDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private gridApi!: GridApi<any>;
  columnDefs: ColDef[] = [];
  public defaultColDef: ColDef = {
    initialWidth: 100,
    sortable: true,
    resizable: true,
    filter: true,
  };
  rowData: any = [];
  auditorData: any = {
    "sEcho": null,
    "iTotalRecords": 6247,
    "iTotalDisplayRecords": 6247,
    "aaData": [
      {
        "employeeId": "1000",
        "name": "Robot,Barce",
        "signature": "ROBOT_BARCE",
        "BusinessEmail": "ROBOT_BARCE@dnv.com",
        "ba": "Z (BAG)",
        "loc": "NOOSL2",
        "country": "NOR",
        "department": "Automation & Systems",
        "section": "Z-TS-OAC (ZSEIT576)",
        "employeeclass": "EMP-Permanent Employee",
        "status": "A-Active",
        "serviceStatus": "N/A",
        "date": "0001-01-01"
      },
      {
        "employeeId": "1000",
        "name": "Robot,Barce",
        "signature": "ROBOT_BARCE",
        "BusinessEmail": "ROBOT_BARCE@dnv.com",
        "ba": "Z (BAG)",
        "loc": "NOOSL2",
        "country": "NOR",
        "department": "Automation & Systems",
        "section": "Z-TS-OAC (ZSEIT576)",
        "employeeclass": "EMP-Permanent Employee",
        "status": "A-Active",
        "serviceStatus": "N/A",
        "date": "0001-01-01"
      },
      {
        "employeeId": "1000",
        "name": "Robot,Barce",
        "signature": "ROBOT_BARCE",
        "BusinessEmail": "ROBOT_BARCE@dnv.com",
        "ba": "Z (BAG)",
        "loc": "NOOSL2",
        "country": "NOR",
        "department": "Automation & Systems",
        "section": "Z-TS-OAC (ZSEIT576)",
        "employeeclass": "EMP-Permanent Employee",
        "status": "A-Active",
        "serviceStatus": "N/A",
        "date": "0001-01-01"
      },
      {
        "employeeId": "1000",
        "name": "Robot,Barce",
        "signature": "ROBOT_BARCE",
        "BusinessEmail": "ROBOT_BARCE@dnv.com",
        "ba": "Z (BAG)",
        "loc": "NOOSL2",
        "country": "NOR",
        "department": "Automation & Systems",
        "section": "Z-TS-OAC (ZSEIT576)",
        "employeeclass": "EMP-Permanent Employee",
        "status": "A-Active",
        "serviceStatus": "N/A",
        "date": "0001-01-01"
      },
      {
        "employeeId": "1000",
        "name": "Robot,Barce",
        "signature": "ROBOT_BARCE",
        "BusinessEmail": "ROBOT_BARCE@dnv.com",
        "ba": "Z (BAG)",
        "loc": "NOOSL2",
        "country": "NOR",
        "department": "Automation & Systems",
        "section": "Z-TS-OAC (ZSEIT576)",
        "employeeclass": "EMP-Permanent Employee",
        "status": "A-Active",
        "serviceStatus": "N/A",
        "date": "0001-01-01"
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {

  }

   /*Grid ready event*/
  onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api;
    this.getColumnDef(this.auditorData.aaData);
  }


 /*update grid column defition anf rowdata */
  getColumnDef(data: any) {
    console.log("cw in getColumnDef data", data,this.gridApi.getColumnDefs());
    let  colDef:any[] = [] //this.gridApi.getColumnDefs();
    colDef.length=0;
    const keys = Object.keys(data[0])
     keys.forEach(key => colDef.push({field : key}));
     this.gridApi.setColumnDefs(colDef); //update column definition
  
     this.gridApi.setRowData(data); // update rowdata
  }

}