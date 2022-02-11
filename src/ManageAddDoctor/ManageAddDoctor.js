import React, { useEffect, useState } from 'react';

const ManageAddDoctor = () => {
    const [manageAddDoctor, setManageAddDoctor] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/addDotor`)
            .then(res => res.json())
            .then(data => setManageAddDoctor(data))
    }, [])


    const handleDelete = id => {
        const url = `http://localhost:5000/addDoctor/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('successfuly deleted')
                    const remaining = addDoctor.filter(doctor => doctor._id !== id);
                    setManageAddDoctor(remaining);
                }
            })
    }

    return (
        <div>
            <h2>This is Manage Add Doctor</h2>

            {
                ManageAddDoctor.map(doctor => <div key={doctor._id}><h3>{doctor.name}</h3>
                    <button onClick={() => handleDelete(doctor._id)}>Delete</button>
                </div>)
            }




            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> <br /> <br /> <br /> <br /> <br /> <br />

        </div>
    );
};

export default ManageAddDoctor;