import { useState } from "react";
import "../assets/css/style.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Kelas_Offline() {
  const [harga, setHarga] = useState("Rp 50.000,00");
  const [mapel, setMapel] = useState(null);
  const [tempat, setTempat] = useState(null);
  const [tanggal, setTanggal] = useState(null);
  const [waktu, setWaktu] = useState(null);

  const navigate = useNavigate();

  const pelajaran = [
    { label: "Seni Tari", value: 1 },
    { label: "Seni Rupa", value: 2 },
    { label: "Seni Musik", value: 3 },
    { label: "Pertunjukan", value: 4 },
  ];

  const lokasi = [
    { label: "Jakarta", value: 1 },
    { label: "Bogor", value: 2 },
    { label: "Depok", value: 3 },
    { label: "Tangerang", value: 4 },
    { label: "Bekasi", value: 5 },
  ];

  function handlePelajaran(event) {
    setMapel(event.target.value);
    console.log(event.target.value);
  }

  function handleLokasi(event) {
    setTempat(event.target.value);
    console.log(event.target.value);
  }

  function handleDate(event) {
    setTanggal(event.target.value);
    console.log(event.target.value);
  }

  function handleWaktu(event) {
    setWaktu(event.target.value);
    console.log(event.target.value);
  }

  function handleNext() {
    if (harga !== null && mapel !== null && tempat !== null && tanggal !== null && waktu !== null) {
      const location = {
        state: { harga: harga, mapel: mapel, tempat: tempat, tanggal: tanggal, waktu: waktu },
      };
      navigate("/pembayaran", location);
    } else {
    }
  }

  return (
    <>
      <Header />
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-11 col-xl-10">
                <ol>
                  <li>
                    <Link to="/">Beranda</Link>
                  </li>
                  <li>Kelas Ofline</li>
                </ol>
                <h2>Program Kelas</h2>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= program Section ======= --> */}
        <section id="kelas-off" className="program d-flex justify-content-center">
          <div className="row d-flex justify-content-center">
            <div className="container col-10 mb-5 pb-5">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 icon-boxes d-flex flex-column justify-content-center">
                  <h3>Kelas Ofline</h3>
                  <p>
                    Siswa kreatif yang ingin fokus pada disiplin ilmu seperti teater, musik atau seni dapat memilih untuk belajar seni yang di inginkan. Hal ini dapat mempersiapkan siswa untuk karir dalam seni atau melengkapi berbagai karir
                    lain di humaniora. Sebut saja adalah studi topik tertentu dalam wilayah subjek yang lebih luas dan merupakan dasar dari kualifikasi. Sebuah kursus umum meliputi kuliah, penilaian dan tutorial.
                  </p>
                  <p>
                    <i className="bi bi-app"></i> Tersedia 10 mata pelajaran
                  </p>
                  <p>
                    <i className="bi bi-app"></i> Belajar lebih fleksibel
                  </p>
                  <p>
                    <i className="bi bi-app"></i> Mampu mengetahui tentang seni dan cara mempraktikannya
                  </p>
                  <p>
                    <i className="bi bi-app"></i> Bersertifikat
                  </p>

                  <h4 className="mt-2 fw-bold">Harga</h4>

                  <h2 className="pt-2 ps-3 fw-bold">Rp 50.000</h2>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 d-flex justify-content-end ">
                  <img className="img-fluid py-5" src="src/assets/img/program.png" alt="" />
                  {/* <!-- <a href="" className="glightbox play-btn mb-4"></a> --> */}
                </div>
              </div>
            </div>

            <div className="container col-lg-10 mt-5">
              <div className="row d-flex justify-content-center">
                <div className="col-9">
                  <div className="card d-flex mb-5">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item fs-5 fw-bold">
                        <i className="bi bi-file-earmark-text me-2"></i>
                        Deskripsi
                      </li>
                      <li className="list-group-item py-5 lh-lg">
                        Siswa kreatif yang ingin fokus pada disiplin ilmu seperti teater, musik atau seni dapat memilih untuk belajar seni yang di inginkan. Hal ini dapat mempersiapkan siswa untuk karir dalam seni atau melengkapi berbagai
                        karir lain di humaniora. Sebut saja adalah studi topik tertentu dalam wilayah subjek yang lebih luas dan merupakan dasar dari kualifikasi. Sebuah kursus umum meliputi kuliah, penilaian dan tutorial.
                        {/* <br><br> */}
                        <ul className="list-unstyled">
                          <li>
                            Bagaimana cara mendaftar kelas:
                            <ul>
                              <li>Daftar ke website Remedial.</li>
                              <li>Pilih kelas atau tambahkan kelas</li>
                              <li>Checkout</li>
                              <li>Setelah itu, Team remedial akan langsung mengirimkan e-tiket melalui email.</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="card d-flex mb-5">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item fs-5 fw-bold">
                        <i className="bi bi-person-fill me-2"></i>
                        Profil Pengajar
                      </li>
                      <div className="row justify-content-center m-1">
                        <div className="col-xl-11 col-lg-11 col-md-11 ">
                          <div className="row justify-content-around">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 text-start bg-dark rounded my-3 p-0 mx-2 text-white">
                              <img src="src/assets/img/pengajar/pengajar5.png" className="rounded-top" width="100%" alt="" />
                              <h5 className="py-3 ps-4">Angela Hirata</h5>
                              <p className="px-4">Seni Musik</p>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 text-start bg-dark rounded my-3 mx-2 p-0 text-white">
                              <img src="src/assets/img/pengajar/pengajar4.png" className="rounded-top" width="100%" alt="" />
                              <h5 className="py-3 ps-4">Mauren Andrea</h5>
                              <p className="px-4">Seni Rupa</p>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 text-start bg-dark rounded my-3 p-0 text-white">
                              <img src="src/assets/img/pengajar/pengajar3.png" className="rounded-top" width="100%" alt="" />
                              <h5 className="py-3 ps-4">Marsel Nova</h5>
                              <p className="px-4">Pertunjukan</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center m-1">
                        <div className="col-xl-11">
                          <div className="row justify-content-evenly">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 text-start bg-dark rounded my-3 p-0 mx-2 text-white">
                              <img src="src/assets/img/pengajar/pengajar2.png" className="rounded-top" width="100%" alt="" />
                              <p className="fs-5 py-3 ps-4">Samuel Lincoln</p>
                              <p className="px-4">Seni Rupa</p>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 text-start bg-dark rounded my-3 p-0 mx-2 text-white">
                              <img src="src/assets/img/pengajar/pengajar1.png" className="rounded-top" width="100%" alt="" />
                              <p className="fs-5 py-3 ps-4">Jales Marque</p>
                              <p className="px-4">Seni Musik</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-9">
                  <div className="card d-flex">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item fs-5 fw-bold">Pilihan Waktu</li>

                      <div className="d-flex justify-content-center">
                        <div className="col-10 d-flex justify-item-center">
                          <select className="form-select m-2 mt-4 py-2 px-3 bg-secondary bg-opacity-25" onChange={handlePelajaran} aria-label="Default select example">
                            <option select="true">Pilih Mata Pelajaran</option>
                            {pelajaran.map((pelajaran) => (
                              <option key={pelajaran.value} value={pelajaran.label}>
                                {pelajaran.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <div className="col-10 d-flex justify-item-center">
                          <select className="form-select m-2 py-2 px-3 bg-secondary bg-opacity-25" onChange={handleLokasi} aria-label="Default select example">
                            <option select="true">Pilih Lokasi</option>
                            {lokasi.map((lokasi) => (
                              <option key={lokasi.value} value={lokasi.label}>
                                {lokasi.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="py-3">
                        <h6 className="px-3 text-black">Tanggal Mulai Kelas</h6>
                        <div className="d-flex justify-content-center ">
                          <div className="btn-group btn-group-toggle col-3 mx-2" data-toggle="buttons">
                            <label
                              className="btn btn-secondary"
                              // style="font-size: 8pt;"
                            >
                              <input type="radio" name="options" id="option1" defaultValue={"03 Juli 2023"} defaultChecked onClick={handleDate} /> <br />
                              03 Jul 23
                            </label>
                          </div>

                          <div className="btn-group btn-group-toggle col-3 mx-2" data-toggle="buttons">
                            <label
                              className="btn btn-secondary"
                              // style="font-size: 8pt;"
                            >
                              <input type="radio" name="options" id="option2" defaultValue={"10 Juli 2023"} defaultChecked onClick={handleDate} /> <br />
                              10 Jul 23
                            </label>
                          </div>

                          <div className="btn-group btn-group-toggle col-3 mx-2" data-toggle="buttons">
                            <label className="btn btn-secondary">
                              <input type="radio" name="options" id="option3" defaultValue={"17 Juli 2023"} defaultChecked onClick={handleDate} /> <br />
                              17 Mar 23
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="pb-3">
                        <h6 className="px-3 text-black">Waktu</h6>
                        <div className="d-flex justify-content-center ">
                          <div className="btn-group btn-group-toggle col-5 mx-2" data-toggle="buttons">
                            <label
                              className="btn btn-secondary"
                              // style="font-size: 8pt;"
                            >
                              <input type="radio" name="waktu" id="waktu1" defaultValue="13.00 - 15.00 WIB" defaultChecked onClick={handleWaktu} /> <br />
                              13.00 - 15.00 WIB
                            </label>
                          </div>

                          <div className="btn-group btn-group-toggle col-5 mx-2" data-toggle="buttons">
                            <label
                              className="btn btn-secondary"
                              // style="font-size: 8pt;"
                            >
                              <input type="radio" name="waktu" id="waktu2" defaultValue="07.30 - 09.30 WIB" defaultChecked onClick={handleWaktu} /> <br />
                              07.30 - 09.30 WIB
                            </label>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>

                  <div className="d-flex justify-content-center my-4">
                    <div onClick={handleNext} className="btn btn-dark px-5" state={{ harga: harga, mapel: mapel, tempat: tempat, tanggal: tanggal, waktu: waktu }} to="/pembayaran" role="button">
                      Selanjutnya
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End program Section --> */}
      </main>
    </>
  );
}
