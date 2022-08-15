import { Request, Response } from "express";
import { CallbackError, Document } from "mongoose";
import User from "../models/user";

class UserController {

    constructor() {
        console.log('UserController created');
    }

    async getUsers(req: Request, res: Response) {
        await User.find({}).sort({ createdAt: -1 })
            .then((doctors: Document[]) => {
                res.status(200).json(doctors);
            }).catch((error: CallbackError) => {
                res.status(500).json(error);
            });
    }

    async getUser(req: Request, res: Response) {
        await User.findById(req.params.id)
            .then((user: Document | null) => {
                res.status(200).json(user);
            }).catch((error: CallbackError) => {
                res.status(500).json(error);
            });
    }

    async createUser(req: Request, res: Response) {
        await User.create(req.body)
            .then((user: Document) => {
                res.status(201).json(user);
            }).catch((error: CallbackError) => {
                res.status(500).json(error);
            });
    }

    async updateUser(req: Request, res: Response) {
        await User.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
            .then((user: Document | null) => {
                res.status(200).json(user);
            }).catch((error: CallbackError) => {
                res.status(500).json(error);
            });
    }

    async deleteUser(req: Request, res: Response) {
        await User.findByIdAndDelete(req.params.id)
            .sort({ createdAt: -1 })
            .then((user: Document | null) => {
                res.status(200).json(user);
            }).catch((error: CallbackError) => {
                res.status(500).json(error);
            });
    }

}

module.exports = UserController;