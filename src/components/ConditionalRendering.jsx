import React from "react";
// multiple return

const ConditionalRendering = () => {
  const isloading = false;
  const isSubmitting = true;
  const isErrror = false;

  if (isloading) {
    return <h1>Loading...</h1>;
  }
  return <div>
    <h1>MAIN CONTENT</h1>
    <button className="mybtn">{isSubmitting ? "Submitting..." : "Submit"}</button>
    {isErrror && <h1>ErrorLoading Page, try agian</h1>}
  </div>;
};

export default ConditionalRendering;
