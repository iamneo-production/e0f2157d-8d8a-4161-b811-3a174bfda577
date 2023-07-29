import "./featured.css";
import image1 from "../images/chennai.jpg"
import image2 from "../images/newdelhi.jpg"
import image3 from "../images/mumbai.jpg"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={image2}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>New Delhi</h1>
          <h2>97 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={image1}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Chennai</h1>
          <h2>120 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={image3}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>160 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
