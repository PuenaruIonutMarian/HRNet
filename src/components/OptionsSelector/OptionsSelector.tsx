import style from './OptionsSelector.module.scss';

interface OptionSelectorProps {
  label: string;
  name: string;
  options: Array<{ name: string; abbreviation: string } | string>;
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
          <option key={typeof option === 'string' ? option : option.abbreviation} value={typeof option === 'string' ? option : option.abbreviation}>
            {typeof option === 'string' ? option : option.name}
          </option>
        ))}
      </select>
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
}

export default OptionSelector;