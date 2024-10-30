import clsx from "clsx";
import { textPreset1, textPreset4 } from "../fonts";

export default function Card({ title, value, primary }: { title: string, value: string, primary: boolean }) {
	return (
		<div className={clsx("flex flex-col bg-white p-[20px] rounded-[12px] gap-[12px]", {
			'bg-black': primary
		})}>
			<p className={clsx(`${textPreset4}`, {
				'text-white': primary,
				'text-[var(--grey500)]': !primary
			})}>{title}</p>
			<p className={clsx(`${textPreset1}`, {
				'text-white': primary,
			})}>{value}</p>
		</div>
	)
}
