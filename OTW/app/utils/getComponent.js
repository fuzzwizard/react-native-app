import React from 'react';

// all scenes here
import SignInContainer from '../containers/SignInContainer';
import HelpContainer from '../containers/HelpContainer';
import HelperContainer from '../containers/HelperContainer';
import LandingPage from '../components/LandingPage';

// make a new case for each scene (this is called from components/NavRoot.js)
// TODO: refactor this part to return a better component
export default function getComponent(routeKey, _handleNavigate, _handleBackAction, _handleForwardAction, openControlPanel, closeControlPanel) {
  switch (routeKey) {
  case 'home':
      //return LandingPage({_handleNavigate, _handleForwardAction});
    return <HelperContainer
          _handleNavigate={_handleNavigate}
          _handleForwardAction={_handleForwardAction}
          _handleBackAction={_handleBackAction}
          openControlPanel={openControlPanel}
          closeControlPanel={closeControlPanel}/>;

  case 'signIn':
    return <SignInContainer
          _handleNavigate={_handleNavigate}
          _handleBackAction={_handleBackAction}
          _handleForwardAction={_handleForwardAction} />;
  case 'help':
    return <HelpContainer
          _handleNavigate={_handleNavigate}
          _handleForwardAction={_handleForwardAction}
          _handleBackAction={_handleBackAction}
          openControlPanel={openControlPanel}
          closeControlPanel={closeControlPanel} />;

  case 'timeline':
    return <HelpContainer
          _handleNavigate={_handleNavigate}
          _handleForwardAction={_handleForwardAction}
          _handleBackAction={_handleBackAction}
          openControlPanel={openControlPanel}
          closeControlPanel={closeControlPanel} />;
  case 'helper':
    return <HelperContainer 
          _handleNavigate={_handleNavigate}
          _handleForwardAction={_handleForwardAction}
          _handleBackAction={_handleBackAction}
          openControlPanel={openControlPanel}
          closeControlPanel={closeControlPanel}/>;
  default:
    return <LandingPage _handleNavigate = {_handleNavigate} />;
  }
}