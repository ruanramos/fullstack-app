import { Dispatch, useEffect } from "react";
import Card from "../components/Card";
import DoctorForm from "../components/DoctorForm";
import useDoctorsContext from "../hooks/useDoctorsContext";
import { Doctor } from "../types/Doctor";


const fetchDoctors = async () => {
    const response = await fetch('/api/doctors');
    const data = await response.json();
    return data;
}

const Doctors = () => {
    const { doctors, dispatch } : {doctors: Doctor[], dispatch: Dispatch<any>} = useDoctorsContext();

    useEffect(() => {
        fetchDoctors().then(data => {
            dispatch({ type: 'SET_DOCTORS', payload: data });
        });
    }, []);

    return (
        <div className="container">
            <h2>Doctors</h2>
            <div className="main-content">
                <div>
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