import React from 'react';
import './AddDoctor.css'
import { useForm } from "react-hook-form"
import axios from 'axios';


const AddDoctor = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data);

    axios.post('http://localhost:5000/addDoctor')
        // data
        .then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })

    return (
        <div className="add-doctor">
            <h1>Add A DOCTOR</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("expert")} placeholder="Expert" />
                <textarea type="number"{...register("department")} placeholder="Department" />
                <input type="text" {...register("img")} placeholder="Img url" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddDoctor;
