import { NavLink } from "react-router-dom";
import Rating from "./Rating";
import FoodAndDrinkList from "./FoodAndDrinkList";
import Header from "./Header";
import HourList from "./HourList";
import CommentList from "./CommentList";
import React from "react";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
import { useSelector,useDispatch } from "react-redux";
import VenueDataService from "../services/VenueDataService";
const VenueDetail = () => {
  const { id } = useParams();
  const dispatch=useDispatch();
  const venue=useSelector(state=>state.data);

  React.useEffect(()=>{
    dispatch({type:"FETCH_INIT"});
    VenueDataService.getVenue(id)
    .then((response)=>{
      dispatch({type:"FETCH_SUCCESS",payload:response.data});
    }).catch(()=>{
      dispatch({type:"FETCH_FAILURE"});
    });
  },[id]);
=======
import VenueDataService from "../services/VenueDataService";
import { useSelector, useDispatch } from "react-redux";
const VenueDetail = () => {
  const { id } = useParams();
  const dispatch=useDispatch();
  const venue=useSelector((state)=>state.data);
  React.useEffect(()=>{
    dispatch({ type: "FETCH_INIT" });
    VenueDataService.getVenue(id).then(function(response){
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    });
  },[]);
>>>>>>> e4cd6635d4be8f5250f7a9c9056f494946d4af22
  return (
    <div>
      <Header headerText={venue.name} />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-xs-12 col-sm-6 ">
                <p className="rating">
                  <Rating rating={venue.rating} />
                </p>
                <p>{venue.address}</p>
                <div className="panel panel-primary">
                  <div className="panel-heading ">
                    <h2 className="panel-title ">Açılış Saatleri</h2>
                  </div>
                  <div className="panel-body ">
<<<<<<< HEAD
                    <HourList hourList={venue.hours || []} />
=======
                    <HourList hourList={venue.hours ||[]} />
>>>>>>> e4cd6635d4be8f5250f7a9c9056f494946d4af22
                  </div>
                </div>
                <div className="panel panel-primary">
                  <div className="panel-heading ">
                    <h2 className="panel-title ">Neler Var?</h2>
                  </div>
                  <div className="panel-body ">
<<<<<<< HEAD
                    <FoodAndDrinkList foodAndDrinkList={venue.foodanddrink || []} />
=======
                    <FoodAndDrinkList foodAndDrinkList={venue.foodanddrink ||[]} />
>>>>>>> e4cd6635d4be8f5250f7a9c9056f494946d4af22
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="panel panel-primary">
                  <div className="panel-heading ">
                    <h2 className="panel-title ">Konum Bilgisi</h2>
                  </div>
                  <div className="panel-body ">
                    <img
                      className="img img-responsive img-rounded"
                      alt="Konum Bilgisi"
                      src={`https://maps.googleapis.com/maps/api/staticmap?center=${
                        venue.coordinates
                      }&zoom=12&size=600x400&markers=${
                        venue.coordinates
                      }&key=AIzaSyCmmKygTpBzHGOZEciJpAdxC9v_tWHagnE`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 ">
              <div className="panel panel-primary">
                <div className="panel-heading ">
                  <NavLink
                    className="btn btn-default pull-right"
                    to={`/venue/${id}/comment/new`}state={{ name: venue.name }}
                  >
                    Yorum Ekle{" "}
                  </NavLink>
                  <h2 className="panel-title ">Yorumlar</h2>
                </div>
                <div className="panel-body ">
<<<<<<< HEAD
                  <CommentList commentList={venue.comments || []} />
=======
                  <CommentList commentList={venue.comments ||[]} />
>>>>>>> e4cd6635d4be8f5250f7a9c9056f494946d4af22
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VenueDetail;
