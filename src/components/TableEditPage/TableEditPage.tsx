import React from 'react';
import './TableEditPage.scss';
import TableForm from "../TableForm/TableForm";
import EditableTable from "../EditableTable/EditableTable";


const TableEditPage = (props: any) => {

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
                            <EditableTable/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TableEditPage