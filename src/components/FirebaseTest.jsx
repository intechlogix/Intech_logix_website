import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const FirebaseTest = () => {
  const [connectionStatus, setConnectionStatus] = useState("testing");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    testFirebaseConnection();
  }, []);

  const testFirebaseConnection = async () => {
    try {
      // Test basic Firebase connection
      console.log("Testing Firebase connection...");
      
      // Try to access a non-existent document to test connection
      const testDoc = doc(db, "test", "connection");
      await getDoc(testDoc);
      
      setConnectionStatus("connected");
      console.log("Firebase connection successful");
    } catch (error) {
      console.error("Firebase connection failed:", error);
      setConnectionStatus("failed");
      setErrorMessage(error.message);
    }
  };

  const getStatusColor = () => {
    switch (connectionStatus) {
      case "connected":
        return "text-green-600";
      case "failed":
        return "text-red-600";
      default:
        return "text-yellow-600";
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${
          connectionStatus === "connected" ? "bg-green-500" : 
          connectionStatus === "failed" ? "bg-red-500" : "bg-yellow-500"
        }`}></div>
        <span className={`text-sm font-medium ${getStatusColor()}`}>
          Firebase: {connectionStatus}
        </span>
      </div>
      {errorMessage && (
        <div className="mt-2 text-xs text-red-600 max-w-xs">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default FirebaseTest;