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

export interface ConstructItem {
  title: string;
  subtitle?: string;
  data: Sleeve[]
}

export interface Construct {
  sleeveFastening: ConstructItem | undefined,
  stemFastening: ConstructItem | undefined,
  workingFluidSupplyBonk: ConstructItem | undefined,
  workingFluidSupplyShtucer: ConstructItem | undefined

}

export interface query {
  pa_diamp: string[];
  pa_diamsh: string[];
  pa_hod: string[];
}
