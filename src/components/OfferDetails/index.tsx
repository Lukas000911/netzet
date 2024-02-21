import Image from "next/image";
import { Montserrat } from "next/font/google";

import { IOfferDetails } from "@/types";

const montserrat = Montserrat({ subsets: ["latin"] });

const OfferDetails = ({ price, details }: IOfferDetails) => {
  return (
    <div className="flex rounded-[10px] bg-light p-[16px] my-3 flex-col lg:flex-row mx-[16px] md:mx-0">
      <div className="flex flex-col px-[21px] py-[24px] lg:py-[10px] order-2 lg:order-1">
        {details.map((detail, index) => (
          <div className="flex gap-3 items-center mb-3 w-fit" key={index}>
            <span className="rounded-full min-w-[25px] min-h-[25px] bg-ginger flex items-center justify-center">
              <Image
                src="/icons/check.svg"
                width={14}
                height={8}
                alt="check mark"
              />
            </span>
            <span className="text-[20px] md:text-[23px] font-semibold">
              {detail}
            </span>
          </div>
        ))}
        <div
          className={`flex flex-col items-center justify-center mt-4 ${montserrat.className}`}
        >
          <span className="font-bold text-electric text-[20px]">ONLY NOW</span>
          <span className="font-bold text-blood text-[40px]">${price}</span>
        </div>
        <p
          className={`text-light-gray font-medium text-xs ${montserrat.className}`}
        >
          You will be charged for ${price} every month. You can cancel anytime
          and this will not affect the challenges you purchased.
        </p>
      </div>
      <div className="relative lg:min-w-[380px] aspect-square lg:h-[469px] rounded-md overflow-hidden order-1 lg:order-2">
        <Image
          src="/images/family.png"
          fill
          alt="family photo"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default OfferDetails;
