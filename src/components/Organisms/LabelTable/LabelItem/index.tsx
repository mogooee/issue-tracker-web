import Button from '@/components/Atoms/Button';
import Label from '@/components/Atoms/Label';
import * as S from '@/components/Organisms/LabelTable/LabelItem/index.styled';
import { COLORS } from '@/styles/theme';
import { LabelState } from '@/stores/label';
import { LabelTypes } from '@/types/issue';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { ModalState } from '@/components/Modal';

const LabelItem = ({ id, title, backgroundColorCode, description, textColor }: LabelTypes) => {
  const navigate = useNavigate();
  const setLabelState = useSetRecoilState(LabelState);
  const setIsModal = useSetRecoilState(ModalState);

  const handleEditButtonClick = (props: LabelTypes) => {
    setLabelState({ type: 'EDIT', label: props });
  };
  const handleDeleteButtonClick = (deletedLabelId: number) => {
    setLabelState((prev) => ({ type: 'DELETE', label: { ...prev.label, id: deletedLabelId } }));
    setIsModal(true);
  };
  const handleLabelClick = (filterdLabelTitle: string) => {
    navigate(`/issues?q=label%3A"${filterdLabelTitle}"`);
  };

  return (
    <S.LabelItem>
      <Label
        title={title}
        backgroundColorCode={backgroundColorCode}
        textColor={textColor}
        onClick={() => handleLabelClick(title)}
      />
      <S.Description>{description}</S.Description>
      <S.EditButton>
        <Button
          buttonStyle="NO_BORDER"
          iconInfo={{
            icon: 'Edit',
            stroke: COLORS.LABEL,
          }}
          label="편집"
          size="SMALL"
          handleOnClick={() => handleEditButtonClick({ id, title, backgroundColorCode, description, textColor })}
        />
        <Button
          buttonStyle="NO_BORDER"
          iconInfo={{
            icon: 'Trash',
            stroke: COLORS.ERROR.RED,
          }}
          label="삭제"
          size="SMALL"
          handleOnClick={() => handleDeleteButtonClick(id)}
        />
      </S.EditButton>
    </S.LabelItem>
  );
};

export default LabelItem;
