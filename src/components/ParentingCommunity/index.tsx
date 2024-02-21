import Image from "next/image";
import Link from "next/link";

import OfferDetails from "../OfferDetails";

import { offerDetails } from "@/constants/offerDetails";

const ParentingCommunity = () => {
  return (
    <div className="max-w-[867px] rounded-[10px] py-[27px] px-0 md:px-[37px] bg-card-yellow mx-5 lg:mx-auto my-[32px] flex flex-col items-center">
      <h1 className="text-electric text-center text-[25px] md:text-[30px] font-extrabold uppercase mx-[24px] md:mx-0">
        Only you, only now
      </h1>
      <Image
        src="/icons/flower.svg"
        width={47}
        height={43}
        alt="flower icon"
        className="my-5"
      />
      <p className="font-semibold text-[20px] md:text-[27px] text-center mb-3 mx-[24px] md:mx-0">
        Introducing an exclusive{" "}
        <Link href="/" className="text-electric underline font-extrabold">
          VIP parenting community
        </Link>{" "}
        on Facebook with{" "}
        <Link href="/" className="underline font-extrabold">
          additional parenting tools
        </Link>{" "}
        and{" "}
        <Link href="/" className="underline font-extrabold">
          tips
        </Link>{" "}
        directly from the founder, Derek Mitchell, and other experts.
      </p>
      <div className="bg-blood text-white flex justify-center w-full uppercase py-[10px] px-[16px] gap-1 text-[20px] items-center my-5">
        offer expires in <span className="font-extrabold"> 02:22</span>
      </div>
      <OfferDetails price="9.95" details={offerDetails} />
      <div className="md:w-[522px] flex flex-col items-center my-3 gap-5 mx-[24px] md:mx-0">
        <button className="bg-dark-electric text-white w-full font-extrabold text-base py-[8px] px-[22px] rounded-[5px]">
          JOIN NOW
        </button>
        <Link href="/" className="text-light-gray underline text-center">
          No, thank you
        </Link>
        <p className="text-xs font-medium	">
          By clicking on Join Now button, you actively agree to the T&Cs and
          Privacy Policy.
        </p>
        <div className="flex gap-3 mt-3">
          <Image
            src="/icons/check_shield.svg"
            height={20}
            width={16}
            alt="security shield"
          />
          <span className="text-netzet-green font-bold text-sm">
            Pay safe & secure
          </span>
        </div>
        <div className="flex items-center gap-3 md:gap-[32px]">
          <Image
            src="/logos/paypal.png"
            width={65}
            height={16}
            alt="paypal logo"
          />
          <Image src="/logos/visa.png" width={34} height={11} alt="visa logo" />
          <Image
            src="/logos/american_express.png"
            width={23}
            height={18}
            alt="american express logo"
          />
          <Image
            src="/logos/mastercard.png"
            width={26}
            height={22}
            alt="mastercard logo"
          />
          <Image
            src="/logos/discover.png"
            width={42}
            height={22}
            alt="discover logo"
          />
          <Image
            src="/logos/maestro.png"
            width={28}
            height={20}
            alt="maestro logo"
          />
        </div>
        <div className="flex gap-3 items-center">
          <Image
            src="/icons/lock.svg"
            height={19}
            width={19}
            alt="security lock"
          />
          <span className="text-light-gray font-medium text-xs leading-5">
            All transactions are secure and encrypted
          </span>
        </div>
      </div>
    </div>
  );
};

export default ParentingCommunity;
