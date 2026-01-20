import { useEffect, useState } from "react";
import api from "../api/equran";
import { Link } from "react-router-dom";

export default function Home() {
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    api.get("/surat")
      .then(res => setSurah(res.data.data))
      .catch(console.log);
  }, []);

  return (
  <div className="min-h-screen bg-slate-50">

    {/* HEADER */}
    <div className="bg-emerald-600 text-white px-6 py-10 rounded-b-3xl shadow relative">

      {/* judul tengah */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-1 tracking-wide">
          📖 Quranly
        </h1>
        <p className="text-emerald-100 text-sm md:text-base">
          Closer to the Qur’an.
        </p>
      </div>

    </div>

    {/* CONTENT */}
    <div className="max-w-5xl mx-auto px-4 mt-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {surah.map((s) => (
          <Link
            key={s.nomor}
            to={`/surah/${s.nomor}`}
            className="
              bg-white
              rounded-2xl
              p-5
              shadow
              hover:shadow-xl
              hover:-translate-y-1
              transition
              duration-300
            "
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg text-gray-800">
                {s.nomor}. {s.namaLatin}
              </h2>

              <span className="text-2xl text-emerald-600 font-arabic">
                {s.nama}
              </span>
            </div>

            <p className="text-gray-500 text-sm">
              {s.arti} • {s.jumlahAyat} ayat
            </p>
          </Link>
        ))}

      </div>
    </div>

  </div>
);}
