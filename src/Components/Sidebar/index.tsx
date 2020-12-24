import { Repeat } from '@styled-icons/material-outlined';
import React from 'react';

import StickyBox from 'react-sticky-box'

import Button from '../Button';
import List from '../List';
import FollowSuggestions from '../FollowSuggestions'
import News from '../News'

import * as S from './styles';

const Sidebar: React.FC = () => {
  return (
      <S.Container>
          <S.SearchWrapper>
              <S.SearchInput placeholder="Buscar no Twitter"/>
              <S.SearchIcon />
          </S.SearchWrapper>

          <StickyBox>
            <S.Body>
              <List 
               title="Maybe you like"
               elements={[
                 <FollowSuggestions name="R4ndom1756" nickname="@R4ndom1756" />,
                 <FollowSuggestions name="R4ndom0112" nickname="@R4ndom0112" />,
                 <FollowSuggestions name="R4ndom2020" nickname="@R4ndom2020" />,
                ]}/>
  
              <List 
               title="Maybe you like"
               elements={[
                 <News />,
                 <News />,
                 <News />,
                ]}/>
  
              <List 
               title="Maybe you like"
               elements={[
                 <News />,
                 <News />,
                 <News />,
                ]}/>
  
              <List 
               title="Maybe you like"
               elements={[
                 <News />,
                 <News />,
                 <News />,
                ]}/>
            </S.Body>
            </StickyBox>
      </S.Container>
  );
}

export default Sidebar;