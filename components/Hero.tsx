import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="top"
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    >
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <div className="flex gap-3">
          <h1 className="bold-52 lg:bold-88">Hayya</h1>
          <h1 className="bold-52 lg:bold-88 text-green-500"> Taw</h1>
        </div>

        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Hayya Taw is a leading taxi service dedicated to providing fast,
          reliable, and affordable rides. We understand the importance of
          getting you to your destination on time and in comfort. Whether you
          need a ride to the airport, a quick trip across town, or a safe way to
          get home, we've got you covered.
        </p>

        <div className="my-11 flex flex-wrap ">
          <p className="bold-16 lg:bold-20 text-blue-70">
            Explore our
            <span className="regular-16 lg:regular-20 ml-1 text-green-50 ">
              app
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Play Store"
            icon="/android.svg"
            variant="btn_green"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
            </div>
            <p className="bold-20 text-white">Gafsa, Tunisia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
