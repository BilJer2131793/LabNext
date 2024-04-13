'use client'
import BlogCard from "./Blogcard"
import React from "react"
import Dexie from "dexie";
import {db} from "../Modele/db"


export default function BlogList(){

    let [publications, setPublications] = React.useState([])

    React.useEffect(() => {
        async function GetBlogs(){

            await fetch("http://localhost:3000/Publications")
            .then(response => response.json())
            .then(json => json.reverse())
            .then(json => setPublications(json))
        }
        GetBlogs()
        
    }, [])

    React.useEffect(() => {
        async function SetDB(){
            if(await db.blogs.toArray() != 0){
                console.log("DB not empty")
                console.log(await db.blogs.toArray())
            }
            else if(await db.blogs.toArray() == 0){
                console.log("DB is empty")
                db.blogs.bulkAdd(publications)
            }

            /*
            publications.forEach(element => {
                db.blogs.add(element)
            });
            */

        }
        SetDB()
    }, [publications])



    return (
    <>
        <div className="blog d-flex flex-wrap" style={{backgroundColor: "222831"}}>
            {Array.from(publications).map(publication=><BlogCard key = {publication.id} publication = {publication}></BlogCard>)}
        </div>
    </>
    )
}