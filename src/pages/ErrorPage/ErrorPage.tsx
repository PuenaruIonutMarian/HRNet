import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

/**
 * Component to display a 404 error.
 * @returns {JSX.Element} The component representing the 404 error.
 */
const Error: React.FC = (): JSX.Element => {
  return (
    <main className={styles.error}>
      <h1>404</h1>
      <h3>Oups! The page you requested was not found.</h3>
      <Link to="/">Go Back To The Create User Page 👈</Link>
    </main>
  );
}

export default Error;
