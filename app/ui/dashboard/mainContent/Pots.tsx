import Link from "next/link";
import { textPreset1, textPreset2, textPreset4 } from "../../fonts";
import Pot from '@/public/icon-pot.svg'
import { Icon } from "../../aside/icon";
import ColoredCard from "../side-colored-card";

export default function Pots(){
	return(
		<section className="w-full bg-white px-[20px] py-[24px] rounded-[12px] flex flex-wrap gap-[20px]">
			<header className="w-full flex justify-between items-center">
				<p className={`${textPreset2}`}>Pots</p>
				<Link href={'/#'} className={`${textPreset4} text-[--grey500]`}>See details</Link>			
			</header>
			<div className="w-full max-w-[300px] p-[16px] flex flex-wrap items-center gap-[16px] rounded-[12px] bg-[--beige100]">
				<Icon svgUrl={Pot.src} twStyle="w-[28px] h-[36px] bg-[--secGreen]"/>
				<div className="flex flex-col">
					<p className={`${textPreset4} text-[--grey500]`}>Total saved</p>
					<p className={`${textPreset1} text-[--grey900]`}>$850</p>
				</div>
			</div>
			<div className="w-full flex flex-wrap gap-[16px]">
				<ColoredCard title="Savings" value={159} bgSideColor={"bg-[--secGreen]"} />
				<ColoredCard title="Gift" value={40} bgSideColor={"bg-[--secCyan]"} />
				<ColoredCard title="Concert Ticket" value={110} bgSideColor={"bg-[--secNavy]"} />
				<ColoredCard title="New Laptop" value={10} bgSideColor={"bg-[--secYellow]"} />
			</div>
		</section>
	)
}


