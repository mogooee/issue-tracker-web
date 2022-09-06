import * as S from '@/components/Molecules/SideBar/index.styles';
import SideBarItem from '@/components/Molecules/SideBar/SideBarItem';
import { SideBarTypes } from '@/components/Molecules/SideBar/types';

const SideBar = ({ ...props }: SideBarTypes) => {
  const { content, sideBarList } = props;

  return (
    <S.SideBar>
      {sideBarList.map((item) => (
        <SideBarItem {...item} key={item.id} content={content[item.id]} />
      ))}
    </S.SideBar>
  );
};

export default SideBar;
