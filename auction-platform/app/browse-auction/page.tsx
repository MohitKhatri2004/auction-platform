import HoverEffect from "@/components/ui/card-hover-effect";
import { TRENDING_BIDS } from "@/constants";

export default function BrowseAuctionPage() {
    return (
        <div className="max-w-5xl mx-auto px-8 py-10">
            <div className="py-4 ">
                <h3 className="font-semibold text-2xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-700 ">
                        Trending
                    </span>
                </h3>
                <HoverEffect items={TRENDING_BIDS} />
            </div>
            <div className="py-4 ">
                <h3 className="font-semibold text-2xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-700">
                        Top Auctions
                    </span>
                </h3>
                <HoverEffect items={TRENDING_BIDS} />
            </div>
            <div className="py-4 ">
                <h3 className="font-semibold text-2xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-700">
                        Upcoming Auctions
                    </span>
                </h3>
                <HoverEffect items={TRENDING_BIDS} />
            </div>
        </div>
    );
}
