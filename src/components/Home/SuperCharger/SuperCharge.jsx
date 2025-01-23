import clsx from "clsx";
import classes from "./SuperCharge.module.css";
import Header from "components/common/Header/Header";
import {
  codeIcon,
  documentCodeIcon,
  messageProgrammingIcon,
  superChargeCard,
} from "images";
import { Heading, Text } from "components/common";
const SuperCharge = () => {
  const data = [
    {
      icon: messageProgrammingIcon,
      title: "KAS-20 Token Standard for Asset Management",
      info: "Kasmo Chain introduces the KAS-20 token standard, providing a versatile framework for asset management across blockchain ecosystems. This unique token standard facilitates secure asset transfers and seamless liquidity across multiple chains, ensuring optimal interoperability and scalability.",
    },
    {
      icon: codeIcon,
      title: "Collaborative Environment",
      info: "Work alongside a vibrant community of developers, share insights, and collaborate on innovative projects.",
    },
    {
      icon: documentCodeIcon,
      title: "Continuous Learning",
      info: "Kasmo Chain offers forkless upgrades, ensuring that your network remains stable and secure without the disruptions typically associated with blockchain forks. This feature guarantees continuous innovation without compromising user trust.",
    },
  ];
  return (
    <section className={clsx(classes.wrapper, "container")}>
      <Header
        heading="Supercharge your "
        italicHeading="workflow."
        info="Stay ahead of the competition by quickly identifying trends and patterns in your data with our innovative algorithms."
        center
      />
      <div className={classes.imgContainer} data-aos="fade-up">
        <img src={superChargeCard} alt="#" className={classes.img} />
      </div>
      <div className={classes.cards} data-aos="fade-up">
        {data.map((el, i) => (
          <div className={classes.card} key={i}>
            <div className={classes.iconContainer}>
              <img src={el.icon} alt={el.title} />
            </div>
            <Heading base primitive0 font600>
              {el.title}
            </Heading>
            <Text semiBold sm primitive900>
              {el.info}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SuperCharge;
