import React from 'react';

import * as S from './styles';

interface Props {
  name: string,
  nickname: string,
}

const FollowSuggestions: React.FC<Props> = ({
  name, nickname
}) => {
  return (
      <S.container>
        <div>
          <S.Avatar />

          <S.info>
            <strong>{name}</strong>
            <span>{nickname}</span>
          </S.info>
        </div>

        <S.followButton outlined>Seguir</S.followButton>
      </S.container>
  );
}

export default FollowSuggestions;