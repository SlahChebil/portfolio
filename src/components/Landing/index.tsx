import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div className="flex gap-6 items-center">

      <Image
        className="rounded-full border-4 border-[#C9FD74]"
        width={200}
        height={200}
        src="/profile.png"
        alt="Picture of the author"
      />
      <div>
        <h1>
            <span className="text-2xl font-semibold">👋 Heyy, I'm Slah</span><br></br>
            It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </h1>
      </div>
    </div>
  );
};

export default index;
