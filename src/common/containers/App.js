import React from 'react';
import { Provider } from '../contexts/DarkMode';

export default function App({ children }) {
  return(
    <Provider>
      {children}
    </Provider>
    )
}
