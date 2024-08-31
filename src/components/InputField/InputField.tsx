import style from './inputfield.module.scss';

/**
 * The InputFieldProps interface defines the props for the InputField component.
 * @interface
 */
interface InputFieldProps {
  /**
   * The label to display for the input field.
   * @type {string}
   */
  label: string;

  /**
   * The name attribute of the input field.
   * @type {string}
   */
  name: string;

  /**
   * The type of the input field. Defaults to 'text'.
   * @type {string}
   * @default 'text'
   */
  type?: string;

  /**
   * The current value of the input field.
   * @type {string}
   */
  value: string;

  /**
   * Function to handle changes to the input field value.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   * @returns {void}
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Optional error message to display below the input field.
   * @type {string}
   */
  error?: string;

  /**
   * Optional data-testid attribute for testing purposes.
   * @type {string}
   */
  'data-testid'?: string;
}

/**
 * The InputField component renders a labeled text input field with optional error messaging.
 * @component
 * @param {InputFieldProps} props - The props for the InputField component.
 * @returns {JSX.Element} The rendered input field component with label and optional error message.
 */
const InputField: React.FC<InputFieldProps> = ({ label, name, type = 'text', value, onChange, error, 'data-testid': testId }) => {
  
  return (
    <div className={style.inputField} data-testid={`${testId}-container`}>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} value={value} onChange={onChange} data-testid={`${testId}-input`}/>
      {error && <span className={style.error} data-testid={`${testId}-error`}>{error}</span>}
    </div>
  );
}

export default InputField;
