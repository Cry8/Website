import React from 'react';
import * as ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const myQueryClient = new QueryClient();
ReactDOM.render(

  <React.StrictMode>
    <QueryClientProvider client={myQueryClient}>
      <App />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
