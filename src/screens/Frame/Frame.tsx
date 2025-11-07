import React from "react";
import { Button } from "../../components/ui/button";

const companyLogos = [
  {
    top: "top-[367px]",
    left: "left-[164px]",
    width: "w-[77px]",
    height: "h-[60px]",
    src: "/image-1.png",
    alt: "Company logo",
  },
  {
    top: "top-[358px]",
    left: "left-[377px]",
    width: "w-[81px]",
    height: "h-[35px]",
    src: "/image-2.png",
    alt: "Company logo",
    objectFit: "object-cover",
  },
  {
    top: "top-[533px]",
    left: "left-[327px]",
    width: "w-[63px]",
    height: "h-[60px]",
    src: "/image-3.png",
    alt: "Company logo",
  },
  {
    top: "top-[489px]",
    left: "left-[520px]",
    width: "w-[89px]",
    height: "h-[18px]",
    src: "/image-4.png",
    alt: "Company logo",
    objectFit: "object-cover",
  },
  {
    top: "top-[333px]",
    left: "left-[619px]",
    width: "w-[58px]",
    height: "h-[51px]",
    src: "/image-5.png",
    alt: "Company logo",
  },
  {
    top: "top-[607px]",
    left: "left-[635px]",
    width: "w-[71px]",
    height: "h-12",
    src: "/image-6.png",
    alt: "Company logo",
  },
  {
    top: "top-[508px]",
    left: "left-[690px]",
    width: "w-[97px]",
    height: "h-[21px]",
    src: "/image-7.png",
    alt: "Company logo",
  },
  {
    top: "top-[380px]",
    left: "left-[792px]",
    width: "w-[52px]",
    height: "h-[52px]",
    src: "/image-8.png",
    alt: "Company logo",
    objectFit: "object-cover",
  },
  {
    top: "top-[267px]",
    left: "left-[850px]",
    width: "w-[68px]",
    height: "h-[57px]",
    src: "/image-9.png",
    alt: "Company logo",
  },
  {
    top: "top-[151px]",
    left: "left-[907px]",
    width: "w-[76px]",
    height: "h-[59px]",
    src: "/image-10.png",
    alt: "Company logo",
  },
  {
    top: "top-[618px]",
    left: "left-[761px]",
    width: "w-[77px]",
    height: "h-8",
    src: "/image-11.png",
    alt: "Company logo",
  },
  {
    top: "top-[507px]",
    left: "left-[838px]",
    width: "w-[97px]",
    height: "h-[23px]",
    src: "/image-12.png",
    alt: "Company logo",
  },
  {
    top: "top-[377px]",
    left: "left-[916px]",
    width: "w-[71px]",
    height: "h-[69px]",
    src: "/image-13.png",
    alt: "Company logo",
  },
  {
    top: "top-[282px]",
    left: "left-[968px]",
    width: "w-[90px]",
    height: "h-7",
    src: "/image-14.png",
    alt: "Company logo",
  },
  {
    top: "top-[165px]",
    left: "left-[1047px]",
    width: "w-[79px]",
    height: "h-[33px]",
    src: "/image-15.png",
    alt: "Company logo",
  },
  {
    top: "top-[605px]",
    left: "left-[922px]",
    width: "w-[65px]",
    height: "h-[53px]",
    src: "/image-16.png",
    alt: "Company logo",
    objectFit: "object-cover",
  },
  {
    top: "top-[489px]",
    left: "left-[1001px]",
    width: "w-[57px]",
    height: "h-[59px]",
    src: "/image-17.png",
    alt: "Company logo",
    objectFit: "object-cover",
  },
  {
    top: "top-[363px]",
    left: "left-[1063px]",
    width: "w-[63px]",
    height: "h-[63px]",
    src: "/image-18.png",
    alt: "Company logo",
    objectFit: "object-cover",
  },
  {
    top: "top-[610px]",
    left: "left-[1060px]",
    width: "w-[92px]",
    height: "h-[35px]",
    src: "/image-19.png",
    alt: "Company logo",
  },
  {
    top: "top-[500px]",
    left: "left-[1108px]",
    width: "w-[88px]",
    height: "h-[21px]",
    src: "/image-20.png",
    alt: "Company logo",
    objectFit: "object-cover",
  },
  {
    top: "top-[284px]",
    left: "left-[1118px]",
    width: "w-[82px]",
    height: "h-[25px]",
    src: "/image-21.png",
    alt: "Company logo",
    objectFit: "object-cover",
  },
  {
    top: "top-[41px]",
    left: "left-[1137px]",
    width: "w-[60px]",
    height: "h-12",
    src: "/image-22.png",
    alt: "Company logo",
  },
  {
    top: "top-[508px]",
    left: "left-[19px]",
    width: "w-[91px]",
    height: "h-11",
    src: "/image-24.png",
    alt: "Company logo",
  },
];

