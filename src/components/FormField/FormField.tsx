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

// import React from 'react';
// import {states} from "../../data/USA_States_List";

// interface BaseField {
//     label: string;
//     type: string;
//     id: string;
// }

// interface SelectField extends BaseField {
//     type: 'select';
//     options: string[];
// }

// interface NestedFieldset extends BaseField {
//     type: 'fieldset';
//     options: FormFieldConfig[];
// }

// interface StateSelectField extends BaseField {
//     type: 'state-select';
// }

// export type FormFieldConfig = BaseField | SelectField | NestedFieldset | StateSelectField;

// interface FormFieldProps {
//     field: FormFieldConfig;
// }

// const FormField: React.FC<FormFieldProps> = ({ field }) => {
//     if (field.type === 'select') {
//         const selectField = field as SelectField;
//         return (
//             <div className="form-field">
//                 <label htmlFor={selectField.id}>{selectField.label}</label>
//                 <select id={selectField.id} name={selectField.id}>
//                     {selectField.options.map((option: string, index: number) => (
//                         <option key={index} value={option}>
//                             {option}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         );
//     } else if (field.type === 'fieldset') {
//         const nestedFieldset = field as NestedFieldset;
//         return (
//             <fieldset className="form-field">
//                 <legend>{nestedFieldset.label}</legend>
//                 {nestedFieldset.options.map((nestedField: FormFieldConfig, index: number) => (
//                     <FormField key={index} field={nestedField} />
//                 ))}
//             </fieldset>
//         );
//     } else if (field.type === 'state-select') {
//         return (
//             <div className="form-field">
//                 <label htmlFor={field.id}>{field.label}</label>
//                 <select id={field.id} name={field.id}>
//                     {states.map((state: { name: string; abbreviation: string }, index: number) => (
//                         <option key={index} value={state.abbreviation}>
//                             {state.name}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         );
//     } else {
//         return (
//             <div className="form-field">
//                 <label htmlFor={field.id}>{field.label}</label>
//                 <input type={field.type} id={field.id} />
//             </div>
//         );
//     }
// };

// export default FormField;