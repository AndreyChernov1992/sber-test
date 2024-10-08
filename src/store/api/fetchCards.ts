import { ICardResults, ICardRequest } from '~/types/card';
import { endpoints } from './endpoints';
import axiosClient from './config/axiosClient';

export const fetchCards = async (values: ICardRequest): Promise<ICardResults> => {
  const { language, page } = values;

  const response = await axiosClient.get(endpoints.cards(language, page));

  return response.data;
};
