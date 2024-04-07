"use server";

import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCSFNeMGswEypdBTF90LOeiN9nMX8ZNGxA");

export default async function getAnylysis(reviewsArr: string[]) {
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ];

  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    safetySettings,
  });

  const stringifiedArr = JSON.stringify(reviewsArr);

  const prompt = `These are reviews in an array format: ${stringifiedArr}
    You need to analyze these reviews and respond with JSON string of type 
      {
          topPositiveReviews: [] (max 3 reviews),
          topNegativeReviews: [] (max 3 reviews),
          keywords: [] (max 5 keywords, should be single word),
          rating: number (0 - 5),
          verdict: string (3 - 5 sentences)
      }
      the response should not have any heading`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  const analysis = JSON.parse(text);
  return analysis;
}
