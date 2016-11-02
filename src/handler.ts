import { NextFunction, Request, Response } from 'express';

export interface AsyncRequestHandler {
  (req: Request, res: Response, next: NextFunction): Promise<any>;
}

export interface AsyncErrorRequestHandler {
  (err: any, req: Request, res: Response, next: NextFunction): Promise<any>;
}
