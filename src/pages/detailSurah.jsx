import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/equran";

export default function DetailSurah() {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);

  useEffect(() => {
    api.get(`/surat/${id}`)
      .then(res => setSurah(res.data.data))
      .catch(console.log);
  }, [id]);

  if (!surah) return null;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HEADER */}
      <div className="bg-emerald-600 text-white px-6 py-8 rounded-b-3xl shadow">
        <Link
  to="/"
  className="
    inline-flex items-center gap-2
    bg-white
    text-emerald-700
    px-4 py-2
    rounded-full
    shadow
    hover:bg-emerald-50
    active:scale-95
    transition
    font-medium
  "
>
  ← Kembali
</Link>


        <h1 className="text-2xl font-bold mt-2">
          {surah.namaLatin}
        </h1>

        <p className="text-emerald-100">
          {surah.arti} • {surah.jumlahAyat} ayat
        </p>
      </div>

      {/* AYAT */}
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {surah.ayat.map((ayat) => (
          <div
            key={ayat.nomorAyat}
            className="bg-white rounded-2xl p-5 shadow"
          >
            <p className="text-right text-3xl leading-loose mb-4">
              {ayat.teksArab}
            </p>

            <p className="text-gray-700 mb-3">
              <b>{ayat.nomorAyat}.</b> {ayat.teksIndonesia}
            </p>

            <audio controls className="w-full">
              <source src={ayat.audio["01"]} />
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}
