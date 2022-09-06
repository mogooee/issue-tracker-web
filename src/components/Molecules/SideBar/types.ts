import { LabelTypes } from '@/stores/labelList';
import { UserTypes } from '@/components/Molecules/Dropdown/types';
import { MilestoneItemTypes } from '@/components/Molecules/MilestoneItem';

export interface ContentListTypes {
  assignee: UserTypes[];
  label: LabelTypes[];
  milestone: MilestoneItemTypes[];
}

export interface ContentItemTypes {
  content: UserTypes[] | LabelTypes[] | MilestoneItemTypes[];
  handleOnChange: (target: HTMLInputElement) => void;
}

export interface SideBarItemType {
  id: keyof ContentListTypes;
  dropdownTitle: string;
  dropdownListTitle: string;
  dropdownList: UserTypes[] | LabelTypes[] | MilestoneItemTypes[];
  dropdownType: 'checkbox' | 'radio';
}

export interface SideBarTypes {
  sideBarList: SideBarItemType[];
  content: ContentListTypes;
}

// Type Guard
export const isAssignTypes = (props: UserTypes | LabelTypes | MilestoneItemTypes): props is UserTypes =>
  (props as UserTypes).nickname !== undefined;

export const isLabelTypes = (props: UserTypes | LabelTypes | MilestoneItemTypes): props is LabelTypes =>
  (props as LabelTypes).backgroundColorCode !== undefined;

export const isMilestoneTypes = (props: UserTypes | LabelTypes | MilestoneItemTypes): props is MilestoneItemTypes =>
  (props as MilestoneItemTypes).openIssueCount !== undefined &&
  (props as MilestoneItemTypes).closedIssueCount !== undefined;
