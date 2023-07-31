import LogoutButton from "./LogoutButton";

const Header = () => {

  let styles = {
    /* textAlign: "center", */
    fontSize: "2rem",
    fontWeight: "bold",
    textDecoration: "underline solid",
    position: "relative",
    display: "flex",
    alignItems: "center"
  };

  return (
    <div>
      <div style={styles}>
        <img src="/logo512.png" style={{maxHeight: "3rem", marginRight: 10}} />
        My Music Mix
      </div>
    </div>
  );
};

export default Header;
