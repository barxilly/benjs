import { useEffect, useState } from "react";
import "@mantine/core/styles.css";
import "./App.css";
import {
  Center,
  Flex,
  Grid,
  Image,
  MantineProvider,
  Stack,
  Text,
} from "@mantine/core";
import { BiCog, BiPlus } from "react-icons/bi";
import { CgMore } from "react-icons/cg";
import { PiControl } from "react-icons/pi";
import { FcSettings } from "react-icons/fc";
import { IoSettings } from "react-icons/io5";
import { FaB } from "react-icons/fa6";
import { LuLoaderPinwheel } from "react-icons/lu";

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

  // When all images are loaded
  const handleImageLoad = () => {
    setPageLoaded(true);
  };

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    images.forEach((img) => {
      img.addEventListener("load", () => {
        loadedImages++;
        if (loadedImages === images.length) {
          handleImageLoad();
        }
      });
    });
  }, []);

  return (
    <MantineProvider>
      <Text id="ticker" pos="absolute" top="-100em">
        0
      </Text>{" "}
      <Image pos="absolute" top="-200em" src="/nyx.webp" />
      <Center
        style={{
          opacity: pageLoaded ? 0 : 1,
          pointerEvents: pageLoaded ? "none" : "auto",
          height: "100vh",
          backgroundColor: "#000",
          transition: "opacity 1.2s",
          zIndex: 4,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <LuLoaderPinwheel style={{ animation: "spin 1s linear infinite" }} size="5em" color="white" />
      </Center>
      <Flex
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "1.7em",
          backgroundColor: "#ddddddaa",
          verticalAlign: "middle",
          display: pageLoaded ? "flex" : "none",
        }}
        justify="space-between"
        align="center"
        id="appbar"
      >
        <Text style={{ fontWeight: "bold", width: "5em" }}>BenJS</Text>
        <Text>
          {new Date().getHours().toLocaleString()}:
          {new Date().getMinutes() > 10
            ? new Date().getMinutes().toLocaleString()
            : "0" + new Date().getMinutes().toLocaleString()}
        </Text>
        <Text style={{ width: "5em" }}>
          <Flex style={{ fontSize: "1em", verticalAlign: "middle" }}>
            +&nbsp;More
          </Flex>
        </Text>
      </Flex>
      <Center
        style={{
          height: "calc(100vh - 1.7em)",
          marginTop: "1.7em",
          opacity: pageLoaded ? 1 : 0,
          zIndex: 1,
        }}
      >
        <Grid
          style={{
            width: "100%",
            maxWidth: "80vw",
            height: "100%",
            maxHeight: "80vh",
          }}
          justify="center"
        >
          <Grid.Col
            style={{ height: "12em", width: "7em" }}
            span={{ base: 4, xs: 6, sm: 6, md: 4, lg: 3 }}
          >
            <Center>
              <Stack className="appcon" gap="0">
                <Center className="imco">
                  <Image className="appicon" src="/i.webp" />
                </Center>
                <Text mt="0.3em" align="center" className="appname">
                  About Me
                </Text>
              </Stack>
            </Center>
          </Grid.Col>
          <Grid.Col
            style={{ height: "12em", width: "10em" }}
            span={{ base: 4, xs: 6, sm: 6, md: 4, lg: 3 }}
          >
            <Center>
              <Stack className="appcon" gap="0">
                <Center className="imco">
                  <Image className="appicon" src="/edu.webp" />
                </Center>
                <Text mt="0.3em" align="center" className="appname">
                  Qualifications
                </Text>
              </Stack>
            </Center>
          </Grid.Col>
          <Grid.Col
            style={{height: "12em", width: "10em" }}
            span={{ base: 4, xs: 6, sm: 6, md: 4, lg: 3 }}
          >
            <Center>
              <Stack className="appcon" gap="0">
                <Center className="imco">
                  <Image className="appicon" src="/proj.webp" />
                </Center>
                <Text mt="0.3em" align="center" className="appname">
                  Projects
                </Text>
              </Stack>
            </Center>
          </Grid.Col><Grid.Col
            style={{ height: "12em", width: "10em" }}
            span={{ base: 4, xs: 6, sm: 6, md: 4, lg: 3 }}
            onClick={() => setTimeout(() => window.open("https://github.com/barxilly", "_blank"), 100)}
          >
            <Center>
              <Stack className="appcon" gap="0">
                <Center className="imco">
                  <Image className="appicon" src="/git.webp" />
                </Center>
                <Text mt="0.3em" align="center" className="appname">
                  GitHub
                </Text>
              </Stack>
            </Center>
          </Grid.Col>
        </Grid>
      </Center>
    </MantineProvider>
  );
}

export default App;
