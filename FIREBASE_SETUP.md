# Firebase Setup Guide for Titanic Saver

## Overview
This guide will help you set up Firebase Firestore to save bus ticket details to the database.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter your project name (e.g., "titanic-saver")
4. Accept the terms and click **"Continue"**
5. Choose analytics settings (optional) and click **"Create project"**
6. Wait for the project to be created (2-3 minutes)

## Step 2: Add Firebase to Your Web App

1. In the Firebase Console, go to **Project Settings** (gear icon)
2. Click on the **"Your apps"** section at the bottom
3. Click the **Web icon** `</>` to create a new web app
4. Enter an app name (e.g., "titanic-saver-web")
5. Click **"Register app"**
6. Copy the Firebase config object - you'll see something like:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123def456"
};
```

## Step 3: Get Your Firebase Credentials

Extract these values from your Firebase config:

- **apiKey** → VITE_FIREBASE_API_KEY
- **authDomain** → VITE_FIREBASE_AUTH_DOMAIN
- **projectId** → VITE_FIREBASE_PROJECT_ID
- **storageBucket** → VITE_FIREBASE_STORAGE_BUCKET
- **messagingSenderId** → VITE_FIREBASE_MESSAGING_SENDER_ID
- **appId** → VITE_FIREBASE_APP_ID

## Step 4: Create Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **"Create database"**
3. Choose **"Start in test mode"** (for development)
4. Select your region (closest to you)
5. Click **"Enable"**

## Step 5: Update .env.local File

Open `.env.local` in the root of your project and fill in your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=AIzaSy_YOUR_API_KEY_HERE
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abc123def456789abc
```

**Example with actual values:**
```env
VITE_FIREBASE_API_KEY=AIzaSyDxiuE8O_k_1234567890abcdefghijklm
VITE_FIREBASE_AUTH_DOMAIN=titanic-saver.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=titanic-saver
VITE_FIREBASE_STORAGE_BUCKET=titanic-saver.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=1234567890
VITE_FIREBASE_APP_ID=1:1234567890:web:abc123def456
```

## Step 6: Restart Development Server

1. Stop your current dev server (Ctrl+C in terminal)
2. Run: `npm install`
3. Run: `npm run dev`

## How It Works

When you click **"Generate Ticket"** with all fields filled:

1. The form validates all input fields
2. Sends data to Firebase Firestore in the **"tickets"** collection
3. Saves with the following fields:
   - `route` - Bus route number
   - `originating` - Starting stop name
   - `destination` - Ending stop name
   - `ticketsCount` - Number of tickets (as integer)
   - `fare` - Ticket fare in rupees (as decimal)
   - `createdAt` - Timestamp when saved (automatic)
   - `status` - Always set to "active"

4. Shows a success message with the document ID
5. Form clears automatically

## Viewing Saved Tickets

1. Go to Firebase Console
2. Open **Firestore Database**
3. Look for the **"tickets"** collection
4. You'll see all saved ticket records with all details

## Troubleshooting

### Error: "Firebase is not defined"
- Make sure you ran `npm install firebase`
- Restart dev server after installing

### Error: "VITE_FIREBASE_* is undefined"
- Check that `.env.local` file exists in the project root
- Verify all values are correctly copied from Firebase Console
- Restart dev server after updating `.env.local`

### Tickets not saving
- Check browser console for errors (F12)
- Verify Firestore database is in test mode (allows writes)
- Check that all form fields are filled
- Make sure `.env.local` has correct Firebase credentials

### CORS or Network Errors
- This is normal in development - Firebase handles it
- Check your internet connection
- Verify Firebase project is active in console

## Next Steps (Optional)

- Add authentication to restrict who can save tickets
- Create admin panel to view and manage saved tickets
- Add data validation on Firestore rules
- Create reports from ticket data
