import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "React & Next.js",
          "React Native Developer",
          "Express.js & Node.js",
          "PostgreSQL & Prisma",
          "Supabase",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
