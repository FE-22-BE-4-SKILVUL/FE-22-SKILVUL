import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function Praktik() {
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
                  <li>Praktik Seni</li>
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
                  <strong>Praktik Seni</strong>
                </h1>
                <hr />
              </div>

              <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                  <img src="src/assets/img/praktik/kk.jpg" width="100%" height="450" alt="" />
                  <h1 className="mt-3">
                    <strong>Teknik Kolase Teori, Praktik & Pertimbangan Juxtaposition</strong>
                  </h1>
                  <p>
                  Teknik kolase adalah penyusunan komposisi karya seni rupa yang dilakukan dengan cara menempelkan berbagai bahan seperti kain perca, bulu, potongan koran, dan bahan lainnya pada media karya. Teknik ini terdengar biasa saja dan malah tampaknya hanya cocok untuk hobi sehari-hari, bukan karya seni. Lalu, sebetulnya apa faktor yang menyebabkan keberhasilan dari teknik kolase sehingga mampu mewakili ekspresi seorang seniman yang sudah terkenal sekali pun?
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
