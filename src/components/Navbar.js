import React from "react";
function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}</nav>;
  const tags = links.map((link) => (
    <a key={link} href={"#" + link }>{link}</a>
  ))
  return <nav>{tags}</nav>;
}

export default NavBar;