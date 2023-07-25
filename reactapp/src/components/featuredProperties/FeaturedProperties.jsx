import "./featuredProperties.css";
import image4 from "../images/roseate.jpg"
import image5 from "../images/jw-marriott-hotel-mumbai.jpg"
import image6 from "../images/hilton-chennai.jpg"
import image7 from "../images/pool-and-jacuzzi.jpg"

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src={image4}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Roseate House </span>
        <span className="fpCity">NewDelhi</span>
        <span className="fpPrice">Starting from Rs.14999</span>
        <div className="fpRating">
          <button>8.7</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={image5}
          alt=""
          className="fpImg"
        />
        <span className="fpName">JW Marriott Mumbai Juhu</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from Rs.12000</span>
        <div className="fpRating">
          <button>8.5</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={image6}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Hotel</span>
        <span className="fpCity">Chennai</span>
        <span className="fpPrice">Starting from Rs.15750</span>
        <div className="fpRating">
          <button>9.1</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={image7}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Taj Krishna</span>
        <span className="fpCity">Hyderabad</span>
        <span className="fpPrice">Starting from Rs.11800</span>
        <div className="fpRating">
          <button>8.1</button>
          <span>Good</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