const polygonShapes = [
  {
    top: "top-[-158px]",
    left: "left-[839px]",
    width: "w-[388px]",
    height: "h-[556px]",
    src: "/polygon-18.svg",
  },
  {
    top: "top-[-152px]",
    left: "left-[764px]",
    width: "w-[463px]",
    height: "h-[664px]",
    src: "/polygon-2.svg",
  },
  {
    top: "top-[-35px]",
    left: "left-[690px]",
    width: "w-[537px]",
    height: "h-[663px]",
    src: "/polygon-3.svg",
  },
  {
    top: "top-[67px]",
    left: "left-[772px]",
    width: "w-[455px]",
    height: "h-[663px]",
    src: "/polygon-4.svg",
  },
  {
    top: "top-[79px]",
    left: "left-[629px]",
    width: "w-[598px]",
    height: "h-[665px]",
    src: "/polygon-6.svg",
  },
  {
    top: "top-[187px]",
    left: "left-[708px]",
    width: "w-[519px]",
    height: "h-[560px]",
    src: "/polygon-8.svg",
  },
  {
    top: "top-[296px]",
    left: "left-[780px]",
    width: "w-[447px]",
    height: "h-[451px]",
    src: "/polygon-9.svg",
  },
  {
    top: "top-[300px]",
    left: "left-[633px]",
    width: "w-[594px]",
    height: "h-[447px]",
    src: "/polygon-11.svg",
  },
  {
    top: "top-[187px]",
    left: "left-[560px]",
    width: "w-[647px]",
    height: "h-[560px]",
    src: "/polygon-12.svg",
  },
  {
    top: "top-[302px]",
    left: "left-[477px]",
    width: "w-[647px]",
    height: "h-[445px]",
    src: "/polygon-14.svg",
  },
  {
    top: "top-[187px]",
    left: "left-[413px]",
    width: "w-[647px]",
    height: "h-[560px]",
    src: "/polygon-15.svg",
  },
  {
    top: "top-[300px]",
    left: "left-[344px]",
    width: "w-[647px]",
    height: "h-[447px]",
    src: "/polygon-16.svg",
  },
  {
    top: "top-11",
    left: "left-[95px]",
    width: "w-[646px]",
    height: "h-[664px]",
    src: "/polygon-21.svg",
  },
  {
    top: "top-[-152px]",
    left: "left-[625px]",
    width: "w-[602px]",
    height: "h-[664px]",
    src: "/polygon-22.svg",
  },
  {
    top: "top-[231px]",
    left: "left-[33px]",
    width: "w-[646px]",
    height: "h-[516px]",
    src: "/polygon-23.svg",
  },
  {
    top: "top-[66px]",
    left: "left-[-120px]",
    width: "w-[647px]",
    height: "h-[663px]",
    src: "/polygon-24.svg",
  },
  {
    top: "top-[199px]",
    left: "left-[-213px]",
    width: "w-[601px]",
    height: "h-[548px]",
    src: "/polygon-25.svg",
  },
  {
    top: "top-[167px]",
    left: "left-[242px]",
    width: "w-[646px]",
    height: "h-[580px]",
    src: "/polygon-19.svg",
  },
  {
    top: "top-[27px]",
    left: "left-[324px]",
    width: "w-[647px]",
    height: "h-[663px]",
    src: "/polygon-20.svg",
  },
  {
    top: "top-[74px]",
    left: "left-[494px]",
    width: "w-[647px]",
    height: "h-[664px]",
    src: "/polygon-13.svg",
  },
  {
    top: "top-[178px]",
    left: "left-[837px]",
    width: "w-[390px]",
    height: "h-[569px]",
    src: "/polygon-10.svg",
  },
  {
    top: "top-[-35px]",
    left: "left-[560px]",
    width: "w-[647px]",
    height: "h-[663px]",
    src: "/polygon-7.svg",
  },
  {
    top: "top-[-39px]",
    left: "left-[837px]",
    width: "w-[390px]",
    height: "h-[664px]",
    src: "/polygon-5.svg",
  },
];

