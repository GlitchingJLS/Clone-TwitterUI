import styled, { css } from 'styled-components';
import { Person, Cake } from '../../Styles/icons'
import Button from '../Button'

export const container = styled.div`
  display: lex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
      display: none;
  }
`
export const banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vh, 199px);
  background-color: var(--twitter);

  position: relative;
`

export const avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`

export const profileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
      font-weight: bold;
      font-size: 19px;
  }

  > h2 {
      font-weight: normal;
      font-size: 15px;

      color: var(--gray)
  }

  > p {
      font-size: 15px;
      margin: 11px 11px 0 0;
  }

  > ul {
      list-style: none;
      margin-top: 10px;
      margin-bottom: 10px;

      > li {
          display: flex;
          align-items: center;

          font-size: 15px;
          color: var(--gray);
      }

      > svg {
          fill: var(--gray);
          margin-right: 15px;
      }
  }
`

export const editButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media(min-width: 320px) {
      top: 10px;
      padding: 10px 19px;
      font-size: 15px;
  }
`

const iconCSS = css`
    width: 20px;
    height: 20px;

    fill: var(--gray);
`

export const locationIcon = styled(Person)`
    ${iconCSS}
`

export const cakeIcon = styled(Cake)`
    ${iconCSS}
`

export const followage = styled.div`
  display: flex;

  > span {
      font-size: 15px;
      color: var(--gray);

      & + span {
      margin-left: 15px;
  }
  }
`
