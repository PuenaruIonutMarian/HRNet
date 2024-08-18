import Header from "../../components/Header/Header"
import CreateForm from "../../components/CreateForm/CreateForm"
import style from "./CreateUser.module.scss"

/**
 * `CreateUser` is a React functional component that serves as the main page for creating a new employee.
 * 
 * This component renders a header, a title, and a form where users can input details about a new employee.
 * 
 * @component
 * @example
 * return (
 *   <CreateUser />
 * )
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