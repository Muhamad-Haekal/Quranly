import { Link } from "react-router-dom";

export default function SurahCard({ surah }) {
  return (
    <Link
      to={`/surah/${surah.nomor}`}
      className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition block"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-lg">
            {surah.nomor}. {surah.namaLatin}
          </h2>
          <p className="text-gray-500 text-sm">
            {surah.arti} • {surah.jumlahAyat} ayat
          </p>
        </div>

        <div className="text-2xl font-bold text-emerald-600">
          {surah.nama}
        </div>
      </div>
    </Link>
  );
}
