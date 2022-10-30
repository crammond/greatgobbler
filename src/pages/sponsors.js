import React, { Component } from 'react';

import Layout from '../components/layout';

import stJospeh from '../images/st-joseph-hospital-logo.svg';
import fleetFeet from '../images/FF_Logo_Nashua_Color.png';
import gateCityFarms from '../images/Gate City Farm Logo.png';
import conway from '../images/conway logo.png';
import chewies from '../images/Chewie Logo.jpg';
import prg from '../images/PRG Logo.png';
import gagnons from '../images/Gagnons.png';
import haggertys from '../images/haggertys_cleaning_service.png';
import ridof from '../images/Ridof.jpg';
import ryder from '../images/Ryder.png';
import grenier from '../images/Grenier.jpg';
import iM from '../images/iM.png';
import foxPestControl  from '../images/fox_pest_control.svg';

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
    href: "https://fox-pest.com/manchester-nh/",
    src: foxPestControl,
    pxWidth: 200,
    alt: "Fox Pest Control"
  },
  {
    href: "https://www.gagnonelectricservice.com/",
    src: gagnons,
    pxWidth: 200,
    alt: "Gagnon's Electrical Service"
  },
  {
    href: "https://www.gatecityfarms.com/",
    src: gateCityFarms,
    pxWidth: 200,
    alt: "Gate City Farms"
  },
  {
    href: "mailto:ArtiePI@outlook.com",
    src: grenier,
    pxWidth: 200,
    alt: "Grenier Investigations"
  },
  {
    src: haggertys,
    pxWidth: 300,
    alt: "Haggerty's Cleaning Service"
  },
  {
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    src: iM,
    pxWidth: 200,
    alt: "Ian McAfee Incorporated"
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

class Sponsors extends Component {
  render() {
    return (
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
            const image = <img src={i.src} width={`${i.pxWidth}px`} alt={i.alt}/>;
            return i.href ? (
              <a href={i.href} target="_blank" rel="noopener noreferrer">
                {image}
              </a>
            ) : image;
          })}
        </div>
      </Layout>
    )
  }
}

export default Sponsors;
