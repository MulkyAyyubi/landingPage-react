import { englishCamp, kodeinClub, tahfidzQuran, kajianIslam, kodein } from "../assets"
function Content() {
  return (
    <div className="flex flex-wrap p-5 gap-5">
      <section className="flex-[2] min-w-[300px]">
        <div className="bg-white border border-white rounded-md p-5 mt-5 shadow">
          <h2 className="text-4xl font-bold mb-3 text-blue-400">English Camp</h2>
          <img src={englishCamp} className="w-full h-auto mb-[10px]" alt="English Camp"></img>
          <p className="text-lg  leading-6">
            We have a special english program in our school, experiencing Kampung Inggris Pare for two months. A place to learn deeper about the english language and how to start a conversation.
          </p>
        </div>

        <div className="bg-white border border-white rounded-md p-5 mt-5 shadow">
          <h2 className="text-4xl mb-3 font-bold text-blue-400">Kodein Club</h2>
          <img src={kodeinClub} className="w-full h-auto mb-[10px]" alt="Kodein Club"></img>
          <p className="text-lg leading-6">
            The opportunity to study deeper and further about your skills in IT. By attending The Kodein Club, you will earn more knowledge about either multimedia or programming. 
          </p>
        </div>

        <div className="bg-white border border-white rounded-md p-5 mt-5 shadow">
          <h2 className="text-4xl mb-3 font-bold text-blue-400">Quran Camp</h2>
          <h3 className="text-xl font-bold text-orange-400">Tahfidz Quran</h3>
          <img src={tahfidzQuran} className="w-full h-auto mb-[10px]" alt="Tahfidz Quran"></img>
          <p className="text-lg leading-6 mb-14">
            Other than chasing for success in the future, we also have time to memorize the Al-Quran every after praying Subuh and Maghrib.
          </p>

          <h3 className="text-xl font-bold text-orange-400">Kajian Islam</h3>
          <img src={kajianIslam} className="w-full h-auto mb-[10px]" alt="Kajian Islam"></img>
          <p className="text-lg leading-6">
            Not just memorizing, we also listen to Dakwah or stories about Islam every Wednesday which is usually brought by our teachers.
          </p>
        </div>
      </section>

      <aside className="flex-[1] min-w-[300px]">
        <div className="bg-white border border-white rounded-md p-5 mt-5 shadow">
          <h2 className="text-4xl mb-3 font-bold text-blue-400">Sekolah Developer Indonesia</h2>
          <img src={kodein} className="w-full h-auto mb-[10px]" alt="Sekolah Developer Indonesia"></img>
          <p className="text-xl font-bold leading-6 mb-5">Informasi Lainnya</p>
          <p className="text-lg leading-6 mb-5">Harvest City, Jl. Orchid Raya A, Ragemanunggal, Setu, Bekasi Regency, West Java 17320</p>
          <p className="text-lg leading-6">08-000-111-222</p>
        </div>
      </aside>
    </div>
  )
}

export default Content