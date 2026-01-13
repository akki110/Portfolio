import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center py-8 bg-indigo-950">
      <div className="w-11/12 flex flex-col md:flex-row justify-between items-center gap-5">
        <p className="text-md font-medium text-white flex items-center gap-2">
          Made with <Heart className="text-red-500" size={18} /> by Akshar Patel
        </p>
        <p className="text-md font-medium text-white">
          © {new Date().getFullYear()} Aksh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
