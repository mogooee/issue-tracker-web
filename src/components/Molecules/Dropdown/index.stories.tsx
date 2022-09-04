import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from '@/components/Molecules/Dropdown';
import { ASSIGNEE_DROPDOWN_ARGS, MILESTONE_LIST, UNUSED_OPTIONS } from '@/components/Molecules/Dropdown/mocks';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Initial = Template.bind({});
Initial.args = ASSIGNEE_DROPDOWN_ARGS;

export const Sidebar = Template.bind({});
Sidebar.args = {
  indicatorLabel: '마일스톤',
  indicatorStyle: 'SIDEBAR',
  panelTitle: '마일스톤 필터',
  panelType: 'checkbox',
  panelList: MILESTONE_LIST,
  unusedOption: UNUSED_OPTIONS.MILESTONE,
};
