import { useRecoilState, useSetRecoilState } from 'recoil';
import { LoginUserInfoState } from '@/stores/loginUserInfo';
import { getUserInfo, silentRefresh } from '@/api/login_logout';
import { MemeberResponseTypes } from '@/api/signUp';
import OAuthState from '@/stores/auth';
import useOnceQuery from '@/hooks/useOnceQuery';

const useLogin = () => {
  const [loginUserInfo, setLoginUserInfo] = useRecoilState(LoginUserInfoState);
  const setIsOAuth = useSetRecoilState(OAuthState);

  const saveAuthLoginState = (userInfo: MemeberResponseTypes) => setLoginUserInfo(userInfo);

  const setSuccessLoginState = () => {
    setIsOAuth(true);
    localStorage.setItem('Authentication', 'true');
  };

  const onSuccessLogin = async () => {
    setSuccessLoginState();
    const userInfo = await getUserInfo();
    saveAuthLoginState(userInfo);
  };

  const useSilentLogin = () => {
    useOnceQuery(['silentLogin'], silentRefresh, {
      enabled: !!localStorage.getItem('Authentication'),
      onSuccess: () => {
        onSuccessLogin();
      },
      onError: () => {
        localStorage.removeItem('Authentication');
      },
    });
  };

  return { loginUserInfo, saveAuthLoginState, setSuccessLoginState, setLoginUserInfo, useSilentLogin, onSuccessLogin };
};

export default useLogin;
