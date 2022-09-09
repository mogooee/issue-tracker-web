import { useRecoilValue } from 'recoil';
import { LoginUserInfoState } from '@/stores/loginUserInfo';

import * as S from '@/pages/Private/NewIssue/index.styles';
import Button from '@/components/Atoms/Button';
import Input from '@/components/Atoms/Input';
import UserImage from '@/components/Atoms/UserImage';
import SideBar from '@/components/Molecules/SideBar';
import TextAreaEditer from '@/components/Molecules/TextAreaEditer';
import { DEFAULT_CONTENT_LIST, SIDEBAR_PROPS } from '@/components/Molecules/SideBar/mock';

import useInput from '@/hooks/useInput';
import { NEW_ISSUE_BUTTON_INFO } from '@/components/Atoms/Button/options';

const NewIssue = () => {
  const LoginUserInfoStateValue = useRecoilValue(LoginUserInfoState);
  const { isActive, isTyping, onChangeInput, onClickInput, onBlurInput } = useInput();

  return (
    <S.NewIssue>
      <h1>새로운 이슈 작성</h1>
      <S.Divider />
      <S.NewIssueEditer>
        <UserImage imgSize="MEDIUM" {...LoginUserInfoStateValue} />
        <S.NewIssueForm isActive={isActive}>
          <Input
            inputMaxLength={255}
            inputPlaceholder="제목"
            inputSize="MEDIUM"
            inputType="text"
            isActive={isActive}
            isTyping={isTyping}
            onChange={onChangeInput}
            onClick={onClickInput}
            onBlur={onBlurInput}
          />
          <TextAreaEditer />
        </S.NewIssueForm>
        <SideBar content={DEFAULT_CONTENT_LIST} sideBarList={SIDEBAR_PROPS} />
      </S.NewIssueEditer>
      <S.Divider />
      <S.NewIssueButtons>
        <Button {...NEW_ISSUE_BUTTON_INFO.CANCEL} />
        <Button {...NEW_ISSUE_BUTTON_INFO.COMPLETE} />
      </S.NewIssueButtons>
    </S.NewIssue>
  );
};

export default NewIssue;
