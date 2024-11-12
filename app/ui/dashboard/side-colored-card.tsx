import { SideColor } from "@/app/lib/definitions";
import { textPreset4Bold, textPreset5 } from "../fonts";
import clsx from "clsx";

export default function ColoredCard({title, value, sideColor}: {title: string, value: number, sideColor:SideColor}){
	const bgColor = `bg-[${sideColor}]`
	return(
		<div className="w-[45%] max-w-[500px] flex items-center gap-[20px]">
			<div className={clsx(`w-[3%] max-w-[4px] min-w-[3px] h-[100%] ${bgColor} rounded-[20px]`, {})}></div>
			<div className="w-[99%] flex flex-col">
				<span className={`${textPreset5} text-[--grey500]`}>{title}</span>
				<span className={`${textPreset4Bold} text-[--grey900]`}>${value}</span>
			</div>
		</div>
	)
}
