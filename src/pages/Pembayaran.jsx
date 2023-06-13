import "../assets/css/style.css";
import { Link, useLocation } from "react-router-dom";
import { ImPriceTag } from "react-icons/im";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

export default function Pembayaran(props) {
  const location = useLocation();
  const [disable, setDisable] = useState("");
  console.log(location, "useLocation Hook");

  const nama = localStorage.getItem("nama_lengkap");
  const mapel = location?.state?.mapel;
  const tempat = location?.state?.tempat;
  const waktu = location?.state?.waktu;
  const tanggal = location?.state?.tanggal;
  const harga = location?.state?.harga;
  // const email = localStorage.getItem("email");
  // const alamat = localStorage.getItem("alamat");

  function handleCheck(event) {
    setDisable(event.target.checked);
    console.log(event.target.checked);
  }

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    const myMidtransClientKey = "SB-Mid-client-B3Bj_C3s0ZhDhuV5";
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const bayar = () => {
    axios
      .post("https://be4-skilvul-production.up.railway.app/api/v1/payment", {
        nama_lengkap: nama,
        // mapel: mapel,
        // tempat: tempat,
        // waktu: waktu,
        // tanggal: tanggal,
        // email: email,
        // alamat: alamat,
        harga: 50000,
      })
      .then((res) => {
        // console.log(res.data.token);
        window.snap.pay(res.data.token);
      });
  };

  return (
    <>
      <Header />
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
                  <li>
                    <Link to="/program-offline">Kelas Offline</Link>
                  </li>
                  <li>Pembayaran</li>
                </ol>
                <h2>Pembayaran</h2>
              </div>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}

        <div className="container-xl px-5 pb-5">
          <div className="row d-flex justify-content-center">
            {/* Card Profil Pelajar */}
            <div className="col-6">
              <div className="card d-flex my-4 px-4 py-3">
                <h2 className="fs-4 fw-bold">Informasi Kelas</h2>
                <div className="card d-flex my-1 p-4">
                  <h5 className="text-center fw-bold">Paket Remedial</h5>
                  <h6 className="text-center">
                    Kelas Seni
                    <hr />
                  </h6>

                  <div className="row profil-pelajar d-flex  align-items-center">
                    <div className="col-4 col-sm-5 col-md-5 col-lg-4">
                      <img src="src/assets/img/pengajar/pengajar3.png" className="rounded-circle" width="auto" height="90" alt="" />
                    </div>
                    <div className="col-8 col-sm-7 col-md-7 col-lg-8 ">
                      <div className="my-3">
                        <h5 className="fw-semibold">{nama}</h5>
                        <h6>
                          Pelajar
                          {/* {alamat} */}
                        </h6>
                      </div>
                    </div>
                  </div>

                  <ul className="info-kelas list-unstyled mt-5">
                    <li className="d-flex pb-1">
                      <div className="col-5 col-sm-6 col-lg-7">
                        <div className="d-flex justify-content-between">
                          <h6>Topik</h6>
                          <h6>:</h6>
                        </div>
                      </div>
                      <div className="ps-3">{mapel}</div>
                    </li>

                    <li className="d-flex pb-1">
                      <div className="col-5 col-sm-6 col-lg-7">
                        <div className="d-flex justify-content-between">
                          <h6>Metode Pembelajaran</h6>
                          <h6>:</h6>
                        </div>
                      </div>
                      <div className="ps-3">Offline</div>
                    </li>

                    <li className="d-flex pb-1">
                      <div className="col-5 col-sm-6 col-lg-7">
                        <div className="d-flex justify-content-between">
                          <h6>Durasi Pembelajaran</h6>
                          <h6>:</h6>
                        </div>
                      </div>
                      <div className="ps-3">2 Jam/Hari</div>
                    </li>

                    <li className="d-flex pb-1">
                      <div className="col-5 col-sm-6 col-lg-7">
                        <div className="d-flex justify-content-between">
                          <h6>Lokasi Pembelajaran</h6>
                          <h6>:</h6>
                        </div>
                      </div>
                      <div className="ps-3 text-uppercase">{tempat}</div>
                    </li>

                    <li className="d-flex pb-1">
                      <div className="col-5 col-sm-6 col-lg-7">
                        <div className="d-flex justify-content-between">
                          <h6>Waktu Pembelajaran</h6>
                          <h6>:</h6>
                        </div>
                      </div>
                      <div className="ps-3">{waktu}</div>
                    </li>

                    <li className="d-flex pb-1">
                      <div className="col-5 col-sm-6 col-lg-7">
                        <div className="d-flex justify-content-between">
                          <h6>Tanggal Mulai</h6>
                          <h6>:</h6>
                        </div>
                      </div>
                      <div className="ps-3">{tanggal}</div>
                    </li>

                    <li className="d-flex pb-1">
                      <div className="col-5 col-md-6 col-lg-7">
                        <div className="d-flex justify-content-between">
                          <h6>Lama Pembelajaran</h6>
                          <h6>:</h6>
                        </div>
                      </div>
                      <div className="ps-3">6 Bulan</div>
                    </li>

                    <hr />

                    <li className="d-flex pt-4">
                      <div className="col-5 col-lg-7">
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-semibold">Harga Paket</h6>
                          <h6 className="fw-semibold">:</h6>
                        </div>
                      </div>
                      <div className="ps-3 fw-semibold">{harga}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="card d-flex my-4 px-4 py-3">
                <h2 className="fs-4 fw-bold">
                  Deskripsi <hr />
                </h2>
                <div className="total-harga bg-dark rounded-3 d-flex text-white justify-content-around pt-3 mb-4">
                  <div className="d-flex">
                    <ImPriceTag fontSize="2rem" color="yellow" border="1px solid black" />
                    <p className="ms-3 fs-5">Total Harga</p>
                  </div>
                  <p className="fs-5 text-white">{harga}</p>
                </div>

                <div className="form-check my-4 ">
                  <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={handleCheck} />
                  <label className="form-check-label fs-6" htmlFor="flexCheckDefault">
                    Saya telah membaca dan menyetujui <span className="fw-semibold">Syarat dan Ketentuan</span>
                  </label>
                </div>

                <div className="d-flex justify-content-center my-4">
                  <button onClick={() => bayar()} disabled={!disable} className="btn btn-danger px-5" role="button">
                    Bayar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
