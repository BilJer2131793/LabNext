'use client'
import React from "react";

export default function ModifyForm(){
    
    let [publications, setPublications] = React.useState('')
    let [IdValue, setId] = React.useState('')
    let [titlePlaceholder, setTitlePlaceholder] = React.useState('Titre')
    let [authorPlaceholder, setAuthorPlaceholder] = React.useState('Nom Autheur')
    let [dateValue, setDateValue] = React.useState('')
    let [contentValue, setContentValue] = React.useState('')
  
    React.useEffect(() => {
        GetBlogs()
    }, [])
    async function GetBlogs(){
        console.log("GetBlogs")

        var myHeaders = new Headers();
        myHeaders.append('pragma', 'no-cache');
        myHeaders.append('cache-control', 'no-cache');

        let t= Date.now()
        await fetch("http://localhost:3000/Publications",{cache: "no-cache"})
        .then(response => response.json())
        .then(json => json.reverse())
        .then(json => setPublications(json))
    }
    async function ChangeValues(id){
        console.log(id)
        if(id != ""){
            setId(id)
            let blog = publications.find(publication => publication.id == id)
            console.log(blog)
            setTitlePlaceholder(blog.Titre)
            setAuthorPlaceholder(blog.Auteur)
            setContentValue(blog.Contenu)
            setDateValue(blog.Date)
        }
        else{
            setId('')
            setTitlePlaceholder('Titre')
            setAuthorPlaceholder('Nom Autheur')
            setContentValue('')
            setDateValue('')
        }
    }


    async function ModifierBlog(FormData) {
        if(IdValue == ""){
            return ""
        }
        let titre = ""
        if(FormData.get('Mtitle') == ""){
            titre = titlePlaceholder
        }else{
            titre = FormData.get('Mtitle')
        }
        let auteur = ""
        if(FormData.get('Mauthor') == ""){
            auteur = authorPlaceholder
        }else{
            auteur = FormData.get('Mauthor')
        }

        fetch('http://localhost:3001/api', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            duplex: "half",
            body: JSON.stringify({
                Id: IdValue,
                Titre: titre,
                Auteur: auteur,
                Date : dateValue,
                Contenu: contentValue
            }),
        }).then(GetBlogs())
        .then(ChangeValues(IdValue))


    }

    return(
        <>
        <form className="d-flex flex-column " action={ModifierBlog}>
            <legend className="text-center">Modifier un blog existant</legend>
            <select className="d-flex flex-wrap mx-auto" style={{width:"33%"}} onChange={(e) => ChangeValues(e.target.value)}>
                <option value={""}></option>
                {Array.from(publications).map(publication=><option value={publication.id} key = {publication.id}>{publication.Titre}</option>)}
            </select>
            <div className="col-4 mx-auto">
                <label htmlFor="title">Titre</label>
                <div>
                    <input className="txtTitre form-control" type="text" name="Mtitle" id="Mtitle" placeholder={titlePlaceholder}/>
                </div>
            </div>
            <div className="col-4 mx-auto">
                <label htmlFor="author">Auteur</label>
                <div>
                    <input className="txtAuteur form-control" type="text" name="Mauthor" id="Mauthor" placeholder={authorPlaceholder}/>
                </div>
            </div>
            <div className="d-flex  flex-column col-4 mx-auto">
                <label htmlFor="content">Contenu</label>
                <div>
                    <textarea className="MtxtContenu" name="Mcontent" id="" cols="65" rows="3" value={contentValue} onChange={(e) => setContentValue(e.target.value)}></textarea>
                </div>
            </div>
            <div className="p-3 mx-auto">
                <button id="btnModifier" type="submit" >Modifier</button>
            </div>
        </form>
        </>
    )
}