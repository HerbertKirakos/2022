import Image from "next/image";
import { brandData } from "../../../MOCK";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Logo,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  CloseIcon,
} from "../../envaironment/icons";
import HandIcon from "../../envaironment/images/HandIcon.png";
import VictoryHandIcon from "../../envaironment/images/VictoryHandIcon.png";
import Kustarnik from "../../envaironment/images/Kustarnik.png";
import { ModalPage } from "../Modal";

export const Home = ({ valutes }) => {
//   console.log("valutes", valutes);

  const [showBanner, setShowBanner] = useState(false);

  const [brandToShow, setBrandToShow] = useState(null);

  const handleBrandCardClick = (brand) => {
    setBrandToShow(brand);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowBanner(true);
    }, 1500);
  }, []);

  return (
    <div className="bg-pink lg:pb-36 pb-14">

        {
            brandToShow && (
                <ModalPage 
                    open={!!brandToShow} 
                    onClose={() => setBrandToShow(null)} 
                    brand={brandToShow}  
                />
            )
        }
      
        <div className={`bg-black py-12 flex flex-col items-center  w-full top-0 left-0 ${showBanner ? 'opacity-100 z-20': 'opacity-0 -z-50 absolute'} transition-opacity duration-300`}>
            <span className="text-pink lg:text-base text-sm lg:max-w-[540px] max-w-[320px] lg:mb-9 mb-8 text-center font-normal font-NotoSans leading-6">
                Такая вот получилась летопись «отмены» 2022 года. С двумя очевидными
                фильтрами для удобства и ежедневными апдейтами.
            </span>
            <div className="flex items-center justify-center lg:gap-9 gap-3 lg:mb-12 mb-8 lg:px-0 px-5">
                <div className="flex flex-col items-center lg:max-w-[348px] max-w-[154px]">
                    <div className="flex lg:max-h-10 items-center lg:mb-4 mb-2">
                        <h2 className="text-pink lg:text-4xl text-2xl font-medium lg:mr-4 mr-3 font-NotoSerif leading-10">
                        Goodbye
                        </h2>
                        <img src={`${HandIcon.src}`} className="lg:max-h-10 max-h-6" />
                    </div>
                    <p className="text-gray lg:text-base text-center text-sm font-normal font-NotoSans leading-6">
                        Бренды и компании, которые ушли
                    </p>
                </div>

                <div className="flex flex-col items-center max-w-[348px]">
                    <div className="flex lg:max-h-10 items-center lg:mb-4 mb-2">
                        <h2 className="text-pink lg:text-4xl text-2xl font-medium lg:mr-4 mr-3 font-NotoSerif leading-10">
                        Привет
                        </h2>
                        <img src={`${VictoryHandIcon.src}`} className="lg:max-h-10 max-h-6" />
                    </div>
                    <p className="text-gray lg:text-base text-center text-sm font-normal font-NotoSans leading-6">
                        Прекрасные российские бренды
                    </p>
                </div>
            </div>

            <div className="flex">
                <button
                    onClick={() => setShowBanner(false)}
                    className={
                        "px-6 py-3 flex rounded-xl border  border-pink cursor-pointer text-pink font-normal font-NotoSans leading-6 hover:bg-gray-light  hover:text-black hover:duration-300"
                    }
                    >
                    Все понятно, спасибо
                    <span className="ml-2">
                        <CloseIcon />
                    </span>
                </button>
            </div>
        </div>
      
        <div className="max-w-screen-xl mx-auto lg:px-0 px-5">
            <div className="flex justify-center lg:mb-32 mb-11 ">
                <Logo  />
            </div>

            <div className="lg:mb-28 mb-12 flex lg:justify-between lg:overflow-hidden overflow-x-scroll lg:gap-9 gap-3 pb-5">
                {valutes.map((valute) => (
                    <div
                        key={valute.ID}
                        className="lg:py-8 py-7 flex flex-col items-center border border-gray-light rounded-2xl lg:max-w-[348px] min-w-[240px] w-full relative"
                    >
                        <span className="lg:text-5xl text-3xl text-black font-medium font-NotoSerif leading-10 lg:mb-3 mb-2 lg:max-w-[348px] max-w-[240px] whitespace-nowrap ">
                            {valute.Value} ₽
                        </span>
                        <span className="lg:text-base text-sm text-gray font-normal font-NotoSans leading-6 mb-3">
                            {valute.CharCode} / RUB
                        </span>
                        <div className="-mb-12 z-10">
                            {valute.Value > valute.Previous ? <ArrowUp /> : <ArrowDown />}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center lg:gap-16 gap-7 lg:mb-12 mb-8 lg:px-0 px-5">
                <div className="flex lg:max-h-10 items-center">
                    <h2 className="text-black hover:text-gray hover:border-b lg:text-4xl text-2xl font-medium lg:mr-3 mr-2 font-NotoSerif leading-10 ">
                        Goodbye
                    </h2>
                    <img src={`${HandIcon.src}`} className="lg:max-w-[40px] max-w-[24px]" />
                </div>

                <div className="flex lg:max-h-10 items-center">
                    <h2 className=" text-black hover:text-gray hover:border-b lg:text-4xl text-2xl font-medium lg:mr-3 mr-2 font-NotoSerif leading-10">
                        Привет
                    </h2>
                    <img src={`${VictoryHandIcon.src}`} className="lg:max-w-[40px] max-w-[24px]" />
                </div>
            </div>

            <div className="flex lg:mb-9 mb-3 lg:gap-9 sm:gap-3 gap-1 justify-between flex-wrap lg:grid-rows-3 grid-rows-2">
                {brandData.map((brand, i) => (
                    <div
                        onClick={() => handleBrandCardClick(brand)}
                        key={`brand-item-${i}`}
                        className="lg:px-4 lg:py-6 px-1 py-3 lg:mb-0 sm:mb-0 mb-3 flex flex-col justify-between items-center border border-gray-light rounded-2xl lg:gap-20 gap-10 xs:w-auto w-full lg:h-auto h-[250px] cursor-pointer hover:bg-gray-light"
                    >
                        <span className="text-gray lg:text-base text-sm text-center font-normal lg:w-[320px] w-[154px] font-NotoSans leading-6 ">
                            {brand.name}
                        </span>
                        <div className='sm:w-auto w-1/2 flex justify-center '>
                            <Image
                                src={`${brand.imgUrl?.src}`}
                                width={brand.imgUrl.width}
                                height={brand.imgUrl.height}
                            />
                        </div>
                        
                        <span className="text-gray lg:text-base text-sm text-center font-normal font-NotoSans leading-6">
                            {brand.date}
                        </span>
                    </div>
                ))}
            </div>



            <div className="lg:flex lg:items-center py-20 lg:px-20 px-5 border border-gray-light bg-[#E4D9CF30] rounded-2xl lg:mb-9 mb-3 ">
                <div className="lg:mr-32 lg:flex lg:items-center flex justify-center mb-3">
                    <img src={`${Kustarnik.src}`} className="lg:max-w-[373px] max-w-[180px]" />
                </div>
                <div className="">
                    <h2 className=" text-black lg:block hidden text-4xl font-medium mb-6 font-NotoSerif leading-10">
                        Прекрасные ароматы
                    </h2>
                    <p className="text-black lg:text-lg text-sm font-normal lg:max-w-[420px] lg:text-left text-center lg:mb-8 mb-6 font-NotoSans leading-6">
                        Диффузоры для дома, ароматное мыло различных форм, духи и
                        туалетная вода — все это, произведенное в России.
                    </p>
                    <div className="flex items-center lg:justify-start justify-center">
                        <Link href="/">
                            <a
                                className={
                                    "px-6 py-3  flex rounded-xl  border border-black cursor-pointer text-black font-normal font-NotoSans leading-6 hover:bg-gray-light  hover:text-black hover:duration-300"
                                }
                            >
                                Перейти на сайт
                                <span className="ml-3">
                                    <ArrowRight />
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex lg:mb-9 mb-3 lg:gap-9 sm:gap-3 gap-1 justify-between flex-wrap lg:grid-rows-3 grid-rows-2">
                {brandData.slice(3).map((brand, i) => (
                    <div
                        onClick={() => handleBrandCardClick(brand)}
                        key={`brand-item-${i}`}
                        className="lg:px-4 lg:py-6 px-1 py-3 lg:mb-0 sm:mb-0 mb-3 flex flex-col justify-between items-center border border-gray-light rounded-2xl lg:gap-20 gap-10 xs:w-auto w-full lg:h-auto h-[250px] cursor-pointer hover:bg-gray-light"
                    >
                        <span className="text-gray lg:text-base text-sm  text-center font-normal lg:w-[320px] w-[154px] font-NotoSans leading-6  ">
                            {brand.name}
                        </span>
                        <Image
                            src={`${brand.imgUrl?.src}`}
                            width={brand.imgUrl.width}
                            height={brand.imgUrl.height}
                        />
                        <span className="text-gray lg:text-base text-sm text-center font-normal font-NotoSans leading-6">
                            {brand.date}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
