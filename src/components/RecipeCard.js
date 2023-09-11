import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strCategory, strMeal, strMealThumb } = recipe;
  return (
    <div>
      <Link to={`/detail/${idMeal}`}>
        <Card sx={{ maxWidth: 345 }} className="margin">
          <CardActionArea>
            <CardMedia
              className="img"
              component="img"
              height="300"
              image={strMealThumb}
              alt={strMeal}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h3>{strMeal}</h3>
                <span>{strCategory}</span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default RecipeCard;
