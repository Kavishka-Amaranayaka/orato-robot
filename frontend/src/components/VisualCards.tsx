import React, { useState, useEffect } from 'react';

// 1. Define TypeScript Interface based on our MongoDB Schema
interface CardData {
  _id: string;
  word: string;
  definition: string;
  imageUrl: string;
  difficultyLevel: string;
}

const VisualCards: React.FC = () => {
  // State Management
  const [cards, setCards] = useState<CardData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 2. Fetch data from backend when the component loads
  useEffect(() => {
    fetchRandomCards();
  }, []);

  const fetchRandomCards = async () => {
    setLoading(true);
    setError(null);
    try {
      // Ensure this URL matches your Express backend URL & Port
      const response = await fetch('http://localhost:5000/api/cards/random');
      if (!response.ok) throw new Error("Failed to fetch data");
      
      const data = await response.json();
      setCards(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Could not load vocabulary cards. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };
