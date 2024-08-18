import { Link } from 'react-router-dom';
import style from './header.module.scss';

interface HeaderProps {}

/**
 * The Header component displays the title and a navigation link for the HR application.
 * 
 * This component includes a title with a stylized HR abbreviation and a link to the "See All Employees" page.
 * 
 * @component
 * @returns {JSX.Element} The rendered header component with a navigation link.
 */
const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={style.header}>
      <h1>
        HR<span className={style.hr}>NET</span>
      </h1>
      <Link to="/employees-table">See All Employees</Link>
    </div>
  );
};

export default Header;
