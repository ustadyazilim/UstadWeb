import Image from 'next/image';
import { UstadCard } from '@shared/index';

export const HowItWorks = () => {
  return (
    <div className="w-[1000px] mx-auto bg-[#FAFAFA] rounded-2xl p-6">
      {/* Title Section */}
      <div className="flex items-center mb-6 px-6">
        <h1 className="text-[56px] font-bold text-[#12111399]">
          How It Works?
        </h1>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-3 gap-6 px-6">
        {/* Register Button */}
        <button className="h-[62px] bg-[#12111399] text-white rounded-2xl flex items-center justify-center">
          <span className="text-lg">Registor For Free</span>
        </button>

        {/* Select Role Button */}
        <button className="h-[62px] bg-white border border-black rounded-2xl flex items-center justify-center">
          <span className="text-lg text-black">Select Your Role</span>
        </button>

        {/* Start Journey Button */}
        <button className="h-[62px] bg-white border border-black rounded-2xl flex items-center justify-center">
          <span className="text-lg text-black">Start Your Journey</span>
        </button>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-3 gap-6 px-6 mt-6">
        {/* Left Content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-[#12111399] leading-tight">
            Register as one of the roles easily
          </h2>
          <p className="text-[#12111399] text-lg">
            Sign up for free and create your profile in minutes.
          </p>
          <button className="w-[178px] h-[54px] bg-white border border-[#12111399] rounded-2xl flex items-center justify-center shadow-[0_5px_0_0_rgba(10,10,10,1)]">
            <span className="text-[#295E00]">Explore Full Guide</span>
          </button>
          <span className="text-[#12111399] mt-4">Step 1</span>
        </div>

        {/* Middle Content */}
        <div></div>

        {/* Right Content - Image */}
        <div className="relative h-[240px]">
          <Image
            src="/big-shoes-person.png"
            alt="Person sitting with plants"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