const navigationItems = [
  { label: "Home", active: true },
  { label: "About Us", active: false },
];

export const Frame = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] -left-32 bg-[#c9ddff4c] blur-[151.25px] w-[561px] h-[485px] rounded-[280.34px/242.32px]" />
        <div className="absolute -bottom-32 -right-32 bg-[#c9ddff4c] blur-[151.25px] w-[561px] h-[485px] rounded-[280.34px/242.32px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#ffdfc94c] blur-[180.45px] w-[561px] h-[485px] rounded-[280.34px/242.32px]" />
      </div>

      <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1227px] h-auto">
          {polygonShapes.map((polygon, index) => (
            <img
              key={`polygon-${index}`}
              className={`absolute ${polygon.top} ${polygon.left} ${polygon.width} ${polygon.height} opacity-60`}
              alt="Polygon"
              src={polygon.src}
            />
          ))}

          {companyLogos.map((logo, index) => (
            <img
              key={`logo-${index}`}
              className={`absolute ${logo.top} ${logo.left} ${logo.width} ${logo.height} ${logo.objectFit || ""}`}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <header className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                className="w-9 h-10 sm:w-11 sm:h-[47px]"
                alt="Referlly logo"
                src="/referlly-logo-1.svg"
              />
              <div className="[font-family:'Sansation',Helvetica] font-bold text-[#005ba7] text-3xl sm:text-[42px] tracking-[0.84px] leading-normal">
                Referlly
              </div>
            </div>

            <nav className="flex items-center gap-4 sm:gap-6">
              {navigationItems.map((item, index) => (
                <Button
                  key={`nav-${index}`}
                  variant={item.active ? "default" : "ghost"}
                  className={`h-auto ${item.active ? "bg-white rounded-[5px] border border-solid border-[#c9ddff4c] shadow-[0px_4px_16px_#c9ddffb2] px-4 sm:px-[22px] py-0.5" : "px-0 py-1"} [font-family:'Roboto',Helvetica] font-medium text-[#0c2750] ${item.active ? "text-xl sm:text-2xl" : "text-lg sm:text-[21px]"} ${item.active ? "leading-8 sm:leading-9" : "leading-7 sm:leading-[31.5px]"} whitespace-nowrap`}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        </header>

        <main className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="[font-family:'Roboto',Helvetica] font-normal text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-[0] leading-tight mb-8 sm:mb-12 lg:mb-16">
                <span className="font-bold text-[#0c2750] leading-tight">
                  Your Next Job is Just a Referral Away!{" "}
                </span>
                <span className="font-bold text-[#005ba7] leading-tight">
                  And yep… it&apos;s free. Always will be
                </span>
              </h1>

              <p className="[font-family:'Roboto',Helvetica] font-normal text-transparent text-lg sm:text-xl md:text-2xl tracking-[0] leading-relaxed">
                <span className="text-[#6c6896]">Job hunting made smarter. </span>
                <span className="font-semibold text-[#524f73]">Referlly</span>
                <span className="text-[#6c6896]">
                  {" "}
                  brings you hidden jobs, Get Referrals and better opportunities—all
                  powered by free referrals.
                  <br />
                  One referral can change everything!
                </span>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
