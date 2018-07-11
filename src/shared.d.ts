
import { Request, Response } from "express";
import { Router } from "express-serve-static-core";
import { NextFunction } from "connect";

export interface IMap<T> {
    [index: string]: T;
}

export interface IControllerConstructor {
    new(request: Request, response: Response, next: NextFunction): IController;
    setupRoutes(router: Router): void;
}

export interface IController {

}