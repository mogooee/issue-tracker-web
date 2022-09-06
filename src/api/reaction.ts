import { ReactionTypes } from '@/types/reaction';
import axios, { AxiosError } from 'axios';

export const getReactionData = async (): Promise<ReactionTypes[]> => {
  try {
    const { data } = await axios.get<ReactionTypes[]>('api/issues/comments/reactions/emojis');
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw err;
  }
};
