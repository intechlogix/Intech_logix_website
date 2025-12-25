import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  onSnapshot,
  serverTimestamp,
  where
} from "firebase/firestore";
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { db, auth } from "./config";

// Contact/Lead Services
export const contactService = {
  // Add new contact/lead
  async addContact(contactData) {
    try {
      console.log("Attempting to add contact to Firebase...", contactData);
      
      const docRef = await addDoc(collection(db, "contacts"), {
        ...contactData,
        createdAt: serverTimestamp(),
        status: "new",
        isRead: false
      });
      
      console.log("Contact added successfully with ID:", docRef.id);
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Error adding contact:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      
      // Return user-friendly error messages
      let errorMessage = "Failed to submit form. Please try again.";
      
      if (error.code === 'permission-denied') {
        errorMessage = "Permission denied. Please check Firebase security rules.";
      } else if (error.code === 'unavailable') {
        errorMessage = "Service temporarily unavailable. Please try again later.";
      } else if (error.code === 'failed-precondition') {
        errorMessage = "Database not properly configured. Please contact support.";
      }
      
      return { success: false, error: errorMessage };
    }
  },

  // Get all contacts
  async getContacts() {
    try {
      console.log("Fetching contacts from Firebase...");
      
      const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const contacts = [];
      
      querySnapshot.forEach((doc) => {
        contacts.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      console.log("Fetched", contacts.length, "contacts");
      return { success: true, contacts };
    } catch (error) {
      console.error("Error getting contacts:", error);
      return { success: false, error: error.message };
    }
  },

  // Update contact status
  async updateContactStatus(contactId, status) {
    try {
      console.log("Updating contact status:", contactId, "to", status);
      
      const contactRef = doc(db, "contacts", contactId);
      await updateDoc(contactRef, {
        status: status,
        updatedAt: serverTimestamp()
      });
      
      console.log("Contact status updated successfully");
      return { success: true };
    } catch (error) {
      console.error("Error updating contact status:", error);
      return { success: false, error: error.message };
    }
  },

  // Mark contact as read
  async markAsRead(contactId) {
    try {
      console.log("Marking contact as read:", contactId);
      
      const contactRef = doc(db, "contacts", contactId);
      await updateDoc(contactRef, {
        isRead: true,
        updatedAt: serverTimestamp()
      });
      
      console.log("Contact marked as read successfully");
      return { success: true };
    } catch (error) {
      console.error("Error marking contact as read:", error);
      return { success: false, error: error.message };
    }
  },

  // Delete contact
  async deleteContact(contactId) {
    try {
      console.log("Deleting contact:", contactId);
      
      await deleteDoc(doc(db, "contacts", contactId));
      
      console.log("Contact deleted successfully");
      return { success: true };
    } catch (error) {
      console.error("Error deleting contact:", error);
      return { success: false, error: error.message };
    }
  },

  // Listen to contacts in real-time
  listenToContacts(callback) {
    console.log("Setting up real-time listener for contacts...");
    
    const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snapshot) => {
      const contacts = [];
      snapshot.forEach((doc) => {
        contacts.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      console.log("Real-time update: received", contacts.length, "contacts");
      callback(contacts);
    }, (error) => {
      console.error("Error in real-time listener:", error);
    });
  }
};

// Authentication Services
export const authService = {
  // Sign in admin
  async signIn(email, password) {
    try {
      console.log("Attempting to sign in with email:", email);
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      console.log("Sign in successful for user:", userCredential.user.email);
      return { success: true, user: userCredential.user };
    } catch (error) {
      console.error("Error signing in:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      
      // Return user-friendly error messages
      let errorMessage = "Failed to sign in. Please try again.";
      
      if (error.code === 'auth/user-not-found') {
        errorMessage = "No user found with this email address.";
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = "Incorrect password.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "Invalid email address.";
      } else if (error.code === 'auth/user-disabled') {
        errorMessage = "This user account has been disabled.";
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = "Too many failed attempts. Please try again later.";
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = "Invalid credentials. Please check your email and password.";
      }
      
      return { success: false, error: errorMessage };
    }
  },

  // Sign out admin
  async signOut() {
    try {
      console.log("Signing out user...");
      
      await signOut(auth);
      
      console.log("Sign out successful");
      return { success: true };
    } catch (error) {
      console.error("Error signing out:", error);
      return { success: false, error: error.message };
    }
  },

  // Listen to auth state changes
  onAuthStateChanged(callback) {
    console.log("Setting up auth state listener...");
    
    return onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user ? `User: ${user.email}` : "No user");
      callback(user);
    });
  }
};

// Analytics Services
export const analyticsService = {
  // Get lead statistics
  async getLeadStats() {
    try {
      console.log("Fetching lead statistics...");
      
      const contactsRef = collection(db, "contacts");
      const allContacts = await getDocs(contactsRef);
      const newContacts = await getDocs(query(contactsRef, where("status", "==", "new")));
      const inProgressContacts = await getDocs(query(contactsRef, where("status", "==", "in-progress")));
      const completedContacts = await getDocs(query(contactsRef, where("status", "==", "completed")));

      const stats = {
        total: allContacts.size,
        new: newContacts.size,
        inProgress: inProgressContacts.size,
        completed: completedContacts.size
      };
      
      console.log("Lead statistics:", stats);
      return { success: true, stats };
    } catch (error) {
      console.error("Error getting lead stats:", error);
      return { success: false, error: error.message };
    }
  }
};