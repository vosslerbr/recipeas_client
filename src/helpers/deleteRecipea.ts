/**
 * @description Fetches A SINGLE recipea via a GET request
 *
 * @param id String. The MongoDB id for a record
 * @returns response.data or error
 */

import axios from 'axios';
import config from './config';

const environment = config.environment;
const url = config[`${environment}Server`];

const deleteRecipea = async (id: string, data: any) => {
  try {
    const response: any = await axios.delete(`${url}/recipeas/${id}`, { data: data });

    return response;
  } catch (err) {
    console.error(err);
  }
};

export default deleteRecipea;
