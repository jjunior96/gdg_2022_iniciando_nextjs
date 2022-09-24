import axios from 'axios';
import api from 'services/api';

import { CharactersProps, ReturnCharactersProps } from './types';

export const CharactersService = {
  getAll: async function (): Promise<CharactersProps[] | undefined> {
    try {
      const response = await api.get<ReturnCharactersProps>(`/character`);

      return response.data.results;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        throw new Error(`Status: ${err.response.status} - ${err.message}`);
      }
    }
  },
  getByName: async function (
    name: string
  ): Promise<CharactersProps[] | undefined> {
    try {
      const response = await api.get<ReturnCharactersProps>(
        `character/?name=${name}`
      );

      return response.data.results;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        throw new Error(`Status: ${err.response.status} - ${err.message}`);
      }
    }
  }
};
