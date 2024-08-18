import style from './inputfield.module.scss';

/**
 * The InputFieldProps interface defines the props for the InputField component.
 */
interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

/**
 * The InputField component renders a labeled text input field with optional error messaging.
 * 
 * @param {string} label - The label to display for the input field.
 * @param {string} name - The name attribute of the input field.
 * @param {string} [type='text'] - The type of the input field. Defaults to 'text'.
 * @param {string} value - The current value of the input field.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - Function to handle changes to the input field value.
 * @param {string} [error] - Optional error message to display below the input field.
 * 
 * @returns {JSX.Element} The rendered input field component with label and optional error message.
 */
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