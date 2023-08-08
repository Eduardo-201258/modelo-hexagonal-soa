import { Router } from "express";

import { productController } from "./dependencies";

export const productsRouter = Router();

productsRouter.post(
  "/products",
  productController.crearProduct.bind(productController)
);

productsRouter.get(
  "/products",
  productController.obtenerProduct.bind(productController)
);

productsRouter.get(
  "/:productId",
  productController.obtenerProductId.bind(productController)
);