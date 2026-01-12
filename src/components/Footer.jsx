import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-8 py-10 md:py-16 bg-gradient-to-br from-indigo-950 to-purple-950">
      <Image src="/images/logo.webp" alt="logo" width={100} height={100} />
      <ul className="flex flex-row justify-center text-white gap-8">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <p className="text-md font-medium text-white">
        © {new Date().getFullYear()} Aksh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
