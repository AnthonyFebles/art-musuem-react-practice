import './GalleryNavigation.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const GalleryNavigation = ({galleries}) => {
    //console.log(galleries)
    return (
			<nav>
				<h1>Galleries</h1>
				<NavLink exact to="/">Home</NavLink>
                {galleries.map(gallery => (
                    <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                ))}
			</nav>
		);
}


export default GalleryNavigation