"use client";
import React, { useState } from "react";
import Link from "next/link";
import DropdownMenu from "@/components/DropdownMenu";

function Navbar() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "User-List", link: "/user-list" },
    { name: "Register", link: "/users/register" },
    { name: "Login", link: "/" },
  ];
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-teal-800 text-white shadow">
        <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-16 lg:max-w-7xl">
          <div>
            <div className="flex items-center justify-between py-3 md:block md:py-5">
              <Link href="/" className="flex items-center space-x-3">
                <h2 className="text-2xl font-bold text-white">NEXT JS</h2>
                <span>🚀 Acme Rockets</span>
              </Link>
              <div className="md:hidden">
                <button
                  className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {Links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.link}
                      className="duration-500 hover:text-orange-200 "
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <ul className="items-center justify-center space-y-8   md:hidden">
                  <li>
                    <Link
                      className="  text-stone-50 hover:text-red-600"
                      href="/users"
                    >
                      Users
                    </Link>
                  </li>

                  <li>
                    <Link
                      className=" text-stone-50 hover:text-red-600"
                      href="/employees"
                    >
                      Employees
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-stone-50 hover:text-red-600"
                      href="/movies"
                    >
                      Movies
                    </Link>
                  </li>
                </ul>
                <li className="hidden h-14 w-24 items-center md:block ">
                  <DropdownMenu />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
