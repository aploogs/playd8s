import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Flash from '../components/Flash';
import App from '.././containers/App'

const Game = ( ) => {


  return(
    <div className="col s12 m4">
      <h3 className="center-align">
        Welcome to Your Game Collection
      </h3>
      <ul>
        <li>
          Games
        </li>
        <li>
          Friends
        </li>
      </ul>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { user: state.user }
}


export default connect(mapStateToProps)(Game);
