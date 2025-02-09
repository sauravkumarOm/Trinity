import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "../assets/grid_bg.svg";
import { useMediaQuery } from "react-responsive";

const faqs = [
  { question: "Who is eligible to participate in the TRAINIT Hackathon?", answer: "Anyone with a passion for technology and innovation can participate." },
  { question: "Will there be any mentors available during the hackathon?", answer: "Yes, experienced mentors will be available to guide participants." },
  { question: "Will there be prizes for the winners of the hackathon?", answer: "Yes, exciting prizes will be awarded to top-performing teams." },
  { question: "How can we register for the TRAINIT Hackathon?", answer: "You can register through our official website or event page." },
];

const Laptop = ()=>{
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center px-6 py-16 ">
      {/* Title */}
      <motion.h1
        className="text-6xl font-normal squid-font text-black mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Ask quEStIOn?
      </motion.h1>
      <motion.div
        className="h-1 w-32 bg-red-500 mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      ></motion.div>

      {/* FAQ Section */}
      <div className="max-w-4xl bg-red-600 text-white w-full border border-white">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-red-500 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <motion.div
              layout
              className="flex items-center justify-between p-4 font-semibold text-lg"
            >
              <span>{faq.question}</span>
              <motion.span
                className="text-2xl"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                +
              </motion.span>
            </motion.div>

            {/* Answer Animation */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="p-4 text-white overflow-hidden"
                  initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                  exit={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

const Mobile = ()=>{
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center px-6 py-16 ">
      {/* Title */}
      <motion.h1
        className="text-3xl font-normal squid-font text-black mb-1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Ask quEStIOn?
      </motion.h1>
      <motion.div
        className="h-1 w-64 bg-red-500 mb-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      ></motion.div>

      {/* FAQ Section */}
      <div className=" bg-red-600 text-white w-80 border border-white">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-red-500 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <motion.div
              layout
              className="flex items-center justify-between p-4 font-semibold text-sm"
            >
              <span>{faq.question}</span>
              <motion.span
                className="text-2xl"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                +
              </motion.span>
            </motion.div>

            {/* Answer Animation */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="p-4 text-white text-xs overflow-hidden"
                  initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                  exit={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQSection = () => {
  const isMobile = useMediaQuery({maxWidth : 380});
  return isMobile ? <Mobile/> : <Laptop/>
};

export default FAQSection;
