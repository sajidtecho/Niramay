// Mock data for the Niramay platform

export const donors = [
  {
    id: 1,
    name: "The Grand Restaurant",
    type: "restaurant",
    location: "Mumbai, Maharashtra",
    contact: "+91 98765 43210",
    email: "contact@grandrestaurant.com",
    foodType: "Multi-cuisine",
    avgDonations: 50,
    status: "active"
  },
  {
    id: 2,
    name: "Elite Caterers",
    type: "caterer",
    location: "Delhi NCR",
    contact: "+91 98765 43211",
    email: "info@elitecaterers.com",
    foodType: "Event Catering",
    avgDonations: 120,
    status: "active"
  },
  {
    id: 3,
    name: "Spice Garden Bistro",
    type: "restaurant",
    location: "Bangalore, Karnataka",
    contact: "+91 98765 43212",
    email: "hello@spicegarden.com",
    foodType: "Indian Cuisine",
    avgDonations: 75,
    status: "active"
  }
];

export const recipients = [
  {
    id: 1,
    name: "Hope Foundation",
    type: "ngo",
    location: "Mumbai, Maharashtra",
    contact: "+91 98765 43220",
    email: "contact@hopefoundation.org",
    capacity: 200,
    focusArea: "Homeless shelters",
    status: "verified"
  },
  {
    id: 2,
    name: "Community Food Bank",
    type: "food_bank",
    location: "Delhi NCR",
    contact: "+91 98765 43221",
    email: "info@communityfoodbank.org",
    capacity: 500,
    focusArea: "Low-income families",
    status: "verified"
  },
  {
    id: 3,
    name: "Seva Trust",
    type: "ngo",
    location: "Pune, Maharashtra",
    contact: "+91 98765 43222",
    email: "contact@sevatrust.org",
    capacity: 150,
    focusArea: "Children & elderly",
    status: "verified"
  }
];

export const donations = [
  {
    id: 1,
    donorId: 1,
    donorName: "The Grand Restaurant",
    recipientId: 1,
    recipientName: "Hope Foundation",
    foodType: "Cooked meals",
    quantity: "50 meals",
    date: "2024-11-18",
    status: "completed",
    pickupTime: "20:00"
  },
  {
    id: 2,
    donorId: 2,
    donorName: "Elite Caterers",
    recipientId: 2,
    recipientName: "Community Food Bank",
    foodType: "Event leftovers",
    quantity: "100 meals",
    date: "2024-11-19",
    status: "scheduled",
    pickupTime: "22:00"
  },
  {
    id: 3,
    donorId: 3,
    donorName: "Spice Garden Bistro",
    recipientId: 3,
    recipientName: "Seva Trust",
    foodType: "Fresh produce",
    quantity: "30 kg",
    date: "2024-11-17",
    status: "completed",
    pickupTime: "21:00"
  }
];

export const events = [
  {
    id: 1,
    title: "Community Food Drive",
    description: "Join us for a community food collection drive to support local families in need.",
    date: "2024-11-25",
    time: "10:00 AM",
    location: "Central Park, Mumbai",
    organizer: "Hope Foundation",
    volunteers: 45,
    status: "upcoming"
  },
  {
    id: 2,
    title: "Volunteer Training Workshop",
    description: "Learn about food safety, handling, and distribution practices.",
    date: "2024-11-22",
    time: "3:00 PM",
    location: "Community Center, Delhi",
    organizer: "Community Food Bank",
    volunteers: 30,
    status: "upcoming"
  },
  {
    id: 3,
    title: "Thanksgiving Meal Distribution",
    description: "Help distribute meals to homeless shelters across the city.",
    date: "2024-11-15",
    time: "6:00 PM",
    location: "Multiple locations",
    organizer: "Seva Trust",
    volunteers: 60,
    status: "completed"
  }
];

export const posts = [
  {
    id: 1,
    author: "Hope Foundation",
    authorType: "ngo",
    content: "Thanks to The Grand Restaurant for their consistent support! Your donations have helped feed 200+ people this month. 🙏",
    likes: 156,
    comments: 23,
    timestamp: "2024-11-18T15:30:00",
    image: null
  },
  {
    id: 2,
    author: "Elite Caterers",
    authorType: "donor",
    content: "Proud to announce we've donated over 1000 meals this year through Niramay! Together we can end food waste and hunger. 💚",
    likes: 234,
    comments: 45,
    timestamp: "2024-11-17T10:15:00",
    image: null
  },
  {
    id: 3,
    author: "Community Food Bank",
    authorType: "ngo",
    content: "Looking for volunteers for our upcoming food drive on Nov 25th. Join us in making a difference! #FoodForAll",
    likes: 89,
    comments: 12,
    timestamp: "2024-11-16T14:20:00",
    image: null
  }
];

export const volunteers = [
  {
    id: 1,
    name: "Raj Kumar",
    email: "raj.kumar@email.com",
    phone: "+91 98765 43230",
    location: "Mumbai",
    interests: ["Food distribution", "Event organization"],
    availability: "Weekends",
    hoursContributed: 45
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43231",
    location: "Delhi",
    interests: ["Cooking", "Community service"],
    availability: "Evenings",
    hoursContributed: 32
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit.patel@email.com",
    phone: "+91 98765 43232",
    location: "Bangalore",
    interests: ["Logistics", "Transportation"],
    availability: "Flexible",
    hoursContributed: 67
  }
];
