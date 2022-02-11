import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Boking = () => {

    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/addDoctor/${doctorId}`)
            .then(res => res.json())
            .then(data => setDoctor(data));

    }, [])

    return (
        <div>
            <h2>Details of:{doctor.name}</h2>
            <h2>This is Boking:{doctorId}</h2>
        </div>
    );
};

export default Boking;