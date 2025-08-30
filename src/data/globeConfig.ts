// Globe configuration for Philippines-centered view
export const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 14.5995, lng: 120.9842 }, // Center on Manila, Philippines
  autoRotate: true,
  autoRotateSpeed: 0.1,
};
const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
export const connectionData = [
  // Philippines (Manila) as central hub - connecting to all major cities
  {
    order: 1,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: -19.885592, // Belo Horizonte, Brazil
    endLng: -43.951191,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 28.6139, // New Delhi, India
    endLng: 77.209,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: -1.303396, // Nairobi, Kenya
    endLng: 36.852443,
    arcAlt: 0.6,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 1.3521, // Singapore
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 51.5072, // London, UK
    endLng: -0.1276,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 35.6762, // Tokyo, Japan
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: -33.8688, // Sydney, Australia
    endLng: 151.2093,
    arcAlt: 0.4,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 40.7128, // New York, USA
    endLng: -74.006,
    arcAlt: 0.6,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: -6.2088, // Jakarta, Indonesia
    endLng: 106.8456,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 22.3193, // Hong Kong
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: -34.6037, // Buenos Aires, Argentina
    endLng: -58.3816,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 48.8566, // Paris, France
    endLng: 2.3522,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 37.5665, // Seoul, South Korea
    endLng: 126.978,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 34.0522, // Los Angeles, USA
    endLng: -118.2437,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: -22.9068, // Rio de Janeiro, Brazil
    endLng: -43.1729,
    arcAlt: 0.6,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 52.52, // Berlin, Germany
    endLng: 13.405,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 31.2304, // Shanghai, China
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 3.139, // Kuala Lumpur, Malaysia
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 37.7749, // San Francisco, USA
    endLng: -122.4194,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 41.9028, // Rome, Italy
    endLng: 12.4964,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 21.3099, // Honolulu, Hawaii
    endLng: -157.8581,
    arcAlt: 0.4,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 49.2827, // Vancouver, Canada
    endLng: -123.1207,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 52.3676, // Amsterdam, Netherlands
    endLng: 4.9041,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: -8.833221, // Luanda, Angola
    endLng: 13.264837,
    arcAlt: 0.6,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: -33.936138, // Cape Town, South Africa
    endLng: 18.436529,
    arcAlt: 0.6,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 11.986597, // Abuja, Nigeria
    endLng: 8.571831,
    arcAlt: 0.6,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: -15.595412, // Santa Cruz, Bolivia
    endLng: -56.05918,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: -15.785493, // Brasília, Brazil
    endLng: -47.909029,
    arcAlt: 0.6,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 36.162809, // Las Vegas, USA
    endLng: -115.119411,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: -15.432563, // Lusaka, Zambia
    endLng: 28.315853,
    arcAlt: 0.6,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 1.094136, // Georgetown, Guyana
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 14.5995, // Manila, Philippines
    startLng: 120.9842,
    endLat: 21.395643, // Mecca, Saudi Arabia
    endLng: 39.883798,
    arcAlt: 0.4,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
];
