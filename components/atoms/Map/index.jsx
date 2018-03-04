import React from "react";
import { compose, withProps } from "recompose";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import style from "./Map.module.scss";

const RawMap = () => {
  console.log(style.map)
  return (<GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 35.681167, lng: 139.767052 }}
  />)
};

export const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div className={style.map} />,
    containerElement: <div className={style.map} />,
    mapElement: <div className={style.map} />,
  }),
  withScriptjs,
  withGoogleMap,
)(RawMap);
