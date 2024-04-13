//Ajouter
export async function POST(req,res){
  if(req.method == "POST"){
    let data = await req.json()
    fetch('http://localhost:3000/Publications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        duplex: "half",
        body: JSON.stringify(data),
      }).then(console.log(data.Titre + " ajouter"))
    return new Response('Post request', {
        status: 200
    });
  }
  else{
    return new Response('Mauvaise requete', {
      status: 400
  });
  }
}

export async function DELETE(req,res){
  if(req.method == "DELETE"){
    let data = await req.json()
    fetch('http://localhost:3000/Publications/'+data, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        duplex: "half",
        body: JSON.stringify(data),
      }).then(console.log(data + " deleter"))
    return new Response('Post request', {
        status: 200
    });
  }
  else{
    return new Response('Mauvaise requete', {
      status: 400
  });
  }
}

export async function PUT(req,res){
  if(req.method == "PUT"){
    let blog = await req.json()

    let data = JSON.stringify({
      Id : blog.Id,
      Titre: blog.Titre,
      Auteur: blog.Auteur,
      Date : blog.Date,
      Contenu: blog.Contenu
      })
      
    fetch('http://localhost:3000/Publications/'+blog.Id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        duplex: "half",
        body: data,
      }).then(console.log(blog.Titre + " modifier"))
    return new Response('Post request', {
        status: 200
    });
  }
  else{
    return new Response('Mauvaise requete', {
      status: 400
  });
  }

}