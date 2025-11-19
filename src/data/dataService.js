// Service layer for interacting with mock data
import { donors, recipients, donations, events, posts, volunteers } from './mockData';

// Simulate API delay
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

export const dataService = {
  // Donors
  async getDonors() {
    await delay();
    return donors;
  },

  async getDonorById(id) {
    await delay();
    return donors.find(donor => donor.id === id);
  },

  // Recipients
  async getRecipients() {
    await delay();
    return recipients;
  },

  async getRecipientById(id) {
    await delay();
    return recipients.find(recipient => recipient.id === id);
  },

  // Donations
  async getDonations() {
    await delay();
    return donations;
  },

  async getDonationById(id) {
    await delay();
    return donations.find(donation => donation.id === id);
  },

  async createDonation(donationData) {
    await delay();
    const newDonation = {
      id: donations.length + 1,
      ...donationData,
      status: 'scheduled',
      date: new Date().toISOString().split('T')[0]
    };
    donations.push(newDonation);
    return newDonation;
  },

  // Events
  async getEvents() {
    await delay();
    return events;
  },

  async getEventById(id) {
    await delay();
    return events.find(event => event.id === id);
  },

  async getUpcomingEvents() {
    await delay();
    return events.filter(event => event.status === 'upcoming');
  },

  // Posts
  async getPosts() {
    await delay();
    return posts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  },

  async createPost(postData) {
    await delay();
    const newPost = {
      id: posts.length + 1,
      ...postData,
      likes: 0,
      comments: 0,
      timestamp: new Date().toISOString()
    };
    posts.unshift(newPost);
    return newPost;
  },

  async likePost(postId) {
    await delay();
    const post = posts.find(p => p.id === postId);
    if (post) {
      post.likes += 1;
    }
    return post;
  },

  // Volunteers
  async getVolunteers() {
    await delay();
    return volunteers;
  },

  async registerVolunteer(volunteerData) {
    await delay();
    const newVolunteer = {
      id: volunteers.length + 1,
      ...volunteerData,
      hoursContributed: 0
    };
    volunteers.push(newVolunteer);
    return newVolunteer;
  },

  // Statistics
  async getStatistics() {
    await delay();
    return {
      totalDonors: donors.length,
      totalRecipients: recipients.length,
      totalDonations: donations.length,
      totalMealsDistributed: donations.reduce((sum, d) => {
        const match = d.quantity.match(/(\d+)/);
        return sum + (match ? parseInt(match[0]) : 0);
      }, 0),
      activeVolunteers: volunteers.length,
      upcomingEvents: events.filter(e => e.status === 'upcoming').length
    };
  }
};
