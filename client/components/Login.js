import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import $ from 'jquery';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('body').addClass('login-background');
  }

  componentWillUnmount() {
    $('body').removeClass('login-background');
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.refs;

    $.ajax({
      url: '/api/auth/login',
      type: 'POST',
      dataType: 'JSON',
      data: { email: email.value, password: password.value }
    }).done( user => {
      this.props.dispatch(refreshLogin(user));
      this.props.router.push("/dashboard")
    }).fail( err => {
      //A great place to dispatch flash actions
    });
  }

  render() {
    return (
      <div id="index-banner" className="row center">
        <div className="col m4 offset-m4">
          <div className="container">
            <h3>Log In</h3>
            <form onSubmit={this.handleSubmit}>
              <input type="email" required={true} ref="email" placeholder="email" />
              <input type="password" required={true} ref="password" placeholder="password" />
              <button className="btn red darken-1">Log In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default connect()(LogIn);
