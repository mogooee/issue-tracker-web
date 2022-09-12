import { useState } from 'react';
import * as S from '@/components/Molecules/SideBar/index.styles';
import SideBarItem from '@/components/Molecules/SideBar/SideBarItem';
import { SideBarTypes, isMilestoneTypes, ContentListTypes } from '@/components/Molecules/SideBar/types';
import { filterUncheckedItem, getFindDropdownItem } from '@/components/Molecules/SideBar/utils';

const SideBar = ({ ...props }: SideBarTypes) => {
  const { content, sideBarList } = props;

  // recoil로 바꿔주기
  const [contentList, setContentList] = useState(content);

  const handleOnChange = (target: HTMLInputElement) => {
    const { id, panel } = target.dataset;
    const { checked } = target;

    // 드롭다운 리스트에서 체크한 아이템의 정보를 찾는다.
    const findDropdownItem = getFindDropdownItem({ id: id!, panel: panel!, sideBarList });

    const contentKey = panel as keyof ContentListTypes;

    // 마일스톤의 드롭다운 아이템 체크시
    if (contentKey === 'milestone' && checked) {
      if (id !== 'none' && isMilestoneTypes(findDropdownItem!)) {
        // 하나의 요소만 들어갈 수 있도록 한다.
        return setContentList({ ...contentList, [contentKey]: [findDropdownItem] });
      }
      // 마일스톤 없음을 체크하면 아무 값도 들어가지 않는다.
      return setContentList({ ...contentList, [contentKey]: [] });
    }

    // 담당자, 레이블 드롭다운 아이템 체크시 findDropdownItem한 요소를 content 리스트에 추가한다.
    if (contentKey !== 'milestone' && checked) {
      return setContentList({ ...contentList, [contentKey]: [...contentList[contentKey], findDropdownItem] });
    }

    // 드롭다운 리스트에서 체크 해제하면, content 리스트에서 해당하는 요소를 제외한다.
    const filterContentList = filterUncheckedItem({ id: id!, contentKey, contentList });
    return setContentList({ ...contentList, [contentKey]: [...filterContentList] });
  };

  return (
    <S.SideBar>
      {sideBarList.map((item) => (
        <SideBarItem {...item} key={item.id} content={contentList[item.id]} handleOnChange={handleOnChange} />
      ))}
    </S.SideBar>
  );
};

export default SideBar;
