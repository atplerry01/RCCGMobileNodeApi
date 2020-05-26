import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { PastorBlog } from '../entity/PastorBlog';
import {
  createPastorBlogService,
  deletePastorBlogService,
  getPastorBlogByIdService,
  getPastorBlogService,
  updatePastorBlogService,
} from '../services/PastorBlog';
import { Paginator } from '../utils/pagination';

class PastorBlogController {
  static all = async (req: Request, res: Response) => {
    const { page, per_page } = req.query;

    try {
      const entity: any = await getPastorBlogService();
      const result = await Paginator(entity, page, per_page);

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      return false;
    }
  };

  static getOneById = async (req: Request, res: Response) => {
    const id: number = req.params.id;
    const { name } = req.body;

    try {
      const entity: any = await getPastorBlogByIdService(id);

      if (entity.success) {
        return res.status(200).json({
          success: entity.success,
          data: entity.data,
        });
      } else {
        return res.status(400).json({
          success: entity.success,
          msg: entity.msg,
        });
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        msg: error,
      });
    }
  };

  static create = async (req: Request, res: Response) => {
    let { name } = req.body;

    // Create Entity Object
    let pastorBlog = new PastorBlog();
    pastorBlog.name = name;

    const errors = await validate(PastorBlog); // TODO:

    if (errors.length > 0) {
      res.status(400).send({
        success: false,
        msg: errors,
      });
      return;
    }

    try {
      await createPastorBlogService(PastorBlog);

      return res.status(201).json({
        success: true,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        msg: 'something went wrong',
      });
      return;
    }
  };

  static update = async (req: Request, res: Response) => {
    const id: number = req.params.id;
    const { name } = req.body;

    try {
      const entity: any = await getPastorBlogByIdService(id);

      if (!entity.success) {
        return res.status(400).json({
          success: false,
          msg: entity.msg,
        });
      }

      let pastorBlog: PastorBlog = entity.data;
      pastorBlog.name = name;

      const errors = await validate(PastorBlog);

      if (errors.length > 0) {
        res.status(400).send({
          success: false,
          msg: errors,
        });
        return;
      }

      await updatePastorBlogService(PastorBlog);

      return res.status(200).json({
        success: true,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        msg: 'something went wrong',
      });
      return;
    }
  };

  static delete = async (req: Request, res: Response) => {
    //Send the users object
    const id = req.params.id;

    try {
      const entity: any = await getPastorBlogByIdService(id);

      if (!entity.success) {
        return res.status(400).json({
          success: false,
          msg: entity.msg,
        });
      }

      await deletePastorBlogService(id);

      return res.status(200).json({
        success: true,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        msg: 'something went wrong',
      });
      return;
    }
  };
}

export default PastorBlogController;
