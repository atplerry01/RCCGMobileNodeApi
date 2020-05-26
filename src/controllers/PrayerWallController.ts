import { validate } from 'class-validator';
import { Request, Response } from "express";
import { PrayerWall } from "../entity/PrayerWall";
import { createPrayerWallService, deletePrayerWallService, getPrayerWallByIdService, getPrayerWallService, updatePrayerWallService } from '../services/PrayerWall';
import { Paginator } from '../utils/pagination';

class PrayerWallController {

    static all = async (req: Request, res: Response) => {
        const { page, per_page } = req.query;

        try {
            const entity: any = await getPrayerWallService();
            const result = await Paginator(entity, page, per_page);

            return res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            return false;
        }
    };

    static getOneById = async (req: Request, res: Response) => {
        const id: number = req.params.id;
        const { name } = req.body;

        try {
            const entity: any = await getPrayerWallByIdService(id);

            if (entity.success) {
                return res.status(200).json({
                    success: entity.success,
                    data: entity.data
                });
            } else {
                return res.status(400).json({
                    success: entity.success,
                    msg: entity.msg
                });
            }

        } catch (error) {
            return res.status(400).json({
                success: false,
                msg: error
            });
        }
    };

    static create = async (req: Request, res: Response) => {
        let { name } = req.body;

        // Create Entity Object
        let prayerWall = new PrayerWall();
        prayerWall.name = name;

        const errors = await validate(PrayerWall); // TODO:

        if (errors.length > 0) {
            res.status(400).send({
                success: false,
                msg: errors
            });
            return;
        }

        try {
            await createPrayerWallService(PrayerWall);

            return res.status(201).json({
                success: true
            });
        } catch (error) {
            res.status(400).send({
                success: false,
                msg: "something went wrong"
            });
            return;
        }

    };

    static update = async (req: Request, res: Response) => {
        const id: number = req.params.id;
        const { name } = req.body;

        try {
            const entity: any = await getPrayerWallByIdService(id);

            if (!entity.success) {
                return res.status(400).json({
                    success: false,
                    msg: entity.msg
                });
            }

            let prayerWall: PrayerWall = entity.data;
            prayerWall.name = name

            const errors = await validate(PrayerWall);

            if (errors.length > 0) {
                res.status(400).send({
                    success: false,
                    msg: errors
                });
                return;
            }

            await updatePrayerWallService(PrayerWall);

            return res.status(200).json({
                success: true,
            });
        } catch (error) {
            res.status(400).send({
                success: false,
                msg: "something went wrong"
            });
            return;
        }
    };

    static delete = async (req: Request, res: Response) => {
        //Send the users object
        const id = req.params.id;

        try {
            const entity: any = await getPrayerWallByIdService(id);

            if (!entity.success) {
                return res.status(400).json({
                    success: false,
                    msg: entity.msg
                });
            }

            await deletePrayerWallService(id);

            return res.status(200).json({
                success: true,
            })
        } catch (error) {
            res.status(400).send({
                success: false,
                msg: "something went wrong"
            });
            return;
        }

    };
};

export default PrayerWallController;
