const LinkEsquina = ({link}) => {
  return (
    <a style={{
      position: "absolute",
      bottom: "10px",
      right: "10px",
      width: "100px",
      height: "1rem",
      display: "inline-block",
      // background: "blue"
    }}
      href={link}
      target={"_blank"}
      rel="noreferrer"
    >

    </a>
  );
}

export default LinkEsquina;