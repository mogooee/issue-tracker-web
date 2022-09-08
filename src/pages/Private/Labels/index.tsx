import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import useFetchLabel from '@/hooks/useFetchLabel';

import * as S from '@/pages/Private/Labels/index.styled';
import { COLORS } from '@/styles/theme';

import Button from '@/components/Atoms/Button';
import LabelEditForm from '@/components/Molecules/LabelEditForm';
import NavLink from '@/components/Molecules/NavLink';
import Header from '@/components/Organisms/Header';
import { FallbackLabelTable } from '@/components/Organisms/LabelTable';

import { LoginUserInfoState } from '@/stores/loginUserInfo';
import { labelMilestone } from '@/components/Molecules/NavLink/options';
import { LabelState } from '@/stores/label';
import { BUTTON_PROPS } from '@/components/Atoms/Button/options';

const Labels = () => {
  const { addLabel } = useFetchLabel();

  const LoginUserInfoStateValue = useRecoilValue(LoginUserInfoState);
  const [labelState, setLabelState] = useRecoilState(LabelState);

  const resetLabelState = useResetRecoilState(LabelState);

  const handleCloseButtonClick = () => {
    resetLabelState();
  };

  const handleAddButtonClick = () => {
    resetLabelState();
    setLabelState((prev) => ({ ...prev, type: 'ADD' }));
  };

  const handleCompleteButtonClick = () => {
    addLabel(labelState.label);
    resetLabelState();
  };

  return (
    <S.Labels>
      <Header user={LoginUserInfoStateValue} />
      <S.SubNav>
        <NavLink navData={labelMilestone} navLinkStyle="LINE" />
        {labelState.type === 'ADD' ? (
          <Button {...BUTTON_PROPS.CLOSE} handleOnClick={handleCloseButtonClick} />
        ) : (
          <Button {...BUTTON_PROPS.ADD} handleOnClick={handleAddButtonClick} />
        )}
      </S.SubNav>
      {labelState.type === 'ADD' && <LabelEditForm type="ADD" onClickCompleteButton={handleCompleteButtonClick} />}
      <FallbackLabelTable />
    </S.Labels>
  );
};
export default Labels;
