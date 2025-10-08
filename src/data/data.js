const data = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/app1/200/200',
    title: 'Chatly',
    companyName: 'SkyApps',
    description:
      'Chatly makes communication effortless for teams and friends. Enjoy real-time messaging, media sharing, and private channels — all in a lightweight, modern interface built for speed and simplicity.',
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
    description:
      'FitTrack helps you monitor your workouts, nutrition, and progress with smart analytics. Create custom plans, set goals, and stay motivated with reminders, streaks, and social challenges.',
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
    description:
      'NoteFlow gives you the freedom to capture ideas anywhere. Write with markdown, organize notes in folders, sync across devices, and collaborate in real time with teammates or classmates.',
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
    description:
      'PhotoForge is your creative studio on the go. Apply stunning filters, correct lighting, and add artistic effects with AI-powered tools designed for professionals and beginners alike.',
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
    description:
      'BudgetBee makes personal finance simple and stress-free. Track your expenses, set spending limits, and view beautiful visual summaries that help you stay financially organized and confident.',
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
    description:
      'TravelMate helps you plan smarter and travel better. Create itineraries, discover attractions, manage bookings, and share trips with friends — all in one beautifully designed travel companion app.',
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
    description:
      'CookBook brings your favorite recipes to life. Browse thousands of dishes, save favorites, auto-generate grocery lists, and follow step-by-step instructions for a perfect meal every time.',
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
    description:
      'LearnLang turns language learning into an adventure. Practice speaking, writing, and listening with bite-sized lessons, fun quizzes, and AI feedback that adapts to your skill level.',
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
    description:
      'CalmMind helps you relax, meditate, and sleep better. Choose from hundreds of guided sessions, soothing sounds, and breathing exercises designed to reduce stress and improve focus.',
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
    description:
      'TaskHero organizes your workflow with smart lists, reminders, and project boards. Manage priorities, set due dates, and collaborate with teammates in one simple productivity app.',
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
    description:
      'Weatherly gives you real-time weather updates, radar maps, and severe storm alerts. Stay prepared with accurate forecasts tailored to your exact location and outdoor plans.',
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
    description:
      'StockWatch keeps you in control of your investments. Track live prices, set custom alerts, and view detailed analytics for your portfolio in one sleek, intuitive dashboard.',
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
  },
  {
    id: 13,
    image: 'https://picsum.photos/seed/app13/200/200',
    title: 'MusicFlow',
    companyName: 'Soundify',
    description:
      'Stream millions of tracks and create playlists that match your mood. MusicFlow delivers personalized recommendations and offline downloads for non-stop listening.',
    size: 130,
    reviews: 2700,
    ratingAvg: 4.8,
    downloads: 850000,
    ratings: [
      { name: '1 star', count: 25 },
      { name: '2 star', count: 20 },
      { name: '3 star', count: 100 },
      { name: '4 star', count: 350 },
      { name: '5 star', count: 2205 }
    ]
  },
  {
    id: 14,
    image: 'https://picsum.photos/seed/app14/200/200',
    title: 'ReadOn',
    companyName: 'Bookly',
    description:
      'Enjoy ebooks and audiobooks anywhere with ReadOn. Sync across devices, switch between reading and listening, and get smart suggestions based on your interests.',
    size: 180,
    reviews: 1500,
    ratingAvg: 4.6,
    downloads: 500000,
    ratings: [
      { name: '1 star', count: 20 },
      { name: '2 star', count: 30 },
      { name: '3 star', count: 80 },
      { name: '4 star', count: 400 },
      { name: '5 star', count: 970 }
    ]
  },
  {
    id: 15,
    image: 'https://picsum.photos/seed/app15/200/200',
    title: 'ShopEasy',
    companyName: 'BuyMore',
    description:
      'ShopEasy simplifies online shopping with exclusive deals and fast checkout. Save your favorite products, track deliveries, and shop securely from trusted brands.',
    size: 140,
    reviews: 3200,
    ratingAvg: 4.5,
    downloads: 920000,
    ratings: [
      { name: '1 star', count: 50 },
      { name: '2 star', count: 60 },
      { name: '3 star', count: 200 },
      { name: '4 star', count: 800 },
      { name: '5 star', count: 2090 }
    ]
  },
  {
    id: 16,
    image: 'https://picsum.photos/seed/app16/200/200',
    title: 'FocusPro',
    companyName: 'MindWorks',
    description:
      'Boost concentration using the proven Pomodoro method. FocusPro helps you manage time, reduce distractions, and analyze productivity trends through elegant visual charts.',
    size: 50,
    reviews: 890,
    ratingAvg: 4.7,
    downloads: 190000,
    ratings: [
      { name: '1 star', count: 10 },
      { name: '2 star', count: 10 },
      { name: '3 star', count: 40 },
      { name: '4 star', count: 250 },
      { name: '5 star', count: 580 }
    ]
  },
  {
    id: 17,
    image: 'https://picsum.photos/seed/app17/200/200',
    title: 'GameZone',
    companyName: 'PlayHub',
    description:
      'Discover trending games, watch live streams, and compete with global players. GameZone keeps you connected to your gaming community and top leaderboards.',
    size: 300,
    reviews: 4100,
    ratingAvg: 4.4,
    downloads: 1000000,
    ratings: [
      { name: '1 star', count: 100 },
      { name: '2 star', count: 150 },
      { name: '3 star', count: 500 },
      { name: '4 star', count: 900 },
      { name: '5 star', count: 2450 }
    ]
  },
  {
    id: 18,
    image: 'https://picsum.photos/seed/app18/200/200',
    title: 'MealPrep',
    companyName: 'FitEats',
    description:
      'MealPrep helps you plan balanced meals, generate shopping lists, and track macros. Stay consistent with reminders and personalized nutrition insights.',
    size: 75,
    reviews: 760,
    ratingAvg: 4.2,
    downloads: 175000,
    ratings: [
      { name: '1 star', count: 20 },
      { name: '2 star', count: 40 },
      { name: '3 star', count: 100 },
      { name: '4 star', count: 300 },
      { name: '5 star', count: 300 }
    ]
  },
  {
    id: 19,
    image: 'https://picsum.photos/seed/app19/200/200',
    title: 'SecureVault',
    companyName: 'LockIt',
    description:
      'SecureVault stores your passwords, notes, and files in encrypted vaults. Access your data securely from any device using biometric or PIN authentication.',
    size: 40,
    reviews: 1120,
    ratingAvg: 4.8,
    downloads: 260000,
    ratings: [
      { name: '1 star', count: 10 },
      { name: '2 star', count: 15 },
      { name: '3 star', count: 60 },
      { name: '4 star', count: 200 },
      { name: '5 star', count: 835 }
    ]
  },
  {
    id: 20,
    image: 'https://picsum.photos/seed/app20/200/200',
    title: 'SmPlan',
    companyName: 'Productive.io',
    description:
      'SmPlan combines the Pomodoro technique with a modern task manager. Stay productive, reduce burnout, and balance work with smart reminders and progress tracking.',
    size: 291,
    reviews: 54000,
    ratingAvg: 4.9,
    downloads: 8000000,
    ratings: [
      { name: '1 star', count: 600 },
      { name: '2 star', count: 400 },
      { name: '3 star', count: 1200 },
      { name: '4 star', count: 9000 },
      { name: '5 star', count: 12000 }
    ]
  }
];

export default data;
