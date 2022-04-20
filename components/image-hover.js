import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";


const ImageHover = ({top,left,width,height,src}) => {
  return  <div style={{
    position: "absolute",
    left,
    top,
    width,
    height
  }}>
    <SideBySideMagnifier  imageSrc={src} switchSides largeImageSrc={src} alwaysInPlace={true} />

  </div> ;
}

export const ImageGlass = ({top,left,width,height,src}) => {
  return  <div style={{
    position: "absolute",
    left,
    top,
    width,
    height
  }}>
    <GlassMagnifier  imageSrc={src}   />

  </div> ;
}
 
export default ImageHover;