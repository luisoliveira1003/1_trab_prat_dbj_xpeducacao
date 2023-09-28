import { router } from "../index.js";
import * as carList from "../utils/carList.js";

export const routesBrands = () => {
  router.get("/maisModelos", async (req, res, next) => {
    try {
      const brandMore = await carList.maisModelos();

      return res.status(200).json(brandMore);
    } catch (error) {
      next(error);
    }
  });

  router.get("/menosModelos", async (req, res, next) => {
    try {
      const brandMinus = await carList.menosModelos();

      return res.status(200).json(brandMinus);
    } catch (error) {
      next(error);
    }
  });

  router.get("/listaMaisModelos/:quantity", async (req, res, next) => {
    try {
      const { quantity } = req.params;
      const listBrandsMore = await carList.listaMaisModelos(quantity);

      return res.status(200).json(listBrandsMore);
    } catch (error) {
      next(error);
    }
  });

  router.get("/listaMenosModelos/:quantity", async (req, res, next) => {
    try {
      const { quantity } = req.params;
      const listBrandsMinus = await carList.listaMenosModelos(quantity);

      return res.status(200).json(listBrandsMinus);
    } catch (error) {
      next(error);
    }
  });

  router.post("/listaModelos", async (req, res, next) => {
    try {
      const { nomeMarca } = req.body;
      const listModels = await carList.listaModelos(nomeMarca);

      return res.status(200).json(listModels);
    } catch (error) {
      next(error);
    }
  });

  router.use((error, req, res, next) => {
    console.log(error);
    return res.status(400).send({ error: error.message });
  });

  return router;
};
