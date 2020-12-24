import React from 'react';

import * as S from './styles';

const Tweet: React.FC = () => {
  return (
      <S.Container>
          <S.retweeted>
              You retweeted
          </S.retweeted>

          <S.body>
            <S.avatar />

            <S.content>
                <S.header>
                    <strong>Random</strong>
                    <strong>@random</strong>
                    <S.dot />
                    <time>November 26</time>
                </S.header>

                <S.description>Something</S.description>

                <S.imageContent />

               <S.icons>
                    <S.status>
                        <S.commentIcon />
                        26
                    </S.status>
                    <S.status>
                        <S.retweetIcon />
                        11
                    </S.status>
                    <S.status>
                        <S.likeIcon />
                        2020
                    </S.status>
               </S.icons> 
            </S.content>
          </S.body>
      </S.Container>
  );
}

export default Tweet;