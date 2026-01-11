# NBA All-Star Weekend 2026 - Event Website

A modern, responsive React website for NBA All-Star Weekend 2026 featuring four exciting events with bold, basketball-inspired design.

## 🏀 Features

- **Home Page**: Dynamic landing page with event overview
- **4 Event Pages**: 
  - 3-Point Contest
  - Slam Dunk Contest
  - Skills Challenge
  - All-Star Game
- **FAQ Page**: Interactive accordion with common questions
- **Sponsorship Page**: Tiered sponsorship packages
- **Contact Page**: Contact form with company information
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Bold design with smooth animations and transitions

## 📋 Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. **Node.js** (version 14.0 or higher)
   - Download from: https://nodejs.org/
   - This includes npm (Node Package Manager)
   - To check if installed, open terminal/command prompt and type:
     ```
     node --version
     npm --version
     ```

2. **A Code Editor** (optional, but recommended)
   - Visual Studio Code: https://code.visualstudio.com/
   - Or any text editor of your choice

## 🚀 Installation & Setup

Follow these steps to get the website running on your computer:

### Step 1: Extract the Project

Extract the `nba-allstar-2026` folder to your desired location on your computer.

### Step 2: Open Terminal/Command Prompt

**On Windows:**
- Press `Windows Key + R`
- Type `cmd` and press Enter
- Navigate to the project folder:
  ```
  cd path\to\nba-allstar-2026
  ```

**On Mac:**
- Press `Command + Space`
- Type `terminal` and press Enter
- Navigate to the project folder:
  ```
  cd path/to/nba-allstar-2026
  ```

### Step 3: Install Dependencies

In the terminal, run the following command:

```bash
npm install
```

This will download and install all the necessary packages. It may take a few minutes.

### Step 4: Start the Development Server

Once installation is complete, run:

```bash
npm start
```

The website will automatically open in your default browser at:
```
http://localhost:3000
```

If it doesn't open automatically, manually open your browser and go to that address.

## 🎯 Using the Website

### Navigation
- Click on any link in the navigation bar to explore different pages
- The navigation is responsive - on mobile devices, click the hamburger menu (☰) to see all links

### Pages Available
1. **Home** - Main landing page with event overview
2. **3-Point Contest** - Detailed information about the shooting competition
3. **Slam Dunk** - Details about the dunk contest
4. **Skills Challenge** - Information about the skills obstacle course
5. **All-Star Game** - Main event details
6. **FAQ** - Click questions to expand answers
7. **Sponsorship** - Sponsorship tier information
8. **Contact** - Contact form and company information

## 🛠️ Making Changes

### Updating Content

All page content is in the `src/pages/` folder:
- `Home.js` - Home page content
- `Event1.js` - 3-Point Contest
- `Event2.js` - Slam Dunk Contest
- `Event3.js` - Skills Challenge
- `Event4.js` - All-Star Game
- `FAQ.js` - FAQ questions and answers
- `Sponsorship.js` - Sponsorship information
- `Contact.js` - Contact information

### Updating Styles

Design and colors are in `src/App.css`. Key variables at the top:
- `--primary`: Main red color
- `--secondary`: Gold/yellow color
- `--dark`: Background color

### Adding New Pages

1. Create a new file in `src/pages/`
2. Add a route in `src/App.js`
3. Add a navigation link in the Navigation component

## 📦 Building for Production

When you're ready to deploy the website:

```bash
npm run build
```

This creates an optimized production build in the `build` folder that you can upload to a web hosting service.

## 🌐 Browser Support

The website works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🎨 Color Scheme

- **Primary Red**: #E31837 - Main brand color
- **Gold**: #FDB927 - Accent color
- **Dark**: #0A0A0A - Background
- **Light Gray**: #CCCCCC - Text

## 📝 Fonts Used

- **Bebas Neue** - Headlines and titles
- **Oswald** - Subheadings
- **Montserrat** - Body text

## 🔧 Troubleshooting

### Issue: "npm is not recognized"
**Solution**: Node.js is not installed or not in your PATH. Reinstall Node.js from nodejs.org

### Issue: Port 3000 is already in use
**Solution**: Either close the application using port 3000, or run:
```bash
PORT=3001 npm start
```

### Issue: Changes not showing up
**Solution**: 
1. Save your files
2. Wait for the automatic reload
3. If needed, stop the server (Ctrl+C) and run `npm start` again
4. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Blank page or errors
**Solution**: 
1. Check the browser console for errors (F12)
2. Make sure all dependencies are installed (`npm install`)
3. Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

## 📞 Need Help?

If you encounter any issues:
1. Check the error message in the terminal
2. Google the error message
3. Check the browser console (F12) for errors

## 📄 File Structure

```
nba-allstar-2026/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── pages/              # All page components
│   │   ├── Home.js
│   │   ├── Event1.js
│   │   ├── Event2.js
│   │   ├── Event3.js
│   │   ├── Event4.js
│   │   ├── FAQ.js
│   │   ├── Sponsorship.js
│   │   └── Contact.js
│   ├── App.js              # Main app component with routing
│   ├── App.css             # All styles
│   └── index.js            # Entry point
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🚀 Quick Start Summary

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build for production (when ready to deploy)
npm run build
```

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs tests (if any are added)
- `npm run eject` - Ejects from Create React App (advanced, irreversible)

---

**Built with React** | **Designed for NBA All-Star Weekend 2026**
