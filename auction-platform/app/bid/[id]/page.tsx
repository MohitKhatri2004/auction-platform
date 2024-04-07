"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import React from "react";
import { TRENDING_BIDS } from "@/constants";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
//import dayjs from 'dayjs' // ES 2015
dayjs().format();
dayjs.extend(relativeTime);

type Props = {
    params: {
        id: string;
    }
}

const BidPage: React.FC<Props> = ({ params }) => {
    const bid = TRENDING_BIDS.find((bid) => bid.id === parseInt(params.id));
    return (
        <main className="h-full w-full py-12 text-white ml-10">
            <div className="mx-auto flex flex-col items-center justify-center">
                <div className="my-4">
                    <h1 className="text-3xl font-bold text-black dark:text-neutral-200">
                        Place your Bid on {bid?.title}
                    </h1>
                </div>
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <Image
                        src={bid?.img!}
                        alt="jordans"
                        height="400"
                        width="400"
                        className="object-contain"
                    />
                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                        {bid?.title}
                    </p>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {bid?.description}
                    </p>
                    <div className="flex items-center">
                        <button className="rounded-full pl-4 pr-1 py-2 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Base Price</span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-1 text-white">
                                100 ETH
                            </span>
                        </button>
                        <button className="rounded-full pl-4 pr-1 py-2 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Highest Price</span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-1 text-white">
                                200 ETH
                            </span>
                        </button>
                    </div>

                    <div className="flex items-center my-4 space-x-1">
                        <input type="text" id="bid" name="bid" className="bg-transparent border border-slate-300/20 rounded-lg py-2 px-2" placeholder="Enter your Bid" />
                        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-12 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 opacity-75">
                            Bid
                        </button>
                    </div>
                    <div className="flex min-w-full justify-center items-center my-4 space-x-1">
                        <p className="bg-zinc-700 rounded-full px-4 py-1 text-white">Bid Ends {dayjs().to(dayjs(bid?.endTime))}</p>
                    </div>
                </BackgroundGradient>
            </div>
        </main>
    )
}

export default BidPage
