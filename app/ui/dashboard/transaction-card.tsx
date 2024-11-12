import { Transactions } from "@/app/lib/definitions";
import { textPreset4Bold, textPreset5 } from "../fonts";

export default function TransactionCard({amount, avatar, recurring, category, date, name }: Transactions) {
	const isPositiveAmount = amount >= 0
	const dateOptions: Intl.DateTimeFormatOptions = {
 	 year: 'numeric',
 	 month: 'short',
 	 day: 'numeric',
	};	
	const parsedDate = new Date(date)
	const dateInstance= new Date(Date.UTC(parsedDate.getFullYear(),parsedDate.getUTCMonth() + 1, parsedDate.getUTCDay() ))
	const formatedDate = dateInstance.toLocaleDateString('en-US', dateOptions )	
	return(
		<article className="w-full flex justify-between">
			<div className="w-[32px] h-[32px] rounded-full overflow-clip flex items-center justify-center">
				<img className="w-full" src={avatar} /> 
			</div>
			<p className={`${textPreset4Bold}`}>{name}</p>
			<div className="flex flex-col justify-center items-center">
				{isPositiveAmount ? <p className={`${textPreset4Bold} text-[--secGreen]`}>+${amount}</p> : <p className={`${textPreset4Bold} text-[--grey900]`}>-${amount}</p>}
				<p className={`${textPreset5} text-[--grey500]`}>{formatedDate}</p>
			</div>
		</article>
	)
}
