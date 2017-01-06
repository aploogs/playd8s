import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Flash from '../components/Flash';
import App from '.././containers/App'
import $ from 'jquery';
import Request from 'superagent';


class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.getFriends = this.getFriends.bind(this);
		this.state = { game: {}, title: "", desc: "", img: "", video: "" } 
  }

getFriends(e) {
  e.preventDefault();
	let gameid = '1942';
	console.log('working')
		$.ajax({
			url: `/api/steam/${gameid}`,
			type:'GET',
		}).done( game => {
			console.log(game);
			this.setState({ game, title: game.name, desc: game.summary, video: game.videos[0].video_id });
		});
}

render() {
		
		return(
			<div>
				<div className="row">
					<div className="col m4 offset-m4">
						<a className="waves-effect waves-light btn" onClick={ this.getFriends }>Friends</a>
						<div>{this.state.title}</div>
						<div>{this.state.desc}</div>
						<a href={`https://www.youtube.com/watch?v=${this.state.video}`}>Link to YouTube</a>
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

