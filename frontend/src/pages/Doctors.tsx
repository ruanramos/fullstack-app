import { useEffect, useState } from "react";

const fetchDoctors = async () => {
    const response = await fetch('/api/doctors');
    const data = await response.json();
    return data;
}

type Doctor = {
    id: number,
    name: string,
    specialty: string,
    address: string,
    phone: string,
    createdAt: string,
    updatedAt: string
}

const Doctors = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);

    useEffect(() => {
        fetchDoctors().then(data => {
            setDoctors(data);
        });
    }, []);

    return (
        <div className="container">
            <h2>Doctors</h2>
            <div className="row">
                {doctors.map(doctor => (
                    <div className="col-md-4" key={doctor.id}>
                        <div className="card text-center">
                            <div className="card-header">
                                <h3>{doctor.name}</h3>
                            </div>
                            <div className="card-body">
                                <p>{doctor.specialty}</p>
                                <p>{doctor.address}</p>
                                <p>{doctor.phone}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



export default Doctors;