import {API_VERSION_ENUM, STATUS_CODES_ENUM} from "@/types";
import express from "express";
import request from "supertest";
import {addRoute} from "../controller";

describe("/health-check", () => {
  const app = express();
  const route = addRoute(express.Router());
  app.use(API_VERSION_ENUM.V1, route);

  describe("GET", () => {
    it("should respond with a success message", async () => {
      const response = await request(app).get("/v1/health-check").send();

      expect(response.status).toBe(200);
      expect(response.body).toEqual({status: STATUS_CODES_ENUM.OK});
    });
  });
});
