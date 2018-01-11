import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ()=>{
    return (
        <div className="homePage">
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading ">Board Game Collection</h1>
                    <p className="lead text-muted">
                        Create a collection of your board games. Rate them as your play them!
                    </p>
                    <p><Link to="/boardgames" className="btn btn-primary">View my collection</Link></p>
                </div>
            </section>
        </div>
    )
};

export default HomePage