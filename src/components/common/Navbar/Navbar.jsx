import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarWrapper } from './NavbarStyle';
import { ReactComponent as ChatIcon } from '../../../assets/icons/icon-message-circle.svg';
import { ReactComponent as PostIcon } from '../../../assets/icons/icon-edit.svg';
import { ReactComponent as ProfileIcon } from '../../../assets/icons/icon-user.svg';
import { ReactComponent as HomeIconF } from '../../../assets/icons/icon-home-f.svg';

export default function Navbar({
  homeIconColor,
  chatIconColor,
  postIconColor,
  profileIconColor,
}) {
  const navigate = useNavigate();

  async function handleClick(e) {
    if (e.target.value === '/homefeed') {
      navigate('/homefeed');
    } else if (e.target.value === '/chat') {
      navigate('/chat');
    } else if (e.target.value === '/postupload') {
      navigate('/postupload');
    } else if (e.target.value === '/myprofile') {
      navigate('/myprofile');
    }
  }

  return (
    <NavbarWrapper>
      <ul>
        <li>
          <button value={'/homefeed'} type="button" onClick={handleClick}>
            <HomeIconF fill={homeIconColor ? '#767676' : '#fff'} />
          </button>
        </li>

        <li>
          <button value={'/chat'} type="button" onClick={handleClick}>
            <ChatIcon fill={chatIconColor ? '#767676' : '#fff'} />
          </button>
        </li>

        <li>
          <button value={'/postupload'} type="button" onClick={handleClick}>
            <PostIcon fill={postIconColor ? '#767676' : '#fff'} />
          </button>
        </li>

        <li>
          <button value={'/myprofile'} type="button" onClick={handleClick}>
            <ProfileIcon fill={profileIconColor ? '#767676' : '#fff'} />
          </button>
        </li>
      </ul>
    </NavbarWrapper>
  );
}
