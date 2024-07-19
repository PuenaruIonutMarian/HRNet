import { FormFieldProps } from '../FormFieldTypes/types';
import FormFields from '../FormFields';

const NestedFieldset: React.FC<FormFieldProps> = ({ field, onChange }) => {
    if (field.type !== 'fieldset') return null;

    return (
        <fieldset className="form-field">
            <legend>{field.label}</legend>
            {field.fields.map((nestedField, index) => (
                <FormFields key={index} field={nestedField} onChange={onChange} />
            ))}
        </fieldset>
    );
};

export default NestedFieldset;