import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export const newsletterService = {
  async addEmail(email) {
    try {
      const docRef = await addDoc(collection(db, "news_letter_email"), {
        email,
        createdAt: serverTimestamp(),
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};
