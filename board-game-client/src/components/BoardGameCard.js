import React from 'react';

function imgError(event) {
    event.target.src = "http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg";
}

const BoardGameCard = (props) => {
    return (
        <div className="card">
            <img className="img-card" src={props.boardgame.img_url} onError={imgError} alt={props.boardgame.name}/>
            <p className="card-text">
                <strong>{props.boardgame.name}</strong> <br />
                <small>
                    <em>Release Year: </em> {props.boardgame.release_year} <br />
                    <em>Weight: </em> {props.boardgame.weight} <br />
                    <em>Rating: </em> {props.boardgame.rating}
                </small>
            </p>
        </div>
    )
};

export default BoardGameCard