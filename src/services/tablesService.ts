import {Subject, BehaviorSubject} from 'rxjs';

let tablesData: IRowData[][] = [
    [{
        name: 'InitialName',
        surname: 'InitialSurname',
        age: '99',
        city: 'InitialCity'
    }]
];

const rowSubject = new Subject();
const tablesSubject = new BehaviorSubject(tablesData);

export interface IRowData {
    name: string,
    surname: string,
    age: string,
    city: string,
    rowIndex?: number,
    tableIndex?: number
}

export const tablesService = {
    addRow: (rowData: IRowData) => {
        const clonedTablesData = [...tablesData];
        clonedTablesData[0].push(rowData);
        tablesSubject.next(clonedTablesData);
        tablesData = clonedTablesData;
    },

    getRow: () => rowSubject.asObservable(),
    loadRowIntoForm: (rowData: IRowData) => {
        rowSubject.next(rowData);
    },

    editRow: (rowData: IRowData) => {
        const clonedTablesData = [...tablesData];
        clonedTablesData[rowData.tableIndex || 0][rowData.rowIndex || 0] = {...rowData};
        tablesSubject.next(clonedTablesData);
        tablesData = clonedTablesData;
    },

    deleteRow: (tableIndex: number, rowIndex: number) => {
        const clonedTablesData = [...tablesData];
        clonedTablesData[tableIndex].splice(rowIndex, 1);
        tablesSubject.next(clonedTablesData);
        tablesData = clonedTablesData;
    },
    getTables: () => tablesSubject,
    copyTable: (selectedTableData: IRowData[], index: number) => {
        const clonedTablesData = [...tablesData];
        clonedTablesData.splice(index + 1, 0, [...selectedTableData]);
        tablesSubject.next(clonedTablesData);
        tablesData = clonedTablesData;
    },
    deleteTable: (index: number) => {
        const clonedTablesData = [...tablesData];
        clonedTablesData.splice(index, 1);
        tablesSubject.next(clonedTablesData);
        tablesData = clonedTablesData;
    }
};