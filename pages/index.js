import Head from 'next/head'
import Image from 'next/image'

import HTMLFlipBook from "react-pageflip";

import p1 from "../public/jpg/rdsm.jpg"
import p2 from "../public/jpg/rdsm2.jpg"
import p3 from "../public/jpg/rdsm3.jpg"
import p4 from "../public/jpg/rdsm4.jpg"
import p5 from "../public/jpg/rdsm5.jpg"
import p6 from "../public/jpg/rdsm6.jpg"
import p7 from "../public/jpg/rdsm7.jpg"
import p8 from "../public/jpg/rdsm8.jpg"
import p9 from "../public/jpg/rdsm9.jpg"
import p10 from "../public/jpg/rdsm10.jpg"
import p11 from "../public/jpg/rdsm11.jpg"
import p12 from "../public/jpg/rdsm12.jpg"
import p13 from "../public/jpg/rdsm13.jpg"
import p14 from "../public/jpg/rdsm14.jpg"
import p15 from "../public/jpg/rdsm15.jpg"
import p16 from "../public/jpg/rdsm16.jpg"
import p17 from "../public/jpg/rdsm17.jpg"
import p18 from "../public/jpg/rdsm18.jpg"
import p19 from "../public/jpg/rdsm19.jpg"
import p20 from "../public/jpg/rdsm20.jpg"
import p21 from "../public/jpg/rdsm21.jpg"
import p22 from "../public/jpg/rdsm22.jpg"
import p23 from "../public/jpg/rdsm23.jpg"
import p24 from "../public/jpg/rdsm24.jpg"
import p25 from "../public/jpg/rdsm25.jpg"
import p26 from "../public/jpg/rdsm26.jpg"
import p27 from "../public/jpg/rdsm27.jpg"
import p28 from "../public/jpg/rdsm28.jpg"
import p29 from "../public/jpg/rdsm29.jpg"
import p30 from "../public/jpg/rdsm30.jpg"
import p31 from "../public/jpg/rdsm31.jpg"
import p32 from "../public/jpg/rdsm32.jpg"
import p33 from "../public/jpg/rdsm33.jpg"
import p34 from "../public/jpg/rdsm34.jpg"
import p35 from "../public/jpg/rdsm35.jpg"
import p36 from "../public/jpg/rdsm36.jpg"

import sur from "../public/image/7.jpg"
import f1 from "../public/image/1.jpg"
import f6 from "../public/image/6.jpg"
import f13 from "../public/image/13.jpg"
import f14 from "../public/image/14.jpg"
import f16 from "../public/image/16.jpg"
import f19 from "../public/image/19.jpg"
import f24 from "../public/image/24.jpg"
import f27 from "../public/image/27.jpg"
import f30 from "../public/image/30.jpg"

import iglesia_mucutuy_editada from "../public/image/iglesia_mucutuy_editada.jpg"
import monumento_al_carro_mucutuyedit from "../public/image/monumento_al_carro_mucutuyedit.jpg"
import bueyes_san from "../public/image/bueyes_san.jpg"
import mapa_mucutuy from "../public/image/mapa_mucutuy.jpg"
import unnamed from "../public/image/unnamed_(2).jpg"

import LinkEsquina from '../components/link-esquina';
import ImageHover, { ImageGlass } from '../components/image-hover';
import VideoComponent from '../components/video-component';
import { useEffect, useRef } from 'react';

import useKeyPress from '../components/key-press'

