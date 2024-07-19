import { FormFieldProps } from './FormFieldTypes/types';
import InputField from './InputField/InputField';
import SelectField from './SelectField/SelectField';
import StateSelectField from './StateSelectField/StateSelectField';
import NestedFieldset from './NestedFieldset/NestedFieldset';

const FormFields: React.FC<FormFieldProps> = ({ field, onChange }) => {
    switch (field.type) {
        case 'select':
            return <SelectField field={field} onChange={onChange} />;
        case 'state-select':
            return <StateSelectField field={field} onChange={onChange} />;
        case 'fieldset':
            return <NestedFieldset field={field} onChange={onChange} />;
        default:
            return <InputField field={field} onChange={onChange} />;
    }
};

export default FormFields;