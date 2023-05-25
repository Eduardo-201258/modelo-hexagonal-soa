import { Router } from "express";

import { productController } from "./dependencies";

export const productsRouter = Router();

productsRouter.post(
  "/products",
  productController.crearProduct.bind(productController)
);

// productsRouter.post(
//   "/nuevo/",
//   productControllers..bind(productControllers)
// );`

productsRouter.get(
  "/products",
  productController.obtenerProduct.bind(productController)
);

// export { productsRouter };
