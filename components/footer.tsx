import React from "react"
import Link from "next/link"
import Image from "next/image";

const Footer = () => {
    return (
// Wrap your content and footer in a main wrapper


  <footer className="bg-[#9b577a] text-white p-5 w-full text-center ">
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-4">
      

      {/* Links Section */}
      <div className="flex justify-center items-center flex-col md:flex-row md:justify-center md:items-center gap-4 mb-4 md:mb-0">
        <Link href="/about" className="flex items-center justify-center m-2 p-3 border-4 border-custom-purple rounded-[5px] bg-gray-600 w-40 h-14">
        <Image src="/Github.svg" alt="Github Logo" width={30} height={30} />
        </Link>
        <Link href="/about" className="flex items-center justify-center m-2 p-3 border-4 border-custom-purple rounded-[5px] bg-black w-40 h-14">
        <Image src="/Discord.svg" alt="Discord Logo" width={30} height={30} />
        </Link>
        <Link href="/about" className="flex items-center justify-center m-2 p-3 border-4 border-custom-purple rounded-[5px] bg-blue-500 w-40 h-14">
        <Image src="/LinkedIn.svg" alt="LinkedIn Logo" width={30} height={30} />
        </Link>
      </div>


    </div>

    {/* Footer Bottom Section */}
    <div className="text-center py-4 mt-8">
      <p className="text-xl">
        &copy; {new Date().getFullYear()} Iqra. All rights reserved.
      </p>
    </div>
  </footer>


);
}

export default Footer;