interface Volume {
  value: number;
  unit: string;
}

interface MashTemp {
  temp: {
    value: number;
    unit: string;
  };
  duration: number | null;
}

interface Fermentation {
  temp: {
    value: number;
    unit: string;
  };
}

interface Malt {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

interface Hop {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  add: string;
  attribute: string;
}

interface Ingredients {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
}

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: Volume;
  method: {
    mash_temp: MashTemp[];
    fermentation: Fermentation;
    twist: null;
  };
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}



export interface State {
  beerRecipes: Beer[];
  favoriteBeerRecipes: Beer[];
  currentPage: number;
  isLoading: boolean;
  errors: string[];
  setBeerRecipes: (beerRecipes: Beer[]) => void,
      setCurrentPage: (currentPage: number) => void,
      setLoading: (isLoading: boolean) => void,
      setErrors: (errors: string[]) => void,
}
