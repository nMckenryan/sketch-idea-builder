import React, { useState, useEffect } from "react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";

const CountdownTimer = () => {
  const fiveMinutes = 300;
  const [timeLeft, setTimeLeft] = useState(fiveMinutes);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (isActive && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTimeLeft(fiveMinutes);
    setIsActive(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-row items-center justify-center gap-1">
      <div className="text-4xl font-bold">{formatTime(timeLeft)}</div>
      <div className="flex flex-row">
        <button
          className={`rounded px-4 py-2 ${isActive ? "bg-red-500" : "bg-green-500"} text-white`}
          onClick={toggleTimer}
          disabled={timeLeft === 0}
        >
          {isActive ? <FaPause /> : <FaPlay />}
        </button>
        <button
          className="rounded bg-gray-500 px-4 py-2 text-white"
          onClick={resetTimer}
        >
          <LuTimerReset />
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
