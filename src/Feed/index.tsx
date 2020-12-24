import React from 'react';
import Tweet from '../Components/Tweet';

import * as S from './styles';

const Feed: React.FC = () => {
  return (
      <S.Container>
          <S.tab>Tweets</S.tab>

          <S.tweets>
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
          </S.tweets>
      </S.Container>
  );
}

export default Feed;