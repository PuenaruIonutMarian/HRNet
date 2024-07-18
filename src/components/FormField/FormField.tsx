import React from 'react';
import { states } from "../../data/USA_States_List";

type BaseField = {
    label: string;
    id: string;
};

type InputField = BaseField & {
    type: 'text' | 'number' | 'date';
};

type SelectField = BaseField & {
    type: 'select';
    options: string[];
};

type StateSelectField = BaseField & {
    type: 'state-select';
};

type NestedFieldset = BaseField & {
    type: 'fieldset';
    fields: FormFieldConfig[];
};

export type FormFieldConfig = InputField | SelectField | StateSelectField | NestedFieldset;

interface FormFieldProps {
    field: FormFieldConfig;
    onChange?: (id: string, value: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({ field, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        onChange?.(field.id, event.target.value);
    };

    switch (field.type) {
        case 'select':
            return (
                <div className="form-field">
                    <label htmlFor={field.id}>{field.label}</label>
                    <select id={field.id} name={field.id} onChange={handleChange}>
                        {field.options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            );
        case 'state-select':
            return (
                <div className="form-field">
                    <label htmlFor={field.id}>{field.label}</label>
                    <select id={field.id} name={field.id} onChange={handleChange}>
                        {states.map((state, index) => (
                            <option key={index} value={state.abbreviation}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                </div>
            );
        case 'fieldset':
            return (
                <fieldset className="form-field">
                    <legend>{field.label}</legend>
                    {field.fields.map((nestedField, index) => (
                        <FormField key={index} field={nestedField} onChange={onChange} />
                    ))}
                </fieldset>
            );
        default:
            return (
                <div className="form-field">
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        onChange={handleChange}
                    />
                </div>
            );
    }
};

export default FormField;

