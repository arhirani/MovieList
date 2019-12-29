import React, {Component, useEffect, useState} from 'react';
import { Button, Modal, Form, FormGroup, Label, Input, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const MovieList = ({modal, setmodal}) => {

    const [movie,setmovie] = useState([]);

    useEffect(() => {
        if(!movie.length)
        listActors();
    })

    let listActors = async () => {
        const list = await fetch("https://jsonplaceholder.typicode.com/users").then(result => result.json());
        setmovie(list);
    }

    let handleSubmit = (event) => {
        console.log("inside");
        let movielist = JSON.parse(localStorage.getItem("movies")) || [];
        let movie = {};
        movie.name = event.target.moviename.value;
        movie.year = event.target.year.value;
        movie.plot = event.target.plot.value;
        movie.poster = event.target.poster.value;
        movie.actor = event.target.cast.value;
        movielist.push(movie);
        localStorage.setItem("movies", JSON.stringify(movielist));
    }

    return(
        <>
        <Modal isOpen={modal} toggle={setmodal}>
            <ModalHeader>Add a New Movie</ModalHeader>
            <ModalBody>
                <Form id="msubmit" method="GET" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>MovieName: </Label>
                        <Input type="text" name="moviename" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Year: </Label>
                        <Input type="number" name="year" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Plot: </Label>
                        <Input type="textarea" name="plot" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Poster: </Label>
                        <Input type="file" name="poster" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Cast: </Label>
                        <Input type="select" name="cast">
                            {movie.map((l) => <option name={l.name}>{l.name}</option>)}
                        </Input>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button form="msubmit" color="primary" type="submit">Save</Button>{' '}
                <Button color="secondary" onClick={setmodal}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </>
    )
}

export default MovieList;
