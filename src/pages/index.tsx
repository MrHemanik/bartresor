import React, { ReactElement, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import DemoVideoShort from "../videos/DemoVideoShort.mp4"
import DemoVideoLong from "../videos/DemoVideoShort.mp4"

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
      <h2 className="mb-4 text-1xl md:text-2xl lg:text-3xl text-black dark:text-white">Seitenbilder des Bartresors</h2>
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
              <tbody>
              <tr>
                <td><StaticImage src="../images/box1.png" alt="Box Open" width={1500} /></td>
                <td><StaticImage src="../images/box2.png" alt="Box Open" width={1500} /></td>
                <td><StaticImage src="../images/box3.png" alt="Box Open" width={1500} /></td>
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
                <th>Vorne</th>
                <th>Hinten (Offen)</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><StaticImage src="../images/boxSide_top.png" alt="Boxside Topview" width={1500}/></td>
                <td><StaticImage src="../images/boxSide_bottom.png" alt="Boxside Bottomview" width={1500} /></td>
                <td><StaticImage src="../images/boxSide_left.png" alt="Boxside Leftview" width={1500} /></td>
                <td><StaticImage src="../images/boxSide_right.png" alt="Boxside Rightview" width={1500} /></td>
                <td><StaticImage src="../images/boxSide_front.png" alt="Boxside Frontview" width={1500} /></td>
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
              <div className="my-4 text-1xl md:text-2xl lg:text-3xl text-gray-800 dark:text-gray-200">
                Cooler einleitener Satz, der viel aussagt. (WOW! Bartresor!) Der Text kann mehr werden und noch immer cool sein!
              </div>
            </div>
          </div>
        </div>
        <CardElement>
          <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-black  dark:text-white">Was ist der Bartresor?</h1>
          <div className="text-gray-800 dark:text-gray-200">
            Bartresor ist ein simpler Prototyp für eine Puzzlebox, gebaut für ein Bar-Setting.
          </div>
        </CardElement>
        <CardElement>
          <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-black  dark:text-white">Demovideo</h1>
          <div className="mb-4 text-gray-800 dark:text-gray-200">
            Hier ist ein tolles Video, das den Bartresor in Aktion zeigt.
          </div>
          <video controls>
            <source src={DemoVideoShort} type="video/mp4" />
          </video>
        </CardElement>
        <CardElement>
          <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-black  dark:text-white">Bilder</h1>
          <div className=" text-gray-800 dark:text-gray-200">
            Ganz viele coole Bilder!
          </div>
          <BoxPreview/>
          <BoxSideviews/>
        </CardElement>
        <CardElement>
          <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-black  dark:text-white">Langes Demovideo</h1>
          <div className="mb-4 text-gray-800 dark:text-gray-200">
            Super cooles langes video!
          </div>
          <video controls>
            <source src={DemoVideoLong} type="video/mp4" />
          </video>
        </CardElement>

      </div>
    </>
  )
}

export default Index