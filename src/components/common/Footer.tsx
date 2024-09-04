import { FaYoutube } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="p-14 w-full border-t-[1px] border-gray flex justify-center items-center flex-col relative">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex gap-4 items-center">
          <a href="" className="hover:scale-105 transition-transform">
            <FaFacebook className="w-8 h-8" />
          </a>
          <a href="" className="hover:scale-105 transition-transform">
            <FaInstagram className="w-8 h-8" />
          </a>
          <a href="" className="hover:scale-105 transition-transform">
            <FaYoutube className="w-8 h-8" />
          </a>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <strong className="uppercase font-bold bg-gradient-to-r from-[#754E16] via-[#FFF88C] to-[#754E16] text-transparent bg-clip-text">
            carrerero
          </strong>
          <h3 className="uppercase">La marca de los campeones</h3>
        </div>
      </div>

      <a className="text-gray absolute bottom-3 text-xs hover:scale-105 transition-transform">
        By Juan Carreón
      </a>
    </footer>
  );
};
