import React from "react";

export default function AboutUsMainPage() {
  return (
    <div>
      <div className="overflow-x-hidden bg-gray-50">
        <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full font-pj">
                Made by People, for People
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                Quality resources shared by the community
              </h1>
              <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula massa in enim luctus. Rutrum arcu.
              </p>

              <div className="relative inline-flex mt-10 group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                <a
                  href="#"
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Get access to 4,958 resources
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <img
              className="object-cover object-top w-full h-auto mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100"
              src="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png"
              alt=""
            />
          </div>
        </section>
      </div>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="/assets/why_us.jpg"
                alt="About Us tailwind page"
                className="max-lg:mx-auto rounded-xl w-full"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-primary-foreground mb-9 max-lg:text-center relative">
                  Why choose us{" "}
                </h2>
                <p className="font-normal text-md text-justify  text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  We are the only crowdfunding platform in India that empowers
                  you to donate directly to the specific products required by
                  NGOs. Unlike traditional crowdfunding platforms, we offer a
                  unique approach where you can select from a diverse range of
                  items listed on the campaign page. This ensures your donation
                  is used exactly as intended, providing tangible support to
                  your chosen cause. By choosing the products you wish to fund,
                  you have a direct impact on the needs of NGOs, making your
                  contribution more meaningful and transparent. Join us in
                  making a difference, one product at a time, and support your
                  favorite cause with confidence and clarity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img
                  src="/assets/why_us.jpg"
                  alt="About Us tailwind page"
                  className="block lg:hidden mb-9 mx-auto"
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-primary-foreground mb-9 max-lg:text-center">
                  Process
                </h2>
                <p className="font-normal text-md text-justify leading-2 text-gray-500 max-lg:text-center max-w-2xl mx-auto mb-3">
                  {`    Our platform is safe and transparent. All products you donate
                  are directly delivered to the NGOs by us. There are no
                  monetary transactions with the NGOs, ensuring you know exactly
                  what you're donating and where it's going.`}
                </p>
                <p className="font-normal text-md text-justify leading-2 text-gray-500 max-lg:text-center max-w-2xl mx-auto mb-3">
                  {` Your experience before, during, and after making a donation is
                  paramount to us. You will receive regular updates from the
                  campaign you've supported, detailing the delivery,
                  distribution, and usage of the products you've donated.`}
                </p>
                <p className="font-normal text-md text-justify leading-2 text-gray-500 max-lg:text-center max-w-2xl mx-auto mb-3">
                  {` If you have any feedback, thoughts, or concerns, please don't
                  hesitate to reach out to our support team. We're dedicated to
                  making this the best and most seamless experience for you, so
                  we're all ears.`}
                </p>
              </div>
            </div>
            <div className="img-box ">
              <img
                src="/assets/process.jpg"
                alt="About Us tailwind page"
                className="hidden lg:block rounded-xl w-full "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our results in numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-primary">
                  240%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Company remarkable growth journey as we continually innovate
                    and drive towards new heights of success.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-primary">
                  175+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Our very talented team members are the powerhouse of
                    pagedone and pillars of our success.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-primary">
                  625+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Projects Completed
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    We have accomplished more than 625 projects worldwide and we
                    are still counting many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className=" py-14 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16 rounded-full">
            <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center">
              What our happy user says!
            </h2>
          </div>

          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I
                      must say that it has made my life a lot easier. The
                      platform intuitive interface and ease of use have allowed
                      me to manage my finances more effectively and make
                      informed investment decisions. I particularly like the
                      product auto-tracking feature, which has saved me a lot of
                      time and effort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">

                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I
                      must say that it has made my life a lot easier. The
                      platform intuitive interface and ease of use have allowed
                      me to manage my finances more effectively and make
                      informed investment decisions. I particularly like the
                      product auto-tracking feature, which has saved me a lot of
                      time and effort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">

                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I
                      must say that it has made my life a lot easier. The
                      platform intuitive interface and ease of use have allowed
                      me to manage my finances more effectively and make
                      informed investment decisions. I particularly like the
                      product auto-tracking feature, which has saved me a lot of
                      time and effort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349534.png"
                  alt="Emily image"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-primary"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349572.png"
                  alt="Ethan image"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-primary"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349514.png"
                  alt="Olivia image"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-14 lg:py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 mb-6">
              Meet our soldier of finance
            </h2>
            <p className="text-lg text-gray-500 text-center">
              We provide all the advantage that can simplify all your financial
              and banking support without any further issues
            </p>
          </div>
          {/* <!--Slider Wrapper--> */}
          <div className="swiper teamswiper pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 ">
              <div className="swiper-slide">
                <div className="group w-full flex-wrap flex items-center gap-8  transition-all duration-500 p-8  lg:flex-nowrap">
                  <div className=" w-full lg:w-48 h-64">
                    <img
                      src="/assets/abhishek.JPG"
                      alt="image"
                      className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="text-center lg:text-left lg:max-w-xs flex-1">
                    <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                      <h6 className="text-lg text-gray-900 font-semibold mb-1">
                        Abhishek
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-primary">
                        Founder
                      </span>
                    </div>
                    <p className="text-gray-500 leading-6 mb-7">
                      I am the founder of Galleria Foundation and we’ve pushed
                      our limit so far to make it successful.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group w-full flex-wrap flex items-center gap-8 flex-col md:flex-row transition-all duration-500 p-8 lg:flex-nowrap">
                  <div className=" w-full lg:w-48 h-64 max-lg:max-w-[204px] max-lg:mx-auto">
                    <img
                      src="/assets/megha.JPG"
                      alt="image"
                      className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="text-center lg:text-left lg:max-w-xs flex-1 flex flex-col justify-between">
                    <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                      <h6 className="text-lg text-gray-900 font-semibold mb-1">
                        Megha
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-primary">
                        Founder
                      </span>
                    </div>
                    <p className="text-gray-500 leading-6 mb-7">
                      I am the founder of Galleria Foundation we’ve pushed our
                      limit so far to make it successful.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group w-full flex-wrap flex items-center gap-8  transition-all duration-500 p-8  lg:flex-nowrap">
                  <div className=" w-full lg:w-48 h-64">
                    <img
                      src="/assets/atul.JPG"
                      alt="image"
                      className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="text-center lg:text-left lg:max-w-xs flex-1">
                    <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                      <h6 className="text-lg text-gray-900 font-semibold mb-1">
                        Atul
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-primary">
                        Member
                      </span>
                    </div>
                    <p className="text-gray-500 leading-6 mb-7">
                      I am a Member Galleria Foundation and we’ve pushed our
                      limit so far to make it successful.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative py-12 bg-white sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/grid-pattern.png"
            alt=""
          />
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Transparent Medical Fund
            </h1>
            <p className="max-w-md mx-auto mt-6 text-base font-normal leading-7 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
              massa in enim luctus. Rutrum arcu.
            </p>

            <form
              action="#"
              method="POST"
              className="max-w-md mx-auto mt-8 space-y-4 sm:space-x-4 sm:flex sm:space-y-0 sm:items-end"
            >
              <div className="flex-1">
                <label htmlFor="" className="sr-only">
                  Email address
                </label>
                <div>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg  sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                <button
                  type="button"
                  className="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Join Now
                </button>
              </div>
            </form>

            <ul className="flex items-center justify-center mt-6 space-x-6 sm:space-x-8">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs font-medium text-gray-900 sm:text-sm">
                  Weekly new articles
                </span>
              </li>

              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs font-medium text-gray-900 sm:text-sm">
                  Join other 1600+ Devs
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full gap-6 pb-8 mt-12 overflow-x-auto sm:mt-16 lg:mt-20 snap-x">
          <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
              <div className="px-4 py-5 sm:p-5">
                <div className="flex items-start lg:items-center">
                  <a href="#" title="" className="shrink-0">
                    <img
                      className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-1.png"
                      alt=""
                    />
                  </a>

                  <div className="flex-1 ml-4 lg:ml-6">
                    <p className="text-xs font-medium text-gray-900 lg:text-sm">
                      <a href="#" title="" className="">
                        Growth
                      </a>
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                      <a href="#" title="" className="">
                        How a visual artist redefines success in graphic design
                      </a>
                    </p>
                    <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                      April 09, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
              <div className="px-4 py-5 sm:p-5">
                <div className="flex items-start lg:items-center">
                  <a href="#" title="" className="shrink-0">
                    <img
                      className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-2.png"
                      alt=""
                    />
                  </a>

                  <div className="flex-1 ml-4 lg:ml-6">
                    <p className="text-xs font-medium text-gray-900 lg:text-sm">
                      <a href="#" title="" className="">
                        Growth
                      </a>
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                      <a href="#" title="" className="">
                        How a visual artist redefines success in graphic design
                      </a>
                    </p>
                    <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                      April 09, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
              <div className="px-4 py-5 sm:p-5">
                <div className="flex items-start lg:items-center">
                  <a href="#" title="" className="shrink-0">
                    <img
                      className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-3.png"
                      alt=""
                    />
                  </a>

                  <div className="flex-1 ml-4 lg:ml-6">
                    <p className="text-xs font-medium text-gray-900 lg:text-sm">
                      <a href="#" title="" className="">
                        Growth
                      </a>
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                      <a href="#" title="" className="">
                        How a visual artist redefines success in graphic design
                      </a>
                    </p>
                    <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                      April 09, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
              <div className="px-4 py-5 sm:p-5">
                <div className="flex items-start lg:items-center">
                  <a href="#" title="" className="shrink-0">
                    <img
                      className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-4.png"
                      alt=""
                    />
                  </a>

                  <div className="flex-1 ml-4 lg:ml-6">
                    <p className="text-xs font-medium text-gray-900 lg:text-sm">
                      <a href="#" title="" className="">
                        Growth
                      </a>
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                      <a href="#" title="" className="">
                        How a visual artist redefines success in graphic design
                      </a>
                    </p>
                    <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                      April 09, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
              <div className="px-4 py-5 sm:p-5">
                <div className="flex items-start lg:items-center">
                  <a href="#" title="" className="shrink-0">
                    <img
                      className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-5.png"
                      alt=""
                    />
                  </a>

                  <div className="flex-1 ml-4 lg:ml-6">
                    <p className="text-xs font-medium text-gray-900 lg:text-sm">
                      <a href="#" title="" className="">
                        Growth
                      </a>
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                      <a href="#" title="" className="">
                        How a visual artist redefines success in graphic design
                      </a>
                    </p>
                    <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                      April 09, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
