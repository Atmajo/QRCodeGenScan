"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  
  return (
    <div className="absolute flex top-0 w-screen justify-between items-center p-2">
      <h1>All QR</h1>
      <Link href={`${pathname === "/" ? "/qrscanner" : "/"}`}>
        <Button>Qr Scanner</Button>
      </Link>
    </div>
  );
};

export default Header;
