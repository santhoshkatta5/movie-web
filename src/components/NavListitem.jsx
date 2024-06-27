import React from "react";
import './navListitem.css';

function NavListitem({nav}) {
  return (
<li><a href={nav.link}>{nav.name}</a></li>
  );
}

export default NavListitem;
