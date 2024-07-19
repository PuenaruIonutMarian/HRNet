import React, { useState } from 'react';
import FormField, { FormFieldConfig } from '../FormField/FormField';

const formFields: FormFieldConfig[] = [
    { label: 'First Name', type: 'text', id: 'first-name' },
    { label: 'Last Name', type: 'text', id: 'last-name' },
    { label: 'Date of Birth', type: 'date', id: 'date-of-birth' },
    { label: 'Start Date', type: 'date', id: 'start-date' },
    {
        label: 'Address',
        type: 'fieldset',
        id: 'address',
        fields: [
            { label: 'Street', type: 'text', id: 'street' },
            { label: 'City', type: 'text', id: 'city' },
            { label: 'State', type: 'state-select', id: 'state' },
            { label: 'Zip Code', type: 'number', id: 'zip-code' },
        ],
    },
    {
        label: 'Department',
        type: 'select',
        id: 'department',
        options: ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'],
    },
];

const Form: React.FC = () => {
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleChange = (id: string, value: string) => {
        setFormData(prevData => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit} id="create-employee">
            {formFields.map((field, index) => (
                <FormField key={index} field={field} onChange={handleChange} />
            ))}
            <button type="submit">Save</button>
        </form>
    );
};

export default Form;


// import React from 'react';
// import FormField, { FormFieldConfig } from '../FormField/FormField';

// const formFields: FormFieldConfig[] = [
//     { label: 'First Name', type: 'text', id: 'first-name' },
//     { label: 'Last Name', type: 'text', id: 'last-name' },
//     { label: 'Date of Birth', type: 'text', id: 'date-of-birth' },
//     { label: 'Start Date', type: 'text', id: 'start-date' },
//     {
//         label: 'Address',
//         type: 'fieldset',
//         id: 'address',
//         options: [
//             { label: 'Street', type: 'text', id: 'street' },
//             { label: 'City', type: 'text', id: 'city' },
//             { label: 'State', type: 'state-select', id: 'state' },
//             { label: 'Zip Code', type: 'number', id: 'zip-code' },
//         ],
//     },
//     {
//         label: 'Department',
//         type: 'select',
//         id: 'department',
//         options: ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'],
//     },
// ];

// const Form: React.FC = () => {
//     return (
//         <form action="#" id="create-employee">
//             {formFields.map((field, index) => (
//                 <FormField key={index} field={field} />
//             ))}
//             <button type="submit">Save</button>
//         </form>
//     );
// };

// export default Form;