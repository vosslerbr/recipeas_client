/**
 * @description Deletes a SINGLE recipea via a DELETE request
 *
 * @param id String. The MongoDB id for a record
 * @param data Object. Just the passcode required for this action
 * @returns response
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
