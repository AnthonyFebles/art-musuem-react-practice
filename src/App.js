import harvardArt from "./data/harvardArt"; 
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryNavigation/GalleryView";
import {ReactRouter, Route} from 'react-router-dom'

function App() {
  console.log(harvardArt);
  return (
		<div className="page-wrapper">
			<GalleryNavigation galleries={harvardArt.records} />
			<Route path="/galleries/:galleryId"></Route>
		</div>
	);
}

export default App;
