import React from "react";
import { coinsToColors, coinsToImage, coinsToShortname } from "../../coins";

function Card({ totalStaked, date, APY, firstCoin, secondCoin, earnCoin, ended }) {
    return(
        <div className="card text-white w-full h-full flex border border-[#273a55] rounded-xl p-2">
            <div className="flex w-full justify-center">
                <div className="flex flex-col w-full justify-between">
                <div className="flex flex-col w-full">
                <div className={`flex text-sm rounded-md bg-gradient-to-r from-[${coinsToColors[firstCoin]}] to-[${coinsToColors[secondCoin]}] border-[#5598FE] border h-20 w-full p-2 items-center justify-between z-0`}>
                    <div className="flex flex-col justify-center">
                        <div>Total Staked</div>
                        <div>${totalStaked}</div>
                    </div>
                    <div className="flex flex-col">
                        <div>Farming APY</div>
                        <div className="flex justify-end">{APY}%</div>
                    </div>
                </div>
                <div className="flex justify-center relative bottom-5">
                    <img src={coinsToImage[firstCoin]} className="w-12 z-30 absolute mr-8"></img>
                    <img src={coinsToImage[secondCoin]} className="w-12 z-20 relative ml-8"></img>
                </div>
                <div className="w-full justify-center flex">
                    Deposit {coinsToShortname[firstCoin]}-{coinsToShortname[secondCoin]} and earn {coinsToShortname[earnCoin]}
                </div>
                <div className="flex justify-center">
                    <div className="w-auto border flex items-center justify-center text-xs py-1 px-3 rounded-2xl bg-[#324054] border-[#324054] text-[#667FA4]">
                        { ended ? "Ended" : "Open" }
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-md text-[#667FA4] my-1">
                        <div>End Date</div>
                        <div>{date.toISOString().replace(/T/, ' ').replace(/\..+/, '')  }</div>
                    </div>
                </div>
                </div>
                <div className="flex">
                    <button className="w-full flex rounded-xl bg-[#2F8AF5] py-2 justify-center items-center ">Connect Wallet</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card;