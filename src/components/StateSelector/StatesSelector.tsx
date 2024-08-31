import style from './StateSelector.module.scss';

interface StateSelectorProps {
  /**
   * The label to display for the select field.
   */
  label: string;
  
  /**
   * The name attribute of the select field.
   */
  name: string;
  
  /**
   * Array of state objects to be displayed in the select dropdown. Each object should have
   * a `name` for the state's full name and an `abbreviation` for the state's abbreviation.
   */
  options: Array<{ name: string; abbreviation: string }>;
  
  /**
   * The current selected value of the select field, which is the state's abbreviation.
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
  /**
   * Optional data-testid attribute for testing purposes.
   */
  'data-testid'?: string;
}

/**
 * The `StateSelector` component renders a dropdown select field for selecting a state with a label
 * and optional error message.
 * 
 * It provides a dropdown with state options and displays a label. If provided, an error message
 * will be displayed below the select field.
 * 
 * @param {StateSelectorProps} props - The props for the component.
 * @param {string} props.label - The label to display for the select field.
 * @param {string} props.name - The name attribute of the select field.
 * @param {Array<{ name: string; abbreviation: string }>} props.options - Array of state objects to be displayed in the select dropdown.
 * @param {string} props.value - The currently selected value of the select field, which is the state's abbreviation.
 * @param {(e: React.ChangeEvent<HTMLSelectElement>) => void} props.onChange - Function to handle changes to the select field.
 * @param {string} [props.error] - Optional error message to display if there is a validation error.
 * @param {string} [props['data-testid']] - Optional data-testid attribute for testing purposes.
 * 
 * @returns {JSX.Element} The rendered select field with its options and label.
 */
const StateSelector: React.FC<StateSelectorProps> = ({ label, name, options, value, onChange, error, 'data-testid': testId }) => {
  return (
    <div className={style.stateSelector} data-testid={`${testId}-container`}>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange} data-testid={`${testId}-select`}>
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.abbreviation} value={option.abbreviation}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <span className={style.error} data-testid={`${testId}-error`}>{error}</span>}
    </div>
  );
}

export default StateSelector;
