'use client'
import React from "react"
import Comment from "./Comment"
import UserContext from "../composantsBlog/UserContext.js";

export default function CommentList(){
    const id = React.useContext(UserContext)
    let [commentaires, setCommentaires] = React.useState('')

    React.useState(()=>{
        async function GetCommentaires(){
            await fetch(`http://localhost:3000/Commentaires?Article=${id}`)
            .then(response => response.json())
            .then(json => setCommentaires(json))
        }
        GetCommentaires()
    } ,[])


    return(
        <>
            <div className="commentaires">
                {Array.from(commentaires).map(commentaire=><Comment key={commentaire.id} commentaire={commentaire}></Comment>)}
            </div>    
        </>
    )


}
