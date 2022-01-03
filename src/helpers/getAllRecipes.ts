/**
 * @description Fetches ALL recipeas via a GET request
 *
 * @returns response.data or error
 */

import axios from 'axios';
import config from './config';

const environment = config.environment;
const url = config[`${environment}Server`];

const getAllRecipes = async () => {
  try {
    const records: any = await axios.get(`${url}/recipeas`);

    const data: any[] = records.data;

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getAllRecipes;
