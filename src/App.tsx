import { useEffect, useState } from "react";
import "@mantine/core/styles.css";
import "./App.css";
import { Flex, MantineProvider, Text } from "@mantine/core";
import { BiCog, BiPlus } from "react-icons/bi";
import { CgMore } from "react-icons/cg";
import { PiControl } from "react-icons/pi";
import { FcSettings } from "react-icons/fc";
import { IoSettings } from "react-icons/io5";

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Tick up every second
    const interval = setInterval(() => {
      const ticker = document.getElementById("ticker");
      if (ticker) {
        ticker.innerHTML = (parseInt(ticker.innerHTML) + 1).toString();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <MantineProvider>
      <Text id="ticker" pos="absolute" top="-100em">0</Text>
      <Flex
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height:"1.7em",
          backgroundColor:"#ddddddaa",
          verticalAlign:"middle",
        }}
        justify="space-between"
        align="center"
        id="appbar"
      >
        <Text style={{fontWeight:"bold", width:"5em"}}>BenJS</Text>
        <Text>{new Date().getHours().toLocaleString()}:{(new Date().getMinutes()>10)?new Date().getMinutes().toLocaleString():"0"+new Date().getMinutes().toLocaleString()}</Text>
        <Text style={{width:"5em"}}><Flex style={{fontSize:"1em", verticalAlign:"middle"}}>+&nbsp;More</Flex></Text>
      </Flex>
    </MantineProvider>
  );
}

export default App;
