import React from "react";

export default function Faq() {
  return (
    <div>
      <div className="space-y-3">
        <h1 className="text-primary text-3xl md:text-5xl font-bold text-center">
          Frequently Asked Questions
        </h1>
        <h4 className="text-center text-primary text-xl font-medium">
          We'd like you to be able to use magicoon in the best way.
        </h4>
        <h4 className="text-center text-primary text-xl font-medium">
          The section below will tell you how.
        </h4>
      </div>

      <div className="space-y-4 border max-w-3xl 2xl:max-w-6xl mx-auto">
        {faqs.map((faq) => (
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title md:text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.reply}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface Faq {
  question: string;
  reply: string;
}

const faqs: Faq[] = [
  {
    question: "How many styles and types are included in the Iconly app?",
    reply:
      "You will have access to 6 styles in the initial version we will continue to add more exciting icons in the future.",
  },
  {
    question: "Can I order custom icons for my personal project?",
    reply:
      "You will have access to 6 styles in the initial version we will continue to add more exciting icons in the future.",
  },
  {
    question: "How can I request new icons?",
    reply:
      "You will have access to 6 styles in the initial version we will continue to add more exciting icons in the future.",
  },
  {
    question: "How many devices can I use with my subscription?",
    reply:
      "You will have access to 6 styles in the initial version we will continue to add more exciting icons in the future.",
  },
  {
    question: "How can I refund my money?",
    reply:
      "You will have access to 6 styles in the initial version we will continue to add more exciting icons in the future.",
  },
  {
    question:
      "Is there any option for customizing icons and saving them for myself?",
    reply:
      "You will have access to 6 styles in the initial version we will continue to add more exciting icons in the future.",
  },
];
