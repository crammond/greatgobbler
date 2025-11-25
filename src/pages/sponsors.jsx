import React from 'react';

import Layout from '../components/layout';

import stJospeh from '../images/st-joseph-hospital-logo.svg';
import fleetFeet from '../images/FF_Logo_Nashua_Color.png';
import conway from '../images/conway logo.png';
import chewies from '../images/Chewies_Playland_LLC.png';
import prg from '../images/PRG Logo.png';
import joesStateFarm from '../images/state_farm_joe_roberts_agency.jpg';
import ridof from '../images/Ridof.jpg';
import ryder from '../images/Ryder.png';
import gateCitySportsMedicine from '../images/GATE_CITY_SPORTS_MEDICINE.png';
import mcCartyElectricSolutions from '../images/McCarty_Electric_Solutions.png';
import perezWrestlingRoom from '../images/PEREZ_WRESTLING_ROOM.png';
import centerForDentalExcellence from '../images/CENTER_FOR_DENTAL_EXCELLENCE.jpg';
import foxPestControl from '../images/fox_pest_control.svg';
import guessingGamesLogo from '../images/GuessingGamesLogo.png'

const imageInfo = [
  {
    href: "https://stjosephhospital.com/",
    src: stJospeh,
    pxWidth: 900,
    alt: "St. Joseph Hospital"
  },
  {
    href: "https://nashuadental.com/",
    src: centerForDentalExcellence,
    pxWidth: 400,
    alt: "Center For Dental Excellence"
  },
  {
    href: "https://www.chewiesplayland.com/",
    src: chewies,
    pxWidth: 400,
    alt: "Chewie's Playland"
  },
  {
    href: "https://conwaymgmt.com/",
    src: conway,
    pxWidth: 400,
    alt: "Conway Management"
  },
  {
    href: "https://www.fleetfeet.com/s/nashua/",
    src: fleetFeet,
    pxWidth: 400,
    alt: "Fleet Feet Nashua"
  },
  {
    href: "https://fox-pest.com/",
    src: foxPestControl,
    pxWidth: 400,
    alt: "Fox Pest Control"
  },
  {
    href: 'https://gatecitysportsmedicine.com/',
    src: gateCitySportsMedicine,
    pxWidth: 300,
    alt: "Gate City Sports Management"
  },
  {
    href: 'https://guessinggames.com/',
    src: guessingGamesLogo,
    pxWidth: 400,
    alt: "Guessing Games",
    style: {
      filter: 'brightness(0) saturate(100%)'
    }
  },
  {
    href: 'https://joerobertsinsurance.com/',
    src: joesStateFarm,
    pxWidth: 300,
    alt: "Joe Robert's Agency — State Farm"
  },
  {
    href: "https://www.mccartyelectricsolutions.com/",
    src: mcCartyElectricSolutions,
    pxWidth: 400,
    alt: "McCarty's Electric Solutions"
  },
  {
    href: "https://www.instagram.com/perezwrestlingroom/",
    src: perezWrestlingRoom,
    pxWidth: 400,
    alt: "Perez Wrestling Room"
  },
  {
    href: "https://www.prgrugs.com/",
    src: prg,
    pxWidth: 400,
    alt: "PRG"
  },
  {
    href: "https://www.ridofjunkremoval.com/",
    src: ridof,
    pxWidth: 400,
    alt: "RIDOF Junk Removal"
  },
  {
    href: "https://www.ryderph.com/",
    src: ryder,
    pxWidth: 400,
    alt: "Ryder Plumping & Heating"
  }
]

const Sponsors = () => (
  <Layout title="Sponsors">
    <h2>Sponsors</h2>
    <h3>Want to become a Sponsor?</h3>
    <p>
      We are incredibly grateful for our generous sponsors who make this yearly tradition possible. If interested in sponsoring, please email Shane at gagnonsh@nashua.edu for more information.
    </p>
    <h3>Why Sponsor?</h3>
    <p>
      Your sponsorship benefits both the Nashua High School North and South Boys’ and Girls’ Cross Country
      and Track programs. These teams keep students active, strive for academic excellence,
      and promote community service.
    </p>
    <h3>Thank You to Our 2025 Sponsors!</h3>
    <div id="sponsor-images">
      {imageInfo.map(i => {
        const image = <img style={i.style} src={i.src} key={i.alt} width={`${i.pxWidth}px`} alt={i.alt}/>;
        return i.href ? (
          <a href={i.href} key={i.alt} target="_blank" rel="noopener noreferrer">
            {image}
          </a>
        ) : image;
      })}
    </div>
  </Layout>
)

export default Sponsors;
