import React from "react";
import SecondsCounter from "./SecondsCounter";

const Home = (props) => {
  return (
    <div>
      <SecondsCounter seconds={props.seconds} />
	  <SecondsCounter />
    </div>
  );
};

export default Home;