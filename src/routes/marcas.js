import { router } from "../index.js";
import * as carList from "../utils/carList.js";

export const routesBrands = () => {
  router.get("/maisModelos", async (req, res) => {
    const brandMore = await carList.maisModelos();

    return res.status(200).json(brandMore);
  });

  router.get("/menosModelos", async (req, res) => {
    const brandMinus = await carList.menosModelos();

    return res.status(200).json(brandMinus);
  });

  router.get("/listaMaisModelos/:quantity", async (req, res) => {
    const { quantity } = req.params;
    const listBrandsMore = await carList.listaMaisModelos(quantity);

    return res.status(200).json(listBrandsMore);
  });

  router.get("/listaMenosModelos/:quantity", async (req, res) => {
    const { quantity } = req.params;
    const listBrandsMinus = await carList.listaMenosModelos(quantity);

    return res.status(200).json(listBrandsMinus);
  });

  router.post("/listaModelos", async (req, res) => {
    const { nomeMarca } = req.body;
    const listModels = await carList.listaModelos(nomeMarca);

    return res.status(200).json(listModels);
  });

  return router;
};
