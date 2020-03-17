import React, {useEffect, useState} from 'react';
import './TableEditPage.scss';
import TableForm from "../TableForm/TableForm";
import EditableTable from "../EditableTable/EditableTable";
import {tablesService, IRowData} from "../../services/tablesService";

const TableEditPage = (props: any) => {
    const [tables, setTables] = useState();

    useEffect(() => {
        const subscription = tablesService.getTables().subscribe(newTables => {
            if (tables && (tables.length < newTables.length)) {
                setTables([...tables, newTables])
            } else {
                setTables(newTables)
            }
        });
        return () => {
            subscription.unsubscribe()
        }
    });

    if (!tables) {
        return <p>Loading...</p>
    }

    return (
        <div className="container-fluid table-edit__wrap">
            <div className="table-edit">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <TableForm/>
                    </div>
                </div>

                <div className="table-edit__tables-container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12 col-xs-12">
                            {tables.map((table: IRowData, index: number) => {
                                return (<EditableTable key={index} tableData={table} index={index}/>)
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TableEditPage