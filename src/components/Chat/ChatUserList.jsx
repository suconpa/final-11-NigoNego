import React from 'react';
import styled from 'styled-components';
import { MImage } from '../common/UserImage/UserImage';

export default function ChatUserList() {
  return (
    <StyledUser>
      <ProfileImgWrapper>
        <MImage />
      </ProfileImgWrapper>
      <UserSection>
        <UserName>애월읍 위니브 감귤농장</UserName>
        <UserChat>text 테스트 원투</UserChat>
      </UserSection>
      <ChatDate>2020.10.25</ChatDate>
    </StyledUser>
  );
}

export const StyledUser = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid black;
`;

export const ProfileImgWrapper = styled.div`
  width: 5rem;
  flex-shrink: 0;
`;

export const UserSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: space-evenly;
  padding-left: 1.2rem;
  border: 1px solid black;
`;

export const UserName = styled.div`
  width: 100%;
  font-size: 14px;
`;

export const UserChat = styled.div`
  font-size: 12px;
  color: var(--basic-grey);
`;

export const ChatDate = styled.p`
  color: var(--basic-grey);
  font-size: 12px;
  border: 1px solid black;
`;
