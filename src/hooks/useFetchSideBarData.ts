import { getMemberList } from '@/api/members';
import { useQuery } from '@tanstack/react-query';

import { getLabelData } from '@/api/labelList';
import { getMilestoneData } from '@/api/milestone';

const useFetchSideBarData = () => {
  const { data: memberData } = useQuery(['members'], getMemberList);
  const { data: labelData } = useQuery(['labels'], getLabelData);
  const { data: milestoneData } = useQuery(['milestones'], getMilestoneData);

  return { memberData, labelData, milestoneData };
};

export default useFetchSideBarData;
