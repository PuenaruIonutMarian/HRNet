import style from './inputfield.module.scss';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = 'text', value, onChange, error }) => {
  return (
    <div className={style.inputField}>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} value={value} onChange={onChange} />
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
}

export default InputField;