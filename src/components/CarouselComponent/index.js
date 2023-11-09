import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

const CarouselComponent = () => {
  return (
    <div className='slider-carousel'>
      <Carousel 
      showThumbs={false}
      showIndicators={false}
      dynamicHeight={true}
      // centerMode={true}
      showStatus={false}
    >
      <div>
        <img src="assets/images/slide.jpg" />
      </div>
      <div>
        <img src="assets/images/slide.jpg" />
      </div>
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
