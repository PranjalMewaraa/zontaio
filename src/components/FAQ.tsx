import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is decentralized finance (DeFi)?",
      answer:
        "Decentralized finance (DeFi) refers to financial systems that operate without a central authority, utilizing blockchain technology to provide open and transparent financial services.",
    },
    {
      question: "How does tokenization work?",
      answer:
        "Tokenization converts real-world assets, like property or commodities, into digital tokens on the blockchain, making them easier to trade, transfer, or fractionalize.",
    },
    {
      question: "What is a DeFi Debit Card?",
      answer:
        "A DeFi Debit Card allows you to spend your crypto assets in real-time by converting them to fiat currency at the point of sale, enabling seamless everyday transactions.",
    },
    {
      question: "On Which Exchanges Will $Zonta Tokens Be Listed?",
      answer:
        "We are in discussions with multiple major cryptocurrency exchanges and plan to list $Zonta tokens shortly after the token sale concludes. Specific exchange listings will be announced via our official channels.",
    },
    {
      question: "Has the token smart contract undergone Auditing?",
      answer:
        "Yes, the token smart contract has been audited by SolidProof, a leading independent security firm, to ensure its integrity and security. Click here to view the audit report",
    },
    {
      question: "What is Minimum Token Purchase Amount ?",
      answer:
        "The minimum purchase amount for $Zonta tokens is set at $50 or the equivalent in other accepted cryptocurrencies.",
    },
    {
      question: "Are There Any Taxes Applied to Tokens??",
      answer: "1% buy and 4% sell tax on all the Zonta token transactions.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full mx-auto pt-16  p-8 bg-black rounded-lg shadow-md">
      <h2 className="text-9xl font-bold text-left w-full text-white mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            {/* Question */}
            <button
              className="w-full flex justify-between items-center p-4 text-left text-gray-200 font-medium focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <svg
                className={`w-5 h-5 transition-transform transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* Answer */}
            {activeIndex === index && (
              <div className="p-4 text-gray-400">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
