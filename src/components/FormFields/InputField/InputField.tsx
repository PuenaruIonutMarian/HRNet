import { FormFieldProps } from '../FormFieldTypes/types';

const InputField: React.FC<FormFieldProps> = ({ field, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(field.id, event.target.value);
    };

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
};

export default InputField;