import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Flash from '../components/Flash';
import App from '.././containers/App'
import $ from 'jquery';
import Request from 'superagent';
import { SocialIcon } from 'react-social-icons';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { people: [] }
  }

  componentDidMount () {
    $.ajax({
      url: '/api/steam/people',
      type:'GET',
    }).done( people => {
      console.log(people);
      this.setState({ people })
    });
  }


render() {
		return(
			<div>

        <div className="container">
          <br></br>
          <h2 className="header center-align red-text">Friends</h2>
          <div className="row center">
            <h5 className="header col s12 light">Here is a list of the most popular gamers playing today!</h5>
            <h6 className="header col s12 light"><strong>Connect with a new friend. See what games they play. Then search for new ones!</strong></h6>
          </div>
        </div>


        <div className="row l8 m10">
          {this.state.people.slice(0,45).map((people, index) => {
            const friendImages = [
              '/images/avatar_v01.png',
              '/images/avatar_v02.png',
              '/images/avatar_v03.png',
              '/images/avatar_v04.png',
              '/images/avatar_v05.png',
              '/images/avatar_v06.png',
            ]
            const randomImage = friendImages[Math.floor(Math.random() * friendImages.length)]

            return (
              <div key={index} className="col m4">
                <div className="card">
                  <div className="card-image">
                    <img src={people.image ? people.image : randomImage} />
                  </div>
                  <div className="card-content">
                    <p>{people.name}</p>
                  </div>
                  <div className="card-action">
                    <a className="red-text" href={people.url} target="_blank">
                      Link to Friends Page
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

export default connect(mapStateToProps)(Friends);
