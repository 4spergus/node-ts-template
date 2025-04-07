import {STATUS_CODES_ENUM} from "@/types";
import type {IRouter, Request, Response} from "express";
import {AddRouteHandler} from "../types";

const ROUTE = "/health-check" as string;

const get = (_req: Request, res: Response) => {
  res.json({status: STATUS_CODES_ENUM.OK});
};

const addRoute: AddRouteHandler = (app: IRouter) => {
  app.route(ROUTE).get(get);

  return app;
};

export {addRoute};
