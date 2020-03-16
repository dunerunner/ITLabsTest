import React from 'react';
import './TableForm.scss';


const TableForm = (props: any) => {

    return (
        <div className="table-edit-form__wrap">
            <form className="table-edit-form">
                <input className="table-edit-form__field" type="text" placeholder="Name"/>
                <input className="table-edit-form__field" type="text" placeholder="Surname"/>
                <input className="table-edit-form__field" type="text" placeholder="Age"/>
                <input className="table-edit-form__field" type="text" placeholder="City"/>

                <button className="table-edit-form__submit" type="submit">Add</button>
            </form>
        </div>
    )
};

export default TableForm