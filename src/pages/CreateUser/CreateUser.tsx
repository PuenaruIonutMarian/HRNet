import Header from "../../components/Header/Header"
import CreateForm from "../../components/CreateForm/CreateForm"
import style from "./CreateUser.module.scss"

/**
 * `CreateUser` is a React functional component that serves as the main page for creating a new employee.
 * 
 * This component renders a header and a form for users to input details about a new employee.
 * 
 * The layout includes:
 * - A header component, which displays the application title and navigation link.
 * - A title for the page indicating that the user can create a new employee.
 * - A form component where the user can enter employee details.
 * 
 * @component
 * @example
 * return (
 *   <CreateUser />
 * );
 * 
 * @returns {JSX.Element} The rendered `CreateUser` page with header and form.
 */
const CreateUser: React.FC = () => {
  return (
    <main className={style.createUser}>
        <Header />
        <h2>Create Employee</h2>
        <CreateForm />
    </main>
  )
}

export default CreateUser