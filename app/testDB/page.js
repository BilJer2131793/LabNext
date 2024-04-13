
import React from "react"
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import {db} from "../Modele/db"

export default function Home() {
    


    async function GetBlogs() {
        let data = await db.blogs.toArray()
        if(data.length == 2){
            console.log("data")
        }
        if(data.length == 0){
            await db.blogs.add({id: 909, Titre: "test", Auteur: "test", Date: "test", Contenu: "test"})
            await db.blogs.add({id: 893,Titre: "asd", Auteur: "asd", Date: "asd", Contenu: "qwe"})
        }

        console.log(await db.blogs.toArray())
    }
    GetBlogs()
}

/*
    blogs: 'id, Titre, Auteur, Date, Contenu' // Primary key and indexed props

*/