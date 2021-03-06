import styled, { css } from 'styled-components';
import { ArrowLeft, Home, Search, Notifications, Email } from '../../Styles/icons'

export const container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media(min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`

export const header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0; 
  background-color: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover)
    }
  }
`;

export const backIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;

export const profileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const profilePage = styled.div`
  
`;

export const bottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vh, 10px));

  @media(min-width: 500px) {
    display: none;
  }
`;

const iconsCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;
 
  fill: var(--gray);

  &:hover,
  &.active {
    fill: var(--twitter)
  }
`

export const homeIcon = styled(Home)`
  ${iconsCSS}
`;

export const searchIcon = styled(Search)`
  ${iconsCSS}
`;

export const bellIcon = styled(Notifications)`
  ${iconsCSS}
`;

export const mailIcon = styled(Email)`
  ${iconsCSS}
`;