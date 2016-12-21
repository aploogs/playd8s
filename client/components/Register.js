import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import $ from 'jquery';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('body').addClass('register-background')
  }

  componentWillUnmount() {
    $('body').removeClass('register-background')
  }

  handleSubmit(e) {
    e.preventDefault();
    let { firstname, lastname, email, password } = this.refs;

    $.ajax({
      url: '/api/auth/register',
      type: 'POST',
      data: { firstname: firstname.value, lastname: lastname.value, email: email.value, password: password.value },
      dataType: 'JSON'
    }).done( user => {
      this.props.dispatch(refreshLogin(user));
      this.props.router.push('/dashboard');
    }).fail( err => {
      //A great place to dispatch flash actions
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col m4 offset-m4">
          <div className="center">
            <h3>Register</h3>
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="First Name" ref="firstname" required={true} />
                <input type="text" placeholder="Last Name" ref="lastname" required={true} />
                <input type="email" placeholder="email" ref="email" required={true} />
                <input type="password" placeholder="password" ref="password" required={true} />
                <button className="btn">Register</button>
              </form>
            </div>
        </div>
      </div>
    )
  }
}

export default connect()(Register);
