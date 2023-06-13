import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function Fundamental() {
  return (
    <>
      <Header/>
      <main id="main">
        {/* ======= Breadcrumbs =======  */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-11 col-xl-10">
                <ol>
                  <li>
                    <Link to="/home">Beranda</Link>
                  </li>
                  <li>Fundamental Seni</li>
                </ol>
                <h5>Kategori</h5>
              </div>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}

        <section className="fundamental">
          <div className="container-fluid" />

          <div className="row justify-content-center">
            <div className="col-11 col-xl-10">
              <div className="row">
                <h1>
                  <strong>Fundamental Seni</strong>
                </h1>
                <p>
                  Mempelajari fundamental seni adalah Dasar-dasar pemikiran yang terpetakan dari awal sangatlah penting agar pemahaman kita tidak bersimpangan dengan penyumbang-penyumbang pemikiran seni. Beberapa fundamental seni rupa dan
                  desain yang penting untuk dipahami meliputi: pengertian seni, pengertian seni rupa, prinsip prinsip seni rupa dan desain, unsur unsur seni rupa, dan lain-lain dapat ditemukan disini.
                </p>
                <hr />
              </div>

              <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                  <img src="src/assets/img/fundamental/fe.jpg" width="100%" height="450" alt="" />
                  <h1 className="mt-3">
                    <strong>Fenomena Seni Rupa</strong>
                  </h1>
                  <p>
                    Fenomena Seni Rupa dapat menyangkut banyak peristiwa, pergerakan, hingga perkembangan umum yang menyangkut seni rupa di dunia. Berbagai fenomena tersebut dapat ditelaah sebagai inspirasi hingga berbagai pertimbangan lain
                    dalam berkarya. Tidak sedikit pula berbagai fenomena seni rupa yang dimanfaatkan untuk penelitian, baik dalam bidang seni rupa, maupun bidang lainnya seperti sejarah, arkeologi, dan bidang ilmu lainnya....
                  </p>
                  <div id="seni"></div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="row-cols-lg-10">
                    <h2 className="article-section-title">
                      <span>Baca Artikel</span>
                    </h2>
                    <div className="col">
                      <div className="fundamental-item d-flex">
                        <img src="src/assets/img/fundamental/satu.jpg" className="fundamental-img" alt="" />
                        <h3>
                          <a href="#!">Seni Rupa Murni: Pengertian, Batasan, Fungsi & Contoh</a>
                        </h3>
                      </div>
                      <div className="col">
                        <div className="fundamental-item d-flex">
                          <img src="src/assets/img/fundamental/patung.jpg" className="fundamental-img" alt="" />
                          <h3>
                            <a href="#!">Pengertian seni patung, fungsi, teknik, alat & bahan</a>
                          </h3>
                        </div>
                      </div>
                      <div className="col">
                        <div className="fundamental-item d-flex">
                          <img src="src/assets/img/fundamental/empat.jpg" className="fundamental-img" alt="" />
                          <h3>
                            <a href="#!">Perpaduan Warna Harmonis menggunakan Teori Warna & Seni</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
