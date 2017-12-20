import * as React from "react";

export const Home = ()=>
<div className="container">
<div className="jumbotron">
    <h3>Welcome to your exercise tracker</h3>
    <p>Enjoy</p>
</div>

<div className="row">
    <div className="col-md-4">
        <div className="card" >
            <img className="card-img-top" src="benefits-of-exercise.png" alt="Card image cap" />
            <div className="card-body">
                <h4 className="card-title">Signup</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        
    </div>
    <div className="col-md-4">
            <div className="card" >
                    <img className="card-img-top" src="work-out-2.png" alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">Rules</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                
    </div>
    <div className="col-md-4">
            <div className="card" >
                    <img className="card-img-top" src="contact.png" alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">View Cool Memes</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        
    </div>
</div>                
</div>
