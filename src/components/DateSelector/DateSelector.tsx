import style from './DateSelector.module.scss';

interface DateSelectorProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const DateSelector: React.FC<DateSelectorProps> = ({ label, name, value, onChange, error }) => {
  return (
    <div className={style.dateSelector}>
      <label htmlFor={name}>{label}</label>
      <input type="date" id={name} name={name} value={value} onChange={onChange} />
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
}

export default DateSelector;
