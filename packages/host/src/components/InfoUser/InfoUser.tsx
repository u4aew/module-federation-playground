import React from 'react';
import {
  Info,
  InfoSide,
  InfoMain,
  InfoList,
  InfoListItem,
  InfoAction,
  InfoSummary,
  InfoSummarySide,
  InfoSummaryMain,
  InfoAvatar,
  InfoTitle,
  InfoDesc,
} from './InfoUser.style';

import mails from './icons/mails.svg';
import notifications from './icons/notifications.svg';

const InfoUser = () => {
  return (
    <Info>
      <InfoSide>
        <InfoList>
          <InfoListItem>
            <InfoAction>
              <img src={mails} alt="" />
            </InfoAction>
          </InfoListItem>
          <InfoListItem>
            <InfoAction>
              <img src={notifications} alt="" />
            </InfoAction>
          </InfoListItem>
        </InfoList>
      </InfoSide>
      <InfoMain>
        <InfoSummary>
          <InfoSummaryMain>
            <InfoTitle>Andrew</InfoTitle>
            <InfoDesc>Admin account</InfoDesc>
          </InfoSummaryMain>
        </InfoSummary>
      </InfoMain>
    </Info>
  );
};

export default InfoUser;
