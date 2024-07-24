import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

/**
 * Component to display a 404 error.
 * @returns {JSX.Element} The component representing the 404 error.
 */
const Error: React.FC = (): JSX.Element => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <h3>Oups! The page you requested was not found.</h3>
      <Link to="/">Back To Create User Page 👈</Link>
    </div>
  );
}

export default Error;
