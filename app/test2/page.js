'use client'
import React from "react"


export default function Home() {
    React.useEffect(() => {
        window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || 
        window.msIndexedDB;
        
        window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || 
        window.msIDBTransaction;
        window.IDBKeyRange = window.IDBKeyRange || 
        window.webkitIDBKeyRange || window.msIDBKeyRange
        
        if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
        }
    })



    async function GetBlogs() {

    }
    GetBlogs()
}

/*
    blogs: 'id, Titre, Auteur, Date, Contenu' // Primary key and indexed props

*/