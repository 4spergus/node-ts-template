import express, {IRouter} from "express";
import * as healthCheck from "./health-check";
import {AddRouteHandler} from "./types";

/**
 * New routes should be initialized in a separate folder as controllers,
 * which may include any of RESTApi handlers.
 * Each route should be wrapped into AddRouterHandler and added to ROUTES array
 */
const ROUTES: Array<AddRouteHandler> = [healthCheck.addRoute];

export const ROUTER = ROUTES.reduce((acc: IRouter, addRoute: AddRouteHandler) => addRoute(acc), express.Router());
