// src/components/TicketDisplay.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/pmpml.png";
import { QrCode } from "lucide-react";
import { X } from "lucide-react";

const TicketDisplay = ({ ticketData, onReset }) => {
    const [timeLeft, setTimeLeft] = useState(3300); // 2 hours countdown

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timerId = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearInterval(timerId);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, "0")}:${m
            .toString()
            .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    const now = new Date();
    const validUntil = new Date(now.getTime() + 2 * 60 * 60 * 1000);

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "short" });
        const year = date.getFullYear();
        const time = date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        }).toUpperCase();
        return `${day} ${month}, ${year} | ${time}`;
    };


    const generateTicketNumber = () => {
        // const now = new Date();

        // // First 10 digits from date + time (YYMMDDHHMM)
        // const datePart = now.toISOString().slice(2, 10).replace(/-/g, ""); // YYMMDD
        // const timePart = now.toTimeString().slice(0, 5).replace(/:/g, ""); // HHMM
        // const numericPart = `${datePart}${timePart}`; // 10 digits

        // // Last 6 random uppercase letters
        // const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // let randomChars = "";
        // for (let i = 0; i < 6; i++) {
        //     randomChars += chars.charAt(Math.floor(Math.random() * chars.length));
        // }

        // return `${numericPart}${randomChars}`;
        return '2508231654I049BE'; // fixed for demo
    };

    return (
        <>
            {/* Header Bar with buttons */}
            <div className="flex justify-between items-center bg-transparent max-w-sm mx-auto px-4 pt-3 pb-2">

                <button
                    className="appearance-none bg-pink-200 text-gray-700 absolute top-2 left-3"
                    onClick={onReset}
                >
                    <X size={22} strokeWidth={2.5} />
                </button>

                {/* Need Help */}
                <button className="bg-transparent text-sm text-gray-600 font-medium underline absolute top-2 right-25">
                    Need Help?
                </button>

                {/* All tickets */}
                <button className="bg-transparent text-sm text-gray-600 font-medium underline absolute top-2 right-3">
                    All tickets
                </button>
            </div>



            <div className="relative max-w-sm mx-auto bg-white rounded-lg  overflow-hidden scale-95">
                {/* Header */}
                <div className="bg-red-600 text-white text-center py-1 text-sm font-bold">
                    पुणे महानगर परिवहन महामंडळ लि.
                </div>


                <div className="p-4">
                    {/* Route / Tickets / Fare */}
                    <div className="flex justify-between mb-3">
                        {/* Left: Route */}
                        <div>
                            <div className="text-sm text-left text-gray-400">Route</div>
                            <div className="text-lg text-center font-bold">{ticketData.route}</div>
                        </div>
                        {/* Right: Tickets + Fare */}
                        <div className="flex gap-6 text-center">
                            <div>
                                <div className="text-sm text-right text-gray-400">Tickets count</div>
                                <div className="text-base font-bold">{ticketData.ticketsCount}</div>
                            </div>
                            <div>
                                <div className="text-sm text-right text-gray-400">Fare</div>
                                <div className="text-base font-bold">₹{ticketData.fare}</div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="border-t border-dashed my-2"></div> */}

                    {/* Stops */}
                    <div className="flex items-center justify-center mb-14 px-2">
                        {/* Origin */}
                        <div className="flex-1 text-center pr-1">
                            <span className="text-medium block break-words whitespace-normal overflow-hidden line-clamp-2">
                                {ticketData.originating}
                            </span>
                        </div>

                        {/* Arrow */}
                        <div className="text-4xl px-1">→</div>

                        {/* Destination */}
                        <div className="flex-1 text-center pl-1">
                            <span
                                className="
                                    text-medium 
                                    break-words 
                                    whitespace-normal 
                                    overflow-hidden 
                                    line-clamp-2 
                                    leading-snug 
                                    tracking-tight
                                    ">
                                {ticketData.destination}
                            </span>
                        </div>

                    </div>



                    {/* Top circular cuts */}
                    <div className="absolute -left-4 top-42 w-8 h-8 bg-pink-200 rounded-full"></div>
                    <div className="absolute -right-4 top-42 w-8 h-8 bg-pink-200 rounded-full "></div>

                    {/* Dotted line between circular cuts */}
                    <div className="absolute top-46 left-4 right-4 w-75 border-t border-dotted border-gray-400"></div>



                    {/* <div className="mt-22 gray-300 border-t border-dashed"></div> */}

                    {/* Booking / Validity */}
                    <div className="mt-7 flex justify-between mb-4 text-xs">
                        <div>
                            <div className=" text-gray-400 ">Booking Time</div>
                            <div className="font-bold">{formatDate(now)}</div>
                        </div>
                        <div className="text-left">
                            <div className=" text-gray-400">Validity Time</div>
                            <div className="font-bold">{formatDate(validUntil)}</div>
                        </div>
                    </div>

                    {/* Ticket number */}
                    <div className="text-center tracking-wide text-sm mb-6">
                        {generateTicketNumber()}
                    </div>

                    <div className=" border-gray-400 border-t border-dotted my-2"></div>
                    {/* <div className="absolute top-49 left-0 w-100 border-t border-dotted border-gray-400"></div> */}


                    {/* PMPML Watermark */}
                    <div className="flex justify-center mb-0 mt-0">
                        <div className="w-70 h-50 flex items-center justify-center rounded-full ">
                            <motion.img
                                src={logo}
                                alt="PMPML Logo"
                                className="w-600 h-600 object-contain"
                                animate={{ scale: [1, 1.2, 1] }} // pump in & out
                                transition={{
                                    duration: 2, // 2 seconds for full cycle
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </div>

                    {/* Expiry */}

                </div>
                <div className="w-full bg-gray-100 py-1 text-center text-xs text-gray-600">
                    Expires in {formatTime(timeLeft)}
                </div>

                {/* Reset Button */}

            </div>
            <button
                onClick={onReset}
                className="mt-6 w-full max-w-sm mx-auto flex items-center justify-center gap-2 bg-green-100 text-green-700 border border-green-500 py-2 px-4 rounded-lg hover:bg-green-200 transition duration-200 font-medium"
            >
                <QrCode className="w-5 h-5" />
                Show QR Code
            </button>
        </>
    );
};

export default TicketDisplay;

