import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageSlider from './Component/ImageSlider/ImageSlider';
import './App.css';
import HomePage from './Pages/Home';
import Slider from './Component/AwesomeSlider/AwesomeSlider';
import ImageSwiper from './Component/Swiper/Swiper';
import ImageSwipers from './Component/SwiperReact/ImageSwiper';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/> } />
          <Route exact path='/slick' element={<div className='slick'> <ImageSlider /> </div>} />
          <Route exact path='/awesome' element={<div className='awesome'> <Slider/> </div>} />
          <Route exact path='/swiper' element={<div className='swiper'> <ImageSwiper/> </div>} />
          <Route exact path='/swiper-react' element={<div className='swiper'> <ImageSwipers/> </div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
