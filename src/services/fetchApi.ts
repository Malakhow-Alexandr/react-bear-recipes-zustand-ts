import axios from "axios";


export const fetchBeerRecipes = async (page: number) => {
  const BASE_URL: string = "https://api.punkapi.com/v2/beers/";
  const params = { page: page, per_page: 15 };
  const response = await axios.get(
    BASE_URL,
    { params }
  );
  const {
    data,
    config: {
      params: { page: currentPage },
    },
  } = response;

  return { data, currentPage };
};
