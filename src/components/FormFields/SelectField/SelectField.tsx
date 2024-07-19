import { FormFieldProps } from '../FormFieldTypes/types';

const SelectField: React.FC<FormFieldProps> = ({ field, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(field.id, event.target.value);
    };

    if (field.type !== 'select') return null;

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
};

export default SelectField;