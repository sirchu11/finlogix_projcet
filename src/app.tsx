import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './router';
import Header from '@component/header';
import styled from 'styled-components';

export const DataContext = createContext(null);

export default () => {
  return (
    <BrowserRouter>
      <DataContext.Provider value={null}>
        <Header />
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Routes>
      </DataContext.Provider>
    </BrowserRouter>
  );
};

const Container = styled.div<{ margin: string }>`
  margin: ${(props) => props.margin || 'auto'};
`;
