export default class DoctorService {
    constructor(Doctor) {
        this.Doctor = Doctor;
    }

    async getDoctors() {
        return await this.Doctor.find();
    }

    async getDoctor(id) {
        
        return await this.Doctor.findById(id);
    }

    async createDoctor(doctor) {
        return await this.Doctor.create(doctor);
    }

    async updateDoctor(id, doctor) {
        return await this.Doctor.findByIdAndUpdate(id, doctor, { new: true });
    }

    async deleteDoctor(id) {
        return await this.Doctor.findByIdAndRemove(id);
    }

    async getDoctorsBySpecialty(specialty) {
        return await this.Doctor.find({ specialty: specialty });
    }

    async getDoctorsByName(name) {
        return await this.Doctor.find({ name: name });
    }
}