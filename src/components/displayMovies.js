import React from "react";
import MovieList from "./movieList";

const Showlist = ({movie}) => {
    return(
        <div className="row mt-2 ml-4">
        <div className="col-sm-2 ml-2">{movie.name}</div>
        <div className="col-sm-2 ml-2">{movie.yoy}</div>
        <div className="col-sm-2 ml-2">{movie.plot}</div>
        <div className="col-sm-3 ml-2">{movie.cast}</div>
        </div>
    )
}

const DisplayList = () => {
    let list = JSON.parse(localStorage.getItem("movies"));
    return(
        <div>
            {list.map(l => <Showlist movie={l}/>
            )}
        </div>
    )
}

export default DisplayList;