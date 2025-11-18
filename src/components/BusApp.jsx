import React from "react";
import {
  BellIcon,
  UserCircleIcon,
  TicketIcon,
  IdentificationIcon,
  MapIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import TicketImg from "../assets/ticket.png";
import MetroImg from "../assets/metro.png";
import pmpmllog from "../assets/pmpml.png";
import bustick from "../assets/bustick.png";
import pass from "../assets/pass.png";
import right from "../assets/right.png";
import route from "../assets/route.png";
import bus from "../assets/bus.png";
import bell from "../assets/bell.png";
import profile from "../assets/profi.png";


import { useNavigate } from "react-router-dom";



const PmpmlLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="#E8F4F8" stroke="#333" strokeWidth="2" />
    <text x="50" y="58" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#333">PM</text>
  </svg>
);

const BusStopIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="white" stroke="currentColor" strokeWidth="2" />
    <path d="M8 8h8v8H8z" fill="currentColor" />
  </svg>
);

const TicketIconCustom = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FFD700">
    <rect x="4" y="8" width="16" height="8" rx="1" fill="#FFD700" />
    <line x1="4" y1="12" x2="20" y2="12" stroke="#333" strokeWidth="0.5" strokeDasharray="1,1" />
  </svg>
);

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-black relative pb-20">
      {/* Status Bar Simulation */}
      {/* <div className="bg-teal-700 px-4 py-1 flex justify-between items-center text-white text-xs">
        <span>3:38</span>
        <div className="flex gap-1 items-center">
          <span>📶</span>
          <span>📡</span>
          <span>🔋 56%</span>
        </div>
      </div> */}

      {/* Header */}
      <div className="flex items-center justify-between pr-4 py-1 bg-white border border-gray-200">
        <img
          src={pmpmllog}
          alt="PMPL Logo"
          className="w-25 "
        />
        <div className="flex gap-4">
          <button aria-label="Notifications" className="focus:outline-none">
            <img
              src={bell}
              alt="PMPL Logo"
              className="w-5 "
            />
          </button>
          <button aria-label="User Profile" className="focus:outline-none">
            <img
              src={profile}
              alt="PMPL Logo"
              className="w-7 bg-white "
            />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-2 mt-2 mx-2 bg-white rounded-md border border-gray-200 ">
        <div className="relative py-2">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="कुठे जायचं आहे?"
            className="w-full rounded-full text-black placeholder-gray-900 text-sm font-semibold  bg-gray-200 py-3 pl-11 pr-2 focus:outline-none"
          />

        </div>
      </div>

      {/* Main Options - Bus Ticket & Daily Pass */}
      <div className="px-1 mt-5 flex items-center justify-center gap-5">
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={() => navigate("/ticket-form")}
            className="bg-blue-100 rounded-lg w-40 h-16 flex items-center justify-center shadow-sm"
          >
            <div className="rounded-lg flex items-center justify-center">
              <img src={bustick} alt="bus Logo" className="w-6 h-6" />
            </div>
          </button>

          <span className="text-sm font-semibold text-black">Bus Ticket</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <button className="bg-blue-100 rounded-lg w-40 h-16 flex items-center justify-center shadow-sm">
            <div className="rounded-lg flex items-center justify-center">
              {/* <IdentificationIcon className="w-6 h-6 text-white" /> */}
              <img
                src={pass}
                alt="bus Logo"
                className="w-8 h-6 "
              />
            </div>
          </button>
          <span className="text-sm font-semibold text-black">Daily Pass</span>
        </div>
      </div>

      {/* Secondary Options Grid */}
      <div className="px-4 mt-7 grid grid-cols-4 gap-3">
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={() => navigate("/view-ticket")}
            className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center shadow-sm">
            <img
              src={TicketImg}
              alt="bus Logo"
              className="w-7 h-7 "
            />
          </button>
          <span className="text-sm font-semibold  text-black text-center leading-tight">View <br /> Ticket</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <button className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center shadow-sm">
            <img
              src={TicketImg}
              alt="bus Logo"
              className="w-7 h-7 "
            />
          </button>
          <span className="text-sm font-semibold text-black text-center leading-tight">View <br />Pass</span>
          {/* <span className="text-sm font-medium text-black text-center leading-tight"> Pass</span> */}
        </div>

        <div className="flex flex-col items-center gap-1">
          <button className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center shadow-sm">
            <img
              src={route}
              alt="bus Logo"
              className="w-7 h-7 "
            />
          </button>
          <span className="text-sm font-semibold text-black text-center leading-tight">Route <br /> Timetable</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <button className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center shadow-sm">
            <div className=" rounded-lg overflow-hidden">
              <img
                src={MetroImg}
                alt="bus Logo"
                className="w-15 h-15 bg-blue-100 object-cover "
              />
            </div>
          </button>
          <span className="text-sm font-semibold text-black text-center leading-tight">Metro <br /> Ticket</span>
        </div>
      </div>

      {/* Near Me Section */}
      <div className="px-4 mt-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-lg text-black">Near Me</h2>
          <button className="text-sm font-medium text-black underline">
            Show all
          </button>
        </div>

        {/* Bus Stop Card */}
        <div className="mt-4 border border-gray-200 rounded-md overflow-hidden bg-gray-200">
          <div className="flex items-center px-3 py-3 gap-3">
            <div className=" rounded-full p-2">
              <img
                src={bus}
                alt="bus Logo"
                className="w-5 h-5 "
              />
            </div>
            <span className="flex-1 text-sm font-medium text-black">
              Lakshminarayan
            </span>
            <span className="text-sm font-medium text-black">88 m</span>
            <img
              src={right}
              alt="bus Logo"
              className=" bg-white w-4 h-4 "
            />
          </div>

          <div className="bg-white text-center py-1 border-t border-b border-gray-300">
            <p className="text-xs text-gray-700">No upcoming buses at this stop.</p>
          </div>

          <button className="w-full py-2 text-center text-sm font-medium text-black">
            See More Buses
          </button>
        </div>
      </div>

      {/* Nearby Map Section */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-lg text-black mb-3">Nearby</h2>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <iframe
            title="Nearby Map"
            src="https://maps.google.com/maps?q=Mahalakshmi%20Lakshmi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-40"
            frameBorder="0"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-between items-center py-3 px-12">
        <button className="flex flex-col items-center text-black">
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs font-medium mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <LocationMarkerIcon className="w-6 h-6" />
          <span className="text-xs font-medium mt-1">Buses</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <QuestionMarkCircleIcon className="w-6 h-6" />
          <span className="text-xs font-medium mt-1">Help</span>
        </button>
      </nav>
    </div>
  );
}
