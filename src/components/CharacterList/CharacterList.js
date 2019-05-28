import React, { Component } from "react";
import "./CharacterList.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCharacterList, clearList } from "../../actions/character";
import CharacterCard from "../CharacterCard/CharacterCard";

let scrollContainer;
class CharacterList extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    if(this.props.character.list.length === 0){
      this.props.getCharacterList();
    }
    scrollContainer = document.getElementsByClassName("character-list")[0];
    scrollContainer.addEventListener("scroll", this.handleScroll);

  }

  componentWillUnmount() {
    scrollContainer.removeEventListener("scroll", this.handleScroll);
    this.props.clearList();
  }

  handleScroll = () => {
    let scrollTop = scrollContainer.scrollTop;
    let scrollHeight = scrollContainer.scrollHeight;
    let clientHeight = scrollContainer.clientHeight || window.innerHeight;
    let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      if(this.props.character.page)
        this.props.getCharacterList(this.props.character.page);
    }
  }

  renderCard = () => {
    const { list } = this.props.character;
    if (list.length === 0) {
      return <div className="loader" />;
    } else {
      return (
        <React.Fragment>
          {list.map(item => (
            <CharacterCard key={item.id} character={item} />
          ))}
        </React.Fragment>
      );
    }
  };

  render() {
    return <div className="character-list">{this.renderCard()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    character: state.character
  };
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators({ getCharacterList, clearList }, dispatch);
}

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(CharacterList);
