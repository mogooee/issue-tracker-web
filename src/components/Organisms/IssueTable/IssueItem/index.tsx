import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import CheckBox from '@/components/Atoms/CheckBox';
import Icon from '@/components/Atoms/Icon';
import Label, { LabelTypes } from '@/components/Atoms/Label';
import UserImage, { UserImageTypes } from '@/components/Atoms/UserImage';

import * as S from '@/components/Organisms/IssueTable/IssueItem/index.styles';

import { CheckState } from '@/stores/checkBox';
import calcTimeForToday from '@/utils/calcForTimeToday';
import { COLORS } from '@/styles/theme';

export interface IssueInfoTypes {
  id: number;
  title: string;
  writer: UserImageTypes;
  createdAt: string;
  labels: LabelTypes[];
  milestone: string;
  assignees: UserImageTypes[];
}

interface IssueItemTypes {
  issueInfo: IssueInfoTypes;
}

const IssueItem = ({ issueInfo }: IssueItemTypes) => {
  const { id, title, labels, writer, assignees, createdAt, milestone } = issueInfo;
  const checkState = useRecoilValue(CheckState);

  return (
    <S.Template>
      <CheckBox id={id} type="child" checked={checkState.child[id]} />
      <div>
        <S.IssueTitle>
          <Icon fill={COLORS.PRIMARY.LIGHT_BLUE} icon="AlertCircle" stroke={COLORS.PRIMARY.BLUE} />
          <Link className="title" to={`/issues/${id}`}>
            {title}
          </Link>
          {labels.map(({ title: labelTitle, backgroundColor, textColor }) => (
            <Label key={labelTitle} backgroundColor={backgroundColor} textColor={textColor} title={labelTitle} />
          ))}
        </S.IssueTitle>
        <S.IssueContent>
          <span>{`#${id}`}</span>
          <span className="timeStamp">{`이 이슈가 ${calcTimeForToday(createdAt)}, ${
            writer.nickname
          }님에 의해 작성되었습니다`}</span>
          <Link className="milestone" to={`/milestone/${id}`}>
            <Icon icon="Milestone" fill={COLORS.SECONDORY.PURPLE} />
            {milestone}
          </Link>
        </S.IssueContent>
      </div>
      <S.Assignee>
        {assignees.map(({ id: assigneeId, nickname, profileImage }) => (
          <UserImage key={assigneeId} id={assigneeId} nickname={nickname} imgSize="SMALL" profileImage={profileImage} />
        ))}
      </S.Assignee>
    </S.Template>
  );
};

export default IssueItem;
