"use client";

import { useState } from "react";
import { useCounter, useInterval } from "usehooks-ts";

const MAX_COUNT = 40;
const DELAY = 20;
const WAIT = 500;

const LoadFirst = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const { count, increment } = useCounter(0);
  useInterval(handleInterval, getDelay());

  function handleInterval() {
    increment();
  }

  function getDelay() {
    if (count >= MAX_COUNT) {
      setTimeout(() => setLoading(false), WAIT);
      return null;
    }

    return DELAY;
  }

  const progressBar = new Array<String>(count);
  progressBar.fill("█");
  for (let i = 0; i < MAX_COUNT - count; i++) {
    progressBar.push("▒");
  }

  let percent = Math.floor((count / MAX_COUNT) * 100);
  let percentString = `${percent}`;
  if (percent < 100) {
    percentString = ` ${percentString}`;
    if (percent < 10) {
      percentString = ` ${percentString}`;
    }
  }

  return loading ? (
    <div className="h-full flex justify-center">
      <div className="flex flex-col justify-center">
        Loading...
        <div className="flex">
          <div>{progressBar}</div>
          <pre> {percentString}%</pre>
        </div>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default LoadFirst;
