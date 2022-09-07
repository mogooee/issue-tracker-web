import { COLORS } from '@/styles/theme';
import { atom } from 'recoil';

type EditStateType = 'ADD' | 'EDIT' | 'DELETE' | null;
export interface LabelTypes {
  id: number;
  title: string;
  backgroundColorCode: string;
  description: string;
  textColor: 'WHITE' | 'BLACK';
}

interface LabelStateTypes {
  type: EditStateType;
  label: LabelTypes;
}

const initLabelState: LabelTypes = {
  id: 0,
  title: '',
  backgroundColorCode: COLORS.INPUT_BACKGROUND,
  description: '',
  textColor: 'BLACK',
};

export const LabelState = atom<LabelStateTypes>({
  key: 'LabelState',
  default: { type: null, label: initLabelState },
});
