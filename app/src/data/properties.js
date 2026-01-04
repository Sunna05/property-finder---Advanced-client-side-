// app/src/data/properties.js

export const properties = [
  {
    id: "p1",
    type: "house",
    price: 250000,
    bedrooms: 3,
    postcode: "BR1 3AA",
    location: "Petts Wood Road, Orpington BR5",
    short: "3-bed house with garden",
    description:
      "Attractive family home with bright rooms and a comfortable layout. Close to shops and transport links.",
    picture: "/images/p1new.jpeg",

    // Gallery images (6–8). You can duplicate for now.
    images: [
      "/images/p1.jpeg",
      "/images/p1.jpeg",
      "/images/p1.jpeg",
      "/images/p1.jpeg",
      "/images/p1.jpeg",
      "/images/p1.jpeg",
    ],

    // Floor plan image for the tab
    floorPlan: "/images/floor1.jpeg",

    // Used to build Google Maps embed URL
    mapQuery: "Petts Wood Road, Orpington BR5",
  },

  {
    id: "p2",
    type: "flat",
    price: 160000,
    bedrooms: 2,
    postcode: "NW1 4BB",
    location: "Camden High Street, London NW1",
    short: "2-bed flat near transport",
    description:
      "Modern flat with a practical layout, ideal for commuters. Nearby cafes, shops, and bus/train links.",
    picture: "/images/p2.jpg",
    images: [
      "/images/p2.jpeg",
      "/images/p2.jpeg",
      "/images/p2.jpeg",
      "/images/p2.jpeg",
      "/images/p2.jpeg",
      "/images/p2.jpeg",
    ],
    floorPlan: "/images/floor2.png",
    mapQuery: "Camden High Street, London NW1",
  },

  {
    id: "p3",
    type: "house",
    price: 320000,
    bedrooms: 4,
    postcode: "BR1 9CC",
    location: "Widmore Road, Bromley BR1",
    short: "4-bed detached house with driveway",
    description:
      "Spacious 4-bedroom home with a driveway and generous living space. Great for families.",
    picture: "/images/p3.jpeg",
    images: [
      "/images/p3.jpeg",
      "/images/p3.jpeg",
      "/images/p3.jpeg",
      "/images/p3.jpeg",
      "/images/p3.jpeg",
      "/images/p3.jpeg",
    ],
    floorPlan: "/images/floor3.jpg",
    mapQuery: "Widmore Road, Bromley BR1",
  },

  {
    id: "p4",
    type: "flat",
    price: 210000,
    bedrooms: 3,
    postcode: "SW1 1DD",
    location: "Victoria Street, London SW1",
    short: "Spacious 3-bed flat close to shops",
    description:
      "A spacious flat with flexible rooms and excellent access to central London amenities.",
    picture: "/images/p4.jpg",
    images: [
      "/images/p4.jpeg",
      "/images/p4.jpeg",
      "/images/p4.jpeg",
      "/images/p4.jpeg",
      "/images/p4.jpeg",
      "/images/p4.jpeg",
    ],
    floorPlan: "/images/floor4.webp",
    mapQuery: "Victoria Street, London SW1",
  },

  {
    id: "p5",
    type: "house",
    price: 180000,
    bedrooms: 2,
    postcode: "NW1 2EE",
    location: "Mornington Crescent, London NW1",
    short: "2-bed starter home in a quiet street",
    description:
      "A compact and comfortable starter home in a quieter area, with easy access to local services.",
    picture: "/images/p5.webp",
    images: [
      "/images/p5.jpeg",
      "/images/p5.jpeg",
      "/images/p5.jpeg",
      "/images/p5.jpeg",
      "/images/p5.jpeg",
      "/images/p5.jpeg",
    ],
    floorPlan: "/images/floor5.jpg",
    mapQuery: "Mornington Crescent, London NW1",
  },

  {
    id: "p6",
    type: "flat",
    price: 140000,
    bedrooms: 1,
    postcode: "BR1 7TT",
    location: "Masons Hill, Bromley BR1",
    short: "1-bed budget flat, ideal for students",
    description:
      "Budget-friendly flat with a practical space plan. Suitable for students or first-time renters.",
    picture: "/images/p6.jpeg",
    images: [
      "/images/p6.jpeg",
      "/images/p6.jpeg",
      "/images/p6.jpeg",
      "/images/p6.jpeg",
      "/images/p6.jpeg",
      "/images/p6.jpeg",
    ],
    floorPlan: "/images/floor6.jpg",
    mapQuery: "Masons Hill, Bromley BR1",
  },

  {
    id: "p7",
    type: "house",
    price: 290000,
    bedrooms: 3,
    postcode: "SW1 9ZZ",
    location: "Pimlico Road, London SW1",
    short: "Renovated 3-bed house with modern kitchen",
    description:
      "Recently renovated home with a modern kitchen and comfortable living areas. Great location.",
    picture: "/images/p7.jpg",
    images: [
      "/images/p7.jpeg",
      "/images/p7.jpeg",
      "/images/p7.jpeg",
      "/images/p7.jpeg",
      "/images/p7.jpeg",
      "/images/p7.jpeg",
    ],
    floorPlan: "/images/floor7.jpeg",
    mapQuery: "Pimlico Road, London SW1",
  },
];
