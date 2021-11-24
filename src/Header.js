import React, { useContext } from 'react';
import SignMeUp from './SignMeUp';
import { GlobalContext } from './GlobalState';

export const Header = () => {
  const signupCallback = (email) => {
    return console.log(`sign up called with email ${email}`);
  };

  const { favoriteClickCount } = useContext(GlobalContext);

  return (
    <div className="jumbotron">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          <h6 className="text-uppercase">November 17-18 2021</h6>
          <h6 className="text-uppercase">San Jose, California</h6>
          <h5></h5>
          <h3>Click Count: {favoriteClickCount}</h3>
        </div>
        <div className="col-12 col-sm-8 text-lg-right">
          <div>
            <img src="/static/SVCClogo.png" />
          </div>
          <h2>Silicon Code Camp</h2>
          <div className="row col-12 text-lg-right">
            <SignMeUp signupCallback={signupCallback} />
          </div>
        </div>
      </div>
    </div>
  );
};
