
export enum Role {
  Public = 'Public',
  Donor = 'Donor',
  Recipient = 'Recipient',
  Community = 'Community',
}

export enum DonationStatus {
  Available = 'Available',
  Claimed = 'Claimed',
}

export interface Donation {
  id: string;
  donorId: string;
  donorName: string;
  foodType: string;
  quantity: string;
  readyTime: Date;
  expiryDate: Date;
  shelfLife: string;
  status: DonationStatus;
  recipientId?: string;
  timestamp: Date;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
}

export interface ImpactStats {
  foodSavedKg: number;
  co2Reduced: number;
  peopleFed: number;
}

export interface CommunityEvent {
  id: string;
  title: string;
  date: Date;
  location: string;
  description: string;
  organizer: string;
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  organization: string;
  commitment: string;
  description: string;
  skills: string[];
}

export interface CommunityReply {
  id: string;
  author: string;
  authorRole: Role;
  timestamp: Date;
  content: string;
}

export interface CommunityPost {
  id: string;
  author: string;
  authorRole: Role;
  timestamp: Date;
  title: string;
  content: string;
  replies: CommunityReply[];
}
