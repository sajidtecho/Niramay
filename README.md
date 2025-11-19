# Niramay
निRamay — Food Redistribution & Community Impact Platform

## Overview

निRamay is a mobile-first, single-page React application designed to reduce food waste by connecting donors (restaurants/caterers) with recipients (NGOs/food banks) while enabling community engagement through events, volunteering, and posts.

This project currently functions as a **frontend-only interactive demo** using mocked data, with planned integration for real backend and real-time systems.

## Features

### 🍽️ Donor Management
- Browse active food donors (restaurants and caterers)
- View donor profiles with contact information
- Track average donation metrics
- Register as a new donor

### 🤝 Recipient Management
- Explore verified NGOs and food banks
- View recipient capacity and focus areas
- Access recipient contact details
- Partner registration for organizations

### 📦 Donation Tracking
- Monitor food redistribution activities
- Track donations from donor to recipient
- View donation history and status
- Real-time donation statistics

### 📅 Community Events
- Discover upcoming community events
- View past event history
- Register to volunteer
- Coordinate food drives and workshops

### 💬 Community Feed
- Share updates and success stories
- Engage with community posts
- Like and comment on updates
- Follow trending topics

### 👥 Volunteer Opportunities
- Browse volunteer opportunities
- Register as a volunteer
- Track contribution hours
- Connect with other volunteers

## Technology Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Routing**: React Router DOM
- **Styling**: CSS3 with mobile-first responsive design
- **Development**: ESLint for code quality

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sajidtecho/Niramay.git
cd Niramay
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
Niramay/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Card.jsx
│   │   └── Card.css
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Donors.jsx
│   │   ├── Donors.css
│   │   ├── Recipients.jsx
│   │   ├── Recipients.css
│   │   ├── Donations.jsx
│   │   ├── Donations.css
│   │   ├── Events.jsx
│   │   ├── Events.css
│   │   ├── Community.jsx
│   │   └── Community.css
│   ├── data/            # Mock data and services
│   │   ├── mockData.js
│   │   └── dataService.js
│   ├── App.jsx          # Main app component
│   ├── App.css
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features Implementation Details

### Mock Data Service
The application uses a simulated API layer (`dataService.js`) that:
- Provides async data fetching with artificial delays
- Manages in-memory state for demo purposes
- Supports CRUD operations for posts and donations
- Calculates real-time statistics

### Responsive Design
- Mobile-first approach with breakpoints at 768px and 1024px
- Touch-friendly interface elements
- Optimized navigation for different screen sizes
- Adaptive grid layouts

### Navigation
- Single-page application with client-side routing
- Persistent navigation sidebar on desktop
- Mobile-optimized top navigation
- Active route highlighting

## Future Enhancements

- Backend API integration with Node.js/Express
- Real-time updates using WebSockets
- User authentication and authorization
- Image upload for posts and profiles
- Push notifications for events and donations
- Advanced search and filtering
- Analytics dashboard
- Mobile app (React Native)
- Multi-language support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available for educational and non-commercial use.

## Contact

For questions or suggestions, please open an issue in the repository.

---

**Made with ❤️ for reducing food waste and supporting communities**

