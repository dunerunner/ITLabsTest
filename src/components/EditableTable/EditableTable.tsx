import React, {useEffect} from 'react';
import './EditableTable.scss';
import deleteBtn from '../../assets/btn_delete.svg';
import {IRowData, tablesService} from "../../services/tablesService";

const EditableTable = (props: any) => {

    const cloneTable = () => {
        tablesService.copyTable(props.tableData, props.index);
    };

    const deleteTable = () => {
        tablesService.deleteTable(props.index);
    };

    const editRow = (row: IRowData, index: number) => {
        row.rowIndex = index;
        row.tableIndex = props.index;
        tablesService.loadRowIntoForm(row);
    };

    const deleteRow = (index: number) => {
        tablesService.deleteRow(props.index, index);
    };

    return (
        <div className="editable-table__wrap">
            <div className="editable-table__controls">
                <button className="editable-table__controls-copy" onClick={cloneTable}>Copy table</button>
                {props.index !== 0 ?
                    <button className="editable-table__controls-delete" onClick={deleteTable}>
                        <img src={deleteBtn} alt="Delete Button"/>
                    </button> : ''
                }

            </div>

            <table className="editable-table">
                <thead className="editable-table__header">
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Age</th>
                    <th>City</th>
                    <th></th>
                </tr>
                </thead>

                <tbody className="editable-table__body">
                {
                    props.tableData.map((row: IRowData, index: number) => {
                        return (<tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.surname}</td>
                            <td>{row.age}</td>
                            <td>{row.city}</td>
                            <td>
                                <div className="editable-table__row-controls">
                                    <a href="" className="editable-table__row-edit" onClick={(e) => {
                                        e.preventDefault();
                                        editRow(row, index)
                                    }}>Edit</a>
                                    <a href="" className="editable-table__row-delete" onClick={(e) => {
                                        e.preventDefault();
                                        deleteRow(index)
                                    }}>Delete</a>
                                </div>
                            </td>
                        </tr>)
                    })
                }
                </tbody>
            </table>

        </div>
    )
};

export default EditableTable