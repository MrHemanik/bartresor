import React, { ReactElement, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import YoutubeEmbed from "./youtubeEmbed"

interface Props { }

interface Props {
  children: React.ReactNode;
}


function CardElement({ children }: Props): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center w-full pb-10">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-6xl">
        <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-200 dark:bg-gray-800 rounded shadow">
          {children}
        </div>
      </div>
    </div>
  );
}
function BoxPreview(): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-100 dark:bg-gray-900 rounded shadow mt-5">
      <h2 className="mb-4 text-1xl md:text-2xl lg:text-3xl text-black dark:text-white">Bilder des Bartresors (Ohne Kompassrose)</h2>
      <div className="flex flex-col items-center justify-center w-full h-full max-w-6xl">
        <div className="flex flex-col items-center justify-center w-full h-full p-4">
          <div className="flex flex-row items-center justify-center w-full h-full">
            <table>
              <thead className=" text-black  dark:text-white text-center">
              <tr>
                <th>Vorne Offen</th>
                <th>Vorne Links</th>
                <th>Vorne Rechts</th>
              </tr>
              </thead>
              <tbody className=" text-black  dark:text-white text-center">
              <tr>
                <td><StaticImage src="../images/box1.png" alt="Box Open" width={1500} /></td>
                <td><StaticImage src="../images/box2.png" alt="Box Front Left" width={1500} /></td>
                <td><StaticImage src="../images/box3.png" alt="Box Front Right" width={1500} /></td>
              </tr>
              <tr>
                <td></td>
                <td>Hinten Links (Mit Kompassrose)</td>
                <td>Unten Rechts</td>
              </tr>
              <tr>
                <td></td>
                <td><StaticImage src="../images/box4.png" alt="BoxBack Back Left" width={1500}/></td>
                <td><StaticImage src="../images/box6.png" alt="BoxBack Back Left" width={1500}/></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function BoxSideviews(): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-100 dark:bg-gray-900 rounded shadow mt-5">
      <h2 className="mb-4 text-1xl md:text-2xl lg:text-3xl text-black dark:text-white">Seitenbilder des Bartresors</h2>
      <div className="flex flex-col items-center justify-center w-full h-full max-w-6xl">
        <div className="flex flex-col items-center justify-center w-full h-full p-4">
          <div className="flex flex-row items-center justify-center w-full h-full">
            <table>
            <thead className=" text-black  dark:text-white text-center">
              <tr>
                <th>Oben</th>
                <th>Unten</th>
                <th>Links</th>
                <th>Rechts</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><StaticImage src="../images/boxSide_top.png" alt="Boxside Topview" width={1500}/></td>
                <td><StaticImage src="../images/boxSide_bottom.png" alt="Boxside Bottomview" width={1500} /></td>
                <td><StaticImage src="../images/boxSide_left.png" alt="Boxside Leftview" width={1500} /></td>
                <td><StaticImage src="../images/boxSide_right.png" alt="Boxside Rightview" width={1500} /></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full">
            <table>
            <thead className=" text-black  dark:text-white text-center">
              <tr>
                <th>Vorne</th>
                <th>Hinten (Geschlossen)</th>
                <th>Hinten (Offen)</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><StaticImage src="../images/boxSide_front.png" alt="Boxside Frontview" width={1500} /></td>
                <td><StaticImage src="../images/boxSide_back_close.png" alt="Boxside Backview" width={1500}/></td>
                <td><StaticImage src="../images/boxSide_back_open.png" alt="Boxside Backview" width={1500}/></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}






