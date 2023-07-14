import {FC} from "react";
import { LinkStyled,Item } from "./RecipeListItem.styled";
import { RecipesListProps } from "types/types";

const RecipesListItem: FC<RecipesListProps> = ({ recipes, location }) => {
    return (
      <>
      {recipes.map(({id,name})=> {return (<Item key={id}>
        <LinkStyled
            className="link"
            to={`/${id}`}
            state={{ from: location }}
          >
            <p>{name}</p>
          </LinkStyled>
      </Item>)})}
      </>
    );
  };
  
  export default RecipesListItem;