import React from "react";
import {Row, Col, Label, Table} from "reactstrap";

const MovieIndex = ({movie, index}) => {
    return(
        <tr>
            <th scope="row">{index+1}</th>
            <td>{movie.name}</td>
            <td>{movie.yoy}</td>
            <td>{movie.plot}</td>
            <td>{movie.cast}</td>
            <td><img src={movie.poster} /></td>
        </tr>
    )

}

const DisplayMovies = () => {

    // const [picture, changePicture] = useState([]);

    // let onDrop = (pic) => {
    //     let picture = picture;
    //     picture.push(pic);
    //     changePicture(picture);
    // }
    
    const list = JSON.parse(localStorage.getItem("movies"));
    
    return(
        <Table dark>
            <thead>
                <tr>
                <th>#</th>
                <th>Movie Name</th>
                <th>Year of Release</th>
                <th>Plot</th>
                <th>Cast</th>
                <th>Poster</th>
                </tr>
            </thead>
            <tbody>
            {list.map((l,i) => <MovieIndex movie={l} index={i}/>)}
            </tbody>
        </Table>
    )
}


export default DisplayMovies;
