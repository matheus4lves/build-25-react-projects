import StarRating from "./star-rating";

export default function StarRatingTestPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-500">
      <p className="text-4xl text-white">Rate me!</p>
      <StarRating numberOfStars={3} />
      <StarRating />
      <StarRating numberOfStars={10} />
    </div>
  );
}
