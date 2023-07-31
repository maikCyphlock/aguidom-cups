import Image from "next/image";
import AtroposCard from "./components/atroposCard";
import Inscriptions from "./components/Inscriptions";
import Footer from "./components/Footer";
import { LinearCard } from "./components/LinearCard";
export default function Home() {
  return (
    <div className="px-2 bg-gradient-to-tr from-transparent to-indigo-950/20">
      <section className="container mx-auto ">
        <AtroposCard />
        <section className="grid items-center max-w-5xl grid-cols-1 mx-auto mb-12 md:gap-8 lg:grid-cols-3">
          <LinearCard title={"¿qué es la copa Aguidom?"} className="items-center self-stretch col-span-2 mb-12 justify-self-center">
            <section className="flex flex-col gap-2 ">
              <h1 className="text-2xl font-bold text-blue-100">La <span className="text-yellow-300 ">copa Aguidom</span>  es una competencia de atletismo para niños organizada por el Club Aguidom. </h1>
              <p className="font-light">La competencia se lleva a cabo cada año en el estadio de futbol</p><p className="font-light">La competencia está abierta a niños de todas las edades y niveles de habilidad. </p><p className="font-light">Hay eventos para correr, saltar y lanzar. Los ganadores de cada evento reciben una medalla. La Copa Aguidom es una gran manera para que los niños se diviertan, hagan ejercicio y compitan con otros niños de su edad.</p>
            </section>
          </LinearCard>
          <LinearCard title={"a tener en cuenta"} className="items-center self-stretch w-full justify-self-center">
            <section className="flex flex-col items-start w-full">
              <h3 className="text-2xl font-thin text-blue-100">Inscripción</h3>
              <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-4xl font-extrabold">$5</span>
                <span className="text-gray-500 dark:text-gray-400">/persona</span>
              </div>
              <h3 className="text-2xl font-thin text-blue-100">
                Edad
              </h3>
              <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-4xl font-extrabold">5 - 14</span>
                <span className="text-gray-500 dark:text-gray-400">Años</span>
              </div>

            </section>
          </LinearCard>
        </section>
        <Inscriptions />
        <Footer />
      </section>
    </div>
  );
}
