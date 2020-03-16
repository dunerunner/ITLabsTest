import React from 'react';
import './EditableTable.scss';
import deleteBtn from '../../assets/btn_delete.svg';

const EditableTable = (props: any) => {

    return (
        <div className="editable-table__wrap">
            <div className="editable-table__controls">
                <button className="editable-table__controls-copy">Copy table</button>
                <button className="editable-table__controls-delete">
                    <img src={deleteBtn} alt="Delete Button"/>
                </button>
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
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Age</td>
                    <td>City</td>
                    <td>
                        <div className="editable-table__row-controls">
                            <a href="" className="editable-table__row-edit">Edit</a>
                            <a href="" className="editable-table__row-delete">Delete</a>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    )
};

export default EditableTable