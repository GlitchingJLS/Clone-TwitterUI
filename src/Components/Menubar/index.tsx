import React from 'react';
import Button from '../Button';

import * as S from './styles';

const Menubar: React.FC = () => {
  return (
      <S.Container>
          <S.Topside>
              <S.menuButton>
                  <S.HomeIcon />
                  <span>Home page</span>
              </S.menuButton>

              <S.menuButton>
                  <S.EmailIcon />
                  <span>Messages</span>
              </S.menuButton>

              <S.menuButton>
                  <S.FavoriteIcon />
                  <span>Favorites</span>
              </S.menuButton>

              <S.menuButton className="active">
                  <S.ProfileIcon />
                  <span>Profile</span>
              </S.menuButton>

              <Button>
                  <span>Tweetar</span>
              </Button>
          </S.Topside>

          <S.Botside>
              <S.Avatar />
              <S.ProfileData>
                  <strong>Joe L'Salas</strong>
                  <span>@J0LUIKi</span>
              </S.ProfileData>

              <S.ExitIcon />
          </S.Botside>
      </S.Container>
  );
}

export default Menubar;