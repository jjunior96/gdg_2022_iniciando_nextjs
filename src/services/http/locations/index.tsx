import axios from 'axios';
import api from 'services/api';

import { LocationsProps, ReturnLocationsProps } from './types';

export const LocationsService = {
  getAll: async function (): Promise<LocationsProps[] | undefined> {
    try {
      const response = await api.get<ReturnLocationsProps>(`/location`);

      return response.data.results;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        throw new Error(`Status: ${err.response.status} - ${err.message}`);
      }
    }
  },
  getById: async function (id: number): Promise<LocationsProps | undefined> {
    try {
      const response = await api.get<LocationsProps>(`location/${id}`);

      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        throw new Error(`Status: ${err.response.status} - ${err.message}`);
      }
    }
  }
};
