import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import PROJECTS from "@/static/projects";
import TECHNOLOGIES from "@/static/technologies";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <header className="py-3">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-4">
              <div className="fs-4">
                <span className="fw-bold">Rilwan</span>TheDev
              </div>
            </div>
            <div className="col-4 text-center">
              <ul
                style={{ listStyle: "none" }}
                className="d-none d-md-flex gap-5 align-items-center justify-content-center p-0 m-0"
              >
                <li>
                  <Link
                    href="#home"
                    className="text-decoration-none text-white fs-4"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-decoration-none text-white fs-4"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#work"
                    className="text-decoration-none text-white fs-4"
                  >
                    Work
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4 text-end">
              <Link target="_blank" href="https://github.com/oficial-rilwan">
                <Image
                  src={"./akar-icons_github-fill.svg"}
                  alt="GitHub"
                  width={68}
                  height={63}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container-xl">
          <div className="row py-5 align-items-center hero-section">
            <div className="col-12 col-md-6 mb-5">
              <div className="fs-4">Hello, I&apos;m Rilwan,</div>
              <div className="text_primary display-1 fw-bolder mb-3">
                Full Stack <br />
                Developer
              </div>
              <div className="d-flex gap-5 mt-5">
                <Link
                  href="#contact"
                  className="contact_link fs-4 text-white fw-semibold"
                >
                  Contact Me
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1q_z61wAAHUaQ6pdEVwPSp5a7B38gV_QP/view?usp=drive_link"
                  target="_blank"
                  className="btn_primary fs-4 fw-semibold"
                >
                  Download CV
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-5">
              <div className="d-flex justify-content-center">
                <Image
                  src={"/avatar-1.jpg"}
                  alt="Rilwan Aribidesi"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded overflow-hidden"
                  style={{ width: "100%", height: "auto", maxWidth: 350 }}
                />
              </div>
            </div>
          </div>
          <section id="about" className="py-5">
            <div className="d-flex gap-5 align-items-center mb-4">
              <div className="text_primary display-1 fw-bolder">about</div>
              <div className="flex-grow-1 h_line"></div>
            </div>
            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-10">
                <div className="fs-4 mb-5">
                  My name is Rilwan Aribidesi, a solution-driven Full-stack
                  Engineer with over 3 years of working experience building
                  customer-focused products and services. Designed and developed
                  multiple web and mobile apps across multiple APIs, third-party
                  integrations and databases. Thrive in working in a fast-paced,
                  high-tech environment with cross-functional teams using agile
                  methodology.
                </div>
                <div className="fs-2 fw-semibold mb-3">Technologies</div>
                <div className="d-flex flex-wrap gap-5 align-items-center">
                  {TECHNOLOGIES.map((item) => (
                    <div key={item.name}>
                      <Image
                        width={0}
                        height={0}
                        src={item.image}
                        alt={item.name}
                        sizes="100vw"
                        className="p-3 rounded"
                        style={{
                          width: 100,
                          objectFit: "contain",
                          height: 100,
                          background: item.bg,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section id="work" className="py-5">
            <div className="d-flex gap-5 align-items-center mb-4">
              <div className="text_primary display-1 fw-bolder">work</div>
              <div className="flex-grow-1 h_line"></div>
            </div>
            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-10">
                <div className="fs-4 mb-4">
                  As a Full-Stack Web Developer, I have extensive experience in
                  developing, deploying, and maintaining dynamic web
                  applications. My portfolio highlights projects that
                  demonstrate my expertise in both frontend and backend
                  technologies.
                </div>
              </div>
            </div>
            <div className="row gx-5">
              {PROJECTS.map((item) => {
                return (
                  <div className="col-12 col-md-6 mb-5" key={item?.name}>
                    <div
                      className="gap-3 px-5 pt-5 rounded mb-3"
                      style={{ background: "#3b35a9" }}
                    >
                      <Link
                        target="_blank"
                        href={
                          Array.isArray(item.link) ? item.link[0] : item.link
                        }
                      >
                        <Image
                          width={0}
                          height={0}
                          src={item.image}
                          alt={item.name}
                          sizes="100vw"
                          className="project-image"
                        />
                      </Link>
                    </div>
                    <div className="px-4">
                      <div className="fs-4 text-uppercase">{item?.name}</div>
                      <small className="d-block text-light mb-3">
                        {item?.description}
                      </small>
                      {Array.isArray(item.link) ? (
                        <div className="">
                          <div className="d-flex gap-3 mb-3">
                            <div>IOS:</div>
                            <Link
                              target="_blank"
                              className="project-link text-light d-inline-block  text-truncate"
                              style={{ maxWidth: 200 }}
                              href={item.link[0]}
                            >
                              <small className="text-light">
                                {item?.link[0]}
                              </small>
                            </Link>
                          </div>
                          <div className="d-flex gap-3">
                            <div>Android:</div>
                            <Link
                              target="_blank"
                              className="project-link text-light d-inline-block  text-truncate"
                              style={{ maxWidth: 200 }}
                              href={item.link[1]}
                            >
                              <small className="text-light">
                                {item.link[1]}
                              </small>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <Link
                          target="_blank"
                          className="project-link text-light d-inline-block  text-truncate"
                          style={{ maxWidth: 200 }}
                          href={item.link}
                        >
                          <small className="text-light">{item?.link}</small>
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section id="contact" className="py-5 mb-5">
            <div className="d-flex gap-5 align-items-center mb-4">
              <div className="text_primary display-1 fw-bolder">contact</div>
              <div className="flex-grow-1 h_line"></div>
            </div>
            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-10">
                <div className="fs-4 mb-5">
                  I would love to hear about your project and how i can help.
                  Please fill in the form, and I&apos;ll ge back to you as soon
                  as possible.
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-6">
                <form name="contact" method="POST" data-netlify="true">
                  <div className="mb-5">
                    <label htmlFor="name" className="mb-3">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      className="form-input"
                      title="Please enter your name"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="email" className="mb-3">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      className="form-input"
                      title="Please enter a valid email address..."
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="message" className="mb-3">
                      MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      name="message"
                      className="form-input"
                      title="Please enter your message here..."
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="submit-btn fw-semibold fs-4"
                      type="submit"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="border-top py-4">
        <div className="text-center">
          © {new Date().getFullYear()}. Rilwan Aribidesi. All rights reserved
        </div>
      </footer>
    </React.Fragment>
  );
}
