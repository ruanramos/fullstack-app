import { Request, Response } from "express";
import { CallbackError, Document } from "mongoose";
import Doctor from "../models/doctor";

class DoctorController {

    constructor() {
        console.log('DoctorController created');
    }

    async getDoctors(req: Request, res: Response) {
        await Doctor.find({}).sort({ createdAt: -1 })
            .then((doctors: Document[]) => {
                res.status(200).json(doctors);
            }).catch((error: CallbackError) => {
                res.status(500).json(error);
            });
    }

    async getDoctor(req: Request, res: Response) {
        await Doctor.findById(req.params.id)
            .then((doctor: Document | null) => {
                res.status(200).json(doctor);
            }).catch((error: CallbackError) => {
                res.status(500).json(error);
            });
    }

    async createDoctor(req: Request, res: Response) {
        await Doctor.create(req.body)
            .then((doctor: Document) => {
                res.status(201).json(doctor);
            }).catch((error: CallbackError) => {
                res.status(500).json(error);
            });
    }

    async updateDoctor(req: Request, res: Response) {
        await Doctor.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
            .then((doctor: Document | null) => {
                res.status(200).json(doctor);
            }).catch((error: CallbackError) => {
                res.status(500).json(error);
            });
    }

    async deleteDoctor(req: Request, res: Response) {
        await Doctor.findByIdAndDelete(req.params.id)
            .sort({ createdAt: -1 })
            .then((doctor: Document | null) => {
                res.status(200).json(doctor);
            }).catch((error: CallbackError) => {
                res.status(500).json(error);
            });
    }

    /* async getDoctorsBySpecialty(req: Request, res: Response) {
        const doctors = await Doctor.getDoctorsBySpecialty(req.params.specialty);
        res.status(200).json(doctors);
    }

    async getDoctorsByName(req: Request, res: Response) {
        const doctors = await Doctor.getDoctorsByName(req.params.name);
        res.status(200).json(doctors);
    } */
}

module.exports = DoctorController;