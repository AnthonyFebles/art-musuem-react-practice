import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/";

const ArtDescription = ({ gallery }) => {
	//console.log(gallery)

	const { galleryId, artId } = useParams();

	const art = gallery.objects.find((artwork) => artwork.id === parseInt(artId));
	//console.log(art)
    
			// art.images.map((artwork) => (
			// 	console.log(artwork.imageid)
			// ));
	
            // console.log(art.images)

	return (
		<div>
			{art.images.map(artwork => (
				<img src={artwork.baseimageurl} alt={artwork.title} key={artwork.imageid}/>
                
			))}
			<Link to={`/galleries/${galleryId}`}>Back To Gallery</Link>
			<a href={art.url}>{art.title}</a>
		</div>
	);
};

export default ArtDescription;
