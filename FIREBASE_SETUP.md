# Firebase Setup Guide for Intech Logix

## 🔥 Firebase Configuration Steps

### 1. Create Admin User in Firebase Authentication

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your **intech-logix** project
3. Navigate to **Authentication** → **Users**
4. Click **Add User**
5. Enter:
   - **Email**: `admin@intechlogix.com`
   - **Password**: `admin123`
   - Click **Add User**

### 2. Configure Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. If not created, click **Create Database**
3. Choose **Start in test mode** (for now)
4. Select your preferred location
5. Click **Done**

### 3. Set Up Firestore Security Rules

1. Go to **Firestore Database** → **Rules**
2. Replace the existing rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read/write for contacts collection (for contact form)
    match /contacts/{document} {
      allow read, write: if request.auth != null;
      allow create: if true;  // Allow anyone to create contacts
    }
  }
}
```

3. Click **Publish**

### 4. Enable Authentication Methods

1. Go to **Authentication** → **Sign-in method**
2. Enable **Email/Password** provider
3. Click **Save**

### 5. Test Your Setup

1. **Test Contact Form**: Go to your website `/contact` and submit a form
2. **Test Admin Login**: Go to `/admin/login` and login with `admin@intechlogix.com / admin123`
3. **Verify Dashboard**: Check if submitted contacts appear in admin dashboard

## 🚨 Troubleshooting

### If Contact Form Still Fails:
- Check Firestore security rules
- Verify your project ID in Firebase config
- Ensure Firestore database is created

### If Admin Login Fails:
- Verify admin user exists in Firebase Auth
- Check email/password combination
- Ensure Email/Password provider is enabled

### Firebase Console Links:
- **Authentication**: https://console.firebase.google.com/project/intech-logix/authentication/users
- **Firestore**: https://console.firebase.google.com/project/intech-logix/firestore
- **Project Settings**: https://console.firebase.google.com/project/intech-logix/settings/general

## 📞 Need Help??
If you encounter any issues, please share:
1. Screenshots of Firebase console
2. Any error messages from browser console
3. Current status of each setup step