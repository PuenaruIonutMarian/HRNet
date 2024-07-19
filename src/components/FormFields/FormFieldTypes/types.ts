export type BaseField = {
    label: string;
    id: string;
};

export type InputField = BaseField & {
    type: 'text' | 'number' | 'date';
};

export type SelectField = BaseField & {
    type: 'select';
    options: string[];
};

export type StateSelectField = BaseField & {
    type: 'state-select';
};

export type NestedFieldset = BaseField & {
    type: 'fieldset';
    fields: FormFieldConfig[];
};

export type FormFieldConfig = InputField | SelectField | StateSelectField | NestedFieldset;

export interface FormFieldProps {
    field: FormFieldConfig;
    onChange?: (id: string, value: string) => void;
}