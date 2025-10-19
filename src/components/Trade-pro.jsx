  import { useState } from "react";
  import AdvancedCharts from '../assets/Advanced-Charts.png';
  import SmartOrders from '../assets/Smart-Orders.png';
  import ScalpingMode from '../assets/Scalping-Mode.png';
  import AIPowered from '../assets/AI-Powered.png';
  import SmartEquity from '../assets/Smart-Equity.png';
  import Realtime from '../assets/Real-time.png';
  import first from '../assets/1st.png';
  import second from '../assets/2nd.png';
  import third from '../assets/3rd.png';
  import fourth from '../assets/4th.png';
  import fifth from '../assets/5th.png';
  import sixth from '../assets/6th.png';

  // Replace with real image srcs or leave "" for placeholder
  const BANNERS = [
    {
      heading: "Advanced Charts",
      text: "Real-time precision, 25+ years of data, multi-chart layouts, seconds chart, 50+market depth, and seamless execution from charts built for serious traders.",
      button: "Learn more +",
      img: AdvancedCharts,
      main: first,
    },
    {
      heading: "Smart Orders",
      text: "Automated risk-managed execution with bracket orders, smart exit, trailing SL and more; built for precision and control.",
      button: "Learn more +",
      img: SmartOrders,
      main: second,
    },
    {
      heading: "Scalping Mode",
      text: "Effortless execution for scalp trading along with dynamic chart overlays, multiple watchlists, and a super-fast interface.",
      button: "Learn more +",
      img: ScalpingMode,
      main: third,
    },
    {
      heading: "AI-Powered Discovery",
      text: "Scan and analyze stocks with AI-based screeners, news, and insights to create, test, and compare portfolios and trade opportunities.",
      button: "Learn more +",
      img: AIPowered,
      main: fourth,

    },
    {
      heading: "Smart Equity SIP",
      text: "Plan for long-term wealth creation through SIPs in stocks, manage with portfolio rebalancing.",
      button: "Learn more +",
      img: SmartEquity,
      main: fifth,
    },
    {
      heading: "Real-time News",
      text: "Personalized & integrated market-moving news for every segment in one place.",
      button: "Learn more +",
      img: Realtime,
      main: sixth,
    },
  ];
   

  export default function TradeLikeProSection() {
    const [current, setCurrent] = useState(0);

    return (
      
      <section className="w-full bg-[#F0F0FA] min-h-[1200px] pt-0 pb-10">
        {/* --- Wording & Button --- */}
        <div className="w-full max-w-full px-6 sm:px-8 md:px-12 lg:px-24 pt-12 md:pt-16 pb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left: Text content */}
          <div className="flex flex-col items-start max-w-full md:max-w-[60%] lg:max-w-[50%]">
            <h3 className="text-gray-700 text-sm md:text-base lg:text-lg font-medium mb-2 tracking-wide">
              TRADE LIKE A PRO WITH
            </h3>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900  lg:-ml-1 mb-4 leading-tight">
              FYERS Edge
            </h1>
            <p className="text-gray-600 text-left text-sm sm:text-base md:text-base lg:text-lg leading-relaxed max-w-full">
              We design tools that help India's traders & investors gain an edge in the stock market. Exclusive FYERS tools designed for traders who demand more.
            </p>
          </div>

          {/* Right: Button */}
          <div className="flex md:items-start md:mt-0">
            <button className="bg-[#2345f7] hover:bg-[#14329c] text-white flex items-center gap-2 px-6 py-3 text-sm md:text-base font-medium md:mt-32 shadow transition whitespace-nowrap">
              Explore Tools
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>


        {/* --- Horizontal Divider --- */}
        <div className="w-full border-t border-gray-300 mt-14 mb-0 overflow-x-auto" />

        {/* --- Banner Slider (Desktop: show all, Mobile: show 1, scrollable) --- */}
        <div className="w-full  mx-auto mt-0 relative min-h-auto overflow-x-auto">
          <div className="flex flex-col">

            {/* --- Carousel: scrollable on mobile, full row on desktop --- */}
            <div className="flex overflow-x-auto  gap-0 md:gap-0 px-0 scrollbar-hide  transition-all duration-300" style={{minHeight:700}}>
              {BANNERS.map((banner, i) => (
                <div
                    key={i}
                    className={`
                        flex-shrink-0 border-2 border-gray-300 bg-white shadow
                        flex flex-col justify-between
                        h-[720px]
                        lg:first:ml-24
                        md:ml-8
                        ml-6
                        w-[95%] md:w-[980px]
                        mr-3 last:mr-0
                        transition-all
                      `}
                    style={{
                      display: (window.innerWidth < 768 && current !== i) ? 'none' : undefined
                    }}
                    >

                    <div className="flex flex-col md:flex-row" >

                      <div class="mt-8 ml-6"> 
                              <div className="flex items-center gap-2 mb-2">
                        <span>
                          {/* sample svg icon or leave blank/slot for your own */}
                          <img src={banner.img} alt="" className="w-[21px] h-[21px]" />
                        </span>
                        <span className="font-semibold text-lg md:text-2xl text-black">{banner.heading}</span>
                      </div>
                          <div className="text-gray-700 text-xs text-left w-1/2 md:text-base font-normal mb-4 lg:leading-relaxed">{banner.text}</div>

                      </div>

                      


                          <div className="mt-4 md:mt-[125px] md:mr-11 md:ml-auto flex items-start px-6 md:px-0">
                            <button className="border text-nowrap border-blue-700 text-blue-700 font-normal bg-blue-100 h-11 px-6 py-1 hover:bg-blue-700 hover:text-white transition">
                              {banner.button}
                            </button>
                          </div>

                      </div>

                      
                      {/* Banner image, default empty */}
                      <div className="flex flex-1 items-end w-full justify-center mt-2">
                        <img src={banner.main} alt="" className=" object-scale-fill min-h-[170px] h-[500px] w-full " />
                      </div>
                </div>
              ))}
            

              
            </div>

            {/* bottom horizontal line */}
            <div className="w-full border-t border-gray-300  mb-0 overflow-x-auto" />


          
          </div>

          {/* --- Dot/Stepper Navigation --- */}
            

        </div>
        <div className="flex flex-row justify-center items-center gap-2 mt-14 ">
              {BANNERS.map((_, idx) => (
                <span
                  key={idx}
                  className={`block rounded-full ${current === idx ? 'bg-blue-600' : 'bg-gray-300'} transition-all`}
                  style={{
                    width: current === idx ? 24 : 10,
                    height: 8,
                    marginLeft: idx ? 4 : 0,
                    cursor: "pointer"
                  }}
                  onClick={() => setCurrent(idx)}
                />
              ))}
            </div>
        
      </section>


 

    );
  }
