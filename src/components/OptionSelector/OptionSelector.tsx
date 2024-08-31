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
   * Callback function to handle changes to the select field.
   * 
   * @param e - The event object containing the new value.
   */
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  
  /**
   * Optional error message to display if there is a validation error.
   */
  error?: string;
  /**
   * Optional data-testid attribute for testing purposes.
   */
  'data-testid'?: string;
}

/**
 * The `OptionSelector` component renders a dropdown select field with a label and optional error message.
 * 
 * It displays a label and a select dropdown with provided options. An optional error message can be displayed if validation fails.
 * 
 * @param {OptionSelectorProps} props - The props for the component.
 * @param {string} props.label - The label to display for the select field.
 * @param {string} props.name - The name attribute of the select field.
 * @param {string[]} props.options - Array of options to be displayed in the select dropdown.
 * @param {string} props.value - The currently selected value of the select field.
 * @param {(e: React.ChangeEvent<HTMLSelectElement>) => void} props.onChange - Callback function to handle changes to the select field.
 * @param {string} [props.error] - Optional error message to display if there is a validation error.
 * @param {string} [props['data-testid']] - Optional data-testid attribute for testing purposes.
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
