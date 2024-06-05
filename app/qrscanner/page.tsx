"use client";

import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect, useState } from "react";

const page = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: 250,
        fps: 5,
      },
      true
    );

    scanner.render(success, error);

    function success(result: any) {
      scanner.clear();
      setScanResult(result);
    }

    function error(error: any) {
      console.error(error);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen">
      <h1>Scanning in Progress :</h1>
      {scanResult ? (
        <div>
          Result {":"} <a href={`https://${scanResult}`}>{scanResult}</a>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
};

export default page;
