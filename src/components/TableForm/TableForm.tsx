import React, {useEffect, useState} from 'react';
import './TableForm.scss';
import {Form, Field} from 'react-final-form';
import {IRowData, tablesService} from "../../services/tablesService";

interface ITableForm {
    name: string,
    surname: string,
    age: string,
    city: string,
    rowIndex?: number,
    tableIndex?: number
}

const TableForm = (props: any) => {
    const [currentRow, setCurrentRow] = useState({
        name: '',
        surname: '',
        age: '',
        city: '',
        rowIndex: undefined
    });
    // @ts-ignore
    const renderInput = ({input, type, placeholder, meta: {touched, error, warning},}) => {
        return (
            <div>
                {touched &&
                ((error && <span className="text-danger">{error}</span>) ||
                    (warning && <span className="text-danger">{warning}</span>))}
                <input className="table-edit-form__field" type={type} {...input} placeholder={placeholder}/>
            </div>
        );
    };

    const validate = (formValues: ITableForm) => {
        const errors: any = {};

        if (!formValues.name) {
            errors.name = 'You must enter a Name';
        }

        if (!formValues.surname) {
            errors.surname = 'You must enter a Surname';
        }

        if (!formValues.age) {
            errors.age = 'You must enter an Age';
        }

        if (!formValues.city) {
            errors.city = 'You must enter a City';
        }

        return errors;
    };

    const onSubmit = async (formValues: ITableForm) => {
        if (formValues.rowIndex !== undefined) {
            tablesService.editRow(formValues);
        } else {
            tablesService.addRow(formValues);
        }
        setCurrentRow({
            name: '',
            surname: '',
            age: '',
            city: '',
            rowIndex: undefined
        })
    };

    useEffect(() => {
        const subscription = tablesService.getRow().subscribe((newRow: any) => {
            setCurrentRow(newRow)
        });
        return () => {
            subscription.unsubscribe()
        }
    });

    return (
        <div className="table-edit-form__wrap">
            <Form onSubmit={onSubmit}
                  validate={validate}
                  initialValues={currentRow}
                  render={({handleSubmit, form}) => (
                      <form className="table-edit-form"
                            onSubmit={async event => {
                                await handleSubmit(event);
                                form.reset();
                                form.resetFieldState('name');
                                form.resetFieldState('surname');
                                form.resetFieldState('age');
                                form.resetFieldState('city');
                            }}>
                          <Field
                              name="name"
                              component={renderInput}
                              id="name"
                              type="text"
                              placeholder="Name"
                          />

                          <Field
                              name="surname"
                              component={renderInput}
                              id="surname"
                              type="text"
                              placeholder="Surname"
                          />

                          <Field
                              name="age"
                              component={renderInput}
                              id="age"
                              type="text"
                              placeholder="Age"
                          />
                          <Field
                              name="city"
                              component={renderInput}
                              id="city"
                              type="text"
                              placeholder="City"
                          />

                          <button className="table-edit-form__submit"
                                  type="submit">{currentRow.rowIndex !== undefined ? 'Edit' : 'Add'}</button>
                      </form>
                  )}>
            </Form>
        </div>
    )
};

export default TableForm