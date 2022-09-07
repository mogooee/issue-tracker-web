import { MilestoneItemTypes } from '@/components/Molecules/MilestoneItem';
import { atom } from 'recoil';

const InitMilestone: MilestoneItemTypes = {
  id: 0,
  title: '',
  description: '',
  dueDate: '',
  closed: false,
  openIssueCount: 0,
  closedIssueCount: 0,
};

export const ClickMilestoneState = atom<MilestoneItemTypes>({
  key: 'ClickMilestoneState',
  default: InitMilestone,
});
