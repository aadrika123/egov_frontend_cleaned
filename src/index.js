import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './Components/Redux/Store'
import { useQuery, QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter>  */}
    </Provider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
