import { Button, Heading, Text } from "components/common";
import classes from "./HeroSection.module.css";
import clsx from "clsx";
import { appImg } from "images";
import TrustedPartners from "../TrustedPartners/TrustedPartners";
import { FaChevronRight } from "react-icons/fa";
const HeroSection = () => {
  return (
    <section className={clsx(classes.wrapper)}>
      <div className={clsx(classes.container)} data-aos="fade-up">
        <div className={classes.infoContainer}>
          <Heading xl5 gradient className={classes.heading}>
            Seamless Blockchain Communication with{" "}
            <span className="font-instrument">Kasmo Chain</span>
          </Heading>
          <Text base primitive700 className={classes.info}>
            Learn coding and design with Enigma-AI, your ultimate destination
            for mastering the art of creating stunning designs and building
            powerful applications.
          </Text>
          <div className={classes.buttonContaner}>
            <Button glow500 className={classes.getStarted}>
              Get Started
            </Button>
            <Button glow100>
              Start a Free Trial <FaChevronRight />{" "}
            </Button>
          </div>
        </div>
        <img src={appImg} alt="#" className={classes.img} />
      </div>
      <TrustedPartners />
    </section>
  );
};
export default HeroSection;
