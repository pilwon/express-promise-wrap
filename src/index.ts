import { ErrorRequestHandler, NextFunction, Request, RequestHandler, Response } from 'express';

import { AsyncErrorRequestHandler, AsyncRequestHandler } from './handler';

export function wrap(fn: AsyncRequestHandler | AsyncErrorRequestHandler): RequestHandler | ErrorRequestHandler {
  if (fn.length < 4) {
    return (req: Request, res: Response, next: NextFunction): any => {
      return (<AsyncRequestHandler> fn)(req, res, next).catch(next);
    };
  } else {
    return (err: any, req: Request, res: Response, next: NextFunction): any => {
      return (<AsyncErrorRequestHandler> fn)(err, req, res, next).catch(next);
    };
  }
}
