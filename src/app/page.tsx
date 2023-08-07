"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Tab,
  Tabs,
} from "@nextui-org/react";

export default function Home() {
  const keys = ["Back-End", "Front-End", "Full-Stack", "UI/UX"];

  return (
    <main className="overflow-x-hidden">
      <section className="bg-[#4e27b0] text-white min-h-screen h-screen relative">
        <nav className="top-0 border-b border-white/50 z-30">
          <div className=" flex justify-between items-center max-w-screen-xl mx-auto h-20 ">
            <h1 className="font-righteous text-2xl">DHONIARIDHO.</h1>
            <ul className="flex gap-10 uppercase">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Works</li>
              <li>Service</li>
            </ul>
            <Button variant="bordered" color="secondary" className="text-white">
              Contact Us
            </Button>
          </div>
        </nav>
        <div className="text-8xl font-righteous max-w-screen-xl mx-auto z-1 py-20 font-bold tracking-wide space-y-3">
          <div>
            <span className="text-[#ffbe3d]">PASSIONATE</span> TO CRAFT AMAZING
            WEBSITES.
          </div>
          <div>
            <span className="text-[#5ac1ed]">BUILDING</span> DYNAMIC AND
            USER-FRIENDLY <span className="text-[#ffbe3d]">WEBSITES</span> WITH
            <span className="text-[#fb74a9]"> CUTTING-EDGE </span>
            <span className="text-[#ffbe3d]">TECHNOLOGY</span>.
          </div>
        </div>
        <div className="bg-[#fa5999] opacity-50 w-full uppercase text-8xl font-righteous rotate-6 absolute bottom-0 scale-105">
          <div className=" whitespace-nowrap overflow-hidden space-x-20">
            <span>LETS TALK</span>
            <span>hi@dhoniaridho.com</span>
            <span>LETS TALK</span>
            <span>hi@dhoniaridho.com</span>
          </div>
        </div>
        <div className="bg-[#fa5999] opacity-50 w-full uppercase text-8xl font-righteous -rotate-6 absolute bottom-10">
          <div className=" whitespace-nowrap overflow-hidden space-x-20">
            <span>LETS TALK</span>
            <a
              target="_blank"
              rel="no refferer"
              href="mailto:dhoniaridho@gmail.com"
            >
              hi@dhoniaridho.com
            </a>
            <span>LETS TALK</span>
            <a
              target="_blank"
              rel="no refferer"
              href="mailto:dhoniaridho@gmail.com"
            >
              hi@dhoniaridho.com
            </a>
          </div>
        </div>
        <div className="bg-[#fa5999] w-full uppercase text-8xl font-righteous absolute bottom-0 z-0">
          <div className=" whitespace-nowrap overflow-hidden space-x-20">
            <span>LETS TALK</span>
            <a
              target="_blank"
              rel="no refferer"
              href="mailto:dhoniaridho@gmail.com"
            >
              hi@dhoniaridho.com
            </a>
            <span>LETS TALK</span>
            <a
              target="_blank"
              rel="no refferer"
              href="mailto:dhoniaridho@gmail.com"
            >
              hi@dhoniaridho.com
            </a>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-black text-white py-28">
        <div className="space-y-16">
          <div className="text-6xl font-righteous max-w-screen-xl mx-auto">
            <div className="max-w-3xl">
              WE ARE THE EXPERTS, LET US OUR SHOW YOU OUR{" "}
              <span className="text-[#ffbe3d]">EXPERTISE</span>
            </div>
          </div>
          <div className="mt-20 border-t border-b border-white/50">
            <ul className="grid grid-cols-2 py-5 gap-10 max-w-screen-xl mx-auto">
              {keys.map((key) => (
                <li
                  key={key}
                  className="odd:border-r border-white/50 px-10 py-5"
                >
                  <div className="flex gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-indigo-600 w-52"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      ></path>
                    </svg>
                    <div>
                      <div className="font-bebas-neue text-4xl mb-3">{key}</div>
                      <p className="text-xs">
                        Front-End Development with my skills involves using
                        Vue.js to build engaging and user-friendly user
                        interfaces for web applications. My expertise in Vue.js
                        components, templates, and reactive data allows you to
                        create dynamic and reactive interfaces that provide a
                        seamless user experience.
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className=" max-w-screen-xl mx-auto">
            <div className="max-w-3xl">
              <div className="text-6xl font-righteous">
                WE ARE CREATE &<span className="text-[#ffbe3d]"> INNOVATE</span>
              </div>
              <span className="text-xs mt-5">
                love clients ard wo Imo ttv•n seze opwtur*tB aryl find solutions
                ideas and bJild them.
              </span>
            </div>
          </div>
          <div className="space-y-3 max-w-screen-xl mx-auto">
            <Tabs aria-label="Options">
              <Tab key="photos" title="Front End">
                <div className="flex space-x-5">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Card
                      role="button"
                      key={index}
                      isHoverable
                      isFooterBlurred
                      radius="lg"
                      className="w-fit"
                    >
                      <div className="border-none  relative">
                        <Image
                          isZoomed
                          alt="Woman listing to music"
                          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        />
                        <div className="absolute z-20 bottom-0 w-full p-4 space-y-1 bg-gradient-to-t from-black/80 to-transparent">
                          <span>2022</span>
                          <p className="font-bebas-neue text-4xl">
                            DPM Poltekkes Semarang
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Tab>
              <Tab key="music" title="Back End">
                <div className="flex space-x-5">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Card
                      role="button"
                      key={index}
                      isFooterBlurred
                      isHoverable
                      radius="lg"
                      className="w-fit"
                    >
                      <div className="border-none w-fit relative">
                        <Image
                          isZoomed
                          alt="Woman listing to music"
                          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        />
                        <div className="absolute z-20 bottom-0 w-full p-4 space-y-1 bg-gradient-to-t from-black/80 to-transparent">
                          <span>2022</span>
                          <p className="font-bebas-neue text-4xl">
                            DPM Poltekkes Semarang
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-black text-white py-16 relative">
        <div className="space-y-20 max-w-screen-xl mx-auto">
          <div className="text-6xl font-righteous">
            <div className="max-w-3xl">
              BEST <span className="text-[#ffbe3d]"> SERVICES</span>, RIGHT
              TIME, RIGHT PEOPLE{" "}
            </div>
          </div>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Understanding Brief"
              title="Understanding Brief"
              classNames={{
                title: "text-4xl font-bebas-neue",
              }}
              indicator={<Button isIconOnly>+</Button>}
              subtitle={
                <span>
                  The first gyocess is to urxiecstand brief that has been by
                  Client via Ot Chat then the{" "}
                </span>
              }
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-indigo-600 w-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              }
            >
              The first gyocess is to urxiecstand brief that has been by Client
              via Ot Chat then the
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="BRANDSTORMING 8 RESEARCH"
              title="BRANDSTORMING 8 RESEARCH"
              classNames={{
                title: "text-4xl font-bebas-neue",
              }}
              indicator={<Button isIconOnly>+</Button>}
              subtitle={
                <span>
                  The first gyocess is to urxiecstand brief that has been by
                  Client via Ot Chat then the{" "}
                </span>
              }
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-indigo-600 w-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              }
            >
              The first gyocess is to urxiecstand brief that has been by Client
              via Ot Chat then the
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="DESIGN PROCESS"
              title="DESIGN PROCESS"
              classNames={{
                title: "text-4xl font-bebas-neue",
              }}
              indicator={<Button isIconOnly>+</Button>}
              subtitle={
                <span>
                  The first gyocess is to urxiecstand brief that has been by
                  Client via Ot Chat then the{" "}
                </span>
              }
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-indigo-600 w-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              }
            >
              The first gyocess is to urxiecstand brief that has been by Client
              via Ot Chat then the
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="DEVELOPMENT PROCESS"
              title="DEVELOPMENT PROCESS"
              classNames={{
                title: "text-4xl font-bebas-neue",
              }}
              indicator={<Button isIconOnly>+</Button>}
              subtitle={
                <span>
                  The first gyocess is to urxiecstand brief that has been by
                  Client via Ot Chat then the{" "}
                </span>
              }
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-indigo-600 w-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              }
            >
              The first gyocess is to urxiecstand brief that has been by Client
              via Ot Chat then the
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="DELIVER & PAYMENT"
              title="DELIVER & PAYMENT"
              classNames={{
                title: "text-4xl font-bebas-neue",
              }}
              indicator={<Button isIconOnly>+</Button>}
              subtitle={
                <span>
                  The first gyocess is to urxiecstand brief that has been by
                  Client via Ot Chat then the{" "}
                </span>
              }
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-indigo-600 w-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              }
            >
              The first gyocess is to urxiecstand brief that has been by Client
              via Ot Chat then the
            </AccordionItem>
            <AccordionItem
              key="6"
              aria-label="DEPLOY"
              title="DEPLOY"
              classNames={{
                title: "text-4xl font-bebas-neue",
              }}
              indicator={<Button isIconOnly>+</Button>}
              subtitle={
                <span>
                  The first gyocess is to urxiecstand brief that has been by
                  Client via Ot Chat then the{" "}
                </span>
              }
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-indigo-600 w-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              }
            ></AccordionItem>
          </Accordion>
        </div>
        <div className="max-w-screen-xl mx-auto mt-20 space-y-10">
          <div className="text-2xl font-righteous">
            <div className="max-w-3xl">OUR CLIENTS</div>
          </div>
          <div className="flex gap-10">
            <Image
              width={70}
              src="https://www.dpmpoltekkessmg.com/_nuxt/logo.d37b9385.png"
              alt="DPM Poltekkes Semarang"
              className="grayscale hover:grayscale-0 opacity-70"
            />
            <Image
              width={70}
              src="https://www.imperial-printing.com/cni-content/uploads/modules/siteconfig/thumbs/small/20180705101539.png"
              alt="DPM Poltekkes Semarang"
              className="grayscale hover:grayscale-0 opacity-70"
            />
            <Image
              width={70}
              src="https://mochinul-cms.vercel.app/_nuxt/branding.6b50c5a7.png"
              alt="DPM Poltekkes Semarang"
              className="grayscale hover:grayscale-0 opacity-70"
            />
            <Image
              width={70}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNRoFxta1OyoZHcWHH01dyX1AhuEVWTvnGnQmlV_R1g&s"
              alt="DPM Poltekkes Semarang"
              className="grayscale hover:grayscale-0 opacity-70"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
