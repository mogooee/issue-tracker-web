import { useQuery } from '@tanstack/react-query';
import { ReactionTypes } from '@/types/reaction';
import { getReactionData } from '@/api/reaction';

const useFetchReaction = () => {
  const { data: reactions } = useQuery<ReactionTypes[]>(['reactions'], getReactionData);

  return {
    reactions,
  };
};

export default useFetchReaction;
