
import { Donation, DonationStatus, CommunityEvent, VolunteerOpportunity, CommunityPost, Role } from './types';

export const MOCK_DONATIONS: Donation[] = [
  {
    id: 'd1',
    donorId: 'donor1',
    donorName: 'Urban Eatery',
    foodType: 'North Indian',
    quantity: 'Feeds 50 people',
    readyTime: new Date(Date.now() + 1000 * 60 * 30), // 30 mins from now
    expiryDate: new Date(Date.now() + 1000 * 60 * 60 * 4), // 4 hours from now
    shelfLife: 'Best within 3 hours',
    status: DonationStatus.Available,
    timestamp: new Date(),
    location: { lat: 28.58, lng: 77.32, address: 'G-56, Sector 18, Noida, UP' },
  },
  {
    id: 'd2',
    donorId: 'donor2',
    donorName: 'The Grand Caterer',
    foodType: 'Indian Sweets & Desserts',
    quantity: 'Approx. 10 kg',
    readyTime: new Date(Date.now() + 1000 * 60 * 60), // 1 hour from now
    expiryDate: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours from now
    shelfLife: 'Refrigerate, consume within 24 hours',
    status: DonationStatus.Available,
    timestamp: new Date(),
    location: { lat: 28.47, lng: 77.50, address: 'Alpha 1, Greater Noida, UP' },
  },
  {
    id: 'd3',
    donorId: 'donor1',
    donorName: 'Urban Eatery',
    foodType: 'Fresh Salads & Sandwiches',
    quantity: '30 portions',
    readyTime: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    expiryDate: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago (expired)
    shelfLife: 'Consume immediately',
    status: DonationStatus.Claimed,
    recipientId: 'ngo1',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
    location: { lat: 28.58, lng: 77.32, address: 'G-56, Sector 18, Noida, UP' },
  },
   {
    id: 'd4',
    donorId: 'donor3',
    donorName: 'City Bakery',
    foodType: 'Assorted Breads and Pastries',
    quantity: '2 large boxes',
    readyTime: new Date(Date.now() + 1000 * 60 * 15), // 15 mins from now
    expiryDate: new Date(Date.now() + 1000 * 60 * 60 * 48), // 48 hours from now
    shelfLife: 'Best within 48 hours',
    status: DonationStatus.Available,
    timestamp: new Date(),
    location: { lat: 28.54, lng: 77.34, address: 'Jagdambay Marg, Sector 44, Noida, UP' },
  },
];

export const MOCK_EVENTS: CommunityEvent[] = [
  {
    id: 'e1',
    title: 'Noida Food Rescue Workshop',
    date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 1 week from now
    location: 'Community Hall, Sector 18, Noida',
    description: 'Learn simple techniques to reduce food waste at home and in your community. Interactive sessions and live demos.',
    organizer: 'Noida Food Initiative',
  },
  {
    id: 'e2',
    title: 'Community Kitchen Feast',
    date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14), // 2 weeks from now
    location: 'Greater Noida Community Center',
    description: 'A free meal for everyone, prepared from rescued food. A celebration of community and sustainability.',
    organizer: 'The People\'s Kitchen',
  },
];

export const MOCK_VOLUNTEER_OPPORTUNITIES: VolunteerOpportunity[] = [
  {
    id: 'v1',
    title: 'Food Pickup & Delivery Driver',
    organization: 'Feeding India Foundation',
    commitment: '4-6 hours/week',
    description: 'Collect surplus food from our restaurant partners and deliver it to our network of shelters and NGOs.',
    skills: ['Valid driving license', 'Good communication'],
  },
  {
    id: 'v2',
    title: 'Meal Preparation Assistant',
    organization: 'The People\'s Kitchen',
    commitment: '3 hours on weekends',
    description: 'Help our chefs sort, clean, and prepare rescued ingredients for our community meals.',
    skills: ['Basic kitchen knowledge', 'Team player'],
  },
  {
    id: 'v3',
    title: 'Awareness Campaign Volunteer',
    organization: 'Noida Food Initiative',
    commitment: 'Flexible, project-based',
    description: 'Assist with social media campaigns, content creation, and community outreach to spread the word about food waste.',
    skills: ['Social media savvy', 'Creative writing'],
  },
];

export const MOCK_POSTS: CommunityPost[] = [
  {
    id: 'p1',
    author: 'Nisha from Feeding India',
    authorRole: Role.Recipient,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    title: 'Question about collecting large donations',
    content: 'We are expecting a large donation from a wedding event this weekend. Does anyone have experience or advice on logistics for collecting and storing over 100kgs of food at once?',
    replies: [
      {
        id: 'r1',
        author: 'Raj @ Urban Eatery',
        authorRole: Role.Donor,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        content: 'Great question! We often use insulated containers. Also, check with local cold storage facilities; some offer discounted rates for NGOs. Happy to connect you with our contact.',
      },
      {
        id: 'r2',
        author: 'Anjali (Volunteer)',
        authorRole: Role.Community,
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
        content: 'I have a cargo van and can help with transport on Saturday afternoon if you need an extra pair of hands!',
      },
    ],
  },
  {
    id: 'p2',
    author: 'Amit Singh',
    authorRole: Role.Community,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    title: 'Idea: "Recipe from Scraps" Challenge',
    content: 'What if we started a community challenge to share recipes made from common food scraps (like vegetable peels, stems, etc.)? It could be a fun way to raise awareness about reducing waste at home.',
    replies: [],
  },
];

export const FOOD_CATEGORIES = [
  'North Indian',
  'South Indian',
  'Bengali',
  'Gujarati',
  'Rajasthani',
  'Punjabi',
  'Maharashtrian',
  'Hyderabadi',
  'Indian Street Food',
  'Indian Sweets & Desserts',
  'Fresh Salads & Sandwiches',
  'Assorted Breads and Pastries',
  'Italian Pasta',
  'Mexican Fare',
  'Beverages',
  'Groceries & Produce',
];
