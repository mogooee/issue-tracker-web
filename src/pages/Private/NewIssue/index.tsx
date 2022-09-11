import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LoginUserInfoState } from '@/stores/loginUserInfo';
import { NewIssueFormState } from '@/stores/newIssue';

import * as S from '@/pages/Private/NewIssue/index.styles';
import Button from '@/components/Atoms/Button';
import Input from '@/components/Atoms/Input';
import UserImage from '@/components/Atoms/UserImage';
import SideBar from '@/components/Molecules/SideBar';
import TextAreaEditer from '@/components/Molecules/TextAreaEditer';
import { DEFAULT_CONTENT_LIST, SIDEBAR_PROPS } from '@/components/Molecules/SideBar/mock';

import useInput from '@/hooks/useInput';
import { NEW_ISSUE_BUTTON_INFO } from '@/components/Atoms/Button/options';
import { DEFAULT_TEXTAREA_MAX_LENGTH } from '@/components/Molecules/TextAreaEditer/constants';

import Modal, { ModalState } from '@/components/Modal';
import CancelNewIssueModal from '@/components/Modal/CancelNewIssue';

const NewIssue = () => {
  const LoginUserInfoStateValue = useRecoilValue(LoginUserInfoState);
  const [isOpenModal, setIsOpenModal] = useRecoilState(ModalState);
  const [newIssueFormState, setNewIssueFormState] = useRecoilState(NewIssueFormState);

  const { isActive, isTyping, onChangeInput, onClickInput, onBlurInput } = useInput();

  const OnClickCancelButton = () => setIsOpenModal(true);

  const isDisabeldCreateIssueButton = () => newIssueFormState.title === '';

  const updateTitleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    onChangeInput(event);
    setNewIssueFormState({ ...newIssueFormState, title: target.value });
  };

  const updateCommentStateHandler = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;

    if (!value) return setNewIssueFormState({ ...newIssueFormState, comment: '' });
    if (Number(value) >= DEFAULT_TEXTAREA_MAX_LENGTH) {
      // eslint-disable-next-line no-param-reassign
      event.currentTarget.value = value.slice(0, DEFAULT_TEXTAREA_MAX_LENGTH);
    }
    return setNewIssueFormState({ ...newIssueFormState, comment: value });
  };

  return (
    <>
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
              onChange={updateTitleState}
              onClick={onClickInput}
              onBlur={onBlurInput}
            />
            <TextAreaEditer textAreaValue={newIssueFormState.comment} handleOnChange={updateCommentStateHandler} />
          </S.NewIssueForm>
          <SideBar content={DEFAULT_CONTENT_LIST} sideBarList={SIDEBAR_PROPS} />
        </S.NewIssueEditer>
        <S.Divider />
        <S.NewIssueButtons>
          <Button {...NEW_ISSUE_BUTTON_INFO.CANCEL} handleOnClick={OnClickCancelButton} />
          <Button {...NEW_ISSUE_BUTTON_INFO.COMPLETE} disabled={isDisabeldCreateIssueButton()} />
        </S.NewIssueButtons>
      </S.NewIssue>
      {isOpenModal && (
        <Modal>
          <CancelNewIssueModal />
        </Modal>
      )}
    </>
  );
};

export default NewIssue;
