import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Flash from '../components/Flash';
import App from '.././containers/App'
import $ from 'jquery';


class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.getFriends = this.getFriends.bind(this);
    this.state = { friends: [] }
  }

getFriends(e) {
  e.preventDefault();
		$.ajax({
			url: " http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=705D22702EBAB351E6CD0340480B9BC4&steamids=76561197960435530",
			type:'GET',
			dataType:'JSON',
			data: { },
		}).done( friends => {
			console.log(friends);
			//this.setState({ friends });
		});
}
	render() {

		return(
			<div>
				<div className="row">
					<div className="col m4 offset-m4">
						<a className="waves-effect waves-light btn" onClick={ this.getFriends }>Friends</a>
					</div>
				</div>
			</div>
		)
	}


}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Friends);
