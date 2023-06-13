import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

export default function Teori() {
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
                  <li>Teori Seni</li>
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
                  <strong>Teori Seni</strong>
                </h1>
                <hr />
              </div>

              <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                  <img src="src/assets/img/teori/sketsa.jpg" width="100%" height="450" alt="" />
                  <h1 className="mt-3">
                    <strong>Teori Mimesis dan Kreasi (Plato dan Aristoteles)</strong>
                  </h1>
                  <p>
                  Mimesis adalah teori yang menganggap semua karya seni sebagai tiruan alam atau kehidupan. Bahkan kata mimesis sendiri dalam bahasa Yunani secara tersirat bermakna “tiruan”. Mimesis merupakan teori yang telah lama diajukan oleh salah satu pelopor filosof di dunia ini, yaitu Plato. Mengapa demikian? Bukankah seandainya ketika kita melukiskan pemandangan alam, proses penciptaanya tetap melibatkan imajinasi kita sendiri? Seandainya kita menggambarkan suatu peristiwa dalam karya sastra, tetap akan melibatkan sudut pandang kita sendiri?
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
