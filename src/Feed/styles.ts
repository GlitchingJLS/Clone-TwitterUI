import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;

  font-weight: bold;
  font-size: 15px;
  text-align: center;

  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);

  &:hover {
      background: var(--twitter-dark-hover)
  }
`

export const tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
