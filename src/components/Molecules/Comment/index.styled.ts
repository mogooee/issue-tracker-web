import styled from 'styled-components';
import { Label as StyledLabel } from '@/components/Atoms/Label/index.styles';
import { ReactionPanel } from '@/components/Molecules/Dropdown/Panel/Reaction/index.styled';

export const Comment = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'space-between' })};
  ${({ theme }) => theme.FONTSTYLES.TEXT_SMALL}
  height:28px;
`;

export const CommentInfo = styled.div`
  span + span {
    margin-left: 8px;
  }

  .author {
    color: ${({ theme }) => theme.COLORS.TITLE_ACTIVE};
  }

  .timeStamp {
    color: ${({ theme }) => theme.COLORS.LABEL};
  }
`;

export const CommentTab = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'flex-start' })};
  gap: 0px 24px;

  &,
  button,
  ${StyledLabel} span {
    color: ${({ theme }) => theme.COLORS.LABEL};
  }

  button {
    height: fit-content;
  }

  ${ReactionPanel} {
    top: 0px;
    right: 25px;
  }
`;
export const CommentContent = styled.div`
  color: ${({ theme }) => theme.COLORS.TITLE_ACTIVE};

  ${ReactionPanel} {
    top: -58px;
    left: 0;
  }
`;
