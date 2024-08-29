import style from './OptionSelector.module.scss';

interface OptionSelectorProps {
  /**
   * The label to display for the select field.
   */
  label: string;
  
  /**
   * The name attribute of the select field.
   */
  name: string;
  
  /**
   * Array of options to be displayed in the select dropdown.
   */
  options: string[];
  
  /**
   * The current selected value of the select field.
   */
  value: string;
  
  /**
   * Function to handle changes to the select field.
   * 
   * @param e - The event object containing the new value.
   */
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  
  /**
   * Optional error message to display if there is a validation error.
   */
  error?: string;

  'data-testid'?: string;
}

/**
 * The OptionSelector component renders a dropdown select field with a label and optional error message.
 * 
 * @param {string} label - The label to display for the select field.
 * @param {string} name - The name attribute of the select field.
 * @param {string[]} options - Array of options to be displayed in the select dropdown.
 * @param {string} value - The current selected value of the select field.
 * @param {(e: React.ChangeEvent<HTMLSelectElement>) => void} onChange - Function to handle changes to the select field.
 * @param {string} [error] - Optional error message to display if there is a validation error.
 * 
 * @returns {JSX.Element} The rendered select field with its options and label.
 */
const OptionSelector: React.FC<OptionSelectorProps> = ({ label, name, options, value, onChange, error, 'data-testid': testId }) => {
  return (
    <div className={style.optionSelector} data-testid={`${testId}-container`}>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange} data-testid={`${testId}-select`}>
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className={style.error} data-testid={`${testId}-error`}>{error}</span>}
    </div>
  );
}

export default OptionSelector;
