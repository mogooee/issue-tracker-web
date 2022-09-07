export type ReactionNameType =
  | 'THUMBS_UP'
  | 'THUMBS_DOWN'
  | 'LAUGH'
  | 'PARTY_POPPER'
  | 'CONFUSED'
  | 'HEART'
  | 'ROCKET'
  | 'EYES';

export interface ReactionTypes {
  name: ReactionNameType;
  unicode: string;
}
