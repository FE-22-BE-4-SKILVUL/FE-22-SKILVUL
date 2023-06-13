import "../assets/css/style.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaRegLightbulb } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { Carousel } from "../components/Carousel";
import { slides } from "../assets/js/carouselData.json";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Header />
      {/* ======= Hero Section ======= */}
      <section id="hero">
        <Carousel data={slides} />
      </section>

      <main id="main">
        {/*======= About Section ======= */}
        <section id="about" className="about">
          <div className="container-fluid pt-5">
            <div className="row justify-content-center">
              <div className="col-10 col-sm-10 col-md-9 col-lg-5 col-xl-5 img-box d-flex justify-content-center align-items-stretch position-relative">{/*<a href="" className="glightbox play-btn mb-4"></a> */}</div>

              <div className="col-10 col-sm-10 col-md-11 col-lg-5 col-xl-5 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h6>
                  <strong>Tentang kami</strong>
                </h6>
                <h3>Remedial.id</h3>
                <p>
                  Serrum remedial adalah perkumpulan studi dan pendidikan seni rupa yang berkedudukan di Jakarta yang didirikan pada tahun 2006. Kata serrum berasal dari kata share dan room yang berarti “ruang berbagi”. Serrum berfokus pada
                  isu-isu pendidikan, sosial-politik dan perkotaan dengan pendekatan presentasi pendidikan dan artistik. Kegiatan Serrum meliputi proyek seni, pameran, lokakarya, diskusi, dan propaganda kreatif. Media yang digunakan antara
                  lain video, mural, grafis, komik dan seni instalasi.
                </p>
                <Link to="/about" className="btn-get-started animated fadeInUp scrollto">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*End About Section */}

        {/*======= Seni Section ======= */}
        <section id="seni" className="seni pt-5">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-10 ">
                <div className="row">
                  <div className="col-lg-6">
                    <h2 className="article-section-title">
                      <span>SENI</span>
                    </h2>
                    <div className="seni-item">
                      <img src="src/assets/img/seni/seni-1.jpg" className="seni-img" alt="" />
                      <h3>
                        <a href="#!">Fenomena Seni Rupa</a>
                      </h3>
                      <div className="entry-meta">
                        {/* <time className="entry-date published updated"
                                         datetime="2022-01-09T19:27:23+07:00">
                                         09-01-2022
                                     </time> */}
                      </div>
                    </div>
                    <div className="seni-item mt-4">
                      <img src="src/assets/img/seni/seni-3.jpg" className="seni-img" alt="" />
                      <h3>
                        <a href="#!">Pengertian Sketsa serta Tujuan, Fungsi, Manfaat & Langkah</a>
                      </h3>
                      <div className="entry-meta">
                        {/* <time className="entry-date published updated"
                                         datetime="2021-12-21T16:28:38+07:00">
                                         21-12-2021
                                     </time> */}
                      </div>
                    </div>
                    <div className="seni-item mt-4">
                      <img src="src/assets/img/seni/seni-5.jpg" className="seni-img" alt="" />
                      <h3>
                        <a href="#!">Tari: Pengertian, Unsur-Unsur, Fungsi, dan Jenis.</a>
                      </h3>
                      <div className="entry-meta">
                        {/* <time className="entry-date published updated"
                                         datetime="2022-04-21T16:28:38+07:00">
                                         21-04-2022
                                     </time> */}
                      </div>
                    </div>
                  </div>
                  {/*End seni-item */}

                  <div className="col-lg-6 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                    <h2 className="article-section-title">
                      <span>MUSIK</span>
                    </h2>
                    <div className="seni-item">
                      <img src="src/assets/img/seni/seni-2.jpg" className="seni-img" alt="" />
                      <h3>
                        <a href="#!">Seni Musik: Sejarah, Unsur, Jenis dan Fungsinya</a>
                      </h3>
                      {/* <time className="entry-date published updated" datetime="2021-01-09T19:27:23+07:00">
                                     09-01-2021
                                 </time> */}
                    </div>
                    <div className="seni-item mt-4">
                      <img src="src/assets/img/seni/seni-4.jpg" className="seni-img" alt="" />
                      <h3>
                        <a href="#!">Musik Kontemporer, Ciri-Ciri, Karakteristik, dan Konsep Kreatif</a>
                      </h3>
                      <div className="entry-meta">
                        {/* <time className="entry-date published updated"
                                         datetime="2021-09-11T16:28:38+07:00">
                                         11-09-2021
                                     </time> */}
                      </div>
                    </div>
                    <div className="seni-item mt-4">
                      <img src="src/assets/img/seni/seni-6.jpg" className="seni-img" alt="" />
                      <h3>
                        <a href="#!"> Musik Tradisional Beserta Alat Musiknya</a>
                      </h3>
                      <div className="entry-meta">
                        {/* <time className="entry-date published updated"
                                         datetime="2022-04-27T16:28:38+07:00">
                                         27-04-2022
                                     </time> */}
                      </div>
                    </div>
                  </div>
                  {/*End seni-item */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End seni Section */}

        {/*======= program Section ======= */}
        <section id="program" className="program pt-5 mt-5">
          <div className="container-fluid">
            <div className="section-title">
              <h2>Program</h2>
              <h3>
                Remedial<span>Course</span>
              </h3>
              <p>Berbagai macam pilihan course dengan metode belajar yang cocok buat kamu</p>
            </div>
            <div id="packageContainer" className="d-flex justify-content-center">
              <div className="row justify-content-center h-100">
                <div className="col-sm-7 col-md-6 col-lg-5 col-xl-6 h-100 d-flex justify-content-center">
                  <div className="package-card">
                    <div
                      className="package-card-top" //
                      //  style="background-image: url(src/assets/img/Rectangle.png);"
                    >
                      <div className="package-product-label">
                        <p>Kelas Offline</p>
                      </div>
                    </div>
                    <div className="package-card-bottom">
                      <div id="price-information-wrapper-variant-b">
                        <div className="package-price-information">
                          <div className="package-price-information-bottom">
                            <span className="finalPrice">Rp&nbsp;50.000</span>
                          </div>
                        </div>
                      </div>

                      <Link to="/program-offline" className="btn-package">
                        Beli Paket
                      </Link>
                      <ul id="package-productReviews">
                        <li>
                          <div className="package-preview-icon">
                            <BsStarFill></BsStarFill>
                          </div>
                          <p>
                            <strong>4.8</strong>/5 rating kelas
                          </p>
                        </li>
                        <li>
                          <div className="package-preview-icon">
                            <FaRegLightbulb></FaRegLightbulb>
                          </div>
                          <p>Sesi pertemuan online hingga 10x seminggu</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-7 col-md-6 col-lg-5 col-xl-6 h-100 d-flex justify-content-center">
                  <div className="package-card">
                    <div
                      className="package-card-top" //
                      //  style="background-image: url(src/assets/img/Rectangle\ 2974.png);"
                    >
                      <div className="package-product-label">
                        <p>Kelas Online</p>
                      </div>
                    </div>
                    <div className="package-card-bottom">
                      <div id="price-information-wrapper-variant-b">
                        <div className="package-price-information">
                          <div className="package-price-information-bottom">
                            <span className="finalPrice">Rp&nbsp;50.000</span>
                          </div>
                        </div>
                      </div>
                      <a href="program.html" className="btn-package" data-tracking-event-type="landing_page__core__item_click">
                        Beli Paket
                      </a>
                      <ul id="package-productReviews">
                        <li>
                          <div className="package-preview-icon">
                            <BsStarFill></BsStarFill>
                          </div>
                          <p>
                            <strong>4.8</strong>/5 rating kelas
                          </p>
                        </li>
                        <li>
                          <div className="package-preview-icon">
                            <FaRegLightbulb></FaRegLightbulb>
                          </div>
                          <p>Sesi pertemuan online hingga 10x seminggu</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End program Section */}

        {/*======= video pembelajaran Section ======= */}
        <section id="pembelajaran" className="pembelajaran pt-5">
          <div className="container-fluid">
            <div className="section-title">
              <h3>
                Video <span>Pembelajaran</span>
              </h3>
              <p>Berbagai macam pilihan video dengan metode belajar yang cocok buat kamu</p>
            </div>

            <div className="row justify-content-center">
              <div className="col-10 col-sm-10 col-md-10 col-lg-11 col-xl-10">
                <div className="row">
                  <div className="col-lg-4 col-md-6 icon-box">
                    <figure className="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
                      <div className="wp-block-embed__wrapper">
                        <div className="jetpack-video-wrapper">
                          <iframe
                            width={"100%"}
                            height={"250"}
                            src={"https://www.youtube.com/embed/ImRf-cl-V7A"}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </figure>
                    <h4 className="title">
                      <a href="https://youtu.be/ImRf-cl-V7A" target="_blank">
                        APA ITU SENI? Pengertian, Fungsi, Cabang dan Pembagian Seni
                      </a>
                    </h4>
                    <p className="description">
                      Pada umumnya seni sering diartikan sebagai sebuah ekspresi perasaan manusia yang didalamnya mengandung unsur estetik atau keindahan dan diungkapkan melalui suatu media yang nyata baik itu dalam berupa gerak, rupa, nada
                      dan syair, serta dapat dirasakan oleh panca indra manusia.{" "}
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box">
                    <figure className="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
                      <div className="wp-block-embed__wrapper">
                        <div className="jetpack-video-wrapper">
                          <iframe
                            width={"100%"}
                            height={"250"}
                            src={"https://www.youtube.com/embed/videoseries?list=PLhkyWqKxYl7LChI6lcooI-7_f_zFpo6Jh"}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </figure>
                    <h4 className="title">
                      <a href={"https://youtube.com/playlist?list=PLhkyWqKxYl7LChI6lcooI-7_f_zFpo6Jh"} target="_blank">
                        Seni Tari
                      </a>
                    </h4>
                    <p className="description">
                      seni tari adalah suatu gerakan semua bagian tubuh atau hanya sebagian saja yang dilakukan dengan ritmis serta pada waktu tertentu untuk mengungkap pikiran, perasaan, dan tujuan dengan iringan musik atau tanpa iringan
                      musik.{" "}
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box">
                    <figure className="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
                      <div className="wp-block-embed__wrapper">
                        <div className="jetpack-video-wrapper">
                          <iframe
                            width={"100%"}
                            height={"250"}
                            src={"https://www.youtube.com/embed/videoseries?list=PLhkyWqKxYl7Jygbz5eF4sU7vvkRfY5ikO"}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </figure>
                    <h4 className="title">
                      <a href={"https://youtube.com/playlist?list=PLhkyWqKxYl7Jygbz5eF4sU7vvkRfY5ikO"} target="_blank">
                        Seni Rupa
                      </a>
                    </h4>
                    <p className="description">
                      Seni rupa adalah cabang seni yang membentuk karya seni dengan media yang bisa ditangkap mata dan dirasakan dengan rabaan. Kesan ini diciptakan dengan mengolah konsep titik, garis, bidang, bentuk, volume, warna,
                      tekstur, dan pencahayaan dengan acuan estetika.
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box">
                    <figure className="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
                      <div className="wp-block-embed__wrapper">
                        <div className="jetpack-video-wrapper">
                          <iframe
                            width={"100%"}
                            height={"250"}
                            src={"https://www.youtube.com/embed/videoseries?list=PLHsx37V5nkBokmu8UWeBH51cD6jMT7OMc"}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </figure>
                    <h4 className="title">
                      <a href={"https://youtube.com/playlist?list=PLHsx37V5nkBokmu8UWeBH51cD6jMT7OMc"} target="_blank">
                        Seni Musik
                      </a>
                    </h4>
                    <p className="description">
                      Seni musik adalah sebuah cabang seni yang lebih fokus mengutamakan penggunaan harmoni, melodi, irama, tempo, dan vokal sebagai sarana menyampaikan nilai-nilai seni itu sendiri dari seniman atau pembuat seni kepada
                      orang lain atau penikmat seni.
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box">
                    <figure className="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
                      <div className="wp-block-embed__wrapper">
                        <div className="jetpack-video-wrapper">
                          <iframe
                            width={"100%"}
                            height={"250"}
                            src={"https://www.youtube.com/embed/s3jVNZl5vi4"}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </figure>
                    <h4 className="title">
                      <a href={"https://youtu.be/s3jVNZl5vi4"} target="_blank">
                        Seni Sastra
                      </a>
                    </h4>
                    <p className="description">Seni sastra adalah seni yang menampilkan persepsi, ekspresi, gagasan, dan keindahan melalui tuliskan.</p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box">
                    <figure className="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
                      <div className="wp-block-embed__wrapper">
                        <div className="jetpack-video-wrapper">
                          <iframe
                            width={"100%"}
                            height={"250"}
                            src={"https://www.youtube.com/embed/videoseries?list=PLhkyWqKxYl7L8YaQ0VDaOgU9S769nj1Ff"}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </figure>
                    <h4 className="title">
                      <a href={"https://youtube.com/playlist?list=PLhkyWqKxYl7L8YaQ0VDaOgU9S769nj1Ff"} target="_blank">
                        Seni Teater
                      </a>
                    </h4>
                    <p className="description">
                      Seni teater adalah jenis kesenian pertunjukan drama yang dipentaskan di atas panggung. Secara spesifik, seni teater merupakan sebuah seni drama yang menampilkan perilaku manusia dengan gerak, tari, dan nyanyian yang
                      disajikan lengkap dengan dialog dan akting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End pembelajaran Section */}

        {/*======= Sastra Section ======= */}
        <section id="seni" className="seni ">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-10">
                <div className="row">
                  <div className="col-lg-6">
                    <h2 className="article-section-title">
                      <span>SASTRA</span>
                    </h2>
                    <div className="seni-item">
                      <img src="src/assets/img/seni/sastra-2.jpg" className="seni-img" alt="" />
                      <h3>
                        <a href="#!"> Sastra: Pengertian & Berbagai Pendekatannya</a>
                      </h3>
                      <div className="entry-meta">
                        {/* <time className="entry-date published updated"
                                         datetime="2021-06-22T19:27:23+07:00">
                                         22-06-2021
                                     </time> */}
                      </div>
                    </div>
                    <div className="seni-item mt-4">
                      <img src="src/assets/img/seni/sastra-1.jpg" className="seni-img" alt="" />
                      <h3>
                        <a href="#!">Drama: Pengertian, Ciri, Struktur, Unsur, Bentuk & Kaidah</a>
                      </h3>
                      <div className="entry-meta">
                        {/* <time className="entry-date published updated"
                                         datetime="2020-10-20T16:28:38+07:00">
                                         20-10-2020
                                     </time> */}
                      </div>
                    </div>
                    <div className="seni-item mt-4">
                      <img src="src/assets/img/seni/sastra-3.jpg" className="seni-img" alt="" />
                      <h3>
                        <a href="#!">Teks Cerita Fantasi, Ciri-Ciri, Struktur, Kaidah Kebahasaan, dan Contohnya</a>
                      </h3>
                      <div className="entry-meta">
                        {/* <time className="entry-date published updated"
                                         datetime="2021-11-25T16:28:38+07:00">
                                         25-11-2021
                                     </time> */}
                      </div>
                    </div>
                  </div>
                  {/*End seni-item */}

                  <div className="col-lg-6 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                    <h2 className="article-section-title">
                      <span>BAHASA</span>
                    </h2>
                    <div className="seni-item mt-4 mt-lg-0">
                      <img src="src/assets/img/seni/bahasa-1.jpg" className="seni-img" alt="" />
                      <h3>
                        <a href="#!">Ilmiah: Pengertian, Ciri, Jenis & Struktur (Sistematika)</a>
                      </h3>
                      {/* <time className="entry-date published updated" datetime="2021-01-24T19:27:23+07:00">
                                     24-01-2021
                                 </time> */}
                    </div>
                    <div className="seni-item mt-4">
                      <img src="src/assets/img/seni/bahasa-3.png" className="seni-img" alt="" />
                      <h3>
                        <a href="#!">Pengertian, Struktur, Unsur Kebahasaan & Pola Penulisan</a>
                      </h3>
                      <div className="entry-meta">
                        {/* <time className="entry-date published updated"
                                         datetime="2021-01-23T16:28:38+07:00">
                                         23-01-2021
                                     </time> */}
                      </div>
                    </div>
                    <div className="seni-item mt-4">
                      <img src="src/assets/img/seni/bahasa-2.jpg" className="seni-img" alt="" />
                      <h3>
                        <a href="#!">Pengertian, Sistematika, Kaidah & Contoh</a>
                      </h3>
                      <div className="entry-meta">
                        {/* <time className="entry-date published updated"
                                         datetime="2021-01-24T16:28:38+07:00">
                                         24-01-2021
                                     </time> */}
                      </div>
                    </div>
                  </div>
                  {/*End seni-item */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End seni Section */}

        {/*======= artikel Section ======= */}
        <section id="artikel" className="artikel">
          <div className="container-fluid pt-5 mt-5">
            <div className="section-title">
              <h2>Artikel</h2>
              <h3>
                Artikel<span>Terbaru</span>
              </h3>
              <p>Kalian bisa menikmati artikel terbaru di remedial.id.</p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-11" id="artikel-list"></div>
            </div>

            <div className="col-lg-13 d-flex justify-content-center">
              <Link to="/artikel">
                <button type="button" className="btn btn-outline-secondary btn-md my-4 fw-bold">
                  Lihat Semua
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/*End Artikel Section */}
      </main>

      {/* <Footer /> */}
    </>
  );
}
