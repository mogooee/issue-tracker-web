import * as S from '@/components/Molecules/Dropdown/Panel/index.styles';
import PanelPreviewLabel from '@/components/Molecules/Dropdown/Panel/Label';
import { DropdownPanelsTypes, IssueTypes, UserTypes } from '@/components/Molecules/Dropdown/types';
import { LabelTypes } from '@/stores/labelList';
import { MilestoneItemTypes } from '../../MilestoneItem';

const DropdownPanel = ({ ...props }: DropdownPanelsTypes) => {
  const { panelId, panelTitle, panelType, panelList, unusedOption } = props;

  return (
    <S.Panel>
      <h3>{panelTitle}</h3>
      <ul>
        {unusedOption && (
          <S.PanelItem>
            <input id={unusedOption.dataId} type={panelType} name={panelTitle} data-id={unusedOption.dataId} />
            <label htmlFor={unusedOption.dataId}>
              <span>{unusedOption.title}</span>
            </label>
          </S.PanelItem>
        )}
        {panelList.map(({ ...listProps }) => {
          const { id: issueId, title: issueTitle, dataId } = listProps as IssueTypes;
          const { id: labelId, title: labelTitle, backgroundColorCode } = listProps as LabelTypes;
          const { id: userImgId, nickname, profileImageUrl } = listProps as UserTypes;
          const { id: milestoneId, title: milestoneTitle } = listProps as MilestoneItemTypes;

          const ITEM_KEY = `${panelTitle}-${issueId || labelId || milestoneId || userImgId}`;
          const INPUT_NAME = issueTitle || labelTitle || milestoneTitle || nickname;
          const DATASET_ID = dataId || labelTitle || milestoneTitle || nickname;

          return (
            <S.PanelItem key={ITEM_KEY}>
              <input id={ITEM_KEY} type={panelType} name={panelTitle} data-id={DATASET_ID} data-panel={panelId} />
              <label htmlFor={ITEM_KEY}>
                {backgroundColorCode && <PanelPreviewLabel backgroundColor={backgroundColorCode} />}
                {profileImageUrl && <PanelPreviewLabel profileImageUrl={profileImageUrl} loginId={nickname} />}
                <span>{INPUT_NAME}</span>
              </label>
            </S.PanelItem>
          );
        })}
      </ul>
    </S.Panel>
  );
};

export default DropdownPanel;
