import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ShortLinkGenerator from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

// All `Portal`-related components need to have the the main app wrapper element as a container
// so that the are in the subtree under the element used in the `important` option of the Tailwind's config.


root.render(
  <React.StrictMode>
        <ShortLinkGenerator />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
