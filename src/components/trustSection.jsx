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
      text: "The fast, feature-packed and intuitive way to invest and trade.\nAvailable on Android and IOS.",
      button: { text: "Download App", icon: download }
    },
    {
      icon: rating, // Star icon
      title: "4.5+ rating on Play Store & App Store",
      text: "A robust web trading platform built using the world-class TradingView library.",
      button: { text: "Read Reviews", icon: rating }
    },
    {
      icon: best, // Award icon
      title: "ET – Best Bootstrapped Startup Award",
      text: "Honored with the Leading Member – Client Participation award by MCXIndiaLtd.",
      logo: "", // Guardian logo image
      button: { text: "Our Story", icon: best }
    }
  ];

  const extraArticles = [
    {
      icon: certified,
      title: "Great Place to Work Certified",
      text: "Tools specifically tailored for Futures & Options analysis, and execution.",
      button: { text: "Explore Careers", icon: bag }
    },
    {
      icon: mcx,
      title: "MCX Award",
      text: "Maximize your F&O trading Potential by pledging your holdings for additional margins.",
      button: { text: "Button +", icon: "" }
    }
  ];

  return (
    <section className="w-full bg-[#f0f0fa] pb-0">
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
      <div className="flex justify-between items-center px-6 sm:px-10 lg:px-[87px] pb-0 mb-0">
        <div className="font-medium text-gray-500 text-lg">Testimonials Snippet</div>
        <button className="bg-[#2345f7] text-white flex items-center gap-2 px-6 py-2 text-sm font-medium shadow transition whitespace-nowrap">
          Read More Reviews
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
         </svg>

        </button>
      </div>

      {/* Testimonials Row */}
      <div className="w-full md:h-[250px] border-t border-b border-gray-300 mt-4 flex flex-col md:flex-row px-6 sm:px-10 lg:px-[87px]">
            {testimonials.map((item, i) => (
                <div
                key={item.name}
                className={`flex flex-col bg-[#f0f0fa] py-7 px-5 md:px-8 border-l last:border-r border-gray-300 w-full md:w-1/2 `}
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
      <div className="flex justify-between items-center px-6 sm:px-10 lg:px-[87px] pt-7 pb-0">
        <div className="font-semibold text-gray-500 text-base">Articles Snippet</div>
        <button className="bg-[#2345f7] text-white flex items-center gap-2 px-6 py-2 text-sm font-medium rounded shadow transition whitespace-nowrap">
          Featured Articles
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </button>
      </div>

      {/* Articles Row */}
      <div className="w-full border-t border-gray-300 px-6 sm:px-10 lg:px-[87px] pt-0 flex flex-col md:flex-row gap-0 md:gap-0 pb-0">
        {/* Article Cards */}
        <div className="flex flex-col md:flex-row gap-0 w-full">
          {articles.map((art, idx) => (
            <div key={art.title} className={`
              flex flex-col justify-between bg-white px-7 py-8 border-b border-gray-300 md:border-b-0 
              md:w-1/3 md:border-r last:md:border-r-0 border-gray-300
            `}>
              <div className="flex items-center mb-2">
                <img src={art.icon} className="w-7 h-7 mr-4" alt="" />
                <span className="text-blue-800 font-bold text-lg">{art.title}</span>
              </div>
              <div className="text-gray-700 text-sm mb-4">{art.text}</div>
              {art.logo && (
                <img src={art.logo} alt="" className="w-20 h-5 object-contain mb-3" />
              )}
              <button className="flex items-center gap-1 text-xs text-blue-700 font-medium bg-blue-50 px-4 py-2 mt-2 rounded">
                {art.button.text}
                <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Black Banner */}
      <div className="w-full border-t border-b border-gray-300 px-0 my-0 bg-black flex items-center justify-between py-7 px-6 sm:px-10 lg:px-[87px]">
        <div className="flex items-center gap-3">
          <img src="" alt="" className="w-9 h-9 mr-2" />
          <span className="text-[#ffe900] text-3xl font-bold leading-tight mr-3">
            Best Broker in South Asia
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img src="" alt="" className="h-8 w-8" />
          <span className="text-white font-semibold">
            <span className="block">Best Broker in South Asia</span>
            <span className="text-[#ffe900] text-xs">2024</span>
          </span>
        </div>
      </div>

      {/* Bottom Extra Two Articles */}
      <div className="w-full px-6 sm:px-10 lg:px-[87px] flex flex-col md:flex-row gap-0 md:gap-0 pb-0">
        {extraArticles.map((item, i) => (
          <div key={item.title} className={`
            flex flex-col justify-between bg-white px-7 py-8 border-b border-gray-300 md:border-b-0
            md:w-1/2 md:border-r last:md:border-r-0 border-gray-300
          `}>
            <div className="flex items-center mb-2">
              <img src={item.icon} className="w-7 h-7 mr-4" alt="" />
              <span className="text-blue-800 font-bold text-lg">{item.title}</span>
            </div>
            <div className="text-gray-700 text-sm mb-4">{item.text}</div>
            <button className="flex items-center gap-1 text-xs text-blue-700 font-medium bg-blue-50 px-4 py-2 mt-2 rounded">
              {item.button.text}
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Divider */}
      <div className="w-full border-t border-gray-300 mt-0 mb-0" />
    </section>
  );
}
