export default function BlogCard({ publication }) {
    return (
        <article className="rounded-4 p-3">
            <img className="mx-auto d-block img-fluid pb-2" src="https://picsum.photos/id/237/200" alt="" />
            <a className="text-decoration-none" style={{ color: '#00ADB5' }} href={`blog/${publication.id}`}>
                <h5 className="text-center bg-secondary">{publication.Titre}</h5>
            </a>
            <p className="m-3">{publication.Contenu}</p>
        </article>
    );
}

