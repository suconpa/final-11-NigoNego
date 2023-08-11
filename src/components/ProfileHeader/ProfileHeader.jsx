import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProfileUser from './ProfileUser';
import MyProfileBtn from './MyProfileBtn';
import { useRecoilValue } from 'recoil';
import accountNameAtom from '../../atom/accountName';
import authAtom from '../../atom/authToken';
import UseFetchToken from '../../Hooks/UseFetchToken';

export default function ProfileHeader() {
  const { getProfileData } = UseFetchToken();
  const [myProfileData, setMyProfileData] = useState({});
  const auth = useRecoilValue(authAtom);
  const accountAtom = useRecoilValue(accountNameAtom);
  console.log(accountAtom);

  useEffect(() => {
    getProfileData().then(response => {
      setMyProfileData(response);
    });
  }, []);

  const ProfileHeaderWrapper = styled.div``;

  return (
    <ProfileHeaderWrapper>
      {Object.keys(myProfileData).length > 0 && (
        <ProfileUser myProfileData={myProfileData} />
      )}
      <MyProfileBtn />
    </ProfileHeaderWrapper>
  );
}
