import style from './OptionSelector.module.scss';

interface OptionSelectorProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const OptionSelector: React.FC<OptionSelectorProps> = ({ label, name, options, value, onChange, error }) => {
  return (
    <div className={style.optionSelector}>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange}>
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
}

export default OptionSelector;

