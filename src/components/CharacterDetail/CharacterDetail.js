import React, { Component } from "react";
import "./CharacterDetail.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCharacterById, getEpisodeNames,clearDetail } from "../../actions/character";
import Paper from "@material-ui/core/Paper";
import Chip from '@material-ui/core/Chip';

class CharacterDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCharacterById(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.character.detail.episodes !==prevProps.character.detail.episodes) {
      this.props.getEpisodeNames(this.props.character.detail.episodes);
    }
  }

  componentWillUnmount(){
    this.props.clearDetail();
  }

  handleBackButton = () => {
    this.props.history.push("/");
  };

  renderEpisodeNames = (episodeNames) =>{
    return(
        <div className="episode-names">
        {episodeNames.map((item,i) => (
          <Chip key={i} label={item} className="episode-name" />
          ))}
        </div>
    );
  }

  render() {
    const { detail, episodeNames } = this.props.character;
    return (
      <React.Fragment>
        <Paper className="character-detail-container">
        <div className="img-container">
            <img className="img" src={detail.image} alt="" />
          </div>
          <div className="info-container">
            <div className="name info">
              <span>Name: </span>
              {detail.name}
            </div>
            <div className="from info">
              <span>From: </span>
              {detail.from}
            </div>
            <div className="episodes info">
              {this.renderEpisodeNames(episodeNames)}
            </div>
          </div>
          
        </Paper>
        <div className="back-button-container">
          <div className="back-button" onClick={this.handleBackButton}>
            Go Back
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    character: state.character
  };
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators({ getCharacterById, getEpisodeNames,clearDetail }, dispatch);
}

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(CharacterDetail);
