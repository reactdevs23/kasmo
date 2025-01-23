import { Heading } from "components/common";
import classes from "./TrustedPartners.module.css";
import {
  airBnbLogo,
  amazonLogo,
  appleLogo,
  figmaLogo,
  googleLogo,
  twitterLogo,
  vercelLogo,
  youtubeLogo,
} from "images";

const TrustedPartners = () => {
  const partners = [
    amazonLogo,
    appleLogo,
    youtubeLogo,
    figmaLogo,
    googleLogo,
    twitterLogo,
    vercelLogo,
    airBnbLogo,
  ];
  return (
    <div className={classes.mainWrapper} data-aos="fade-up">
      <Heading textCenter xl2 semiBold className={classes.heading}>
        Trusted By Industry Leaders
      </Heading>
      <div className={classes.wrapper}>
        {partners.map((logo, i) => (
          <div className={classes.logoContainer} key={i}>
            <img src={logo} alt="#" className={classes.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TrustedPartners;
