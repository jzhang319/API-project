import homePic from "../../img/homePic.webp";
import "./HomePage.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spot";

const HomePage = () => {
  const dispatch = useDispatch();

  const allSpots = useSelector((state) => Object.values(state.spot));

  // console.log(allSpots.previewImage, ` <---`);

  useEffect(() => {
    dispatch(getAllSpots());
  }, []);

  return (
    <div className="homepage-container">
      {allSpots.map((spot) => {
        return (
          <div className="each-spot">
            <NavLink key={spot.id} to={`/api/spots/${spot.id}`}>
              <img src={spot.previewImage} alt="" />
              <div className="spot-info">
                <div className="city-country">
                  {spot.city},{spot.country}
                </div>
                <div className="updated-at">{spot.updatedAt}</div>
                <div className="price">${spot.price}</div>
              </div>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
