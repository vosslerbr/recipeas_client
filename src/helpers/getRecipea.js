import axios from 'axios';
import config from '../../config.json';

const environment = config.environment;
const url = config[`${environment}Server`];

const getAllRecipes = async (id) => {
  try {
    const record = await axios.get(`${url}/recipeas/${id}`);

    return record.data;
  } catch (err) {
    console.error(err);
  }
};

export default getAllRecipes;
