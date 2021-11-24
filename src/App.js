import React from 'react';
import { GlobalProvider } from './GlobalState';
import Home from './Home';
import Speakers from './Speakers';

export const ConfigContext = React.createContext();

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
  return <div>Not Found</div>;
};

const configValue = {
  showSignMeUp: true,
  showSpeakersSpeakingDays: true,
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <GlobalProvider>
        <div>{pageToShow(pageName)}</div>;
      </GlobalProvider>
    </ConfigContext.Provider>
  );
};

export default App;
