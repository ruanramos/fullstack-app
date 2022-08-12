import { useEffect, useState } from "react";
import Card from "../components/Card";
import type { Doctor } from '../types/Doctor';


const fetchDoctors = async () => {
    const response = await fetch('/api/doctors');
    const data = await response.json();
    return data;
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
                    <div key={doctor.id}>
                        <Card doctor={doctor} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Doctors;