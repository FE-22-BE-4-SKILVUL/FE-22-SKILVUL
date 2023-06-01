import "../assets/css/style.css";
import { BsChevronDown, BsSearch } from "react-icons/bs";
// import Logo from "../assets/img/logo.svg";

export default function Header() {
  return (
    <>
      <header id="header" class="fixed-top header-inner-pages">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="#" className="logo">
            <img src="src/assets/img/logo.png" alt="Remedial Logo" />
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto" href="#">
                  Beranda
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#">
                  Tentang Kami
                </a>
              </li>
              <li className="dropdown ">
                <a href="#">
                  <span className="me-1">Program</span> <BsChevronDown />
                </a>
                <ul>
                  <li>
                    <a href="#">Kelas Ofline</a>
                  </li>
                  <li>
                    <a href="#">Kelas Online</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span className="me-1">Seni</span> <BsChevronDown />
                </a>
                <ul>
                  <li>
                    <a href="#">Fundamental Seni</a>
                  </li>
                  <li>
                    <a href="#">Teori Seni</a>
                  </li>
                  <li>
                    <a href="#">Praktik Seni</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#">
                  Semua Artikel
                </a>
              </li>
              <li>
                <a className="search me-2" href="#">
                  <BsSearch />{" "}
                </a>
              </li>
              <li>
                <a href="#" className="btn-daftar animated fadeInUp scrollto">
                  Daftar
                </a>
              </li>
              <li>
                <a href="#" className="btn-get-started animated fadeInUp scrollto">
                  Masuk
                </a>
              </li>

              {/* <!-- <li><a href="#" className="btn-get-started animated fadeInUp scrollto">Daftar Sekarang</a></li> --> */}
            </ul>

            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
}
