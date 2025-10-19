import Futures from '../assets/Futures.png';
import Commodity from '../assets/Commodity.png';
import Stocks from '../assets/Stocks.png';
import ETFs from '../assets/ETFs.png';
import MutualFunds from '../assets/Mutual-Funds.png';
import IPOs from '../assets/IPOs.png';



const features = [
  { name: 'Futures and Options', icon: Futures },
  { name: 'Commodity', icon: Commodity },
  { name: 'Stocks', icon: Stocks },
  { name: 'ETFs', icon: ETFs },
  { name: 'Mutual Funds', icon: MutualFunds },
  { name: 'IPOs', icon: IPOs },
];

export default function FeaturesBar() {
  return (
    <section className="w-full bg-transparent">
      <div className="w-full max-w-full mx-auto border-t border-gray-700">
        {/* Options row */}
        <div
          className="
            flex
            md:justify-between
            md:items-center
            overflow-x-auto
            h-[32px]
            border-b
            border-gray-700
            bg-[#18181c]
            scrollbar-hide
          "
        >
              {features.map((feat, i) => (
                <div
                  key={i}
                  className={`
                    flex items-center gap-2
                    h-full
                    border-r border-gray-700
                    pl-4 pr-3
                    
                    min-w-[50%] md:min-w-0
                    md:w-1/6
                    border-t border-gray-700 md:border-t-2
                    
                    `}
                  style={{
                    borderLeft: i === 0 ? "1px solid #3b3b3d" : undefined,paddingLeft: i === 0 ? "40px" : undefined,
                  }}
                >
                  {/* Blank icon, size = 18px, color placeholder, aligns with design */}
                  <img src={feat.icon} alt="" className="w-[18px] h-[18px] object-contain mr-1" />
                  <span className="text-[15px] text-[#e1e1ec] font-normal overflow-hidden whitespace-nowrap">{feat.name}</span>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

