import React from 'react';

import Layout from '../components/layout';

import stJospeh from '../images/st-joseph-hospital-logo.svg';
import fleetFeet from '../images/FF_Logo_Nashua_Color.png';
import conway from '../images/conway logo.png';
import chewies from '../images/Chewie Logo.jpg';
import prg from '../images/PRG Logo.png';
import haggertys from '../images/haggertys_cleaning_service.png';
import ridof from '../images/Ridof.jpg';
import ryder from '../images/Ryder.png';

const imageInfo = [
  {
    href: "https://stjosephhospital.com/",
    src: stJospeh,
    pxWidth: 300,
    alt: "St. Jospeh Hospital"
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
    pxWidth: 200,
    alt: "Conway Management"
  },
  {
    href: "https://www.fleetfeet.com/s/nashua/",
    src: fleetFeet,
    pxWidth: 300,
    alt: "Fleet Feet Nashua"
  },
  {
    src: haggertys,
    pxWidth: 300,
    alt: "Haggerty's Cleaning Service"
  },
  {
    href: "https://www.prgrugs.com/",
    src: prg,
    pxWidth: 200,
    alt: "PRG"
  },
  {
    href: "https://www.ridofjunkremoval.com/",
    src: ridof,
    pxWidth: 200,
    alt: "RIDOF Junk Removal"
  },
  {
    href: "https://www.ryderph.com/",
    src: ryder,
    pxWidth: 200,
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
    <h3>Thank You to Our 2022 Sponsors!</h3>
    <div id="sponsor-images">
      {imageInfo.map(i => {
        const image = <img src={i.src} key={i.alt} width={`${i.pxWidth}px`} alt={i.alt}/>;
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
