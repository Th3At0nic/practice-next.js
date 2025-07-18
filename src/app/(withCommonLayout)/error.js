"use client";
const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-xl my-5">{error.message}</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default ErrorPage;
