import Image from "next/image";
import Link from "next/link";
import React from "react";

const date = new Date();
const year = date.getFullYear();

const Page = () => {
  return (
    <React.Fragment>
      <header className="py-3">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-4">
              <Link href="/" className="text-white text-decoration-none fs-4">
                <span className="fw-bold">Rilwan</span>TheDev
              </Link>
            </div>
            <div className="col-4 text-center">
              <ul
                style={{ listStyle: "none" }}
                className="d-none d-md-flex gap-5 align-items-center justify-content-center p-0 m-0"
              >
                <li>
                  <Link href="/#home" className="text-decoration-none text-white fs-4">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-decoration-none text-white fs-4">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className="text-decoration-none text-white fs-4">
                    Work
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4 text-end">
              <Link target="_blank" href="https://github.com/oficial-rilwan">
                <Image src={"./akar-icons_github-fill.svg"} alt="GitHub" width={68} height={63} />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container-xl">
          <div className="py-5 min-h-90 d-flex align-items-center justify-content-center">
            <div>
              <div className="text-center display-2 fw-semibold">Thank You!</div>
              <div className="text-center fs-4">Your submission has been sent. We will respond soon</div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-top py-4">
        <div className="text-center">© {year}. Rilwan Aribidesi. All rights reserved</div>
      </footer>
    </React.Fragment>
  );
};

export default Page;
