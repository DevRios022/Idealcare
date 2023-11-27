import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.render('pages/pages');
};

export const dogs = (req: Request, res: Response) => {
    res.send('pages/dogs');
};

export const cats = (req: Request, res: Response) => {
    res.send('pages/cats');
};

export const fishes = (req: Request, res: Response) => {
    res.send('pages/fishes');
};
