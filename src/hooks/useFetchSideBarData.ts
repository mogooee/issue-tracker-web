import { useQuery } from '@tanstack/react-query';

import { getMemberData } from '@/api/login_logout';
import { getLabelData } from '@/api/labelList';
import { getMilestoneData } from '@/api/milestone';

const useFetchSideBarData = () => {
  const { data: memberData } = useQuery(['members'], getMemberData);
  const { data: labelData } = useQuery(['labels'], getLabelData);
  const { data: milestoneData } = useQuery(['milestones'], getMilestoneData);

  return { memberData, labelData, milestoneData };
};

export default useFetchSideBarData;
