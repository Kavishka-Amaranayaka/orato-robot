import React, { useState, useEffect } from 'react';

// 1. Define TypeScript Interface based on our MongoDB Schema
interface CardData {
  _id: string;
  word: string;
  definition: string;
  imageUrl: string;
  difficultyLevel: string;
}