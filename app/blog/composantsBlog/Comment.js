'use client'
import React from "react"


export default function Comment({commentaire}){
    return (
        <>
            <div className="commentaire d-flex border border-2 rounded-3 m-2 p-2">
                <img className="img-fluid imgCommentaire mx-2"src="images/trudeau.jpg" alt=""/>
                <p>{commentaire.Contenu}</p>
            </div>      
        </>
    )
}