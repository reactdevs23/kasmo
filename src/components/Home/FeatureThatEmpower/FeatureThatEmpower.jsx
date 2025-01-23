import Header from "components/common/Header/Header";
import classes from "./FeatureThatEmpower.module.css";
import { Heading, Text } from "components/common";
import clsx from "clsx";
import {
  codeCompletionImg,
  codeCompletionLogo,
  debuggingImg,
  debuggingLogo,
  integrationImg,
  integrationLogo,
  optimizationImg,
  optimizationLogo,
} from "images";
import AutoSlider from "components/common/AutoSlider/AutoSlider";

const FeatureThatEmpower = () => {
  const features = [
    {
      img: codeCompletionImg,
      logo: codeCompletionLogo,
      heading: "Cross-Chain Interoperability",
      info: "Easily move assets and data across different blockchain ecosystems with the CCIM (Cross-Chain Interoperability Module). Whether you're interacting with Bitcoin, Ethereum, or other chains, Kasmo Chain’s interoperability ensures secure, seamless, and trust-minimized cross-chain communication.",
    },
    {
      img: debuggingImg,
      logo: debuggingLogo,
      heading: "Advanced Consensus Mechanism: CLCM",
      info: "Kasmo Chain’s Cross-Liquidity Consensus Mechanism (CLCM) provides a scalable and secure foundation for decentralized applications, integrating both validators and nominators to maintain the network's integrity. Maximize security and efficiency with this next-gen consensus protocol.",
    },
    {
      img: integrationImg,
      logo: integrationLogo,
      heading: "Native Ethereum Virtual Machine (EVM) Compatibility",
      info: "Take advantage of full EVM compatibility to deploy Ethereum-based smart contracts effortlessly on Kasmo Chain. For developers familiar with Ethereum, this compatibility simplifies the migration and expansion of dApps without compromising functionality or security.",
    },
    {
      img: optimizationImg,
      logo: optimizationLogo,
      heading: "Integration for dApps",
      info: "In addition to EVM support, Kasmo Chain natively integrates WebAssembly (Wasm) to support decentralized applications (dApps) with unparalleled performance and flexibility. This hybrid approach, using precompiles, bridges the gap between the EVM and native Wasm runtimes, expanding your possibilities as a developer.",
    },
  ];
  const codeCompletion = features[0];
  const facilities = [
    "AI-powered Components",
    "Smart Components",
    "Innovative Components",
    "Intelligent Components",
    "Automated Components",
  ];
  return (
    <section className={clsx(classes.wrapper, "container")}>
      <Header
        heading="The Trusted Choice of Blockchain"
        italicHeading="Developers"
        info="Kasmo Chain is the foundation for a growing ecosystem of developers, businesses, and institutions building the future of decentralized finance (DeFi) and beyond. Harness the power of Kasmo's Cross-Liquidity Consensus Mechanism (CLCM) and the Cross-Chain Interoperability Module (CCIM) to revolutionize your blockchain projects."
      />
      <div className={classes.allFeatures}>
        <div className={classes.topPart}>
          {" "}
          <div className={classes.about} data-aos="fade-up">
            <div className={classes.header}>
              <button className={clsx(classes.button, classes.red)}></button>
              <button className={clsx(classes.button, classes.yellow)}></button>
              <button className={clsx(classes.button, classes.green)}></button>
            </div>
            <Heading xl4 gradient className={classes.heading}>
              Kasmo Chain is built to push the boundaries of what’s possible in
              the decentralized world. Our unique architecture is designed to
              ensure frictionless integration, scalability, and security, with
              the tools and features that today’s blockchain developers need to
              stay ahead of the curve
            </Heading>
          </div>
          <div className={classes.featureAndFaciliteis}>
            <div className={clsx(classes.feature, classes.codeCompletion)}>
              <img
                src={codeCompletion.img}
                alt={codeCompletion.title}
                className={classes.img}
              />{" "}
              <div className={classes.infoWrapper}>
                {" "}
                <img
                  src={codeCompletion.logo}
                  alt={codeCompletion.title}
                  className={classes.icon}
                />
                <div className={classes.infoContainer}>
                  <Heading primitive0 base>
                    {codeCompletion.title}
                  </Heading>{" "}
                  <Text primitive900 sm>
                    {codeCompletion.info}
                  </Text>
                </div>
              </div>
            </div>{" "}
            <AutoSlider items={facilities} />
          </div>
        </div>
        <div className={classes.features} data-aos="fade-up">
          {features?.slice(1).map((feature, index) => (
            <div key={index} className={classes.feature}>
              <img
                src={feature.img}
                alt={feature.heading}
                className={classes.img}
              />
              <div className={classes.infoWrapper}>
                <img
                  src={feature.logo}
                  alt={feature.heading}
                  className={classes.icon}
                />
                <div className={classes.infoContainer}>
                  <Heading primitive0 base>
                    {feature.heading}
                  </Heading>
                  <Text primitive900 sm>
                    {feature.info}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </section>
  );
};
export default FeatureThatEmpower;
