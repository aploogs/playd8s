import React from 'react';
import { connect } from 'react-redux';
import App from '.././containers/App'

const Dash = ( ) => {


  return(
    <div className="col s12 m2">
      <h3 className="center-align">
        Welcome to Your Side Dashboard
      </h3>
      </div>
  )
};

const mapStateToProps = (state) => {
  return { user: state.user }
}


export default connect(mapStateToProps)(Dash);
