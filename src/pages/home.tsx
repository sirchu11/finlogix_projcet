import { useState } from 'react';
import Box from '@component/box';
import styled from 'styled-components';

export default () => {
  const boxArray = [1, 2, 3, 4, 5, 6];
  return (
    <Container>
      <Main>
        <TextTitle>Forex Webinars</TextTitle>
        <Text>
          Whether you are new to foreign exchange trading or already have some
          market experience, we believe that a solid FX trading education is
          vital to your success as a trader.
        </Text>
      </Main>
      <Content>
        {boxArray.map((value) => {
          return <Box key={value} />;
        })}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5vh;
  height: 30vh;
  color: #ffff;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80vw;
`;

const TextTitle = styled.div`
  flex: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: #01254f;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Text = styled.div`
  padding: 0 0.5rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.5rem;
  font-size: 1rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 75vw;
`;
