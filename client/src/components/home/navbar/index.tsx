import { Link } from "@heroui/react";
const Navbar = () => {
  return (
    <>
      <nav className="bg-primary p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl text-white font-bold">
            InvoiceGen
          </Link>
          <ul
            className={
              "md:flex space-x-6 absolute md:static  w-full md:w-auto left-0 top-16 md:top-0"
            }
          >
            <li className="p-2 md:p-0">
              <Link href="/" className="hover:underline text-white">
                Home
              </Link>
            </li>
            <li className="p-2 md:p-0">
              <Link href="/invoices" className="hover:underline text-white">
                Create
              </Link>
            </li>
            <li className="p-2 md:p-0">
              <Link href="" className="hover:underline text-white">
                Invoice History
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
