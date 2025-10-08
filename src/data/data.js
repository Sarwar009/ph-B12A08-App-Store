// minimal dataset with 12 example apps. Add images as external URLs (placeholder used).
const apps = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/app1/200/200',
    title: 'Chatly',
    companyName: 'SkyApps',
    description: 'A fast chat application for teams and friends.',
    size: 42,
    reviews: 1200,
    ratingAvg: 4.5,
    downloads: 250000,
    ratings: [
      { name: '1 star', count: 40 },
      { name: '2 star', count: 20 },
      { name: '3 star', count: 100 },
      { name: '4 star', count: 300 },
      { name: '5 star', count: 740 }
    ]
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/app2/200/200',
    title: 'FitTrack',
    companyName: 'HealthPro',
    description: 'Track workouts and your daily health metrics.',
    size: 58,
    reviews: 850,
    ratingAvg: 4.2,
    downloads: 180000,
    ratings: [
      { name: '1 star', count: 20 },
      { name: '2 star', count: 30 },
      { name: '3 star', count: 150 },
      { name: '4 star', count: 350 },
      { name: '5 star', count: 300 }
    ]
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/app3/200/200',
    title: 'NoteFlow',
    companyName: 'Paperless',
    description: 'Organized notes with markdown support.',
    size: 28,
    reviews: 430,
    ratingAvg: 4.6,
    downloads: 90000,
    ratings: [
      { name: '1 star', count: 10 },
      { name: '2 star', count: 5 },
      { name: '3 star', count: 25 },
      { name: '4 star', count: 150 },
      { name: '5 star', count: 240 }
    ]
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/app4/200/200',
    title: 'PhotoForge',
    companyName: 'PixLabs',
    description: 'Quick photo edits with pro filters.',
    size: 120,
    reviews: 2100,
    ratingAvg: 4.8,
    downloads: 620000,
    ratings: [
      { name: '1 star', count: 30 },
      { name: '2 star', count: 20 },
      { name: '3 star', count: 100 },
      { name: '4 star', count: 500 },
      { name: '5 star', count: 1450 }
    ]
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/app5/200/200',
    title: 'BudgetBee',
    companyName: 'Finly',
    description: 'Personal finance tracking and budgets.',
    size: 35,
    reviews: 670,
    ratingAvg: 4.1,
    downloads: 140000,
    ratings: [
      { name: '1 star', count: 15 },
      { name: '2 star', count: 30 },
      { name: '3 star', count: 200 },
      { name: '4 star', count: 250 },
      { name: '5 star', count: 175 }
    ]
  },
  {
    id: 6,
    image: 'https://picsum.photos/seed/app6/200/200',
    title: 'TravelMate',
    companyName: 'Roam',
    description: 'Plan trips, itineraries and discover places.',
    size: 90,
    reviews: 980,
    ratingAvg: 4.3,
    downloads: 230000,
    ratings: [
      { name: '1 star', count: 40 },
      { name: '2 star', count: 40 },
      { name: '3 star', count: 200 },
      { name: '4 star', count: 300 },
      { name: '5 star', count: 400 }
    ]
  },
  {
    id: 7,
    image: 'https://picsum.photos/seed/app7/200/200',
    title: 'CookBook',
    companyName: 'Tasty',
    description: 'Tons of recipes and shopping lists.',
    size: 45,
    reviews: 340,
    ratingAvg: 4.0,
    downloads: 87000,
    ratings: [
      { name: '1 star', count: 8 },
      { name: '2 star', count: 20 },
      { name: '3 star', count: 60 },
      { name: '4 star', count: 120 },
      { name: '5 star', count: 132 }
    ]
  },
  {
    id: 8,
    image: 'https://picsum.photos/seed/app8/200/200',
    title: 'LearnLang',
    companyName: 'EduSpark',
    description: 'Interactive language learning lessons.',
    size: 200,
    reviews: 1900,
    ratingAvg: 4.7,
    downloads: 410000,
    ratings: [
      { name: '1 star', count: 20 },
      { name: '2 star', count: 30 },
      { name: '3 star', count: 150 },
      { name: '4 star', count: 600 },
      { name: '5 star', count: 1100 }
    ]
  },
  {
    id: 9,
    image: 'https://picsum.photos/seed/app9/200/200',
    title: 'CalmMind',
    companyName: 'Mindful',
    description: 'Meditations and sleep sounds.',
    size: 150,
    reviews: 2500,
    ratingAvg: 4.9,
    downloads: 720000,
    ratings: [
      { name: '1 star', count: 10 },
      { name: '2 star', count: 10 },
      { name: '3 star', count: 30 },
      { name: '4 star', count: 200 },
      { name: '5 star', count: 2250 }
    ]
  },
  {
    id: 10,
    image: 'https://picsum.photos/seed/app10/200/200',
    title: 'TaskHero',
    companyName: 'FlowCo',
    description: 'Tasks and projects with kanban board.',
    size: 60,
    reviews: 520,
    ratingAvg: 4.4,
    downloads: 150000,
    ratings: [
      { name: '1 star', count: 25 },
      { name: '2 star', count: 40 },
      { name: '3 star', count: 100 },
      { name: '4 star', count: 200 },
      { name: '5 star', count: 155 }
    ]
  },
  {
    id: 11,
    image: 'https://picsum.photos/seed/app11/200/200',
    title: 'Weatherly',
    companyName: 'SkyNet',
    description: 'Accurate weather forecast & alerts.',
    size: 25,
    reviews: 320,
    ratingAvg: 4.0,
    downloads: 60000,
    ratings: [
      { name: '1 star', count: 12 },
      { name: '2 star', count: 20 },
      { name: '3 star', count: 60 },
      { name: '4 star', count: 120 },
      { name: '5 star', count: 108 }
    ]
  },
  {
    id: 12,
    image: 'https://picsum.photos/seed/app12/200/200',
    title: 'StockWatch',
    companyName: 'TradeWise',
    description: 'Monitor your portfolio and live quotes.',
    size: 80,
    reviews: 880,
    ratingAvg: 4.3,
    downloads: 210000,
    ratings: [
      { name: '1 star', count: 30 },
      { name: '2 star', count: 40 },
      { name: '3 star', count: 150 },
      { name: '4 star', count: 300 },
      { name: '5 star', count: 360 }
    ]
  }
];

export default apps;
