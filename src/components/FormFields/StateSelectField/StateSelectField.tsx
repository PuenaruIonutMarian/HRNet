import { FormFieldProps } from '../FormFieldTypes/types';
import { states } from '../../../data/USA_States_List';

const StateSelectField: React.FC<FormFieldProps> = ({ field, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(field.id, event.target.value);
    };

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
};

export default StateSelectField;