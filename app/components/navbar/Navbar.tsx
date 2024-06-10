import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-6 flex justify-between items-center">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="DjangoBnb" width={180} height={38} />
          </Link>
         
        </div>
        <div className="flex space-x-6">
         Search Filteradf
          </div>
          <div className="flex items-center space-x-6">
          Add property - User nav
        </div>
       

     </div>
  </nav>
  )
  

}
