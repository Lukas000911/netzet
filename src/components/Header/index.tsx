import Image from "next/image";
import Link from "next/link";

import CountdownClock from "../CountdownClock";

const HeaderComponent = () => {
  return (
    <div className="bg-header text-white h-[75px] flex items-center">
      <div className="flex container mx-auto justify-evenly">
        <div className="relative w-[158px] h-[42px] hidden lg:block">
          <Image
            src="/logos/parenting_leader.svg"
            className="object-contain"
            fill
            alt="parenting leader logo"
          />
        </div>
        <div className="flex gap-[28px] items-center">
          <div className="flex gap-[7px] md:items-center flex-col md:flex-row">
            <span>This offer expires in:</span>
            <CountdownClock days={0} hours={2} minutes={23} seconds={54} />
          </div>
          <Link
            href="/"
            className="bg-netzet-green rounded-[5px] py-2 px-[22px] h-fit w-[126px] md:w-fit md:h-[36px] uppercase text-[13px] md:text-[16px] font-extrabold"
          >
            Accept the challenge
          </Link>
        </div>
        <div className="hidden gap-2 items-center lg:flex">
          <Image
            src="/icons/phone.svg"
            height={16}
            width={16}
            alt="phone icon"
          />
          <span>1 (302) 316-5995</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
