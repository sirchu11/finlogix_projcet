import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactImage from '@image/react.png';
import styled from 'styled-components';

export default () => {
  return (
    <Container margin ={'20px 0 0 40px'}>
      <img src={ReactImage} alt="" />
      <h1>ABCDEFGHIGJLMNOPQRSTUVWXYZ</h1>
      <div></div>
    </Container>
  );
};

const Container = styled.div<{ margin: string }>`
    margin: ${(props) => props.margin || 'auto'}
`
