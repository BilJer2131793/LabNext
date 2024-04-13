export default function DeleteForm(){
    async function DeleteBlog(FormData) {
        'use server'
    
        let id = FormData.get('id')
        if(!id==""){
            fetch('http://localhost:3001/api', {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
                duplex: "half",
                body: JSON.stringify(id),
              }).then(console.log("envoyer a supprimer"))
        }
      }
    return(
      <form className="d-flex flex-column" action={DeleteBlog}>
        <legend className="text-center">Effacer un blog</legend>
        <div className="col-4 mx-auto">
          <label htmlFor="title">ID</label>
          <div>
            <input className="txtID form-control" type="text" name="id" id="id" placeholder="ID"/>
          </div>
        </div>
  
        <div className="p-3 mx-auto">
          <button id="btnDelete" type="submit" >Supprimer</button>
        </div>
      </form>
  
    )
}