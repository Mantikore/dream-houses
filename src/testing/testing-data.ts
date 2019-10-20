
export const expectedHouses = {
  houses: [
    {
      coords: {
        lat: 52.5013632,
        lon: 13.4174913
      },
      params: {
        rooms: 5,
        value: 1000000
      },
      street: 'Adalbertstraße 13'
    },
    {
      coords: {
        lat: 52.4888151,
        lon: 13.3147011
      },
      params: {
        value: 1000000
      },
      street: 'Brandenburgische Straße 10'
    },
    {
      coords: {
        lat: 52.5141632,
        lon: 13.3780111
      },
      params: {
        rooms: 3,
        value: 1500000
      },
      street: 'Cora-Berliner-Straße 22'
    },
    {
      coords: {
        lat: 52.53931,
        lon: 13.4206011
      },
      params: {
        rooms: 12,
        value: 5000000
      },
      street: 'Danziger Straße 66'
    },
    {
      coords: {
        lat: 52.5418739,
        lon: 13.4057378
      },
      params: {
        rooms: 10,
        value: 4000000
      },
      street: 'Eberswalder Straße 55'
    }
  ]
};
export const expectedHousesDistances = {
  houses: [
    {
      coords: {
        lat: 52.5418739,
        lon: 13.4057378
      },
      params: {
        rooms: 10,
        value: 4000000
      },
      street: 'Eberswalder Straße 55',
      distance: 435
    },
    {
      coords: {
        lat: 52.53931,
        lon: 13.4206011
      },
      params: {
        rooms: 12,
        value: 5000000
      },
      street: 'Danziger Straße 66',
      distance: 935
    },
    {
      coords: {
        lat: 52.5141632,
        lon: 13.3780111
      },
      params: {
        rooms: 3,
        value: 1500000
      },
      street: 'Cora-Berliner-Straße 22',
      distance: 4537
    },
    {
      coords: {
        lat: 52.5013632,
        lon: 13.4174913
      },
      params: {
        rooms: 5,
        value: 1000000
      },
      street: 'Adalbertstraße 13',
      distance: 5311
    },
    {
      coords: {
        lat: 52.4888151,
        lon: 13.3147011
      },
      params: {
        value: 1000000
      },
      street: 'Brandenburgische Straße 10',
      distance: 9679
    }
  ]
};
export const expectedAnotherHousesDistances = {
  houses: [
    {
      coords: {
        lat: 52.5418739,
        lon: 13.4057378
      },
      params: {
        rooms: 10,
        value: 4000000
      },
      street: 'Eberswalder Straße 55',
      distance: 435
    },
    {
      coords: {
        lat: 52.53931,
        lon: 13.4206011
      },
      params: {
        rooms: 12,
        value: 5000000
      },
      street: 'Danziger Straße 66',
      distance: 935
    },
    {
      coords: {
        lat: 52.5141632,
        lon: 13.3780111
      },
      params: {
        rooms: 3,
        value: 1500000
      },
      street: 'Cora-Berliner-Straße 22',
      distance: 4537
    }
  ]
};
export const expectedBestHouse = {
  coords: {
    lat: 52.5418739,
    lon: 13.4057378
  },
  params: {
    rooms: 10,
    value: 4000000
  },
  street: 'Eberswalder Straße 55',
  distance: 435
};
export const expectedFilteredRoomsHouses = [
  {
    coords: {
      lat: 52.5418739,
      lon: 13.4057378
    },
    params: {
      rooms: 10,
      value: 4000000
    },
    street: 'Eberswalder Straße 55'
  },
  {
    coords: {
      lat: 52.53931,
      lon: 13.4206011
    },
    params: {
      rooms: 12,
      value: 5000000
    },
    street: 'Danziger Straße 66'
  },
];
export const expectedFilteredMissingDataHouses = [
  {
    coords: {
      lat: 52.4888151,
      lon: 13.3147011
    },
    params: {
      value: 1000000
    },
    street: 'Brandenburgische Straße 10'
  }
];
export const origin = ['Eberswalder Straße 55'];
export const expectedDestinations = [
  123
];
