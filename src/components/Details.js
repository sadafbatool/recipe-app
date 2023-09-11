import { useEffect, useState } from "react";
import Ingredients from "./Ingredients";
import { useParams } from "react-router-dom";

const Details = () => {
  const [detail, setDetail] = useState([]);

  const { id } = useParams();

  const searchRecipes = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const res = await fetch(url);
    const dataa = await res.json();
    setDetail(dataa?.meals);
  };

  useEffect(() => {
    searchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      {detail
        ? detail.map((detail) => (
            <Ingredients key={detail?.idMeal} detail={detail} />
          ))
        : "No Recipe Detail Available!"}
    </div>
  );
};

export default Details;
