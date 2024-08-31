import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

/**
 * `Error` is a React functional component that displays a 404 error page.
 * 
 * This component provides a user-friendly message indicating that the requested page was not found,
 * and offers a link to navigate back to the home page.
 * 
 * @component
 * @example
 * return (
 *   <Error />
 * );
 * 
 * @returns {JSX.Element} The rendered 404 error page component.
 */
const Error: React.FC = (): JSX.Element => {
  return (
    <main className={styles.error}>
      <h1>404</h1>
      <h3>Oups! The page you requested was not found.</h3>
      <Link to="/">Go Back To The Home Page 👈</Link>
    </main>
  );
}

export default Error;
