import React from 'react';

const App = ({ pageName }) => {
  if (pageName === 'Home') return <Home></Home>;
  if (pageName === 'Speakers') return <></>;
  return <div>Not Found</div>;
};

export default App;
