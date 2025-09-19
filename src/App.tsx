import "./App.css";
import "@mantine/core/styles.css";
import {
  Badge,
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
  FaAndroid,
  FaApple,
  FaBoltLightning,
  FaChevronRight,
  FaClock,
  FaDebian,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLink,
  FaLinkedin,
  FaMicrosoft,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaSwift,
  FaUbuntu,
  FaUnity,
  FaUserGroup,
  FaWrench,
} from "react-icons/fa6";
import { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { MdCss } from "react-icons/md";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";

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
        <Stack align="center" mt="md" gap={0} style={{ userSelect: "text" }}>
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

  function project(title: string, image: string, desc: string, url: string) {
    return (
      <Card
        radius="xl"
        shadow="sm"
        className="card projcard scrollcard"
        onClick={() => {
          window.open(url);
        }}
      >
        <Card.Section>
          <Image
            src={image}
            h="10em"
            w="100%"
            mx="auto"
            radius="lg"
            style={{ cornerStyle: "squircle" }}
          />
        </Card.Section>
        <Stack align="center" mt="md">
          <Title order={4} style={{ fontWeight: 500 }}>
            {title}
          </Title>
          <Text size="sm" c="dimmed">
            {desc}
          </Text>
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

  const projects = [
    [],
    project(
      "QwkSpd",
      "https://speed.benjs.uk/qwkspd.png",
      "A Speed Test.",
      "https://speed.benjs.uk"
    ),
    project(
      "Refine",
      "/refine.png",
      "Mysterious, Important, and Laggy.",
      "https://refine.benjs.uk"
    ),
    project(
      "Open WebUI macOS",
      "/owui.png",
      "macOS Wrapper for OWUI.",
      "https://github.com/barxilly/OWUI/releases/tag/1.0.0"
    ),
    project(
      "Dynamic DNS Updates",
      "https://www.ipxo.com/app/uploads/2023/09/01-min-2-640x358.png",
      "Updates a DNS with a dynamic IP.",
      "https://github.com/barxilly/updatedynamicdns"
    ),
  ];

  return (
    <MantineProvider theme={createTheme({ fontFamily: "Fredoka" })}>
      <div className="opa" />
      <Card radius="xl" shadow="sm" className="nav-card card">
        <Flex className="nav-flex">
          <Title
            className="title"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            BenJS
          </Title>
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
              <Title style={{ fontWeight: 500, userSelect: "text" }} mt="0.6em">
                Ben J. Smith
              </Title>
              <Title
                order={4}
                style={{ fontWeight: 400, userSelect: "text" }}
                mt={0}
              >
                @BenJS / @Barxilly
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
              <Text style={{ fontWeight: 400, userSelect: "text" }}>
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
                {projects.slice(1).map((proj) => (
                  <>{proj}</>
                ))}
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
            style={{ backgroundColor: "#cfe4f6ff", userSelect: "none" }}
          >
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack align="center" p="1em" gap="1em">
                  <Title>Education</Title>
                  <Timeline
                    active={50}
                    radius="xl"
                    bulletSize="40"
                    lineWidth="3"
                    w="100%"
                  >
                    <Timeline.Item
                      title={
                        <Flex className="time-flex" align="center" gap="0.3em">
                          <span>HNC Computing</span>
                          <FaChevronRight size="0.75em" className="time-icon" />
                        </Flex>
                      }
                      onClick={() => {
                        window.open(
                          "https://www.uhi.ac.uk/en/courses/hnc-computing/"
                        );
                      }}
                      bullet={
                        <Image
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1BUc56Jq_isXT-KLtdRT3VXGT8-LJorSgg&s"
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                          }}
                        />
                      }
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
                      title={
                        <Flex className="time-flex" align="center" gap="0.3em">
                          <span>A Levels</span>
                          <FaChevronRight size="0.75em" className="time-icon" />
                        </Flex>
                      }
                      onClick={() => {
                        window.open(
                          "https://www.tavistockcollege.org/Sixth-Form-Curriculum/"
                        );
                      }}
                      bullet={
                        <Image
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbwVHzSuNnHABFsK8dAux8Fhu3TAoTITHsQ&s"
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                          }}
                        />
                      }
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
                  <Timeline
                    active={5}
                    radius="xl"
                    bulletSize="40"
                    lineWidth="3"
                    w="100%"
                  >
                    <Timeline.Item
                      title={
                        <Flex className="time-flex" align="center" gap="0.3em">
                          <span>Housekeeping</span>
                          <FaChevronRight size="0.75em" className="time-icon" />
                        </Flex>
                      }
                      onClick={() => {
                        window.open("https://www.jdwetherspoon.com/");
                      }}
                      bullet={
                        <Image
                          src="https://play-lh.googleusercontent.com/z7-lQWmni61-yauwqyqNcvJgx3ZjWcE2sHGIOLWi84s7QZlCRSRZrYdKvo81i6rU7Kzn"
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                          }}
                        />
                      }
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
                      title={
                        <Flex className="time-flex" align="center" gap="0.3em">
                          <span>Member Pioneer</span>
                          <FaChevronRight size="0.75em" className="time-icon" />
                        </Flex>
                      }
                      onClick={() => {
                        window.open("https://coop.co.uk/");
                      }}
                      bullet={
                        <Image
                          src="https://images.ctfassets.net/5ywmq66472jr/DOAxDxBb2gK0o2UQMMSeA/0a1a1d577a72914d081f513ecca93ba8/co-op-white-logo-on-blue.png"
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                          }}
                        />
                      }
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
                      title={
                        <Flex className="time-flex" align="center" gap="0.3em">
                          <span>Web Design Training</span>
                          <FaChevronRight size="0.75em" className="time-icon" />
                        </Flex>
                      }
                      onClick={() => {
                        window.open("https://www.splashdamage.com/");
                      }}
                      bullet={
                        <Image
                          src="https://media.licdn.com/dms/image/v2/C4E22AQEb0oNPCZJHEA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1663185066344?e=2147483647&v=beta&t=Cd-M7DM_dgtNxlOIpEy6LjVVpP1NcLuA3ZxnpCkRUdI"
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                          }}
                        />
                      }
                    >
                      <Text c="dimmed" size="sm">
                        Splash Damage (2022)
                      </Text>
                      <Text>
                       Helping and learning how to design responsive and eye-catching websites for a range of users.
                      </Text>
                    </Timeline.Item>
                  </Timeline>
                </Stack>
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          <Card className="card" radius="xl" shadow="sm">
            <Stack align="center">
              <Title>Skills</Title>
              <Title order={3}>Languages & Frameworks</Title>
              <Flex gap="md" align="center" wrap="wrap" justify="center">
                <Badge color="green" size="lg" leftSection={<FaNodeJs />}>
                  Node.JS
                </Badge>
                <Badge color="blue" size="lg" leftSection={<FaReact />}>
                  React
                </Badge>
                <Badge color="red" size="lg" leftSection={<FaHtml5 />}>
                  HTML
                </Badge>
                <Badge
                  color="rebeccapurple"
                  size="lg"
                  leftSection={<MdCss size="2em" />}
                >
                  CSS
                </Badge>
                <Badge
                  color="darkblue"
                  size="lg"
                  leftSection={<BiLogoTypescript />}
                >
                  TypeScript
                </Badge>
                <Badge color="orange" size="lg" leftSection={<FaSwift />}>
                  Swift
                </Badge>
                <Badge color="purple" size="lg" leftSection={<TbBrandCSharp />}>
                  C#
                </Badge>
                <Badge color="gray" size="lg" leftSection={<FaUnity />}>
                  Unity
                </Badge>
                <Badge color="#e95a2aff" size="lg" leftSection={<FaJava />}>
                  Java
                </Badge>
              </Flex>
              <Title order={3}>Operating Systems</Title>
              <Flex gap="md" align="center" wrap="wrap" justify="center">
                <Badge
                  color="blue"
                  size="lg"
                  style={{ color: "lightblue" }}
                  leftSection={<FaMicrosoft />}
                >
                  Windows 8 / 10 / 11
                </Badge>
                <Badge
                  color="black"
                  size="lg"
                  style={{ color: "lightgray" }}
                  leftSection={<FaApple />}
                >
                  macOS
                </Badge>
                <Badge
                  color="red"
                  size="lg"
                  style={{ color: "#ffb8b8ff" }}
                  leftSection={<FaDebian />}
                >
                  Debian
                </Badge>
                <Badge
                  color="#ff8e56ff"
                  size="lg"
                  style={{ color: "#ffd8b8ff" }}
                  leftSection={<FaUbuntu />}
                >
                  Ubuntu
                </Badge>
                <Badge
                  color="green"
                  size="lg"
                  style={{ color: "#caffb8ff" }}
                  leftSection={<FaAndroid />}
                >
                  Android
                </Badge>
                <Badge
                  color="black"
                  size="lg"
                  style={{ color: "lightgray" }}
                  leftSection={<FaApple />}
                >
                  iOS
                </Badge>
              </Flex>
              <Title order={3}>General Skills</Title>
              <Flex gap="md" align="center" wrap="wrap" justify="center">
                <Badge
                  color="white"
                  size="lg"
                  style={{ color: "black",border:"2px solid black" }}
                  leftSection={<FaClock />}
                >
                  Time Management
                </Badge>
                <Badge
                  color="white"
                  size="lg"
                  style={{ color: "black",border:"2px solid black" }}
                  leftSection={<FaPhone />}
                >
                  Communication
                </Badge>
                <Badge
                  color="white"
                  size="lg"
                  style={{ color: "black",border:"2px solid black" }}
                  leftSection={<FaUserGroup />}
                >
                  Teamworking
                </Badge>
                <Badge
                  color="white"
                  size="lg"
                  style={{ color: "black",border:"2px solid black" }}
                  leftSection={<FaWrench />}
                >
                  Adaptability
                </Badge>
                <Badge
                  color="white"
                  size="lg"
                  style={{ color: "black",border:"2px solid black" }}
                  leftSection={<FaBoltLightning />}
                >
                  Quick Learning
                </Badge>
              </Flex>
            </Stack>
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
          <Space h="md" />
        </Grid.Col>
      </Grid>
    </MantineProvider>
  );
}

export default App;
