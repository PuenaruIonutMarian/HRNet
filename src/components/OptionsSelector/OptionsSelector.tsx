import style from './OptionsSelector.module.scss';

interface OptionSelectorProps {
  label: string;
  name: string;
  options: Array<{ name: string; abbreviation: string } | string>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const OptionSelector: React.FC<OptionSelectorProps> = ({ label, name, options, value, onChange }) => {
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
    </div>
  );
}

export default OptionSelector;
