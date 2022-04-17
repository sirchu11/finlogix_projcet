import { useState } from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <Container>
      <Header>31/10/2019</Header>
      <Main>A structured approach to deciphering FX & Gold sentiment</Main>
      <Content>
        <div>
          Market scan across FX & Gold to determine sentiment with accuracy.
        </div>
        <div>7pm-8:30pm EST</div>
      </Content>
      <Footer>
        <div>Register Now</div>
        <Button>
          <div />
        </Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  box-shadow: 1px 2px 6px rgba(219, 219, 219, 0.5);
  border-radius: 4px;
  flex: 30%;
  padding: 1rem;
  margin: 1rem;
`;

const Header = styled.div`
  margin-bottom: 1rem;
  font-weight: 900;
  color: #01254f;
`;

const Main = styled.div`
  margin: 1rem 0;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 900;
  color: #01254f;
`;

const Content = styled.div`
  line-height: 1.5rem;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.65);
  div {
    margin-bottom: 1rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #6bb718;
`;

const Button = styled.div`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #6bb718;
  box-sizing: border-box;
  text-align: center;
  div {
    border: solid #6bb718;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
  }
`;
