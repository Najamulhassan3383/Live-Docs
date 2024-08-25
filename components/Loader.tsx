import Image from "next/image";
import React from "react";

function Loader() {
  return (
    <div className="loader">
      <Image
        src="/assets/icons/loader.svg"
        alt="logo"
        width={30}
        height={30}
        className="animate-spin"
      />
      Loading...
    </div>
  );
}

export default Loader;
