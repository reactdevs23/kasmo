import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

import classes from "./Faq.module.css";
import Header from "components/common/Header/Header";
import clsx from "clsx";
import { Heading, Text } from "components/common";

const Faq = () => {
  const [active, setActive] = useState(3);
  const faqs = [
    {
      question: "what is Kasmo chain?",
      answer:
        "Kasmo chain is a Layer 1 blockchain designed for cross-chain interoperability and decentralised application development . It enables seamless communication between blockchain like Ethereum,Bitcoin,more ,with enhanced security and scalability",
    },
    {
      question: "What is the KAS-20 token standard?",
      answer:
        "The KAS-20 standard is Kasmo Chain’s framework for managing assets across multiple blockchains, enabling secure and transparent asset transfers within the Kasmo ecosystem.",
    },
    {
      question:
        "Can I use Kasmo Chain for decentralized application (dApp) development?",
      answer:
        "Yes! Kasmo Chain supports Ethereum Virtual Machine (EVM) smart contracts and native WebAssembly (Wasm) dApps, offering developers the flexibility to choose the platform that best suits their needs.",
    },
    {
      question: "How does Niō enhance Kasmo Chain’s security?",
      answer:
        "Niō, the AI-powered security guardian, uses machine learning to detect and mitigate threats in real time, ensuring that Kasmo Chain remains resilient against potential attacks.",
    },
    {
      question: "Ready to Build on Kasmo Chain?",
      answer:
        "Download the Kasmo Chain SDK and start developing your blockchain projects today.",
    },
    {
      question: "Subscribe to our newsletter?",
      answer:
        "Stay up to date with the latest developments, security updates, and ecosystem advancements with the Kasmo Chain monthly newsletter.",
    },
  ];
  return (
    <>
      <section
        className={clsx(classes.wrapper, "container")}
        data-aos="fade-down"
      >
        <Header
          br
          center
          heading="Frequently Asked "
          italicHeading="Questions."
          info="Have questions about Enigma Code-ai? Here are some of the most common inquiries we receive from our users. If you don’t find the answer you’re looking for, feel free to contact us."
        />
        <div className={classes.faqWrapper}>
          {faqs.map((items, index) => (
            <div
              className={classes.faqContainer}
              key={index}
              onClick={() => setActive(index)}
            >
              <div className={classes.questionWrapper}>
                <Heading base primitive0>
                  {items.question}
                </Heading>
                {active === index ? (
                  <BsChevronUp className={classes.icon} />
                ) : (
                  <BsChevronDown className={classes.icon} />
                )}
              </div>
              {active === index && (
                <Text semiBold sm primitive900 className={classes.answer}>
                  {items.answer}
                </Text>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
