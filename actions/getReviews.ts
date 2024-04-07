"use server";

import axios from "axios";
import cheerio from "cheerio";

export default async function signup(url: string) {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const reviews: string[] = [];
  $('p[class*="comment"]').each((index, element) => {
    reviews.push($(element).text());
  });
  return reviews;
}
