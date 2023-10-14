import { useParams, Route } from 'react-router-dom'
import './GalleryView.css'
import ArtImageTile from '../ArtImageTile'
import ArtDescription from '../ArtDescription'

const GalleryView = ({galleries}) => {
    const { galleryId } = useParams()
    //console.log(galleryId)
    //console.log("HELLO", galleries)
    const currGallery = galleries.find(gallery => gallery.id ===parseInt(galleryId) )

    //console.log(currGallery)

    return (
			<div>
				<h1>{currGallery.name}</h1>
				<Route exact path='/galleries/:galleryId'>
					{currGallery.objects.map((art) => (
						<ArtImageTile key={art.id} art={art} />
					))}
				</Route>
                <Route path ='/galleries/:galleryId/art/:artId'>
                    <ArtDescription gallery={currGallery} />
                </Route>
			</div>
		);
}

export default GalleryView