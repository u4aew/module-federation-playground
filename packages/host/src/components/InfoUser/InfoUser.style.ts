import styled from 'styled-components';

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoSide = styled.div`
  margin-right: 25px;
`;

export const InfoMain = styled.div``;

export const InfoList = styled.div`
  margin: 0 -5px;
  display: flex;
  align-items: center;
`;
export const InfoListItem = styled.div`
  margin: 0 5px;
`;

export const InfoAction = styled.button`
  background-color: white;
  border: none;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const InfoSummary = styled.div`
  display: flex;
`;
export const InfoSummarySide = styled.div`
  margin-right: 10px;
`;
export const InfoSummaryMain = styled.div``;
export const InfoAvatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;
export const InfoTitle = styled.div`
  margin-bottom: 3px;
`;
export const InfoDesc = styled.div`
  color: #aeaeae;
`;
