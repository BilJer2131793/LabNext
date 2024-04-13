export default function AddForm(){
    
    async function AddBlog(FormData) {
        'use server'
    
        let auteur = FormData.get('author')
        let titre = FormData.get('title')
        let contenu = FormData.get('content')
        let d = new Date()
        let date = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`
    
        if(!auteur=="" || !titre=="" || !contenu==""){
            let data = JSON.stringify({
                Titre: titre,
                Auteur: auteur,
                Date : date,
                Contenu: contenu
            })
            fetch('http://localhost:3001/api', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                duplex: "half",
                body: data,
              }).then(console.log("post envoyer"))
        }
      }

    return(
        <form className="d-flex flex-column" action={AddBlog}>
        <legend className="text-center">Création de nouveau blog</legend>
        <div className="col-4 mx-auto">
          <label htmlFor="title">Titre</label>
          <div>
            <input className="txtTitre form-control" type="text" name="title" id="title" placeholder="Titre"/>
          </div>
        </div>
        <div className="col-4 mx-auto">
          <label htmlFor="author">Auteur</label>
          <div>
            <input className="txtAuteur form-control" type="text" name="author" id="author" placeholder="Nom"/>
          </div>
        </div>
        <div className="d-flex  flex-column col-4 mx-auto">
          <label htmlFor="content">Contenu</label>
          <div>
            <textarea className="txtContenu" name="content" id="" cols="65" rows="3"></textarea>
          </div>
        </div>
        <div className="p-3 mx-auto">
          <button id="btnAjouter" type="submit" >Envoyer</button>
        </div>
      </form>
    )
}