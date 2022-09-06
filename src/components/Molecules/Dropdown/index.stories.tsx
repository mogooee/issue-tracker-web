import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from '@/components/Molecules/Dropdown';
import { ASSIGNEE_DROPDOWN_ARGS, REACTION_ARGS } from '@/components/Molecules/Dropdown/mocks';
import styled from 'styled-components';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const DropdownTemplate = styled.div`
  menu {
    top: 25px;
    left: 0px;
  }
`;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <DropdownTemplate>
    <Dropdown {...args} />
  </DropdownTemplate>
);

export const Initial = Template.bind({});
Initial.args = { ...ASSIGNEE_DROPDOWN_ARGS, type: 'List' };

export const Reaction = Template.bind({});
Reaction.args = { ...REACTION_ARGS, type: 'Reaction' };
