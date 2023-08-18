import {Layout} from "../components/Layout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {HiOutlineArrowLongRight} from "react-icons/hi2";
import {ImageCards} from "@/components/LandingPage/ImageCards";


const cardsInfo = [
    {
        title: "Descubre el Silabario Hiragana",
        description: "Sumérgete en el fascinante mundo del hiragana, el corazón de la escritura japonesa. Aprende los sonidos básicos del hiragana acompañados de sus equivalentes en romanji, facilitando tu comprensión y pronunciación. Interactúa con nuestros botones interactivos y refuerza tu conocimiento de las letras fundamentales.",
        image: "/Hiragana.jpg",
        link: "/hiragana-to-romanji"
    },
    {
        title: "Desafío de Traducción Hiragana-Español",
        description: "¿Estás listo para llevar tus habilidades al siguiente nivel? ¡Demuestra tu destreza traduciendo palabras en hiragana al español! Pon a prueba tus conocimientos en nuestro emocionante desafío de traducción y expande tu vocabulario japonés. Y enriquece tu comprensión del idioma.",
        image: "/Translate.jpeg",
        link: "/"
    }
]

export default function Home() {
  return (
      <Layout title={"Home"}>
          <div className={"flex flex-col justify-center items-center md:h-screen mt-12 max-md:mb-32 md:mt-0"}>
              <div className={"flex flex-col justify-center items-center md:w-6/12 text-center w-full"}>
                  <Image src={"/LearnJapanese.png"} alt={"Logo"} width={"300"} height={"300"} className={"object-contain"} />
                  <h1 className={"text-6xl font-bold text-red-700"}>¿Aceptas el desafío?</h1>
                  <p className={"text-3xl pt-2"}>
                      ¿Listo para sumergirte en una experiencia de aprendizaje única? ¡Únete ahora y domina el japonés de una vez por todas!
                  </p>
                  <Link href={"/hiragana-to-romanji"} className="mt-9 group relative h-12 w-48 overflow-hidden text-lg shadow flex justify-center items-center">
                      <div
                          className="absolute inset-0 w-3 bg-red-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                      <span className="relative dark:text-gray-400 group-hover:text-white">
                        ¡Aprende Japonés!
                        <HiOutlineArrowLongRight className="inline-block ml-2" />
                    </span>
                  </Link>
              </div>
          </div>
          <div className={"flex max-lg:flex-col flex-row justify-center items-center md:mx-5 mb-10 gap-3 md:mt-12"}>
              {cardsInfo.map((card, index) => (
                  <ImageCards key={index} title={card.title} description={card.description} image={card.image} link={card.link} />
              ))}
          </div>
      </Layout>
  )
}