import React from 'react';

import * as S from './styles';

import ProfilePage from '../ProfilePage';
import Feed from '../../Feed';

const Main: React.FC = () => {
  return (
      <S.container>
          <S.header>
            <button>
              <S.backIcon />
            </button>

            <S.profileInfo>
              <strong>Joe L'Salas</strong>
              <span>22 Tweets</span>
            </S.profileInfo>
          </S.header>

         <ProfilePage />

         <Feed />

           <S.bottomMenu>
            <S.homeIcon className="active"/>
            <S.searchIcon />
            <S.bellIcon />
            <S.mailIcon />
          </S.bottomMenu> 
      </S.container>
  );
}

export default Main;