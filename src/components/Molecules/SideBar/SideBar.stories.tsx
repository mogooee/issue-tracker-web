import { ComponentStory, ComponentMeta } from '@storybook/react';
import SideBar from '@/components/Molecules/SideBar';
import { LABEL_LIST, MILESTONE_LIST, USER_LIST } from '@/components/Molecules/Dropdown/mocks';
import { ContentListTypes, SideBarItemType } from '@/components/Molecules/SideBar/types';

import useFetchMilestone from '@/hooks/useFetchMilestone';
import useLabelFetch from '@/hooks/useLabelFetch';

import { milestoneHandlers } from '@/mocks/handlers/milestones';
import { labelHandlers } from '@/mocks/handlers/label';

import { useQuery } from '@tanstack/react-query';
import { getMemberData } from '@/api/login_logout';
import { UserTypes } from '@/components/Molecules/Dropdown/types';
import { authHandlers } from '@/mocks/handlers/auth';

export default {
  title: 'Molecules/SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Content = () => {
  const { milestoneData } = useFetchMilestone();
  const { useGetLabel } = useLabelFetch();
  const { data: labelList } = useGetLabel();
  const { data: userList } = useQuery<UserTypes[]>(['users'], getMemberData);

  const emptyContentList: ContentListTypes = {
    assignee: [],
    label: [],
    milestone: [],
  };

  const SIDEBAR_PROPS: SideBarItemType[] = [
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
      <SideBar sideBarList={SIDEBAR_PROPS} content={emptyContentList} />
    </div>
  );
};

const Template: ComponentStory<typeof Content> = () => <Content />;
const MockTemplate: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

const contentList: ContentListTypes = {
  assignee: [],
  label: [
    {
      id: 0,
      title: 'feature',
      backgroundColorCode: '#007AFF',
      description: '',
      textColor: 'BLACK',
    },
  ],
  milestone: [
    {
      id: 0,
      title: '마일스톤 1',
      description: null,
      dueDate: null,
      closed: false,
      openIssueCount: 3,
      closedIssueCount: 7,
    },
  ],
};

const SIDEBAR_PROPS: SideBarItemType[] = [
  {
    id: 'assignee',
    dropdownTitle: '담당자',
    dropdownListTitle: '담당자 필터',
    dropdownList: USER_LIST,
    dropdownType: 'checkbox',
  },
  {
    id: 'label',
    dropdownTitle: '레이블',
    dropdownListTitle: '레이블 필터',
    dropdownList: LABEL_LIST,
    dropdownType: 'checkbox',
  },
  {
    id: 'milestone',
    dropdownTitle: '마일스톤',
    dropdownListTitle: '마일스톤 필터',
    dropdownList: MILESTONE_LIST,
    dropdownType: 'radio',
  },
];

export const Initial = Template.bind({});
Initial.parameters = {
  msw: {
    handlers: [...milestoneHandlers, ...labelHandlers, ...authHandlers],
  },
};

export const Checked = MockTemplate.bind({});
Checked.args = {
  sideBarList: SIDEBAR_PROPS,
  content: contentList,
};
