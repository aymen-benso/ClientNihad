"use client"; 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import useLoginStore from "@/State";
import { Login } from "@/components/login";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { username, isLoggedIn, login, logout } = useLoginStore();

  const menuData = [
    {
      name: (
        <Link href="/">
          App
        </Link>
      ),
      icon: MapPinIcon,

      subSections: [
        {
          name: "industriel",
          subItems: ["gaz", "ele", "liq", "finale"],
        },
        {
          name: "transport",
          subItems: ["gaz", "ele", "liq" , "finale"],
        },
        {
          name: "residentiel",
          subItems: ["gaz", "ele", "liq" , "finale"],
        },
      ],
    },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>

        <div style={{ backgroundImage: `url('nihad.jpg')` }} className="bg-cover bg-center">
        {isLoggedIn ? (
          <div className="flex h-screen w-full bg-url('nihad.jpg') bg-cover bg-center">
            
              <div className="bg-white text-black w-1/8 p-4 flex flex-col">
                <div className="flex items-center justify-between mb-6 p-2 bg-gray-600 rounded-md opacity-90">
                  <img src="/logo.png" className="w-4 h-4" />
                  <h2 className="font-bold text-white font-sans p-2">EnerForcast</h2>
                </div>
                <nav className="flex-1 space-y-2">
                  {menuData.map((menuItem) => (
                    <div key={menuItem.name}>
                      <div className="flex items-center w-full px-4 py-2 rounded-md hover:bg-gray-200">
                        <menuItem.icon className="w-5 h-5 mr-2" />
                        <span>{menuItem.name}</span>
                      </div>
                      {menuItem.subSections.map((subSection) => (
                        <div key={subSection.name} className="ml-4">
                          <div className="text-gray-700 font-medium mt-2 mb-1">{subSection.name}</div>
                          {subSection.subItems.map((subItem) => (
                            <Link key={subItem} className="block px-4 py-2 rounded-md hover:bg-gray-200 ml-2" href={`/${subSection.name}/${subItem}`}>
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </nav>
                
              </div>
              <div className="flex-1 bg-cover bg-center bg-gradient-to-r from-gray-200 to-gray-400 p-4 overflow-y-auto opacity-90
              
              ">{children}</div>
              </div>
            ) : (
              <Login />
            )}
            
          
        </div>
      </body>
    </html>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
