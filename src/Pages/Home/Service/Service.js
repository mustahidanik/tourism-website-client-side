import React from 'react';
import "./Service.css";
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, description, _id } = service;
    return (
        <div className="col">
            <div className="card cart-container">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="p-2">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <Link to={`/serviceDetails/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Service;