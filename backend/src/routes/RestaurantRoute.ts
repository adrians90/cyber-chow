import express from "express";
import { param } from "express-validator";

const router = express.Router();

router.get(
  "/search/:city",
  param("city")
    .isString()
    .notEmpty()
    .withMessage("City parameter must be a valid string"),
  RestaurantController.searchRestaurant
);
