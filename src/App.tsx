import "./App.css";
import "@mantine/core/styles.css";
import {
  Card,
  createTheme,
  Flex,
  Grid,
  Image,
  MantineProvider,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function App() {
  return (
    <MantineProvider theme={createTheme({ fontFamily: "Fredoka" })}>
      <div className="opa" />
      <Card radius="xl" shadow="sm" className="nav-card card">
        <Flex className="nav-flex">
          <Title className="title">BenJS</Title>
          <Flex h="100%" justify="center" gap="sm">
            <FaGithub
              className="social"
              onClick={() => {
                window.open("https://github.com/barxilly");
              }}
            />
            <Text
              className="social qwkspd"
              onClick={() => {
                window.open("https://speed.benjs.uk");
              }}
            >
              Q
            </Text>
            <FaLinkedin
              className="social"
              onClick={() => {
                window.open("https://www.linkedin.com/in/benjsuk/1");
              }}
            />
          </Flex>
          <Flex className="link-flex">
            <Text className="link">About Me</Text>
          </Flex>
        </Flex>
      </Card>
      <Space h="2em" />
      <Grid m="1.5em">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card radius="xl" shadow="sm" className="card">
            <Stack align="center" pt="3em" pb="3em" gap={0}>
              <Image
                src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                radius="50%"
                h="40%"
                w="40%"
              />
              <Title style={{ fontWeight: 500 }} mt="0.6em">
                Ben J. Smith
              </Title>
              <Title order={4} style={{ fontWeight: 400 }} mt={0}>
                @BenJS
              </Title>
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card
            radius="xl"
            shadow="sm"
            className="card"
            style={{
              border: "3px dashed #edf2f7aa",
              background: "#edf2f788",
            }}
            h="100%"
          >
            <Stack p="1em" gap={0}>
              <Title style={{ fontWeight: 500 }} mb="0.6em">
                About Me
              </Title>
              <Text style={{ fontWeight: 400 }}>
                Hi, I'm Ben.
                <br />
                I'm currently a Computing HNC student at UHI Inverness, hoping
                to go into a BSc (maybe even a postgrad) if things go my way.
                <br />
                <br />
                I largely focus on websites, frontend, and UI/UX; but I'm
                willing to give most things a try, and have some knowledge in
                C#, Java, Swift (with SwiftUI), and Python.
                <br />
                Most projects I work on are written in TypeScript, HTML, and CSS
                (w/ React and Vite).
                <br />
                <br />
                I was born in Portsmouth, moved about a bit, settled down in
                West Devon for most of my life, and have recently moved up to
                Inverness, and am not remotely beginning to regret my decision.
                <br />
                <br />I hope you enjoy my site :)
              </Text>
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          <Card radius="xl" shadow="sm" className="card">
            <Stack align="center" pt="3em" pb="3em" gap={0}>
              <Title style={{ fontWeight: 500 }}>Personal Projects</Title>
              <Space h="2em" />
              <div className="card-scroll-container">
                <Card
                  radius="xl"
                  shadow="sm"
                  className="card projcard scrollcard"
                  onClick={() => {
                    window.open("https://speed.benjs.uk");
                  }}
                >
                  <Card.Section>
                    <Image
                      src="https://speed.benjs.uk/qwkspd.png"
                      h="10em"
                      w="100%"
                      mx="auto"
                      radius="lg"
                      style={{ cornerStyle: "squircle" }}
                    />
                  </Card.Section>
                  <Stack align="center" mt="md">
                    <Title order={4} style={{ fontWeight: 500 }}>
                      QwkSpd
                    </Title>
                    <Text size="sm" c="dimmed">
                      A Speed Test.
                    </Text>
                  </Stack>
                </Card>
                <Card
                  radius="xl"
                  shadow="sm"
                  className="card projcard scrollcard"
                  onClick={() => {
                    window.open("https://refine.benjs.uk");
                  }}
                >
                  <Card.Section>
                    <Image
                      src="/refine.png"
                      h="10em"
                      w="100%"
                      mx="auto"
                      radius="lg"
                      style={{ cornerStyle: "squircle" }}
                    />
                  </Card.Section>
                  <Stack align="center" mt="md">
                    <Title order={4} style={{ fontWeight: 500 }}>
                      Refine
                    </Title>
                    <Text size="sm" c="dimmed">
                      Mysterious and Important (and laggy)
                    </Text>
                  </Stack>
                </Card>
                <Card
                  radius="xl"
                  shadow="sm"
                  className="card projcard scrollcard"
                  onClick={() => {
                    window.open(
                      "https://github.com/barxilly/OWUI/releases/tag/1.0.0"
                    );
                  }}
                >
                  <Card.Section>
                    <Image
                      src="/owui.png"
                      h="10em"
                      w="100%"
                      mx="auto"
                      radius="lg"
                      style={{ cornerStyle: "squircle" }}
                    />
                  </Card.Section>
                  <Stack align="center" mt="md">
                    <Title order={4} style={{ fontWeight: 500 }}>
                      Open WebUI macOS
                    </Title>
                    <Text size="sm" c="dimmed">
                      A macOS wrapper for OWUI servers.
                    </Text>
                  </Stack>
                </Card>
              </div>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
      <Space h="90em" />
    </MantineProvider>
  );
}

export default App;
