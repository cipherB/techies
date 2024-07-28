import Image from "next/image";
import React, { useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";
import { marked } from "marked";

const faqs = [
  {
    id: 1,
    question: "What kind of services do you offer?",
    answer: `<p>Check out the services section just above here to see the some of the services we offer in our plans.</p>`,
  },
  {
    id: 2,
    question: "What do you use to make things?",
    answer: `<p>We currently use Figma for designs, Photoshop/Illustrator for illustration-based tasks, and Webflow and Framer for no-code development.<br/>

    While for fully-coded development, we make use of frameworks and libraries such as React.Js, Next.Js, and Vue.Js amongst others.</p>`,
  },
  {
    id: 3,
    question: "How long will it take to fill a request?",
    answer: `<p>Because each and every request is different, it's hard to guarantee anything here but our general rule of thumb for a typical request is a complete business week.<br/>

    A typical request could be a creating a new landing page or recreating/modernizing and existing one. This might require services such as competitive analysis, ux audits and many more. A non-typical request could extend out from there, which could be anything from creating a new system, creating multiple landing pages, to creating a web-app and much more. In cases such as this, we&apos;d discuss the delivery system you&apos;d prefer.</p>`,
  },
  {
    id: 4,
    question:
      "What happens if you get too many clients? Will I get a bad product?",
    answer: `<p>We limit the amount of clients we can take on so that the quality is never spread too thin. If we open up more slots, we'll hire more designers and developers to fill that gap.</p>`,
  },
  {
    id: 5,
    question: "how secure would our websites be?",
    answer: `<p>We ensure any sensitive information sent to us are stored within a secured deployment platform and not accessible directly in the website by any unwanted party.</p>`,
  },
];

const DangerousHTML = ({ text }) => {
  const htmlContent = marked(text);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

const SectionEight = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionSelect = (id) => {
    if (selectedQuestion === id) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(id);
    }
  };

  return (
    <div id="faq" className="max-w-[1300px] mb-[100px] mt-20 md:my-[120px] mx-auto px-4 md:px-14">
      <h2 className="capitalize text-3xl md:text-5xl leading-[2rem] inline-block font-bold mb-10 pb-5">
        <span className="flex items-center gap-x-5">
          frequently{" "}
          <Image
            src={"/ArrowRight.svg"}
            alt="Arrow right"
            width={64}
            height={38.34}
            className="hidden md:block"
          />
        </span>{" "}
        <br className="hidden md:block" />
        asked questions
      </h2>
      <div className="grid md:grid-cols-6 gap-x-10">
        {/* Column 1 */}
        <div className="sticky top-0 col-span-2" >
          <p className="capitalize text-[22px] md:text-[30px] leading-[67.2px] font-bold mb-2">
            general
          </p>
          <p>Questions about what is possible with us. </p>
        </div>
        {/* Column 2 Row 1 */}
        <div className="col-span-4 " >
          {faqs.slice(0, 4).map((faq) => (
            <div key={faq.id} className={`${faq.id !== 1 && "pt-7"} pb-5 border-b border-[#E6E6E6]`} >
              <div className="flex items-center justify-between cursor-pointer" onClick={()=>handleQuestionSelect(faq.id)}>
                <p className="font-medium">{faq.question}</p>
                {selectedQuestion === faq.id ? (
                  <BsDash className="text-2xl font-semibold" />
                ) : (
                  <BsPlus className="text-2xl font-semibold" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  selectedQuestion === faq.id ? "max-h-[1000px] mt-8" : "max-h-0"
                }`}
              >
                <DangerousHTML text={faq.answer} />
                {/* <p dangerouslySetInnerHTML={{__html: faq.answer}} /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-6 gap-x-10">
        {/* Column 1 */}
        <div className="sticky top-0 col-span-2" >
          <p className="capitalize  text-[30px] leading-[67.2px] font-bold mb-2">
            security
          </p>
          <p>Questions on security and data protection. </p>
        </div>
        {/* Column 2 Row 2 */}
        <div className="col-span-4 " >
          {faqs.slice(4, 5).map((faq) => (
            <div key={faq.id} className={`pt-7 pb-5 border-b border-[#E6E6E6]`} >
              <div className="flex items-center justify-between cursor-pointer" onClick={()=>handleQuestionSelect(faq.id)}>
                <p className="font-medium">{faq.question}</p>
                {selectedQuestion === faq.id ? (
                  <BsDash className="text-2xl font-semibold" />
                ) : (
                  <BsPlus className="text-2xl font-semibold" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  selectedQuestion === faq.id ? "max-h-[1000px] mt-8" : "max-h-0"
                }`}
              >
                <DangerousHTML text={faq.answer} />
                {/* <p dangerouslySetInnerHTML={{__html: }} /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
