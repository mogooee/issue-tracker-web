import { ComponentStory, ComponentMeta } from '@storybook/react';
import SideBar from '@/components/Molecules/SideBar';
import { SideBarItemType } from '@/components/Molecules/SideBar/types';

import { useQuery } from '@tanstack/react-query';
import useFetchMilestone from '@/hooks/useFetchMilestone';
import useLabelFetch from '@/hooks/useLabelFetch';
import { getMemberData } from '@/api/login_logout';
import { UserTypes } from '@/components/Molecules/Dropdown/types';

import { milestoneHandlers } from '@/mocks/handlers/milestones';
import { labelHandlers } from '@/mocks/handlers/label';
import { authHandlers } from '@/mocks/handlers/auth';

import { DEFAULT_CONTENT_LIST, MOCK_CONTENT_LIST, SIDEBAR_PROPS } from '@/components/Molecules/SideBar/mock';

export default {
  title: 'Molecules/SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Content = () => {
  const { milestoneData } = useFetchMilestone();
  const { useGetLabel } = useLabelFetch();
  const { data: labelList } = useGetLabel();
  const { data: userList } = useQuery<UserTypes[]>(['users'], getMemberData);

  const MOCK_SIDEBAR_PROPS: SideBarItemType[] = [
    {
      id: 'assignee',
      dropdownTitle: '담당자',
      dropdownListTitle: '담당자 필터',
      dropdownList: userList!,
      dropdownType: 'checkbox',
    },
    {
      id: 'label',
      dropdownTitle: '레이블',
      dropdownListTitle: '레이블 필터',
      dropdownList: [...labelList!],
      dropdownType: 'checkbox',
    },
    {
      id: 'milestone',
      dropdownTitle: '마일스톤',
      dropdownListTitle: '마일스톤 필터',
      dropdownList: [...milestoneData!.openedMilestones],
      dropdownType: 'radio',
    },
  ];
  return (
    <div>
      <SideBar sideBarList={MOCK_SIDEBAR_PROPS} content={DEFAULT_CONTENT_LIST} />
    </div>
  );
};

const Template: ComponentStory<typeof Content> = () => <Content />;
const MockTemplate: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Initial = Template.bind({});
Initial.parameters = {
  msw: {
    handlers: [...milestoneHandlers, ...labelHandlers, ...authHandlers],
  },
};

export const Checked = MockTemplate.bind({});
Checked.args = {
  sideBarList: SIDEBAR_PROPS,
  content: MOCK_CONTENT_LIST,
};
