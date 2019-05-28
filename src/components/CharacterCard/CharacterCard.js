import React from "react";
import "./CharacterCard.css";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <Card className="character-card">
      <Link to={`/detail/${props.character.id}`}>
        <CardActionArea>
          <CardMedia
            className="character-card-media"
            image={props.character.image}
            title={props.character.name}
          />
          <CardContent>
            <h2>{props.character.name}</h2>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default CharacterCard;
