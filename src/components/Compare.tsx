const Compare = () => {
  const cardData = [
    {
      title: "ZONTA Finance",
      features: [
        "AI-Powered Robo Advisor",
        "Trade Crypto, Shares, Bonds, Commodities, FX",
        "Purchase ETFs & Other Real World Assets",
        "No KYC Registration",
        "Earn Passive Income Staking",
        "DeFi Debit Card",
      ],
    },
    {
      title: "Robinhood",
      features: [
        "AI-Powered Robo Advisor",
        "Trade Crypto, Shares, Bonds, Commodities, FX",
        "DeFi Debit Card",
        "Earn Passive Income Staking",
      ],
    },
    {
      title: "Binance",
      features: ["No KYC Registration", "DeFi Debit Card"],
    },
    {
      title: "Crypto.com",
      features: [
        "AI-Powered Robo Advisor",
        "Trade Crypto, Shares, Bonds, Commodities, FX",
        "Earn Passive Income Staking",
        "DeFi Debit Card",
      ],
    },
    {
      title: "Coinbase.com",
      features: [
        "AI-Powered Robo Advisor",
        "Trade Crypto, Shares, Bonds, Commodities, FX",
        "Earn Passive Income Staking",
        "DeFi Debit Card",
      ],
    },
  ];

  return (
    <section className="w-full h-fit px-4 flex justify-center items-center flex-col py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black bg-dot-white/[0.1] dark:bg-dot-black/[0.1] text-white relative">
      <h1 className="font-semibold text-[4vw] tracking-wider">Compare Us</h1>
      <h1 className="font-semibold text-gray-400 text-[3vw] mb-10">
        With Others.
      </h1>
      <div className="w-full gap-8 my-4 flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="rounded-3xl w-full md:w-1/3 p-8"
            style={{ boxShadow: "0px 4px 24px 0px #B6D7FF inset" }}
          >
            <p className="text-white font-bold py-4">{card.title}</p>
            {card.features.map((feature, idx) => (
              <p
                key={idx}
                className="items-center flex text-white font-semibold py-4"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      d="M9.24219 13.2578L15.2422 19.2578L24.2422 5.75781"
                      stroke="#1CB46A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {feature}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Compare;
