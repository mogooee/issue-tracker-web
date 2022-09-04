import { LabelTypes } from '@/stores/labelList';
import { MilestoneItemTypes } from '../MilestoneItem';

// Indicator Types
export interface DropdownIndicatorTypes {
  indicatorStyle: 'STANDARD' | 'FILTERBAR';
  indicatorLabel: string;
  isActive?: boolean;
}

// Panel Types
export interface UserTypes {
  id: number | string;
  email: string;
  nickname: string;
  profileImageUrl: string;
}

export interface IssueTypes {
  id: number;
  dataId: string;
  title: string;
}

export interface UNUSED_OPTIONS_TYPES {
  dataId: string;
  title: string;
}

export interface DropdownPanelsTypes {
  panelTitle: string;
  panelType: 'checkbox' | 'radio';
  panelList: LabelTypes[] | UserTypes[] | IssueTypes[] | MilestoneItemTypes[];
  unusedOption?: UNUSED_OPTIONS_TYPES;
}

// Panel/Label Types
export interface ColorLabelTypes {
  backgroundColor: string;
}

export interface UserImgLabelTypes {
  profileImageUrl: string;
  loginId: string;
}

// Dropdown Types
export type DropdownTypes = DropdownIndicatorTypes & DropdownPanelsTypes;
