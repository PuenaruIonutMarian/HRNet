import { Link } from 'react-router-dom';
import style from './header.module.scss';

interface HeaderProps {}

/**
 * The `Header` component displays the application title and a navigation link.
 * 
 * This component includes:
 * - A title with the abbreviation "HRNET".
 * - A link to the "See All Employees" page.
 * 
 * @component
 * @returns {JSX.Element} The rendered header component with a navigation link.
 */
const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={style.header} data-testid="header-container">
      <h1>
        HR<span className={style.hr} data-testid="header-span">NET</span>
      </h1>
      <Link to="/employees-table">See All Employees</Link>
    </div>
  );
};

export default Header;
