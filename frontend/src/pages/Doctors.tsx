import { useEffect, useState } from "react";
import Card from "../components/Card";
import DoctorForm from "../components/DoctorForm";
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
            <div className="main-content">
                <div className="row">
                    {doctors.map(doctor => (
                        <div key={doctor._id}>
                            <Card doctor={doctor} />
                        </div>
                    ))}
                </div>
                <div className="">
                    <DoctorForm />
                </div>
            </div>
        </div>
    );
}

export default Doctors;