'use client'
import React from "react"
import UserContext from "./UserContext.js"

export default function BlogDetails(){
    const id = React.useContext(UserContext)
    let [publication, setPublication] = React.useState(null)
    React.useEffect(()=>{
        async function GetContent(){
            await fetch(`http://localhost:3000/Publications?id=`+id)
            .then(reponse=>reponse.json())
            .then(json => setPublication(json[0])) 
        }
        GetContent()

    },[])

    if(publication !== null){
        return(
            <>
                <div>
                    <img className="mx-auto d-block img-fluid" src="https://picsum.photos/id/237/200" alt="" />
                </div>
                <div>
                    <h2 className="text-center titre">{publication.Titre}</h2>
                    <div className="contenu"><p>{publication.Contenu}</p></div>
                </div>
            </>
        )
    }  
}
