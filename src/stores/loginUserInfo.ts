import { atom } from 'recoil';
import { UserTypes } from '@/types/issue';

export const LoginUserInfoState = atom<UserTypes>({
  key: 'LoginUserInfoState',
  default: {
    id: 0,
    email: '',
    nickname: '',
    profileImage: '',
  },
});
