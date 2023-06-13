import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/css/style.css";
import ArtikelList from "../components/ArtikelList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Artikel() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=837feb089d874ae38adb5c13e616e88c")
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, []);
  return (
    <>
      <Header />
      <main>
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-11 col-xl-10">
                <ol>
                  <li>
                    <Link to="/home">Beranda</Link>
                  </li>
                  <li>Artikel</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <div className="container-fluid-1">
          <div className="row justify-content-center">
            <div className="col-11 col-xl-10">
              <h2 className="mt-3">Artikel</h2>
              <h6 className="">
                Kami menyediakan informasi atau laporan mengenai suatu kejadian, isu, atau <br />
                peristiwa yang berkaitan dengan seni dan literasi
              </h6>
              <hr />
              <br />
              <ArtikelList items={items} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
