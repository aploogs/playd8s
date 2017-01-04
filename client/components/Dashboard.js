import React from 'react';
import { connect } from 'react-redux';
import App from '.././containers/App'


const Dashboard = ({ user }) => {
console.log(user);
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
              <h3 className="header center-align" style={styles.title}>Welcome to Your Page, { user.firstname }.</h3>
              <div className="row center">
                <h5 className="header col s12 light" style={styles.title}>Let's check out some of your groups and start gaming with your new friends</h5>
              </div>
          </div>
      </div>


          <div className="container">
            <br></br>
            <h2 className="header center-align">Game Groups</h2>
              <div className="row center">
                <h5 className="header col s12 light">Check out all the gaming groups that you belong too!</h5>
                <h6 className="header col s12 light">Click on a game to see who is playing then schedule a time to play.</h6>
              </div>
          </div>


    <div className="row l8 m10">

               <div className="col m4">
                 <div className="card">
                   <div className="card-image">
                     <img src="/images/img01.png" />
                     <span className="card-title">Game Title</span>
                   </div>
                   <div className="card-content">
                     <p>This is a short description about the game. This information wil be filled with JSON from the API.</p>
                   </div>
                   <div className="card-action">
                     <a className="red-text" href="#">Link to game page</a>
                   </div>
                 </div>
               </div>



              <div className="col m4">
                <div className="card">
                  <div className="card-image">
                    <img src="/images/img02.png" />
                    <span className="card-title">Game Title</span>
                  </div>
                  <div className="card-content">
                    <p>This is a short description about the game. This information wil be filled with JSON from the API.</p>
                  </div>
                  <div className="card-action">
                    <a className="red-text" href="#">Link to game page</a>
                  </div>
                </div>
              </div>




             <div className="col m4">
               <div className="card">
                 <div className="card-image">
                   <img src="/images/img03.png" />
                   <span className="card-title">Game Title</span>
                 </div>
                 <div className="card-content">
                   <p>This is a short description about the game. This information wil be filled with JSON from the API.</p>
                 </div>
                 <div className="card-action">
                   <a className="red-text" href="#">Link to game page</a>
                 </div>
               </div>
             </div>


             <div className="col m4">
               <div className="card">
                 <div className="card-image">
                   <img src="/images/img04.png" />
                   <span className="card-title">Game Title</span>
                 </div>
                 <div className="card-content">
                   <p>This is a short description about the game. This information wil be filled with JSON from the API.</p>
                 </div>
                 <div className="card-action">
                   <a className="red-text" href="#">Link to game page</a>
                 </div>
               </div>
             </div>


             <div className="col m4">
               <div className="card">
                 <div className="card-image">
                   <img src="/images/img05.png" />
                   <span className="card-title">Game Title</span>
                 </div>
                 <div className="card-content">
                   <p>This is a short description about the game. This information wil be filled with JSON from the API.</p>
                 </div>
                 <div className="card-action">
                   <a className="red-text" href="#">Link to game page</a>
                 </div>
               </div>
             </div>


             <div className="col m4">
               <div className="card">
                 <div className="card-image">
                   <img src="/images/img06.png" />
                   <span className="card-title">Game Title</span>
                 </div>
                 <div className="card-content">
                   <p>This is a short description about the game. This information wil be filled with JSON from the API.</p>
                 </div>
                 <div className="card-action">
                   <a className="red-text" href="#">Link to game page</a>
                 </div>
               </div>
             </div>


             <div className="col m4">
               <div className="card">
                 <div className="card-image">
                   <img src="/images/img07.png" />
                   <span className="card-title">Game Title</span>
                 </div>
                 <div className="card-content">
                   <p>This is a short description about the game. This information wil be filled with JSON from the API.</p>
                 </div>
                 <div className="card-action">
                   <a className="red-text" href="#">Link to game page</a>
                 </div>
               </div>
             </div>


             <div className="col m4">
               <div className="card">
                 <div className="card-image">
                   <img src="/images/img08.png" />
                   <span className="card-title">Game Title</span>
                 </div>
                 <div className="card-content">
                   <p>This is a short description about the game. This information wil be filled with JSON from the API.</p>
                 </div>
                 <div className="card-action">
                   <a className="red-text" href="#">Link to game page</a>
                 </div>
               </div>
             </div>


             <div className="col m4">
               <div className="card">
                 <div className="card-image">
                   <img src="/images/img09.png" />
                   <span className="card-title">Game Title</span>
                 </div>
                 <div className="card-content">
                   <p>This is a short description about the game. This information wil be filled with JSON from the API.</p>
                 </div>
                 <div className="card-action">
                   <a className="red-text" href="#">Link to game page</a>
                 </div>
               </div>
             </div>


    </div>

     <footer className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h4 className="brand-logo"><img className="responsive-img" id="logo" src="/images/PLAYD8S_logo.png"/></h4>
              <p className="grey-text text-lighten-4">Don't forget to conect with us online.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Socials</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/">Facebook</a></li>
                <li><a className="grey-text text-lighten-3" href="https://twitter.com/">Twitter</a></li>
                <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/?hl=en">Instagram</a></li>
              </ul>
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
};

const mapStateToProps = (state) => {
  return { user: state.user }
}


export default connect(mapStateToProps)(Dashboard);