function Index(_props: Props): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <>

      <div className="bg-white dark:bg-gray-700">
        <div className="flex flex-col items-center justify-center w-full h-screen mb-10 bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center w-full h-full max-w-6xl">
            <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-200 dark:bg-gray-800 rounded shadow">
              <h1 className="mb-4 text-7xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight text-black  dark:text-white">Bartresor</h1>
              <div className="flex-grow">
                <StaticImage src="../images/box5.png" alt="Puzzlebox" className="h-full w-full" width={600} height={600} />
              </div>
              <div className="my-4 text-1xl md:text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 text-center">
                Eine intelligente Puzzle-Box für Bars, entwickelt im Rahmen des "Mikrocontroller Programmierung"-Moduls an der Hochschule Flensburg
              </div>
            </div>
          </div>
        </div>
        <CardElement>
          <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-black  dark:text-white">Kurzes Vorstellungsvideo</h1>
          <YoutubeEmbed embedId="Suc7tpUJTD8" />
        </CardElement>
        <CardElement>
          <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-black  dark:text-white">Was ist der Bartresor?</h1>
            <span className="text-lg text-gray-800 dark:text-gray-200 text-center">
            Das "Bartresor"-Projekt, welches im Rahmen des Mikrocontroller-Moduls im Masterstudiengang Angewandte Informatik an der Hochschule Flensburg entstanden ist, präsentiert eine faszinierende Symbiose aus Escape-Room-Spielen und hochmoderner Mikrocontroller-Technologie. Mit besonderem Augenmerk auf Barumgebungen entwickelt, eröffnet dieses innovative Puzzle-Szenario eine völlig neue Dimension der Unterhaltung.
            <br/><br/>Die anvisierte Zielgruppe des "Bartresors" erstreckt sich über Personen, die in Bars nach ansprechenden Unterhaltungsoptionen suchen. Der Fokus des Projekts liegt dabei auf der Förderung sozialer Interaktion und Gruppenerlebnissen. Insbesondere Erwachsene, die nach einer avantgardistischen Alternative zu herkömmlichen Freizeitaktivitäten suchen, finden im "Bartresor" nicht nur eine unterhaltsame Abwechslung, sondern auch eine Möglichkeit zur Stärkung von Teamarbeit und Förderung von Problemlösungsfähigkeiten. Die geschickte Gestaltung des Projekts schafft eine entspannte Umgebung, die informelle Gespräche und Networking fördert.
            <br/><br/>Ein herausragendes Merkmal des "Bartresors" im Vergleich zu traditionellen "Escape Room"-Spielen ist die Integration von Mikrocontrollern. Die Verwendung sensorbasierter Technologie in Verbindung mit raffinierten Rätseln verleiht dem Spielerlebnis eine einzigartige Dimension. Der klare Spielverlauf des "Bartresors" erfolgt nach dem Einstecken einer Karte. Unterschiedliche Rätsel, die von Touchsensoren über akustische Elemente bis zur Neigung der Box reichen, müssen gemeistert werden. Bei erfolgreicher Bewältigung öffnet sich der Tresor, und die Spieler werden mit einer wohlverdienten Belohnung überrascht.
            <br/><br/>Die Integration von Mikrocontrollern ermöglicht nicht nur eine technologisch anspruchsvolle Spielerfahrung, sondern bietet auch eine unterhaltsame Möglichkeit für Gruppen, ihre Teamfähigkeiten zu stärken. Die Anpassbarkeit der Herausforderungen an die individuellen Fähigkeiten der Teilnehmer trägt zur breiten Akzeptanz und Teilnahme an dem Projekt bei.
            <br/><br/>Zusammenfassend trägt das "Bartresor"-Projekt nicht nur zur Unterhaltung in Barumgebungen bei, sondern fungiert auch als Wegbereiter für die Verschmelzung von Technologie und sozialen Erlebnissen. Die Kombination aus Innovation, Bildung und Unterhaltung macht den "Bartresor" zu einem wegweisenden Projekt im Bereich der angewandten Informatik, welches nicht nur die technologische Expertise fördert, sondern auch einen bedeutenden Beitrag zur zeitgemäßen Freizeitgestaltung leistet. 
            <br/><br/>
          </span>
        </CardElement>
        
        <CardElement>
          <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-black  dark:text-white">Kurze Demonstration der einfachen Schwierigkeit</h1>
          <YoutubeEmbed embedId="8OfQSVdoF7I" />
        </CardElement>
        <CardElement>
          <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-black  dark:text-white">Bilder</h1>
          <div className=" text-gray-800 dark:text-gray-200">
            Eine kleine Galerie mit Bildern des Bartresors
          </div>
          <BoxPreview/>
          <BoxSideviews/>
        </CardElement>
        

      </div>
    </>
  )
}

export default Index