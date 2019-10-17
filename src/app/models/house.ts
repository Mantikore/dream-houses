export interface House {
  distance?: any;
  coords: {
    lat: number;
    lon: number;
  };
  params?: {
    rooms?: number;
    value?: number;
  };
  street: string;
}
