export interface Product {
  title: string;
  id: string;
  pa_diamp: string;
  pa_diamsh: string;
  pa_hod: string;
  pa_mezhos: string;
}

export interface Org {
  orgName: string;
  img: string;
  data: [
    {
      applicability: string,
      placeLocal: string,
      cylName: string,
      count: string,
    }
  ]
}
export interface Item {
  title: string;
  code: string | null;
  subgroup: string | null;
  listImgSrc: string;
  mainImgSrc: string;
}

export interface Sleeve {
  group: string;
  items: Item[];
}

export interface Construct {
  sleeveFastening: {
    title: string;
    subtitle: string;
    data: Sleeve[];
  },
  stemFastening: {
    title: string;
    subtitle: string;
    data: Sleeve[]
  },
  workingFluidSupplyBonk: {
    title: string;
    data: Sleeve[]
  },
  workingFluidSupplyShtucer: {
    title: string,
    data: Sleeve[]
  }

}

export interface query {
  pa_diamp: string[];
  pa_diamsh: string[];
  pa_hod: string[];
}
