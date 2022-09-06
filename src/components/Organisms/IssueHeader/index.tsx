/* eslint-disable no-nested-ternary */
import { useState } from 'react';

import { COLORS } from '@/styles/theme';
import * as S from '@/components/Organisms/IssueHeader/index.styled';

import Button from '@/components/Atoms/Button';
import Icon from '@/components/Atoms/Icon';
import Input from '@/components/Atoms/Input';
import Label from '@/components/Atoms/Label';

import useInput from '@/hooks/useInput';
import calcTimeForToday from '@/utils/calcForTimeToday';
import { ContentTypes } from '@/types/issue';

type IssueHeaderTypes = Pick<ContentTypes, 'id' | 'title' | 'closed' | 'createdAt' | 'author'> & {
  commentNum: number;
};

const IssueHeader = ({ id, closed, title, createdAt, author, commentNum }: IssueHeaderTypes) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { isActive, onChangeInput, onClickInput, onBlurInput } = useInput();

  return (
    <>
      <S.HeaderInline>
        <S.Title>
          {isEdit ? (
            <Input
              inputMaxLength={12}
              inputPlaceholder="제목"
              inputSize="SMALL"
              inputType="text"
              isActive={isActive}
              isTyping
              inputValue={title}
              onBlur={onBlurInput}
              onChange={onChangeInput}
              onClick={onClickInput}
            />
          ) : (
            <>
              <h1>{title}</h1>
              <span className="issueNumber">{`#${id}`}</span>
            </>
          )}
        </S.Title>
        <S.ButtonTab>
          <Button
            buttonStyle="SECONDARY"
            iconInfo={{
              icon: isEdit ? 'XSquare' : 'Edit',
            }}
            label={isEdit ? '편집 취소' : '제목 편집'}
            size="SMALL"
            handleOnClick={() => {
              if (!isEdit) {
                setIsEdit(true);
              } else {
                setIsEdit(false);
              }
            }}
          />
          <Button
            buttonStyle={isEdit ? 'STANDARD' : 'SECONDARY'}
            iconInfo={{
              icon: isEdit ? 'Edit' : !closed ? 'Archive' : 'AlertCircle',
              stroke: isEdit ? COLORS.OFF_WHITE : COLORS.PRIMARY.BLUE,
            }}
            label={isEdit ? '편집 완료' : !closed ? '이슈 닫기' : '다시 열기'}
            size="SMALL"
            handleOnClick={() => {
              if (isEdit) {
                // 이슈 제목 수정 API
                setIsEdit(false);
              }
              if (!closed) {
                // 이슈 닫기 API
              } else {
                // 이슈 열기 API
              }
            }}
          />
        </S.ButtonTab>
      </S.HeaderInline>
      <S.Info closed={closed}>
        <Label
          icon={<Icon icon="AlertCircle" stroke={!closed ? COLORS.PRIMARY.BLUE : COLORS.SECONDORY.PURPLE} />}
          labelStyle="LIGHT"
          backgroundColorCode={!closed ? COLORS.PRIMARY.LIGHT_BLUE : COLORS.SECONDORY.LIGHT_PURPLE}
          lineColor={!closed ? COLORS.PRIMARY.BLUE : COLORS.SECONDORY.PURPLE}
          title={!closed ? '열린 이슈' : '닫힌 이슈'}
        />
        <span>{`이 이슈가 ${calcTimeForToday(createdAt)}에 ${author.nickname}님에 의해 열렸습니다.`}</span>
        <span className="splitLine">∙</span>
        <span>{`코멘트 ${commentNum}개`}</span>
      </S.Info>
    </>
  );
};

export default IssueHeader;
