import React from 'react'

const Features = () => {
  return (
    <div className="">
        <section className="my-24">
            <h1 className="text-3xl font-sara font-bold text-center">Latest Features</h1>
            <p className="mt-5 text-lg font-medium text-tea-secondary-clr lg:max-w-3xl mx-auto mb-10 text-center">VCT Championship 24 will be held in 2024. The best teams from all over the world will compete for the title of the best team in the world.</p>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5">
            {[...Array(4)].map((_, index) => (
        <div key={index} className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img src="https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blt1c795e99d9905dc1/64f5f6d29bf26168b96b9c28/NEW-VERIZON_GC_HEADER_(1).jpg?width=720&amp;height=405" alt="VALORANT Game Changers NA Series 3 Presented by Verizon"/>
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            <button
              className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sara text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
            </button>
          </div>
          <div className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <h5 className="block font-sara text-base font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                VALORANT Game Changers NA Series 3 Presented by Verizon Kicks Off with the Open Qualifiers on September 28
              </h5>
              <p className="flex items-center gap-1.5 font-sara text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="-mt-0.5 h-5 w-5 text-yellow-700"
                >

                </svg>
              </p>
            </div>
            <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
            </div>
          </div>
        </div>
      ))}
            </div>
        </section>
    </div>
  )
}

export default Features
