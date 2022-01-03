/**
 * @description creates a new recipea via a POST request
 *
 * @param recipeaData Object. The data from the Create Recipea form
 * @returns response or error
 */

import axios from 'axios';
import config from './config';

const environment = config.environment;
const url = config[`${environment}Server`];

interface Recipea {
  title: string;
  description: string;
  link: string;
  ingredients: string[];
  steps: string[];
  passcode: string;
}

const createRecipea = async (recipeaData: Recipea) => {
  try {
    const response = await axios.post(`${url}/recipeas`, recipeaData);

    console.log(response);
    return response.data;
  } catch (err) {
    console.error('Error creating recipea', err);
    return err;
  }
};

export default createRecipea;
