import React from "react";
import {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const movieList = ({modal, showmodal}) => {
    //const [movie, addMovie] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();
        const movieList = JSON.parse(localStorage.getItem("movies")) || [];
        const movieName = {};
        movieName.name = event.target.mname.value;
        movieName.yoy = event.target.yoy.value;
        movieName.plot = event.target.plot.value;
        movieName.cast = event.target.cast.value;
        movieList.push(movieName);
        localStorage.setItem("movies", JSON.stringify(movieList));
        showmodal();
    }

    return(
        <Modal isOpen={modal} toggle={showmodal}>
            <ModalBody>
        <form onSubmit={handleSubmit}>
            <div> Add new Movie</div>
            <div>Movie Name: 
                <input name="mname" type="text" />
            </div>
            <div className="yor">
                Year of Release
                <input name="yoy" type="number"/> 
            </div>
            <div className="plot">
                Plot
                <input name="plot" type="textarea"/> 
            </div>
            <div className="poster">
                Poster
                <input name="poster" type="file"/> 
            </div>
            <div className="cast">
                <div>Cast</div>
                <select name="cast">
                    <option selected>Tom Cruise</option>
                    <option>Henry Covill</option>
                </select>
            </div>
            <button type="submit" className="save">Save</button>
            <button onClick={showmodal} className="cancel">Cancel</button>
        </form>
        </ModalBody>
        </Modal>
    )
}

export default movieList;