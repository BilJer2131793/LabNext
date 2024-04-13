'use client'
import React from "react"
import BlogDetails from "../composantsBlog/BlogDetails.js"
import AddComment from "../composantsBlog/AddComment.js"
import CommentList from "../composantsBlog/CommentList.js"
import UserContext from "../composantsBlog/UserContext.js";

export default function ({params}){
    return(
        <>
        <UserContext.Provider value={params.id}>
            <div className="d-flex flex-column min-vh-100">
                <div className="mx-5">
                    <BlogDetails></BlogDetails>
                    <div className="d-flex flex-column">
                        <AddComment></AddComment>
                        <CommentList></CommentList>  
                    </div>
                </div>  
            </div>
        </UserContext.Provider>
        </>
    )
}