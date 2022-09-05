import { useRecoilValue } from 'recoil';
import { LoginUserInfoState } from '@/stores/loginUserInfo';

import styled from 'styled-components';

import Icon from '@/components/Atoms/Icon';
import Button from '@/components/Atoms/Button';

import FilterBar from '@/components/Molecules/FilterBar';
import { FILTERBAR_INFO } from '@/components/Molecules/FilterBar/mocks';
import { FILTER_TABS_INFO } from '@/components/Molecules/Dropdown/mocks';
import NavLink from '@/components/Molecules/NavLink';

import Header from '@/components/Organisms/Header';
import IssueTable from '@/components/Organisms/IssueTable';
import { issueListData } from '@/components/Organisms/IssueTable/mocks';
import { COLORS } from '@/styles/theme';

const DivContainer = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'space-between' })};
  margin-bottom: 24px;
`;

const SubNav = styled.div`
  ${({ theme }) => theme.MIXIN.FLEX({ align: 'center', justify: 'center' })};

  button {
    margin-left: 16px;
  }
`;

const Issues = () => {
  const LoginUserInfoStateValue = useRecoilValue(LoginUserInfoState);
  const FILTER_TABS = FILTER_TABS_INFO;

  return (
    <div>
      <Header user={LoginUserInfoStateValue} />
      <DivContainer>
        <FilterBar {...FILTERBAR_INFO} />
        <SubNav>
          <NavLink
            navData={[
              { icon: <Icon icon="Tag" stroke={COLORS.TITLE_ACTIVE} />, title: '레이블 (3)', link: '/label' },
              { icon: <Icon icon="Milestone" fill={COLORS.TITLE_ACTIVE} />, title: '마일스톤 (2)', link: '/milestone' },
            ]}
            navLinkStyle="LINE"
          />
          <Button
            buttonStyle="STANDARD"
            label="이슈작성"
            size="SMALL"
            iconInfo={{ icon: 'Plus', stroke: COLORS.OFF_WHITE }}
          />
        </SubNav>
      </DivContainer>
      <IssueTable issueListData={issueListData} filterTabs={FILTER_TABS} />
    </div>
  );
};

export default Issues;
