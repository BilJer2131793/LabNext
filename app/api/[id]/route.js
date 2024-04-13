export const dynamic = 'force-dynamic';

export async function GET(req, { params: { id } }) {
    let blog = null
    await fetch(`http://localhost:3000/Publications?id=`+id)
    .then(response=>response.json())
    .then(json => blog = json[0]) 
    return new Response(JSON.stringify(blog), {
        status: 200
    });
}