import dropDown from '../assets/dropdown.png'; 

const faqData = [
  { q: "What is FYERS's?", highlight: false },
  { q: "What instruments can I trade on FYERS?", highlight: true },
  { q: "FYERS offers trading in stocks, derivatives, commodities, and currencies.", highlight: false },
  { q: "Where is FYERS’s main office located?", highlight: true },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-[#f5f5fa] py-14 pb-20 px-4 sm:px-10 lg:px-[87px]">
      {/* Heading Block */}
      <div className="max-w-full mb-5 text-left">
        <div className="text-[2.6rem] sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight tracking-tight ">FAQs</div>
        <div className="text-gray-700 text-lg font-medium mb-7">Your questions about our platform, answered.</div>
      </div>

      {/* Tab Nav */}
      <div className="flex gap-8 items-center mb-7 border-b border-transparent">
        <div className="flex gap-6 text-lg font-medium">
          <button className="pb-2 border-b-2 border-[#2345f7] text-[#2345f7] transition focus:outline-none">
            Overview
          </button>
          <button className="pb-2 border-b-2 border-transparent text-gray-400 transition focus:outline-none">
            Traders
          </button>
          <button className="pb-2 border-b-2 border-transparent text-gray-400 transition focus:outline-none">
            Investors
          </button>
        </div>
      </div>

      {/* FAQ Table/Box */}
      <div className="w-full max-w-full border border-gray-400 rounded-none bg-white overflow-hidden">
        {faqData.map((item, i) => (
          <div
            key={item.q}
            className={`
              flex items-center justify-between
              py-6 px-6 md:py-7 md:px-10
              border-b border-gray-300 last:border-b-0
              text-lg text-gray-900 font-medium
              ${item.highlight ? 'bg-[#f5f5fa]' : ''}
            `}
          >
            <span>{item.q}</span>
            <span>
              {/* Dropdown/caret arrow (use any svg or image you want here)
              <svg className="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.72-3.937a.75.75 0 111.08 1.04l-4.248 4.5a.75.75 0 01-1.08 0l-4.248-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg> */}
              <img src={dropDown} alt="dropdown arrow" className="w-6 h-6" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
