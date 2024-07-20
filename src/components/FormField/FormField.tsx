import style from './FormField.module.scss';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  options?: Array<{ name: string; abbreviation: string } | string>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, type = 'text', options, value, onChange }) => {
  return (
    <div className={style.formField}>
      <label htmlFor={name}>{label}</label>
      {type === 'select' ? (
        <select id={name} name={name} value={value} onChange={onChange}>
          <option value="">Select {label}</option>
          {options?.map((option) => (
            <option key={typeof option === 'string' ? option : option.abbreviation} value={typeof option === 'string' ? option : option.abbreviation}>
              {typeof option === 'string' ? option : option.name}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} id={name} name={name} value={value} onChange={onChange} />
      )}
    </div>
  );
}

export default FormField;
