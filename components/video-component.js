const VideoComponent = ({ src, top, left, width, height }) => {
  return (
    <video style={{
      position: "absolute",
      left,
      top,
      width,
      height
    }}
      src={src}
      controls
    >

      <source src={src} type="video/mp4"></source>
    </video>
  );
}

export default VideoComponent;