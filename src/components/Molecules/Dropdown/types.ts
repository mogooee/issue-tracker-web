import React from 'react';
import * as panels from '@/components/Molecules/Dropdown/Panel/panels';
import { UsedEmojisTypes } from '@/components/Molecules/Comment';
import { ReactionTypes } from '@/types/reaction';

// Indicator Types
export interface DropdownIndicatorTypes {
  indicatorStyle: 'STANDARD' | 'FILTERBAR' | 'ICON';
  indicatorLabel: string;
  isActive?: boolean;
  indicatorIcon?: React.ReactNode;
}

// ListPanel Types
export interface LabelTypes {
  id: number | string;
  title: string;
  backgroundColor: string;
  titleColor?: 'black' | 'white';
}

export interface UserTypes {
  id: number | string;
  loginId: string;
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

export interface ListPanelTypes {
  panelTitle: string;
  panelType: 'checkbox' | 'radio';
  panelList: LabelTypes[] | UserTypes[] | IssueTypes[];
  unusedOption?: UNUSED_OPTIONS_TYPES;
}

// ListPanel/Label Types
export interface ColorLabelTypes {
  backgroundColor: string;
}

export interface UserImgLabelTypes {
  profileImageUrl: string;
  loginId: string;
}

// ReactionPanel Types

export interface ReactionPanelTypes {
  reactions: ReactionTypes[];
  usedEmojis: UsedEmojisTypes[];
  issueId: number;
  commentId: number;
}

export type PanelType = keyof typeof panels;
export interface DropdownPanelTypes {
  type: PanelType;
  prop: ReactionPanelTypes | ListPanelTypes;
}

// Dropdown Types
export interface DropdownTypes<Panel> {
  type: PanelType;
  indicatorProps: DropdownIndicatorTypes;
  panelProps: Panel;
  isActive?: boolean;
}
