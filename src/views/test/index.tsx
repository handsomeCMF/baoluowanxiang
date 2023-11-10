import * as React from 'react';
import { GridOptions } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';

const gridOptions: GridOptions = {
  columnDefs: [
    {
      headerName: 'Row #',
      field: 'rowNumber',
      width: 120,
    },
    {
      field: 'autoA',
      width: 300,
      wrapText: true,
      autoHeight: true,
      headerName: 'A) Auto Height',
    },
    {
      width: 300,
      field: 'autoB',
      wrapText: true,
      headerName: 'B) Normal Height',
    },
  ],
  defaultColDef: {
    sortable: true,
    resizable: true,
  },
  onGridReady: (params) => {
    setTimeout(function () {
      params.api.setRowData([
        { rowNumber: 123, autoA: '11111111111111111111111112222222222222222222222222222222222222222222222222222222221222222222222222222222222222222222222222222222222222222222', autoB: '1222222222222222222222222222222222222222222222222222222222'},
        { rowNumber: 125, autoA: '111111111111111111111111', autoB: '1222222222222222222222222222222222222222222222222222222222'},
        { rowNumber: 124, autoA: '111111111111111111111111', autoB: '1222222222222222222222222222222222222222222222222222222222'},
        { rowNumber: 126, autoA: '11111111111111111111111112222222222222222222222222222222222222222222222222222222221222222222222222222222222222222222222222222222222222222222', autoB: '1222222222222222222222222222222222222222222222222222222222'},
        { rowNumber: 127, autoA: '111111111111111111111111', autoB: '1222222222222222222222222222222222222222222222222222222222'},
        { rowNumber: 128, autoA: '111111111111111111111111', autoB: '1222222222222222222222222222222222222222222222222222222222'},
        { rowNumber: 129, autoA: '111111111111111111111111', autoB: '1222222222222222222222222222222222222222222222222222222222'},
        { rowNumber: 120, autoA: '111111111111111111111111', autoB: '1222222222222222222222222222222222222222222222222222222222'}
      ]);
    }, 500);
  },
  sideBar: {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        toolPanelParams: {
          suppressRowGroups: true,
          suppressValues: true,
          suppressPivots: true,
          suppressPivotMode: true,
          suppressSideButtons: true,
          suppressColumnFilter: true,
          suppressColumnSelectAll: true,
          suppressColumnExpandAll: true,
        },
      },
    ],
    defaultToolPanel: 'columns',
  },
};

const TestTable : React.FC = () => {
  return (
    <div style={{ width: '100%', height: 500 }}>
      <AgGridReact {...gridOptions} />
    </div>
  );
};

export default TestTable;