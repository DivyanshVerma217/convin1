import React from "react";

function Header() {
  return (
    <h1 className="text-center nav-header my-5 p-3">
      Welcome{" "}
      <span className="bg-dark p-2 rounded ">
        <img
          src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/606c5fcd82475240c607a79f_LOGO.svg"
          alt="logo"
        />
      </span>{" "}
      Users!!
    </h1>
  );
}

export default Header;
