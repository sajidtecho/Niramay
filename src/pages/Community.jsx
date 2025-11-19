import { useEffect, useState } from 'react';
import { dataService } from '../data/dataService';
import Card from '../components/Card';
import './Community.css';

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await dataService.getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  const handleLike = async (postId) => {
    try {
      const updatedPost = await dataService.likePost(postId);
      setPosts(posts.map(p => p.id === postId ? updatedPost : p));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return `${diffMins}m ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else if (diffDays < 7) {
      return `${diffDays}d ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const getAuthorIcon = (authorType) => {
    return authorType === 'ngo' ? '🤝' : authorType === 'donor' ? '🍽️' : '👤';
  };

  if (loading) {
    return <div className="loading">Loading community posts...</div>;
  }

  return (
    <div className="community-page">
      <div className="page-header">
        <h1>Community Feed</h1>
        <p>Stay connected with updates, stories, and discussions</p>
      </div>

      <div className="community-layout">
        <div className="posts-section">
          <Card className="create-post-card">
            <h3>Share Your Story</h3>
            <textarea 
              className="post-input" 
              placeholder="What's happening in your community?"
              rows="3"
            />
            <button className="post-button">Post</button>
          </Card>

          <div className="posts-feed">
            {posts.map((post) => (
              <Card key={post.id} className="post-card">
                <div className="post-header">
                  <div className="author-info">
                    <div className="author-avatar">
                      {getAuthorIcon(post.authorType)}
                    </div>
                    <div className="author-details">
                      <strong>{post.author}</strong>
                      <span className="post-time">{formatTimestamp(post.timestamp)}</span>
                    </div>
                  </div>
                  <span className={`author-badge ${post.authorType}`}>
                    {post.authorType === 'ngo' ? 'NGO' : post.authorType === 'donor' ? 'Donor' : 'User'}
                  </span>
                </div>

                <div className="post-content">
                  <p>{post.content}</p>
                </div>

                <div className="post-actions">
                  <button 
                    className="action-button like"
                    onClick={() => handleLike(post.id)}
                  >
                    <span className="action-icon">❤️</span>
                    <span className="action-count">{post.likes}</span>
                  </button>
                  <button className="action-button comment">
                    <span className="action-icon">💬</span>
                    <span className="action-count">{post.comments}</span>
                  </button>
                  <button className="action-button share">
                    <span className="action-icon">🔄</span>
                    <span>Share</span>
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <aside className="community-sidebar">
          <Card className="sidebar-card">
            <h3>Community Guidelines</h3>
            <ul>
              <li>✅ Be respectful and supportive</li>
              <li>✅ Share success stories</li>
              <li>✅ Coordinate volunteer efforts</li>
              <li>✅ Ask questions and help others</li>
              <li>❌ No spam or promotional content</li>
            </ul>
          </Card>

          <Card className="sidebar-card">
            <h3>Trending Topics</h3>
            <div className="trending-topics">
              <span className="topic-tag">#FoodForAll</span>
              <span className="topic-tag">#ZeroWaste</span>
              <span className="topic-tag">#CommunityService</span>
              <span className="topic-tag">#VolunteerWork</span>
              <span className="topic-tag">#FoodDonation</span>
            </div>
          </Card>

          <Card className="sidebar-card">
            <h3>Quick Stats</h3>
            <div className="quick-stats">
              <div className="stat">
                <strong>500+</strong>
                <span>Active Members</span>
              </div>
              <div className="stat">
                <strong>50+</strong>
                <span>Posts Today</span>
              </div>
              <div className="stat">
                <strong>1.2K</strong>
                <span>This Week</span>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default Community;
