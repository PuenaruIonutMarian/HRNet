import { Link } from 'react-router-dom';
import style from './header.module.scss';

const Header = () => {
  return (
    <div className={style.header}>
        <h1>HR<span className={style.hr}>NET</span></h1>
        <Link to="/employee-list">Show All</Link>
    </div>
  )
}

export default Header