import "./App.css";
import "@mantine/core/styles.css";
import {
  Button,
  Card,
  Center,
  createTheme,
  Flex,
  Grid,
  Image,
  MantineProvider,
  Pagination,
  Space,
  Stack,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import {
  FaBook,
  FaGithub,
  FaGraduationCap,
  FaHotel,
  FaLink,
  FaLinkedin,
  FaPeopleGroup,
} from "react-icons/fa6";
import { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { PiCoffeeBeanFill } from "react-icons/pi";

function App() {
  const [page, setPage] = useState<any>(1);

  function supportsCornerShape() {
    return CSS.supports("corner-shape: round");
  }

  function cert(
    title: string,
    image: string,
    desc: string,
    date: string,
    url: string
  ) {
    return (
      <Card
        radius="xl"
        shadow="sm"
        w="100%"
        h="100%"
        mah="100%"
        className="card"
      >
        <Card.Section>
          <Image
            src={image}
            h="15em"
            w="100%"
            mx="auto"
            radius="lg"
            style={{ cornerStyle: "squircle" }}
          />
        </Card.Section>
        <Stack align="center" mt="md" gap={0} style={{userSelect:"text"}}>
          <Title order={4} style={{ fontWeight: 500 }}>
            {title}
          </Title>
          <Text size="sm" c="dimmed">
            {date}
          </Text>
          <Space h="sm" />
          <Text size="md">{desc}</Text>
          <Space h="sm" />
          <Button
            variant="subtle"
            leftSection={<FaLink />}
            onClick={() => {
              window.open(url);
            }}
          >
            View
          </Button>
        </Stack>
      </Card>
    );
  }

  const certs = [
    [],
    cert(
      "GitHub Foundations",
      "https://img-c.udemycdn.com/course/750x422/6173195_bcbe_2.jpg",
      "A certification on the basics of GitHub.",
      "March 2025 (Exp. March 2028)",
      "https://www.credly.com/badges/f7db5bf8-c6f0-4579-af11-7422220476fc"
    ),
    cert(
      "Programming with JavaScript",
      "https://d15cw65ipctsrr.cloudfront.net/a1/f7317d59bb4e638356f6107f4ccda6/Meta-Full-Stack-Developer.png",
      "A JavaScript programming course from Meta.",
      "June 2025",
      "https://www.coursera.org/account/accomplishments/verify/6J3BT01HGH10"
    ),
    cert(
      "Google AI Essentials",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7cf51e188450701.65b6d6991d38d.png",
      "A specialisation detailing the use and creation of AI.",
      "June 2025",
      "https://www.coursera.org/account/accomplishments/specialization/C1252NRKBJG7"
    ),
  ];

  return (
    <MantineProvider theme={createTheme({ fontFamily: "Fredoka" })}>
      <div className="opa" />
      <Card radius="xl" shadow="sm" className="nav-card card">
        <Flex className="nav-flex">
          <Title className="title" onClick={()=>{window.location.href="/"}}>BenJS</Title>
          <Flex h="100%" justify="center" gap="sm">
            <FaGithub
              className="social"
              onClick={() => {
                window.open("https://github.com/barxilly");
              }}
            />
            {supportsCornerShape() ? (
              <Text
                className="social qwkspd"
                onClick={() => {
                  window.open("https://speed.benjs.uk");
                }}
              >
                Q
              </Text>
            ) : (
              <></>
            )}
            <FaLinkedin
              className="social"
              onClick={() => {
                window.open("https://www.linkedin.com/in/benjsuk/1");
              }}
            />
          </Flex>
        </Flex>
      </Card>
      <Space h="2em" />
      <Grid m="1.5em">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card
            radius="xl"
            shadow="sm"
            className="card"
            h="100%"
            style={{ backgroundColor: "#e0edf9ff" }}
          >
            <Stack align="center" pt="3em" pb="3em" gap={0}>
              <Image
                src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                radius="50%"
                h="auto"
                w="40%"
                style={{ aspectRatio: "1/1" }}
              />
              <Title style={{ fontWeight: 500, userSelect:"text" }} mt="0.6em">
                Ben J. Smith
              </Title>
              <Title order={4} style={{ fontWeight: 400,userSelect:"text" }} mt={0}>
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
              <Text style={{ fontWeight: 400,userSelect:"text" }}>
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
        <Grid.Col span={{ base: 12, md: 5 }}>
          <div
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Card
              radius="xl"
              shadow="sm"
              className="card"
              style={{
                backgroundColor: "#f3f7fbff",
                overflow: "auto",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack align="center" p="1em" gap={0} style={{ flex: 1 }}>
                <Title>Certifications</Title>
                <Space h="md" />
                {certs[page]}
                <Space h="md" />
                <Pagination
                  total={certs.length - 1}
                  value={page}
                  onChange={setPage}
                  withControls={false}
                  radius="xl"
                />
              </Stack>
            </Card>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Card
            radius="xl"
            shadow="sm"
            className="card"
            style={{ backgroundColor: "#cfe4f6ff",userSelect:"text" }}
          >
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack align="center" p="1em" gap="1em">
                  <Title>Education</Title>
                  <Timeline active={50} radius="xl" w="100%">
                    <Timeline.Item
                      title="HNC Computing"
                      bullet={<FaGraduationCap />}
                    >
                      <Text c="dimmed" size="sm">
                        UHI Inverness (2025-Present)
                      </Text>
                      <Text>
                        A Computing HNC course comprising subjects like
                        E-commerce, Ethical Hacking, and Software Development.
                      </Text>
                    </Timeline.Item>
                    <Timeline.Item
                      title="A Levels"
                      bullet={<FaBook style={{ padding: "0.1em" }} />}
                    >
                      <Text c="dimmed" size="sm">
                        Tavistock College (2023-2025)
                      </Text>
                      <Text>
                        Passed my A Levels in Computer Science, Criminology, and
                        Creative Media Production.
                      </Text>
                    </Timeline.Item>
                  </Timeline>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack align="center" p="1em" gap="1em">
                  <Title>Experience</Title>
                  <Timeline active={5} radius="xl" w="100%">
                    <Timeline.Item
                      title="Housekeeping"
                      bullet={<FaHotel style={{ padding: "0.07em" }} />}
                    >
                      <Text c="dimmed" size="sm">
                        JD Wetherspoon (2025-Present)
                      </Text>
                      <Text>
                        A job that requires some{" "}
                        <b style={{ fontWeight: "550" }}>heavy</b>{" "}
                        time-management, as well as teamworking and task
                        managment skills
                      </Text>
                    </Timeline.Item>
                    <Timeline.Item
                      title="Member Pioneer"
                      bullet={<FaPeopleGroup />}
                    >
                      <Text c="dimmed" size="sm">
                        Co-op Group (2023-2024)
                      </Text>
                      <Text>
                        A community role in which I was working in a team to
                        support local initiatives, connect people, and help
                        organize events.
                      </Text>
                    </Timeline.Item>
                    <Timeline.Item
                      title="Web Design Work Experience"
                      bullet={<FaPeopleGroup />}
                    >
                      <Text c="dimmed" size="sm">
                        Splash Damage (2022)
                      </Text>
                      <Text>
                        A work experience learning how websites are designed in
                        a production setting, and the best methods for designing
                        for a range of users.
                      </Text>
                    </Timeline.Item>
                  </Timeline>
                </Stack>
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          <Space h="md" />
          <Center>
            <Stack align="center">
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "0.9rem",
                  display: "inline-block",
                }}
              >
                {"Made with"}{" "}
                <BsFillHeartFill
                  style={{
                    color: "#d00",
                    verticalAlign: "middle",
                  }}
                />{" "}
                +{" "}
                <PiCoffeeBeanFill
                  style={{
                    color: "#d00",
                    verticalAlign: "middle",
                  }}
                />{" "}
                {"by BenJS"}
              </Text>
              <a
                href="https://ko-fi.com/sillysbs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://storage.ko-fi.com/cdn/brandasset/v2/support_me_on_kofi_dark.png"
                  w="10em"
                  alt="Support me on Ko-fi"
                />
              </a>
            </Stack>
          </Center>
        </Grid.Col>
      </Grid>
    </MantineProvider>
  );
}

export default App;
