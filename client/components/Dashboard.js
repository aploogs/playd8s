import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Flash from '../components/Flash';
import App from '.././containers/App'
import $ from 'jquery';
import Request from 'superagent';
import { SocialIcon } from 'react-social-icons';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  	this.state = { pulses: [] }
  }

  componentDidMount () {
    $.ajax({
      url: '/api/steam/news',
      type:'GET',
    }).done( pulses => {
      this.setState({ pulses })
    });
  }

  render () {
    const { user } = this.props
    let styles = {
      title: {fontWeight: '300', color: 'white'}
    }

  return(
    <div>
      <div className="image">
        <img src="/images/dashboard_img.png" alt="hero_img" />
        <div className="hero-text">
          <div className="row center">
            <img src="/images/avatar_v01.png" alt="avatar-image" />
          </div>
          <h3 className="header center-align" style={styles.title}>
            Welcome to Your Page, { user.firstname }.
          </h3>
          <div className="row center">
            <h5 className="header col s12 light" style={styles.title}>
              Let's check out some top games and start gaming with your new friends
            </h5>
          </div>
        </div>
      </div>

      <div className="container">
        <br></br>
        <h2 className="header center-align red-text">Dashboard Newsfeed</h2>
        <div className="row center">
          <h5 className="header col s12 light">Here are your top game articles for today!</h5>
          <h6 className="header col s12 light"><strong>Read about a game, watch a preview or find a friend to play with.</strong></h6>
        </div>
      </div>


      <div className="row l8 m10">
        {this.state.pulses.map((pulse, index) => {
          return (
            <div key={index} className="col m4">
              <div className="card">
                <div className="card-image">
                  <img src={pulse.image ? pulse.image : '/images/news_img_unavail_01.png'} />
                </div>
                <div className="card-content">
                  <p>{pulse.title}</p>
                </div>
                <div className="card-action">
                  <a className="red-text" href={pulse.url} target="_blank">
                    Link to News Article
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>

       <footer className="page-footer black">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h4 className="brand-logo"><img className="responsive-img" id="logo" src="/images/PLAYD8S_logo.png"/></h4>
                <p className="grey-text text-lighten-4">Don't forget to conect with us online</p>
              </div>
              <div className="socialIcons" className="col l4 offset-l2 s12">
                <h5 className="white-text">Share</h5>
                  <SocialIcon url="https://www.facebook.com/" />
                  <SocialIcon url="https://twitter.com/" />
                  <SocialIcon url="https://www.instagram.com/?hl=en" color="#fb3958" />
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright PLAYD8S
            <a className="grey-text text-lighten-4 right" href="https://steamcommunity.com/">Steam Community</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}


export default connect(mapStateToProps)(Dashboard);
