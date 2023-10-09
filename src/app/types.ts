const data = {
  id: 2,
  brand: "パイクプレイス・ロースト",
  country_id: {
    name: "ブラジル",
  },
  region_id: null,
  characteristic:
    "カカオや炒ったナッツのような香ばしさに\n柔らかな酸味を併せつつ、丸みを帯びた口当たりと滑らかな後味が特徴。\n",
  impression: "苦味が強くなく、毎日でも飲みたくなるような\n飲みやすさがある。",
  roasting: 3,
  acidity: 3,
  rich: 3,
  favorite: 4,
  picture: null,
  shop_id: {
    name: "スターバックス",
  },
};

export type CoffeeReqest = {
  id: string;
  brand: string;
  country_id?: number;
  region_id?: number;
  characteristic?: string;
  impression?: string;
  roasting: number;
  acidity: number;
  rich: number;
  favorite: number;
  picture?: string;
  shop_id?: number;
};

export type CoffeeResponse = {
  id: string;
  brand: string;
  country_id?: Coutry;
  region_id?: Region;
  characteristic?: string;
  impression?: string;
  roasting: number;
  acidity: number;
  rich: number;
  favorite: number;
  picture?: string;
  shop_id?: Shop;
};

export type Coutry = {
  name: string;
};
export type Region = {
  name: string;
};
export type Shop = {
  name: string;
};
