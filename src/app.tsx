import { createContext, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './router';
import Header from '@component/header';
import GateComponent from '@component/gateComponent';
import reducer, { initState } from './reducer';
import styled from 'styled-components';

export const DataContext = createContext(null);

export default () => {
  const [Reducer, Dispatch] = useReducer(reducer, initState);
  return (
    <BrowserRouter>
      <DataContext.Provider value={{ Reducer, Dispatch }}>
        <GateComponent is={Reducer.showHeader}>
          <Header />
        </GateComponent>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Routes>
      </DataContext.Provider>
    </BrowserRouter>
  );
};
