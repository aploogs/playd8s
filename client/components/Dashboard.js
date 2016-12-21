import React from 'react';
import { connect } from 'react-redux';
import App from '.././containers/App'


const Dashboard = ({ user }) => {
console.log(user);
  let styles = {
    title: {fontWeight: '300', color: 'red'}
  }

  return(
    <div>
      <div className="col m10">
      <h3 className="center-align" style={styles.title}>
        Welcome to Your Page { user.firstname }
      </h3>
      <img src="/images/img1.jpg" />
      <img src="/images/img2.jpg" />
      <img src="/images/img3.jpg" />
      <img src="/images/img4.jpg" />
      <img src="/images/img6.jpg" />
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { user: state.user }
}


export default connect(mapStateToProps)(Dashboard);
