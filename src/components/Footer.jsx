import React from "react";

function Footer() {
  const current = new Date();
  const year = current.getFullYear();
  return (
    <footer>
      <p>Created by: Kittu</p>
      <p>Copyrights:{year}</p>
    </footer>
  );
}

export default Footer;
