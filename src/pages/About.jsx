import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Header/>
      <main id="main">
        {/*======= Breadcrumbs ======= */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-11 col-xl-10">
                <ol>
                  <li>
                    <Link to="/home">Beranda</Link>
                  </li>
                  <li>Tentang kami</li>
                </ol>
                <h2>Tentang kami</h2>
              </div>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}

        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container-fluid d-flex justify-content-center">
            <div className="col-10 col-lg-11">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 img-box d-flex justify-content-center align-items-stretch position-relative">{/* <a href="" className="glightbox play-btn mb-4"></a> */}</div>

                <div className="col-xl-5 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                  <h3>Remedial.id</h3>
                  <p>
                    Serrum remedial adalah perkumpulan studi dan pendidikan seni rupa yang berkedudukan di Jakarta yang didirikan pada tahun 2006. Kata serrum berasal dari kata share dan room yang berarti “ruang berbagi”. Serrum berfokus
                    pada isu-isu pendidikan, sosial-politik dan perkotaan dengan pendekatan presentasi pendidikan dan artistik. Kegiatan Serrum meliputi proyek seni, pameran, lokakarya, diskusi, dan propaganda kreatif. Media yang digunakan
                    antara lain video, mural, grafis, komik dan seni instalasi.
                  </p>
                  <p>
                    Serrum membangun program pendidikan nonformal yang dimulai pada tahun 2014 dengan tema Kurikulab, 2016 - Ekstrakurikuler dan 2018 adalah Remedial. Program ini melibatkan siswa SMA yang telah dikurasi di Jakarta dan
                    sekitarnya. Dalam program Remedial, peserta yang terlibat membedah pola konsumsi informasi dan pengetahuan berdasarkan perkembangan zaman. Siswa bertransaksi informasi untuk menghasilkan pengetahuan dan pendekatan seni
                    dan literasi. Berbagai kegiatan yang telah dilakukan dalam program Remedial adalah mengenal ruang kolektif Gudskul dan Jakarta 32°C, diskusi Seni Rupa Milenium, dan praktik cetak grafis. Serrum juga berkolaborasi dengan
                    komunitas lokal untuk mengeksplorasi kurikulum yang memuat narasi lokal sebagai sumber pengetahuan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}

        {/* ======= Team Section ======= */}
        <section id="team" className="team">
          <div className="container-fluid">
            <div className="section-title">
              <h2>Team</h2>
              <h3>
                Our<span>Team</span>
              </h3>
            </div>

            <div className="row justify-content-center">
              <div className="col-10 col-lg-11 col-xl-9 ">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="member">
                      <img src="src/assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>Nova Sri Ady Kurniawan</h4>
                          <span>Project Manager</span>
                        </div>
                        <div className="social">
                          <a href="https://www.linkedin.com/in/nova-sri-ady-kurniawan-028641255/" target="_blank">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* End Member Item */}
                  <div className="col-xl-4 col-lg-4 col-md-4" data-wow-delay="0.1s">
                    <div className="member">
                      <img src="src/assets/img/team/team-2 (2).JPG" className="img-fluid" alt="" />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>Chika Aulia Zahwa</h4>
                          <span>Front End Developer</span>
                        </div>
                        <div className="social">
                          <a href="https://www.facebook.com/indri.js.7/" target="blank">
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a href="https://instagram.com/chika.aul?igshid=YmMyMTA2M2Y=" target="blank">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="https://www.linkedin.com/in/chika-aulia-zahwa-b8ba96227" target="_blank">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* End Member Item */}
                  <div className="col-xl-4 col-lg-4 col-md-4" data-wow-delay="0.2s">
                    <div className="member">
                      <img src="src/assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>Rohendi</h4>
                          <span>Front End Developer</span>
                        </div>
                        <div className="social">
                          <a
                            href="https://www.facebook.com/Rohendi25
                                            "
                            target="_blank"
                          >
                            <i className="bi bi-facebook" target="_blank"></i>
                          </a>
                          <a href="https://www.instagram.com/rohendi_25/" target="_blank">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="https://www.linkedin.com/in/rohendi-525561244/" target="_blank">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* End Member Item */}
                  <div className="col-xl-4 col-lg-4 col-md-4" data-wow-delay="0.2s">
                    <div className="member">
                      <img src="src/assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>muhammad anwar fuadi</h4>
                          <span>Back End Developer</span>
                        </div>
                        <div className="social">
                          <a href="" target="_blank">
                            <i className="bi bi-facebook" target="_blank"></i>
                          </a>
                          <a href="https://instagram.com/aaannnnwar?igshid=MzNlNGNkZWQ4Mg==" target="_blank">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="" target="_blank">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* End Member Item */}
                  <div className="col-xl-4 col-lg-4 col-md-4" data-wow-delay="0.2s">
                    <div className="member">
                      <img src="src/assets/img/team/team-5.jpg" className="img-fluid" alt="" />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>Muhammad Fadly Hidayat</h4>
                          <span>Back End Developer</span>
                        </div>
                        <div className="social">
                          <a href="" target="_blank">
                            <i className="bi bi-facebook" target="_blank"></i>
                          </a>
                          <a href="" target="_blank">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="" target="_blank">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* End Member Item */}
                  <div className="col-xl-4 col-lg-4 col-md-4" data-wow-delay="0.2s">
                    <div className="member">
                      <img src="src/assets/img/team/team-6.jpg" className="img-fluid" alt="" />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>Meivira dinda maulidiya rizqi</h4>
                          <span>Back End Developer</span>
                        </div>
                        <div className="social">
                          <a href="" target="_blank">
                            <i className="bi bi-facebook" target="_blank"></i>
                          </a>
                          <a href="" target="_blank">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="" target="_blank">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* End Member Item */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Section */}
      </main>
    </>
  );
}
