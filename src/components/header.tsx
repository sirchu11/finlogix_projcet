import { useContext, useEffect } from 'react';
import { DataContext } from '../app';
import { Link, useLocation } from 'react-router-dom';
import logo from '@image/logo.png';
import styled from 'styled-components';

export default () => {
  let { Dispatch } = useContext(DataContext);
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === '/login') {
      Dispatch({ type: 'SHOW_HEADER', payload: false });
    }
  }, []);
  return (
    <Container>
      <LogoImage to={'/'}>
        <img src={logo} alt="logo.png" />
      </LogoImage>
      <LoginButton
        to={'/login'}
        onClick={() => Dispatch({ type: 'SHOW_HEADER', payload: false })}
      >
        login
      </LoginButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoImage = styled(Link)`
  img {
    max-width: 100%;
    height: auto;
    margin-left: 1.5rem;
  }
`;

const LoginButton = styled(Link)`
  margin-right: 1.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #013b81;
  box-sizing: border-box;
  border-radius: 2px;
  text-decoration: none;
`;
