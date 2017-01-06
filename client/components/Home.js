import React from 'react';
import { Link } from 'react-router';
import { SocialIcon } from 'react-social-icons';


export default function Home (props) {
  return (
    <div className="main-background">


      <div className="image">
        <img src="/images/home_img.png" alt="hero_img" />
          <div className="home-text">
            <div className="row center">
              <img src="/images/PlayD8s_logo_home.png" alt="PlayD8s logo" />
            </div>
              <h4 className="header center-align white-text">See what friends you've made.
                <br></br>Stay and make new ones.
              </h4>
                <div className="row center">
                  <Link className="btn white red-text" to="/register">Register</Link>
                    <Link className="btn red darken-1" to="/login">Log In</Link>
                    <br></br>
                    <br></br>
                  <h5 className="header col s12 light white-text">By connecting with your Steam account PLAYD8s finds you
                  <br></br>friends to play with based on games that you play!</h5>
                </div>
          </div>
      </div>



      <footer className="page-footer black fixed">
         <div className="container">
           <div className="row">
             <div className="col l6 s12">
               <h4 className="brand-logo"><img className="responsive-img" id="logo" src="/images/PLAYD8S_logo.png"/></h4>
               <p className="grey-text text-lighten-4">Don't forget to conect with us online.</p>
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
