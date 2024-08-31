import style from './DateSelector.module.scss';

/**
 * Props for the DateSelector component.
 */
interface DateSelectorProps {
    /**
   * The label to display for the date input field.
   */
  label: string;
    /**
   * The name attribute of the input field.
   */
  name: string;
    /**
   * The current value of the date input field.
   */
  value: string;
    /**
   * Callback function to handle changes in the input field.
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event from the input field.
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
   * Optional error message to display if there's a validation error.
   */
  error?: string;

  /**
   * Optional data-testid attribute for testing.
   */

  'data-testid'?: string;
}

/**
 * A date selector component for selecting dates.
 * 
 * Displays a label and an input field for choosing a date. Optionally shows an error message.
 * 
 * @param {DateSelectorProps} props - The props for the component.
 * @returns {JSX.Element} The rendered date selector component.
 */
const DateSelector: React.FC<DateSelectorProps> = ({ label, name, value, onChange, error, 'data-testid': testId }) => {
  return (
    <div className={style.dateSelector} data-testid={`${testId}-container`}>
      <label htmlFor={name}>{label}</label>
      <input type="date" id={name} name={name} value={value} onChange={onChange} data-testid={`${testId}-input`} />
      {error && <span className={style.error} data-testid={`${testId}-error`}>{error}</span>}
    </div>
  );
}

export default DateSelector;
