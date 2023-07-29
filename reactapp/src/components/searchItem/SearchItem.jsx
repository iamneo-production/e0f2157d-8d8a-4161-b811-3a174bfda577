import "./searchItem.css";



const roomTypes = {
  SingleRoom: "Single Room",
  DoubleRoom: "Double Room",
  DeluxeRoom: "Deluxe Room",
  TwinRoom: "Twin Room",
  SuiteRoom: "Suite Room",
}

const SearchItem = ({ title, image, address, roomType, rating, cost }) => {
  return (
    <div className="searchItem">
      <img
        src={image}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{title}</h1>
        <span className="siDistance">{address}</span>
        <span className="siSubtitle">
          {roomTypes[roomType]} with Air conditioning
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs. {cost}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">Book Now</button>
        </div>
      </div>
    </div>



  );
};

export default SearchItem;