export default function MyBook(props) {
  const flip = useRef();

  let cp = []
  for (let index = 0; index < 36; index++) {
    cp[index] = index;
  }

  const lPressed = useKeyPress('ArrowLeft');
  const rPressed = useKeyPress('ArrowRight');

  useEffect(() => {
    if(lPressed){
      flip.current.pageFlip().flipPrev()
    }
    if(rPressed){
      flip.current.pageFlip().flipNext()
    }
  }, [lPressed, rPressed])
   
  return (
    <div style={{ position: "fixed", display: "flex", flexDirection: "column", top: 0, left: 0, bottom: 0, right: 0, alignItems: "center", justifyContent: "center", maxWidth: "90%" }}>

      <Head>
        <title>Revista El Sur De Mérida Te Espera</title>
      </Head>

      <h1>Revista El Sur De Mérida Te Espera</h1>
      <div className='buttons'>
        <button onClick={(e) => {
          flip.current.pageFlip().flip(0)
        }}>
          Portada
        </button>
        <button onClick={(e) => {
          flip.current.pageFlip().flipPrev()
        }}>
          Anterior
        </button>
        <button onClick={(e) => {
          flip.current.pageFlip().flipNext()
        }}>
          Siguiente
        </button>
        <button onClick={(e) => {
          flip.current.pageFlip().flip(35)
        }}>
          Final
        </button>
      </div>
      <HTMLFlipBook ref={flip} width={640} height={512} showCover={true} mobileScrollSupport={false} >

        <div className="demoPage"><Image src={p1} /></div>
        <div className="demoPage"><Image src={p2} /></div>
        <div className="demoPage"><Image src={p3} /></div>
        <div className="demoPage"><Image src={p4} /></div>
        <div className="demoPage">
          <Image src={p5} />
          <LinkEsquina link={"http://destinopueblosdelsur.com"} />
          <ImageHover
            left="146px"
            top="20px"
            width="345px"
            height="280px"
            src={f1.src}
          />
        </div>
        <div className="demoPage"><Image src={p6} />
          <ImageHover
            left="323px"
            top="12.5px"
            width="304.5px"
            height="275.5px"
            src={iglesia_mucutuy_editada.src}
          /></div>
        <div className="demoPage"><Image src={p7} />
          <LinkEsquina link={"http://destinopueblosdelsur.com"} />
          <ImageHover
            left="426.5px"
            top="12.5px"
            width="201px"
            height="275.5px"
            src={monumento_al_carro_mucutuyedit.src}
          />
          <ImageHover
            left="12.5px"
            top="12.5px"
            width="408px"
            height="275.5px"
            src={f6.src}
          />
        </div>
        <div className="demoPage"><Image src={p8} /></div>
        <div className="demoPage">
          <Image src={p9} />
          <ImageHover
            left="42px"
            top="163px"
            width="355px"
            height="280px"
            src={sur.src}
          />
          <LinkEsquina link={"http://fundacionbigott.org"} />
        </div>
        <div className="demoPage"><Image src={p10} /></div>
        <div className="demoPage"><Image src={p11} />
          <ImageHover
            left="219.5px"
            top="12.5px"
            width="408px"
            height="280px"
            src={bueyes_san.src}
          />
        </div>
        <div className="demoPage"><Image src={p12} /></div>
        <div className="demoPage"><Image src={p13} /></div>
        <div className="demoPage"><Image src={p14} /></div>
        <div className="demoPage"><Image src={p15} />
          <ImageHover
            left="253.5px"
            top="22.5px"
            width="339px"
            height="267.5px"
            src={f13.src}
          />
        </div>
        <div className="demoPage"><Image src={p16} /></div>
        <div className="demoPage"><Image src={p17} /></div>
        <div className="demoPage"><Image src={p18} /></div>
        <div className="demoPage"><Image src={p19} />
          <ImageGlass
            left="172px"
            top="12.5px"
            width="455px"
            height="267.5px"
            src={f14.src}
          />
        </div>
        <div className="demoPage"><Image src={p20} />
          <ImageHover
            left="426.75px"
            top="12.5px"
            width="201px"
            height="267.5px"
            src={f16.src}
          />
        </div>
        <div className="demoPage"><Image src={p21} /></div>
        <div className="demoPage"><Image src={p22} /></div>
        <div className="demoPage"><Image src={p23} /></div>
        <div className="demoPage"><Image src={p24} />
          <ImageGlass
            left="12.5px"
            top="12.5px"
            width="351px"
            height="267.5px"
            src={mapa_mucutuy.src}
          />
        </div>
        <div className="demoPage"><Image src={p25} />
          <ImageGlass
            left="12.5px"
            top="294.2145px"
            width="201px"
            height="267.5px"
            src={f19.src}
          />
        </div>
        <div className="demoPage"><Image src={p26} /></div>
        <div className="demoPage"><Image src={p27} /></div>
        <div className="demoPage"><Image src={p28} /></div>
        <div className="demoPage"><Image src={p29} />
          <ImageHover
            left="371.75px"
            top="12.5px"
            width="255.75px"
            height="267.5px"
            src={unnamed.src}
          />
        </div>
        <div className="demoPage"><Image src={p30} />
          <ImageHover
            left="426.5px"
            top="294.2145px"
            width="200px"
            height="267.5px"
            src={f24.src}
          />
        </div>
        <div className="demoPage"><Image src={p31} /></div>
        <div className="demoPage"><Image src={p32} />
          <ImageHover
            left="12.5px"
            top="12.5px"
            width="304.5px"
            height="267.5px"
            src={f27.src}
          />
        </div>
        <div className="demoPage"><Image src={p33} />
          <ImageHover
            left="371.75px"
            top="12.5px"
            width="255.75px"
            height="267.5px"
            src={f30.src}
          />
        </div>
        <div className="demoPage"><Image src={p34} /></div>
        <div className="demoPage"><Image src={p35} />
          <VideoComponent
            left="219.5px"
            top="-10px"
            width="408px"
            height="275.5px"
            src={"https://neva.com.ve/video2.mp4"}
          />
        </div>
        <div className="demoPage"><Image src={p36} />

        </div>


      </HTMLFlipBook>

      <div className='pageList'>
        <ul>
          {cp.map(item => <li key={item*9}><button onClick={(e) => {
            flip.current.pageFlip().flip(item)
          }}>{(item + 1)}</button></li>)}
        </ul>
      </div>
    </div>
  );
}