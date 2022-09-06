import { COLORS } from '@/styles/theme';
import * as S from '@/components/Molecules/Comment/index.styled';

import Icon from '@/components/Atoms/Icon';
import Button from '@/components/Atoms/Button';
import Label from '@/components/Atoms/Label';

import Dropdown from '@/components/Molecules/Dropdown';
import Table from '@/components/Molecules/Table';
import ReactionContainer from '@/components/Molecules/Comment/ReactionContainer';

import calcTimeForToday from '@/utils/calcForTimeToday';
import { CommentsTypes, ReactionResponseTypes } from '@/types/issue';
import { REACTIONS } from '@/components/Molecules/Dropdown/Panel/Reaction/mock';
import useFetchReaction from '@/hooks/useFetchReaction';

interface CommentTypes {
  issueId: number;
  isAuthor: boolean;
  comment: CommentsTypes;
}

interface ReactorsTypes {
  reactionId: number;
  memberId: number;
  nickname: string;
}

export interface UsedEmojisTypes {
  emoji: string;
  reactors: ReactorsTypes[];
}

export const definedUsedEmojis = (issueCommentReactionsResponse: ReactionResponseTypes[] | []) => {
  const usedEmojis: UsedEmojisTypes[] = [];

  issueCommentReactionsResponse.forEach(({ id: reactionId, emoji, issueCommentReactorResponse }) => {
    const { id: memberId, nickname } = issueCommentReactorResponse;

    const isExisted = usedEmojis.find((used) => used.emoji === emoji);

    if (isExisted) {
      isExisted.reactors.push({ reactionId, memberId, nickname });
    } else {
      const add: UsedEmojisTypes = { emoji, reactors: [{ reactionId, memberId, nickname }] };
      usedEmojis.push(add);
    }
  });

  return usedEmojis;
};

const Comment = ({ issueId, isAuthor, comment }: CommentTypes): JSX.Element => {
  const { reactions } = useFetchReaction();

  const { id: commentId, author, content, createdAt, issueCommentReactionsResponse } = comment;
  const hasReaction = issueCommentReactionsResponse.length > 0;
  const usedEmojis = definedUsedEmojis(issueCommentReactionsResponse);

  return (
    <Table
      header={
        <S.Comment>
          <S.CommentInfo>
            <span className="author">{author.nickname}</span>
            <span className="timeStamp">{calcTimeForToday(createdAt)}</span>
          </S.CommentInfo>
          <S.CommentTab>
            {isAuthor && (
              <>
                <Label
                  labelStyle="LIGHT"
                  title="작성자"
                  backgroundColorCode={COLORS.BACKGROUND}
                  lineColor={COLORS.LINE}
                  textColor="BLACK"
                />
                <Button
                  buttonStyle="NO_BORDER"
                  iconInfo={{
                    icon: 'Edit',
                    stroke: COLORS.LABEL,
                  }}
                  label="편집"
                  size="SMALL"
                />
              </>
            )}
            <Dropdown
              indicatorProps={{
                indicatorStyle: 'ICON',
                indicatorLabel: '',
                indicatorIcon: <Icon icon="Smile" stroke={COLORS.LABEL} />,
              }}
              type="Reaction"
              panelProps={{
                reactions: reactions!,
                usedEmojis,
                issueId,
                commentId,
              }}
            />
          </S.CommentTab>
        </S.Comment>
      }
      item={[
        <S.CommentContent>
          <span>{content}</span>
          {hasReaction && (
            <ReactionContainer reactions={reactions!} usedEmojis={usedEmojis} issueId={issueId} commentId={commentId} />
          )}
        </S.CommentContent>,
      ]}
    />
  );
};
export default Comment;
