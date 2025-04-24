import React from "react";
import { Link, useParams } from "react-router-dom";
import { tweets } from "../data";

//useParams - gives an object containing the route parameter
//{id: "3"}

const SingleTweet = () => {
  const { id } = useParams();
  const tweet = tweets.find((singleTweet) => singleTweet.id === id);

  return (
    <div>
      <div className="container py-18">
        <Link to="./timeline" className="btn btn-primary">
          Back to TimeLine
        </Link>
        <h1>{id}</h1>
      </div>
      <div className="mt-5">
      <div className="flex items-center gap-3">
        <h1 className="font-bold text-2xl"> {tweet.profileName}</h1>
        <p>@{tweet.handle}</p>
      </div>
      <div>
      <p>{tweet.likes}likes</p>
      <p>{tweet.comments.length}comments</p>
      </div>
      <div className="flex-gap-3">
        <h1 className="font-bold"> comments</h1>
      </div>
      <div className="flex flex-col gap-5">
        {
          (tweet,
          comments.map((comment, i) => {
            return <p key={i}>{comment}</p>;
          }))
        }
      </div>
      
      </div>
    </div>
  );
};

export default SingleTweet;
