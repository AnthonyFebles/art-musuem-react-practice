import { useParams } from 'react-router-dom'
import './GalleryView.css'

const GalleryView = ({galleries}) => {
    const { galleryId } = useParams()
    //console.log(galleryId)
    //console.log("HELLLOOOOOOO", galleries)
    const currGallery = galleries.find(gallery => gallery.id ===parseInt(galleryId) )

    console.log(currGallery)

    return (
			<div>
                <h2>{currGallery.name}</h2>
			</div>
		);
}

export default GalleryView