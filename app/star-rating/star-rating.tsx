"use client";
import { useState } from "react";

export default function StarRating({ numberOfStars = 5 }) {
  const whiteStarsArray = [...Array(numberOfStars)].map(() => "☆");

  const [scale, setScale] = useState(whiteStarsArray);
  const [rating, setRating] = useState<string[]>([]);
  const [userHasRated, setUserHasRated] = useState(false);

  function handleMouseEnter(score: number) {
    const s = [...Array(numberOfStars)].map((_slot, index) =>
      index < score ? "★" : "☆",
    );

    setScale(s);
  }

  function handleMouseLeave() {
    // if (userHasRated) {
    //   setScale([...rating]);
    // } else {
    //   setScale(whiteStarsArray);
    // }

    userHasRated ? setScale([...rating]) : setScale(whiteStarsArray);
  }

  function handleClick() {
    setRating([...scale]);
    setUserHasRated(true);
  }

  return (
    <ul className="flex">
      {scale.map((star, index) => (
        <li
          key={index}
          onMouseEnter={() => handleMouseEnter(++index)}
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
        >
          <span style={{ fontSize: 48, color: "yellow", cursor: "default" }}>
            {star}
          </span>
        </li>
      ))}
    </ul>
  );
}
