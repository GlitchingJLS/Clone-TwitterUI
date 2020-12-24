import React from 'react';

import * as S from './styles';

import Main from '../Main';
import Menubar from '../Menubar';
import Sidebar from '../Sidebar';

const Layout: React.FC = () => {
  return (
      <S.container>
          <S.wrapper>
              <Menubar />
              <Main />
              <Sidebar />
          </S.wrapper>
      </S.container>
  );
}

export default Layout;