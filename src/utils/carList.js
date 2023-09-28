import { promises as fsPromises } from "fs";

const lerCarList = async () => {
  try {
    const data = await fsPromises.readFile("./json/car-list.json", "utf-8");
    const jsonData = JSON.parse(data);

    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export const maisModelos = async () => {
  const carListData = await lerCarList();
  const countBrands = {};

  carListData.forEach((car) => {
    const { brand, models } = car;
    countBrands[brand] = models.length;
  });

  const maxQuantity = Math.max(...Object.values(countBrands));

  const brandsWithMaxModels = Object.keys(countBrands).filter(
    (brand) => countBrands[brand] === maxQuantity
  );

  if (brandsWithMaxModels.length === 1) {
    return brandsWithMaxModels[0];
  } else {
    return brandsWithMaxModels;
  }
};

export const menosModelos = async () => {
  const carListData = await lerCarList();
  const countBrands = {};

  carListData.forEach((car) => {
    const { brand, models } = car;
    countBrands[brand] = models.length;
  });

  const minQuantity = Math.min(...Object.values(countBrands));

  const brandsWithMinModels = Object.keys(countBrands).filter(
    (brand) => countBrands[brand] === minQuantity
  );

  if (brandsWithMinModels.length === 1) {
    return brandsWithMinModels[0];
  } else {
    return brandsWithMinModels;
  }
};

export const listaMaisModelos = async (quantity) => {
  const carListData = await lerCarList();
  const countBrands = {};

  carListData.forEach((car) => {
    const { brand, models } = car;
    countBrands[brand] = models.length;
  });

  const brandsWithCounter = Object.keys(countBrands).map((brand) => ({
    Brand: brand,
    Count: countBrands[brand],
  }));

  brandsWithCounter.sort((a, b) => {
    if (b.Count === a.Count) {
      return a.Brand.localeCompare(b.Brand);
    }
    return b.Count - a.Count;
  });

  return brandsWithCounter
    .slice(0, quantity)
    .map((car) => `${car.Brand} - ${car.Count}`);
};

export const listaMenosModelos = async (quantity) => {
  const carListData = await lerCarList();
  const countBrands = {};

  carListData.forEach((car) => {
    const { brand, models } = car;
    countBrands[brand] = models.length;
  });

  const brandsWithCounter = Object.keys(countBrands).map((brand) => ({
    Brand: brand,
    Count: countBrands[brand],
  }));

  brandsWithCounter.sort((a, b) => {
    if (a.Count === b.Count) {
      return a.Brand.localeCompare(b.Brand);
    }

    return a.Count - b.Count;
  });

  return brandsWithCounter
    .slice(0, quantity)
    .map((car) => `${car.Brand} - ${car.Count}`);
};

export const listaModelos = async (marca) => {
  const carListData = await lerCarList();
  const brandLowerCase = marca.toLowerCase();

  const brandFind = carListData.find(
    (car) => car.brand.toLowerCase() === brandLowerCase
  );

  if (brandFind) {
    return brandFind.models;
  } else {
    return [];
  }
};
