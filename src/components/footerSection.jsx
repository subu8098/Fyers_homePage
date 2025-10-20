import fyersLogo from '../assets/FYERS-White-Logo.png';

export default function Footer() {
  return (
    <>
      {/* Call-to-action section */}
      <section className="py-10 md:pb-10 md:pt-16 bg-[#131319]">
        <div className="felx felx-col md:flex justify-between items-end px-4 sm:px-6 lg:px-8">
          <div className="md:ml-11 -mt-4">
            <h2 className="text-5xl break-words max-w-lg md:max-w-full md:text-5xl lg:text-6xl font-bold text-[#F7FD04] mb-4 ml-2 text-left">Your Next Level Awaits</h2>
            <p className="text-md md:text-md text-gray-400  ml-2 text-left">Trade sharper. Invest smarter.</p>
            <p className="text-md md:text-md text-gray-400 ml-2 mb-9 text-left">Experience it all on the all-new FYERS Web & App.</p>
          </div>

          <div className="flex mr-0  sm:flex-row items-start flex-wrap   gap-4">
            <button className="px-6 py-2 break-words bg-blue-100 text-[#182BFF] font-semibold hover:bg-blue-200  flex items-center gap-2">
              Download the App
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <button className="px-6 py-2 break-words bg-[#182BFF] text-white font-semibold hover:bg-blue-700 transition-colors">
              Login to FYERS
            </button>
          </div>
        </div>
      </section>
      <hr className="border-[1px] border-gray-700" />

      {/* Footer */}
      <footer className="bg-[#131319] text-white py-8">
        <div className="md:ml-11 ml-2 px-4 mr-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 pb-2 border-gray-800 -mt-4">
            <div className="flex md:flex-row items-start md:items-center w-full md:w-auto">
              <div className="flex items-center">
                <img src={fyersLogo} alt="FYERS Logo" className="h-10 md:h-14    mb-2 md:mb-0 inline-block" />
                <span className="md:inline-block mx-4 h-10 border-l-2 border-gray-600"></span>
              </div>
              <div className="text-white ml-6 break-words text-md font-semibold mt-2 md:mt-0 md:ml-6 tracking-wider">
                BUILT FOR THE AMBITIOUS SELF-MADE INVESTOR.
              </div>
            </div>
            <div className="flex flex-wrap gap-6 md:gap-12 mt-6 md:mt-0 md:ml-8 mr-9" >

                <a href="#" class="text-white hover:text-gray-400 transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
                <a href="#" class="text-white hover:text-gray-400 transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a>
                <a href="#" class="text-white hover:text-gray-400 transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a>
                <a href="#" class="text-white hover:text-gray-400 transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>
                <a href="#" class="text-white hover:text-gray-400 transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg></a>

              
            </div>
          </div>

          <div className="mb-11 mt-6 ml-2">
            <p className="hidden md:block text-gray-400 text-xs leading-relaxed text-left">
              FYERS Securities Private Limited<br />
              601 and 602, 6th Floor,<br />
              A Wing, Brigade Magnum,<br />
              #3, Koramangala Industrial Layout,<br />
              Bangalore – 560095
            </p>
          </div>

          <div className="grid break-words grid-cols-2 md:grid-cols-5 mt-12 gap-8 mb-12 text-left">
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Downloads</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Fund Transfers</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Bug Bounty Program</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Fyers Systems Status</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Industry Stocks</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Send Feedback</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Become a Partner</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Trust & Security</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Awards & Recognition</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Offerings</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Investments</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Research Reports</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Integrated Partners</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Trading View</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Institutional Broking</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Calculators</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Accounts</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">NRI Account</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Corporate Account</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Minor Account</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">e-Voting CDSL</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">e-Voting NSDL</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Policy</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">DP - Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">AP - Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">App - Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Investor Charter - Depositories</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white">Investor Charter - Stock Brokers</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6">
            <p className="text-gray-500 break-words text-sm leading-relaxed text-left mb-6">
              Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI. Issued in the interest of investors. The client can avail to takes complaint/dispute to SEBI portal, in case of any account opening related queries, you can contact us. NSC doesn't give any feedback to such feedback to such stock brokers regarding investor complaints. For any account opening related queries, you can reach out to our sales team at support@fyers.in. For revocation of E-Consent and activation of physical modes kindly update your mobile number with your stock broker/depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge. Disclaimer: Please find the calculation/ computation methodology to cover in your account. Kindly update your mobile number, email id with your stock brokers to receive information of your transactions directly from Exchange on your mobile/email at the end of the day.
            </p>
            <p className="text-gray-500 break-words text-sm text-left leading-relaxed mb-6">
              Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020.Update your email id and mobile number with your stock broker / depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge.Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.le a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
            </p>
            <p className="text-gray-500 break-words text-sm text-left leading-relaxed mb-6">
              KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary. Attention Investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your email and phone number with your stock broker / depository participant and receive OTP directly from depository on your email and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month. In case of discrepancies, kindly contact your stock broker / depository participant within 30 days from the receipt of statement. "Investments in securities market are subject to market risks, read all the related documents carefully before investing". In case of grievances for any of the services rendered by FYERS Securities Pvt. Ltd., you can write to us at: Compliance Officer: Ms. Ruchira Gupta compliance@fyers.in +91-80-40402919 / 20 / 21. or FYERS will not be liable for damages arising out of usage of information available in the website/mobile application/any service availed through Exchange.
            </p>
            <div className="flex flex-wrap md:flex-row justify-between items-center pt-6 mb-9 border-gray-800">
              <p className="text-gray-500 break-words text-sm mb-4 md:mb-0">©FYERS Securities Pvt. Ltd. All Rights Reserved</p>
              <button id="scroll-top" className="text-white bg-[#182BFF] p-[7px] hover:text-yellow-200 text-sm font-medium flex items-center gap-2">
                Scroll to top
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
