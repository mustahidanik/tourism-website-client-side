import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import axios from 'axios';


const ServiceDetails = () => {
    const { serviceid } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://haunted-hollow-40224.herokuapp.com/myorder', data)
            .then(res => { })
    }

    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://haunted-hollow-40224.herokuapp.com/services/${serviceid}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className="details">
            <img src={service.img} alt="" />
            <h1>Name: {service.name}</h1>
            <h4>Price: {service.price}</h4>
            <p>Description: {service.description}</p>



            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>


                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}

                <input placeholder="Price" defaultValue={service.price} {...register("place")} />

                <h5> Confirm Order</h5>
                <input type="submit" />

            </form>


        </div>
    );
};

export default ServiceDetails;