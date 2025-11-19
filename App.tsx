
import React, { useState, useEffect, useCallback } from 'react';
import { Role, Donation, ImpactStats, DonationStatus, CommunityEvent, VolunteerOpportunity, CommunityPost, CommunityReply } from './types';
import { MOCK_DONATIONS, MOCK_EVENTS, MOCK_VOLUNTEER_OPPORTUNITIES, MOCK_POSTS } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import CommunityView from './modules/community/CommunityView';
import DonorView from './modules/donor/DonorView';
import RecipientView from './modules/recipient/RecipientView';
import CommunityEngagementView from './modules/community_engagement/CommunityEngagementView';
import HelpBot from './modules/help/HelpBot';

export interface NewDonationData {
  foodType: string;
  quantity: string;
  readyTime: Date;
  expiryDate: Date;
  shelfLife: string;
  address: string;
}

export interface NewPostData {
  title: string;
  content: string;
}

export interface NewReplyData {
  content: string;
}

const App: React.FC = () => {
  const [role, setRole] = useState<Role>(Role.Public);
  const [donations, setDonations] = useState<Donation[]>(MOCK_DONATIONS);
  const [events] = useState<CommunityEvent[]>(MOCK_EVENTS);
  const [opportunities] = useState<VolunteerOpportunity[]>(MOCK_VOLUNTEER_OPPORTUNITIES);
  const [posts, setPosts] = useState<CommunityPost[]>(MOCK_POSTS);
  const [stats, setStats] = useState<ImpactStats>({
    foodSavedKg: 1250,
    co2Reduced: 3125,
    peopleFed: 8350,
  });

  const handleAddDonation = (newDonation: NewDonationData) => {
    const donation: Donation = {
      foodType: newDonation.foodType,
      quantity: newDonation.quantity,
      readyTime: newDonation.readyTime,
      expiryDate: newDonation.expiryDate,
      shelfLife: newDonation.shelfLife,
      id: `d${Date.now()}`,
      timestamp: new Date(),
      donorId: 'donor1', // Mocked donor
      donorName: 'Urban Eatery',
      status: DonationStatus.Available,
      location: { lat: 28.58, lng: 77.32, address: newDonation.address }, // Noida coordinates
    };
    setDonations(prev => [donation, ...prev]);
    // Simulate impact update
    setStats(prev => ({
        ...prev,
        foodSavedKg: prev.foodSavedKg + 25,
        co2Reduced: prev.co2Reduced + 62,
        peopleFed: prev.peopleFed + 50
    }));
  };

  const handleClaimDonation = (donationId: string) => {
    setDonations(prev => 
        prev.map(d => d.id === donationId ? {...d, status: DonationStatus.Claimed, recipientId: 'ngo1'} : d)
    );
  };

  const handleAddPost = (newPost: NewPostData) => {
    const post: CommunityPost = {
      id: `p${Date.now()}`,
      author: 'You (Community Member)', // Mocked user
      authorRole: Role.Community,
      timestamp: new Date(),
      title: newPost.title,
      content: newPost.content,
      replies: [],
    };
    setPosts(prev => [post, ...prev]);
  };

  const handleAddReply = (postId: string, newReply: NewReplyData) => {
    const reply: CommunityReply = {
      id: `r${Date.now()}`,
      author: 'You (Community Member)', // Mocked user
      authorRole: Role.Community,
      timestamp: new Date(),
      content: newReply.content,
    };
    setPosts(prev => 
        prev.map(p => p.id === postId ? {...p, replies: [...p.replies, reply]} : p)
    );
  };
  
  // Simulate real-time impact counter increase
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        foodSavedKg: prev.foodSavedKg + 1,
        co2Reduced: prev.co2Reduced + 2,
        peopleFed: prev.peopleFed + 3,
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderView = () => {
    switch (role) {
      case Role.Donor:
        return <DonorView 
          donations={donations.filter(d => d.donorId === 'donor1')} 
          onAddDonation={handleAddDonation} />;
      case Role.Recipient:
        return <RecipientView 
          donations={donations.filter(d => d.status === DonationStatus.Available)} 
          onClaimDonation={handleClaimDonation} />;
      case Role.Community:
        return <CommunityEngagementView 
          events={events} 
          opportunities={opportunities} 
          posts={posts}
          onAddPost={handleAddPost}
          onAddReply={handleAddReply}
        />;
      case Role.Public:
      default:
        return <CommunityView 
          stats={stats} 
          donations={donations.filter(d => d.status === DonationStatus.Available)}
          onStartDonating={() => setRole(Role.Donor)}
        />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800">
      <Header currentRole={role} setRole={setRole} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderView()}
      </main>
      <Footer />
      <HelpBot />
    </div>
  );
};

export default App;
