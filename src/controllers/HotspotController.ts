
import { Request, Response } from "express";

class HotspotController {

  static all = async (req: Request, res: Response) => {
    //Send the users object
    res.send('all');
  };

  static getOneById = async (req: Request, res: Response) => {
    //Send the users object
    res.send('getOneById');
  };

  static create = async (req: Request, res: Response) => {
    //Send the users object
    res.send('create');
  };

  static update = async (req: Request, res: Response) => {
    //Send the users object
    res.send('update');
  };

  static delete = async (req: Request, res: Response) => {
    //Send the users object
    res.send('delete');
  };
};

export default HotspotController;
