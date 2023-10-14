import { useParams, Link } from 'react-router-dom';
import './ArtImageTile.css'


const ArtImage = ({art}) => {

    //console.log(art)
    const {galleryId} = useParams()

    return (
			<Link to={`/galleries/${galleryId}/art/${art.id}`}>
				<img src={art.images[0].baseimageurl} alt="art"></img>
			</Link>
		);
}

export default ArtImage