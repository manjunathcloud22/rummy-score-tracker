# 🎲 Rummy Score Tracker

A simple, real-time rummy score tracker built with React + Firebase. Track scores for your rummy games without real money or payments.

## Features

✨ **Core Features:**
- Create and manage multiple games
- Add multiple players per game
- Track scores round by round
- Auto-calculate total scores
- Visual warnings when players approach point limit
- Edit previous round scores
- Share games via WhatsApp link
- Mobile-friendly design

🎯 **Game Rules:**
- Minimum 2 players per game
- Configurable point limit (default 200)
- Lowest score wins
- Player marked "OUT" when score >= point limit
- No login required - share link to play

## Tech Stack

- **Frontend:** React 18 + Vite
- **Database:** Firebase Firestore
- **Hosting:** Firebase Hosting
- **Routing:** React Router v6
- **Styling:** CSS (Mobile-first design)
- **Language:** JavaScript

## Project Structure

```
rummy-score-tracker/
├── src/
│   ├── pages/
│   │   ├── Home.jsx           # Home page - Create New Game
│   │   ├── CreateGame.jsx     # Game creation form
│   │   └── Scoreboard.jsx     # Game scoreboard - Main tracking
│   ├── App.jsx                # Router configuration
│   ├── App.css                # Global styles
│   ├── firebase.js            # Firebase initialization
│   └── main.jsx               # React entry point
├── index.html                 # HTML entry point
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── firebase.json              # Firebase Hosting config
└── README.md                  # This file
```

## Data Model

**Firestore Collection: `games`**

```javascript
{
  gameName: string,
  pointLimit: number,
  players: [
    { id: string, name: string },
    ...
  ],
  rounds: [
    {
      roundNumber: number,
      scores: { playerId: number, ... }
    },
    ...
  ],
  createdAt: timestamp,
  updatedAt: timestamp
}
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- Firebase account
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/manjunathcloud22/rummy-score-tracker.git
cd rummy-score-tracker
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database (Start in test mode)
4. Go to Project Settings → Your apps → Create web app
5. Copy your Firebase config
6. Update `src/firebase.js` with your config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
}
```

### 4. Run Locally
```bash
npm run dev
```
App will open at `http://localhost:3000`

### 5. Deploy to Firebase Hosting

Install Firebase CLI:
```bash
npm install -g firebase-tools
```

Login and initialize:
```bash
firebase login
firebase init hosting
```

Deploy:
```bash
npm run deploy
```

Or manually:
```bash
npm run build
firebase deploy
```

## Usage

### Creating a Game
1. Click "Create New Game" on home page
2. Enter game name
3. Set point limit (default 200)
4. Add player names (minimum 2)
5. Click "Create Game"
6. Share the game link

### Tracking Scores
1. Enter scores for each player in a round
2. Click "Add Round"
3. Scores auto-calculate and update totals
4. Players highlighted when approaching/reaching point limit
5. Edit previous rounds with "Edit" button

### Sharing
- Click the WhatsApp button to share game link
- Anyone with the link can view and update scores
- No authentication required

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Limitations (MVP)

- No authentication - anyone with the link can edit
- No undo functionality
- No game history after deletion
- Scores stored in Firestore (free tier limits apply)

## Future Enhancements

- User authentication
- Private games with access control
- Undo/redo functionality
- Game templates
- Statistics and analytics
- Export scores to CSV
- Dark mode
- Multiple game types

## License

MIT

## Contributing

Feel free to fork and submit pull requests for any improvements!

## Support

For issues or feature requests, please create an issue in the repository.

---

**Made with ❤️ for rummy lovers!**
