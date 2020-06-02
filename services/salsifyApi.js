import axios from "axios";

const URL_PATH =
  "https://app.salsify.com/catalogs/api/catalogs/cea4e749-855a-4b54-adc5-6e437fbde1da/products";

export const salsifyApi = axios.create({
  baseURL: URL_PATH,
});
