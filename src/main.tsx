import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/global.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserDataProvider from './components/UserContext/UserContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="278833830829-ogr3hqr7j4il8hin4nejniv7g11bkkcs.apps.googleusercontent.com">
      <UserDataProvider>
        <App />
      </UserDataProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
