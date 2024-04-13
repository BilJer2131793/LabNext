import DeleteForm from "../dev/composantsDev/DeleteForm"
import AddForm from "./composantsDev/AddForm"
import ModifyForm from "./composantsDev/ModifyForm"

export default function Home() {
  
  async function GetBlogs(){

  }
  GetBlogs()
  return (
    <>
    <AddForm></AddForm>

    <DeleteForm></DeleteForm>


    <ModifyForm></ModifyForm>
    </>
  )
  
}