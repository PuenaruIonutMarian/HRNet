import Header from "../../components/Header/Header"
import CreateForm from "../../components/CreateForm/CreateForm"
import style from "./CreateUser.module.scss"


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