import React from "react";
import { Link } from "react-router-dom";

export default function CardArtikel({ item }) {
    // const { id } = useParams();
    return (
        <main>
            <Link to=''>
                <div className="card mb-3 text-black">
                    <div className="row g-0">
                        <div className="col-md-9">
                            <div className="card-body">
                                <div className="entry-meta d-flex align-items-center">
                                    <p className="category me-4">{item.kategori}</p>
                                    <p>{item.author}</p>
                                </div>
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.pengertian}</p>
                                <small className="text-body-secondary">{item.date}</small>
                            </div>
                        </div>
                        <div className="col-md-3 p-2 d-flex">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="img-fluid rounded float-start"
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </main>
  );
}
