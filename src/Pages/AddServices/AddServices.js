import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://haunted-hollow-40224.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added')
                }
            })
    }

    return (
        <div className="service">
            <h1>Add Services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description",)} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img",)} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;