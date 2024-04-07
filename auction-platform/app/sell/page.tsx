import { SellForm } from "@/components/global/SellForm";
import React from "react";

type Props = {

}

const SellPage: React.FC<Props> = () => {
    return (
        <main className="h-full w-full py-12 text-white ml-10 z-10">
            <div className="mx-auto h-screen flex flex-col items-center justify-center">
                <SellForm />
            </div>
        </main>
    )
}

export default SellPage
