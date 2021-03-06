import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import RewardPoster from './404-reward-poster.svg';
import Button from '../../components/Button';
import './NoMatch.scss';

import { goBack } from '../../state/routerActions';

let NoMatch = ({ goBack }) => (
  <div className="error-page">
    <Helmet>
      <title>The page you're looking for isn't expressed. - refine.bio</title>
    </Helmet>
    <div className="error-page__text">
      <h1>The page you are looking for isn’t expressed.</h1>
      <Button text="Go Back" onClick={goBack} />
    </div>

    <div>
      <img
        src={RewardPoster}
        alt="404 not found reward poster"
        className="img-responsive"
      />
    </div>
  </div>
);
NoMatch = connect(
  null,
  { goBack }
)(NoMatch);

export default NoMatch;
