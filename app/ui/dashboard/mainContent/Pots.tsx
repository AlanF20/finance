import Link from "next/link";
import { textPreset1, textPreset2, textPreset4 } from "../../fonts";
import { Icon } from "../../aside/icon";

export default function Pots(){
	return(
		<section className="w-full bg-white px-[20px] py-[24px] rounded-[12px] flex flex-col gap-[20px]">
			<header className="w-full flex justify-between items-center">
				<p className={`${textPreset2}`}>Pots</p>
				<Link href={'/#'} className={`${textPreset4} text-[var(--grey500)]`}>See details</Link>			
			</header>
			<div className="w-full flex rounded-[12px] bg-[var(--beige100)]">
				<div>
					<Icon />
				</div>
				<div className="w-full flex flex-col">
					<p className={`${textPreset4} text-[var(--grey500)]`}>Total saved</p>
					<p className={`${textPreset1} text-[var(--grey900)]`}>$820</p>
				</div>
			</div>
		</section>
	)
}


