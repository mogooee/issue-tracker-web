import { ComponentStory, ComponentMeta } from '@storybook/react';
import Comment from '@/components/Molecules/Comment';
import { comment } from '@/components/Molecules/Comment/mock';

export default {
  title: 'Molecules/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />;

export const Author = Template.bind({});
Author.args = { isAuthor: true, comment: { ...comment, issueCommentReactionsResponse: [] } };

export const NoAuthor = Template.bind({});
NoAuthor.args = { ...Author.args, isAuthor: false };

export const HasReaction = Template.bind({});
HasReaction.args = { ...Author.args, comment };
