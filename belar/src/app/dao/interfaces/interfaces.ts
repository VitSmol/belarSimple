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

export interface query {
  pa_diamp: string[];
  pa_diamsh: string[];
  pa_hod: string[];
}
