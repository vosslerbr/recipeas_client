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

const getRecipea = async (id: string) => {
  try {
    const record: any = await axios.get(`${url}/recipeas/${id}`);

    const data: any = record.data;

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getRecipea;
