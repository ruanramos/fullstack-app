import { useState } from "react";
import useDoctorsContext from "../hooks/useDoctorsContext";


const DoctorForm = () => {
    const { dispatch } = useDoctorsContext();

    const [name, setName] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await fetch('/api/doctors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                specialty,
                address,
                phone
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.errors) {
                    setError(data.message)
                } else {
                    console.log(data)
                    setName('')
                    setSpecialty('')
                    setAddress('')
                    setPhone('')
                    dispatch({ type: 'ADD_DOCTOR', payload: data })
                }
            })

    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleSpecialtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpecialty(e.target.value)
    }
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value)
    }
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value)
    }


    return (
        <div className="doctor-form">
            <h2>Add new doctor</h2>
            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={handleNameChange} value={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="specialization">Specialization</label>
                    <input type="text" className="form-control" id="specialization" placeholder="Enter specialization" onChange={handleSpecialtyChange} value={specialty} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="Enter phone" onChange={handlePhoneChange} value={phone} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" onChange={handleAddressChange} value={address} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default DoctorForm;