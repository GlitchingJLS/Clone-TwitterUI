import React from 'react';

import * as S from './styles';

const ProfilePage: React.FC = () => {
  return (
      <S.container>
          <S.banner>
            <S.avatar />
          </S.banner>

          <S.profileData>
            <S.editButton outlined>Editar perfil</S.editButton>

            <h1>Joe L'Salas</h1>
            <h2>@J0LUIKI</h2>
            
            <p>Fun guy</p>

          <ul>
            <li>
              <S.locationIcon />
              São Paulo, Brasil
            </li>

            <li>
              <S.cakeIcon />
              Born in june 22 of 2006
            </li>
          </ul>

          <S.followage>
            <span>
              following <strong>145</strong>
            </span>

            <span>
            <strong>626 </strong> followers
            </span>
          </S.followage>

          </S.profileData>
      </S.container>
  );
}

export default ProfilePage;