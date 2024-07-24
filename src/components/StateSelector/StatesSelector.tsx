import style from './StateSelector.module.scss';

interface StateSelectorProps {
  label: string;
  name: string;
  options: Array<{ name: string; abbreviation: string }>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const StateSelector: React.FC<StateSelectorProps> = ({ label, name, options, value, onChange, error }) => {
  return (
    <div className={style.stateSelector}>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange}>
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.abbreviation} value={option.abbreviation}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
}

export default StateSelector;
