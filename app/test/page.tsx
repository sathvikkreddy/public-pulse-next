import React from "react";
import getReviews from "../../actions/getReviews";
import getAnylysis from "@/actions/getAnalysis";
import reviewsArr from "@/reviews";

const page = async () => {
  const analysis = await getAnylysis(reviewsArr);
  return <div>test page</div>;
};

export default page;
