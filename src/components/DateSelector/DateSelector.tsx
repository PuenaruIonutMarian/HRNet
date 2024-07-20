import style from './DateSelector.module.scss';

interface DateSelectorProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ label, name, value, onChange }) => {
  return (
    <div className={style.dateSelector}>
      <label htmlFor={name}>{label}</label>
      <input type="date" id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default DateSelector;
