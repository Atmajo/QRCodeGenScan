"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import QRCode from "qrcode";
import { useState } from "react";

export default function Home(): JSX.Element {
  let qrCode;
  
  const [value, setValue] = useState<string>("");
  const [qr, setQr] = useState<string>("");

  const generateQR = async () => {
    try {
      qrCode = await QRCode.toDataURL(value);
      setQr(qrCode);
      console.log(qrCode);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen">
      {qr && (
        <div>
          <Image src={qr} alt="QR Code" width={200} height={200} />
        </div>
      )}
      <div>
        <Label>Text</Label>
        <Input onChange={(e) => setValue(e.target.value)} />
      </div>
      <div>
        <Button onClick={generateQR}>Generate QR</Button>
      </div>
    </div>
  );
}
