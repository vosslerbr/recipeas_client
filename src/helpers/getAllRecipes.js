import axios from 'axios';
import config from '../../config.json';

const environment = config.environment;
const url = config[`${environment}Server`];

const getAllRecipes = async () => {
  try {
    const records = await axios.get(`${url}/recipeas`);

    return records.data;
  } catch (err) {
    console.error(err);
  }
};

export default getAllRecipes;
