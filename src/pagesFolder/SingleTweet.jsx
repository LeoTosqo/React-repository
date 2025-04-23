import React from "react";
import { Link } from "react-router-dom";

const SingleTweet = () => {
  return (
    <div>
      <div className="text-red-500 bg-amber-200"> 
        <Link to ="./timeline" >Back to TimeLine</Link>
      </div>
    </div>
  );
};

export default SingleTweet;
