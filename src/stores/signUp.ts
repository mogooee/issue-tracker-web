import { atom } from 'recoil';

export interface SignUpFormErrorTypes {
  id: 'id' | 'password' | 'passwordVerification' | 'email' | 'nickname';
  state: boolean;
  errMsg: string;
}

export const SignUpFormErrorState = atom<SignUpFormErrorTypes[]>({
  key: 'SignUpFormErrorState',
  default: [
    { id: 'id', state: false, errMsg: '' },
    { id: 'password', state: false, errMsg: '' },
    { id: 'passwordVerification', state: false, errMsg: '' },
    { id: 'email', state: false, errMsg: '' },
    { id: 'nickname', state: false, errMsg: '' },
  ],
});

export interface SignUpFormTypes {
  id: string;
  password: string;
  email: string;
  nickname: string;
}

export const SignUpFormState = atom<SignUpFormTypes>({
  key: 'SignUpFormState',
  default: { id: '', password: '', email: '', nickname: '' },
});
