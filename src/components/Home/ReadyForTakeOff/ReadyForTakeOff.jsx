import clsx from "clsx";
import classes from "./ReadyForTakeOff.module.css";
import { Button, Heading, Text } from "components/common";
import { FaChevronRight } from "react-icons/fa";

const ReadyForTakeOff = () => {
  return (
    <section className={clsx(classes.wrapper, "container")}>
      <Heading xl3 font600 textCenter primitive0>
        Ready for take-off?
      </Heading>
      <Text lg primitive700 textCenter>
        Download the Enigma app and start taking your productivity to new
        heights.
      </Text>
      <Button glow100 className={classes.button}>
        Download on Mac <FaChevronRight />
      </Button>
    </section>
  );
};
export default ReadyForTakeOff;
