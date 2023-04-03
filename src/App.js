import Navbar from './components/common/navbar/Navbar.js';
import Footer from './components/common/footer/Footer.js';
import Home from './pages/home/Home.js';
import ViewDetails from './pages/details/ViewDetails';
import BrowseMovies from './pages/browseMovies/BrowseMovies.js';
import Trending from './pages/trending/Trending.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route index element ={ <Home /> } />
          <Route path="/viewdetails" element={<ViewDetails/>} />
          
          <Route path = "/trending" element = { <Trending/>  } />
          <Route path = "/browse-movies" element = { <BrowseMovies/>  } />
       </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
