import type {IRouter} from "express";

export type AddRouteHandler = (app: IRouter) => IRouter;
