import Image from "next/image";
import logo from "@/app/icon.png";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="h-45 mt-4">
        <div className="flex items-center">
          <div className="relative h-15 w-15">
            <Image
              src={logo}
              fill
              className="object-contain"
              alt="Footer Logo"
            ></Image>
          </div>
          <h1 className="text-blue-500 font-medium">
            Nuero <span className="text-black">Cademy</span>
          </h1>
        </div>
        <div className="flex mx-3">
          <div className="w-[50%]">
            <div className="flex gap-1 items-center justify-center text-gray-500 mt-3">
              <MapPin />
              <p className="text-xs">
                H-91, Ground Floor, Sec-77, Noida, Uttar Pradesh - 201301.
              </p>
            </div>

            <div className="flex gap-1 items-center justify-left text-gray-500 mt-3">
              <Mail size={14} />
              <p className="text-xs">help@nuerocademy.in</p>
            </div>

            <div className="flex gap-1 items-center justify-left text-gray-500 mt-3">
              <Phone size={14} />
              <p className="text-xs">+91 80411 58411</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
