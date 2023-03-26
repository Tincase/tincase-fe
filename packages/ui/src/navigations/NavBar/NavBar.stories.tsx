import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../controls';
import { Center } from '../../layouts';

import { NavBar } from './NavBar';

const meta = {
  title: 'Navigations / NavBar',
  component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

/* ----------------------------------------
 * Stories
 * ----------------------------------------*/

export const Variants: Story = {
  render: (args) => (
    <Center>
      <NavBar
        {...args}
        logo={<a href="/">Logo</a>}
        navMenu={[
          <a key="/">
            <Button variant="text">홈</Button>
          </a>,
          <a key="/deck">
            <Button variant="text">덱 검색</Button>
          </a>,
          <a key="/card-maker">
            <Button variant="text">카드 제작</Button>
          </a>,
          <a key="/my-page">
            <Button variant="text">마이 페이지</Button>
          </a>,
        ]}
        rightMenu={
          <>
            <Button variant="outline">로그인</Button>
            <Button>회원가입</Button>
          </>
        }
      />
    </Center>
  ),
};
