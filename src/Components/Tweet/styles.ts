import styled, {css} from 'styled-components';

import {Chat, Favorite, CompareArrows} from '../../Styles/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;

export const retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;

export const body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;

export const content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
      margin-right: 5px;
  }

  > span, time {
    color: var(--gray);
  }

  > span, strong {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  }
`;

export const dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const imageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: var(--outline);
  border-radius: 14px;

  cursor: pointer;
  &:hover {
      opacity: 0.7;
  }
`;

export const icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;

  @media(min-width: 330px) {
      width: 63%;
  }
`;

export const status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
      &, svg path {
          color: var(--gray)
      }
  }

  &:nth-child(2) {
      &, svg path {
          color: var(--retweet)
      }
  }

  &:nth-child(3) {
      &, svg path {
          color: var(--like)
      }
  }
`;

const iconCSS = css`
    width: 19px;
    height: 19px;
`

export const commentIcon = styled(Chat)`
  ${iconCSS}
`;

export const retweetIcon = styled(CompareArrows)`
  ${iconCSS}
`;


export const likeIcon = styled(Favorite)`
  ${iconCSS}
`;

