import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="text-sm bg-gray-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-24">
      {/* Top */}
      <div className="flex justify-between gap-24">
        {/* Left */}
        <div className="w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <p>
            3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
            States
          </p>
          <span className="font-semibold">hello@lamacommerce.dev</span>
          <span className="font-semibold">+1 234 567 890</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="facebook" width={16} height={16} />
            <Image
              src="/instagram.png"
              alt="instagram"
              width={16}
              height={16}
            />
            <Image src="/youtube.png" alt="youtube" width={16} height={16} />
            <Image
              src="/pinterest.png"
              alt="pinterest"
              width={16}
              height={16}
            />
            <Image src="/facebook.png" alt="facebook" width={16} height={16} />
          </div>
        </div>
        {/* Center  */}
        <div className="w-1/2 hidden lg:flex"></div>
        {/* Right */}
        <div className="w-1/4"></div>
      </div>
      {/* Bottom */}
      <div></div>
    </div>
  );
}

export default Footer;
