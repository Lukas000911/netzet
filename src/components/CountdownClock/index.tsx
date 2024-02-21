import { Inter } from "next/font/google";

import { ICountdownClock } from "@/types";

const clockCard =
  "flex flex-col rounded-md bg-clock-yellow w-[38px] h-[31px] md:w-[45px] md:h-[36px] text-center py-[2px] px-[3px] md:gap-[2px]";

const cardText = "text-[6px] md:text-[7px] uppercase text-clock-black";

const cardNumber =
  "text-[16px] md:text-[20px] leading-5 font-extrabold text-clock-black";

const inter = Inter({ subsets: ["latin"] });

const CountdownClock = ({ days, hours, minutes, seconds }: ICountdownClock) => {
  return (
    <div className="flex gap-[5px]">
      <div className={clockCard}>
        <span className={cardNumber}>{days}</span>
        <span className={`${cardText} ${inter.className}`}>days</span>
      </div>
      <div className={clockCard}>
        <span className={cardNumber}>{hours}</span>
        <span className={`${cardText} ${inter.className}`}>hours</span>
      </div>
      <div className={clockCard}>
        <span className={cardNumber}>{minutes}</span>
        <span className={`${cardText} ${inter.className}`}>minutes</span>
      </div>
      <div className={clockCard}>
        <span className={cardNumber}>{seconds}</span>
        <span className={`${cardText} ${inter.className}`}>seconds</span>
      </div>
    </div>
  );
};

export default CountdownClock;
