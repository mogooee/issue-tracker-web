import { ComponentStory, ComponentMeta } from '@storybook/react';
import Comment from '@/components/Molecules/Comment';
import { comment } from '@/mocks/tables/issue';
import { issueHandlers } from '@/mocks/handlers/issue';

export default {
  title: 'Molecules/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />;

export const Author = Template.bind({});
Author.args = { isAuthor: true, comment: { ...comment, issueCommentReactionsResponse: [] } };
Author.parameters = {
  msw: {
    handlers: issueHandlers,
  },
};

export const NoAuthor = Template.bind({});
NoAuthor.args = { ...Author.args, isAuthor: false };
NoAuthor.parameters = {
  msw: {
    handlers: issueHandlers,
  },
};

export const HasReaction = Template.bind({});
HasReaction.args = { ...Author.args, comment };
HasReaction.parameters = {
  msw: {
    handlers: issueHandlers,
  },
};
