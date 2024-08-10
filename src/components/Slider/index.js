import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div className="slider container">
		<h2>Heading</h2>
	<span className="seprator"/>

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        <div className="listItem">
          <div>
            <img src="https://picsum.photos/id/3/300/300" />
            <h3>1Visit</h3>
            <span>Here you can view all the images Lorem Picsum provides</span>
          </div>
        </div>
        <div className="listItem">
          <div>
            <img src="https://picsum.photos/id/6/300/300" />
            <h3>2Visit</h3>
            <span>Here you can view all the images Lorem Picsum provides</span>
          </div>
        </div>
        <div className="listItem">
          <div>
            <img src="https://picsum.photos/id/9/300/300" />
            <h3>3Visit</h3>
            <span>Here you can view all the images Lorem Picsum provides</span>
          </div>
        </div>
        <div className="listItem">
          <div>
            <img src="https://picsum.photos/id/9/300/300" />
            <h3>3Visit</h3>
            <span>Here you can view all the images Lorem Picsum provides</span>
          </div>
        </div>

      </Carousel>
    </div>
  );
};

export default Slider;
