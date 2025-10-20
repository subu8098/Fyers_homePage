import doubleQuotes from '../assets/double-quotes.png';
import boy from '../assets/boy.png';
import girl from '../assets/girl.png';
import user from '../assets/user.png';
import rating from '../assets/rating.png';
import best from '../assets/best.png';
import download from '../assets/download.png';
import certified from '../assets/certified.png';
import mcx from '../assets/mcx.png'
import bag from '../assets/bag.png'
import guardian from '../assets/guardian.png';
import trade from '../assets/trading-logo.png';
import star from '../assets/star.png';
import ring from '../assets/ring.png';
import add from '../assets/add.png';


export default function TrustSection() {
  // Sample data (replace imgs with your images)
  const testimonials = [
    {
      quote: "FIA is a game changer for scalpers like me. Finally, a platform that understands execution speed.",
      name: "Arjun R",
      designation: "Trader",
      avatar: boy,
    },
    {
      quote: "The equity SIP and screeners have taken my portfolio construction to the next level.",
      name: "Niyati D",
      designation: "Investor",
      avatar: girl,
    }
  ];

  const articles = [
    {
      icon: user, // 1M Users icon
      title: "1 Million + Users",
      text: "The fast, feature-packed and intuitive way to invest and trade.Available on Android and IOS.",
      button: { text: "Download App", icon: download },
      b_icon: download,
    },
    {
      icon: rating, // Star icon
      title: "4.5+ rating on Play Store & App Store",
      text: "A robust web trading platform built using the world-class TradingView library.",
      button: { text: "Read Reviews", icon: rating },
      b_icon: rating,
    },
    {
      icon: best, // Award icon
      title: "ET – Best Bootstrapped Startup Award",
      text: "Honored with the Leading Member – Client Participation award by MCXIndiaLtd.",
      logo: "", // Guardian logo image
      button: { text: "Our Story", icon: best },
        b_icon: best,
        g_icon: guardian,
    }
  ];

  const extraArticles = [
    {
      icon: certified,
      title: "Great Place to Work Certified",
      text: "Tools specifically tailored for Futures & Options analysis, and execution.",
      button: { text: "Explore Careers  ", b_icon: bag }
    },
    {
      icon: mcx,
      title: "MCX Award",
      text: "Maximize your F&O trading Potential by pledging your holdings for additional margins.",
      button: { text: "Button", b_icon: add }
    }
  ];

  return (
    <section className="w-full  bg-[#f0f0fa]  pb-0">
      {/* Top Centered Title */}
      <div className="px-6 sm:px-10 lg:px-[87px] pt-16 pb-4 text-center">
        <div className="text-gray-500 text-lg mb-3 ">Trust</div>
        <div className="text-4xl sm:text-5xl md:text-7xl tracking-wide mb-3 font-semibold text-gray-900 ">
          Made by traders. Loved by traders.
        </div>
        <div className="text-gray-700 text-base font-medium tracking-wide mb-6">
          Our focus is always on your needs.
        </div>
      </div>

      {/* Testimonial Snippet Bar */}
      <div className="flex  flex-col md:flex-row justify-between md:items-center items-start  px-6 sm:px-10 lg:px-[87px] pb-0 mb-3">
        <div className="font-medium mb-4 text-gray-500 text-lg">Testimonials Snippet</div>
        <button className="bg-[#2345f7] text-white flex items-center gap-2 px-6 py-2 text-sm font-medium shadow transition whitespace-nowrap mr-2">
          Read More Reviews
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
         </svg>

        </button>
      </div>

      {/* Testimonials Row */}
      <div className="w-full md:h-[250px] border-t-2 border-b-2 border-gray-300 mt-4 flex flex-col md:flex-row px-6 sm:px-10 lg:px-[87px]">
            {testimonials.map((item, i) => (
                <div
                key={item.name}
                className={`flex flex-col bg-[#f0f0fa] py-7 px-5 md:px-8 border-l-2  border-b-2 border-r-2 border-gray-300 w-full md:w-1/2 overflow-auto `}
                >
                {/* Top Row: Icons */}
                <div className="flex flex-row justify-between items-center mb-4 ml-2">
                    <img src={doubleQuotes} alt="quote" className="w-[55px] h-[55px] object-contain" />
                    <img src={item.avatar} alt={item.name} className="w-[55px] h-[55px]  object-cover -mt-2" />
                </div>

                {/* Bottom Row: Text */}
                <div>
                    <p className="text-gray-900 text-left mr-52 text-base md:text-lg mb-3 ml-2">
                    {item.quote}
                    </p>
                    <p className="text-blue-700 text-left font-semibold text-sm md:text-base ml-2">{item.name}</p>
                    <p className="text-gray-500  text-left text-sm ml-2">{item.designation}</p>
                </div>
                </div>
            ))}
        </div>


      {/* Article Snippet Bar */}
      <div className="flex flex-col md:flex-row justify-between  items-start md:items-center mt-12 px-6 sm:px-10 lg:px-[87px] pt-7 pb-0">
        <div className="font-medium text-gray-500 text-lg mb-3">Articles Snippet</div>
        <button className="bg-[#2345f7] text-white flex items-center gap-2 px-6 py-2 text-sm font-medium r shadow transition whitespace-nowrap mr-2 mb-2">
          Featured Articles
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
         </svg>
        </button>
      </div>

            {/* Articles Row */}
            <div className="w-full border-t-2 border-gray-300 mt-4 h-auto px-6 sm:px-10 lg:px-[87px] pt-0 pb-0">
              <div className="flex flex-col md:flex-row w-full">
                {articles.map((art, idx) => (
                  <div
                    key={art.title}
                    className={`
                      flex flex-col justify-between bg-[#f0f0fa] px-6 py-8 
                      md:w-1/3  border-gray-300 
                      ${idx === 0 ? "md:border-l-2" : ""}
                      md:border-r-2
                      border border-gray-300
                      overflow-hidden
                    `}
                  >
                    {/* Top Row: Icon + Text Block */}
                    <div className="flex flex-row items-start mb-4">
                      {/* Icon */}
                      <div className="w-9 h-9 mr-4 flex-shrink-0">
                        <img src={art.icon} alt="" className="w-full h-full object-contain" />
                      </div>
                      {/* Text Block */}
                      <div className="flex flex-col">
                        <h3 className="text-black font-medium text-3xl mr-11 text-left mb-2">{art.title}</h3>
                        <p className="text-gray-700 text-lg leading-relaxed text-left mr-11">{art.text}</p>
                      </div>
                    </div>
                    {/* Optional Logo (e.g. The Guardian) */}
                    {idx === 2 && (
                      <div className="mb-8 mt-11 ml-11">
                        <img src={art.g_icon} alt="The Guardian Logo" className="w-[170px] h-auto object-contain" />
                      </div>
                    )}
                    {/* Button at Bottom */}
                    <div className="mt-2 ml-11">
                      <button className="flex items-center gap-2 text-base border-2 border-[#182BFF] text-blue-700 font-medium bg-blue-50 px-3 py-2  w-fit">
                        {art.button.text}
                        <img src={art.b_icon} alt="icon" className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* BLACK BANNER - now inside the same container */}
              <div className="my-0 py-0 w-full">
                <div className="w-full bg-black border-t border-b border-gray-300 flex  items-start justify-between py-8 md:py-10">
                  {/* Left Side */}
                  <div className="flex flex-col items-start gap-2 md:gap-3 ml-16 mb-6 md:mb-0">
                    <img src={trade} alt="trade logo" className="w-40 md:w-[265px] h-auto md:h-[38px] mt-2" />
                    <span className="text-[#F5FF0A] text-3xl md:text-5xl lg:text-7xl font-semibold leading-tight text-left">
                      Best Broker <br /> in South Asia
                    </span>
                  </div>
                  {/* Right Side */}
                  <div className="relative flex flex-col mr-20 items-start md:items-center">
                    <img src={star} alt="star" className="h-10 w-28 md:h-[60px] md:w-[180px] mb-2" />
                    <div className="relative">
                      <img
                        src={ring}
                        alt="ring"
                        className="h-20 w-32 md:h-[140px] md:w-[270px] absolute top-2 md:top-2 -left-2 md:-left-1"
                      />
                      <span className="block text-[#F5FF0A] text-xl md:text-2xl lg:text-3xl font-bold leading-tight relative z-10">
                        Best <br /> Broker in <br /> South Asia <br /> 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            

      {/* Bottom Extra Two Articles */}
      <div className="w-full  px-6 sm:px-10 lg:px-[87px] border-b-2 border-gray-300 flex flex-col md:flex-row gap-0 md:gap-0 pb-0">
        {extraArticles.map((item, i) => (
          <div key={item.title} className={`
            flex flex-col justify-between bg-[#f0f0fa] px-7 py-8 border  md:border-b-0
            md:w-1/2  md:border-r-2 first:border-l-2  border-gray-300
          `}>
                
            {/* Top Row: Icon + Text Block */}

              <div className="flex flex-row items-start mb-4">
                {/* Icon */}

                <div className="w-9 h-9 mr-4 flex-shrink-0">
                    <img src={item.icon} alt="" className="w-full h-full object-contain" />
                </div>

                {/* Text Block */}

                <div className="flex flex-col">
                    <h3 className="text-[#182BFF] font-medium text-2xl mr-11 text-left mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed text-left mr-28">{item.text}</p>
                </div>
              </div>

            {/* Button at Bottom */}
            <div className="mt-2 ml-11"> 
            <button className="flex items-center gap-1 text-base border-2 border-[#182BFF] text-[#182BFF] font-medium bg-blue-50 px-4 py-2 mt-2 ">
              {item.button.text}
              <img src={item.button.b_icon} alt="icon" className="w-5 h-5 ml-1" />
            </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Divider */}
      <div className="w-full border-t border-gray-300 mt-0 mb-0" />
    </section>
  );
}
