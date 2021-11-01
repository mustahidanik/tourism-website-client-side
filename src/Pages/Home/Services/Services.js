import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';

const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch("https://haunted-hollow-40224.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setservices(data));
    }, [])
    return (
        <div id='services' className=" py-5">
            <h2><span>Our Services</span></h2>
            <div className="">
                <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 services ">
                    {

                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;