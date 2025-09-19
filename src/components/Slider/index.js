import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";

const Slider = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="slider container">
      <h2 className="slider-heading">Our Impact Stories</h2>
      <span className="separator" />

      <Carousel
        swipeable
        draggable
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        <div className="listItem">
          <div className="card">
            <img src="https://picsum.photos/id/3/300/300" alt="Impact 1" />
            <h3>Food Distribution</h3>
            <span>Helping families with essential supplies during tough times.</span>
          </div>
        </div>
        <div className="listItem">
          <div className="card">
            <img src="https://picsum.photos/id/6/300/300" alt="Impact 2" />
            <h3>Child Education</h3>
            <span>Providing learning support and resources for children.</span>
          </div>
        </div>
        <div className="listItem">
          <div className="card">
            <img src="https://picsum.photos/id/9/300/300" alt="Impact 3" />
            <h3>Healthcare Camps</h3>
            <span>Organizing free medical checkups and wellness programs.</span>
          </div>
        </div>
        <div className="listItem">
          <div className="card">
            <img src="https://picsum.photos/id/12/300/300" alt="Impact 4" />
            <h3>Community Development</h3>
            <span>Empowering local communities through awareness programs.</span>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
