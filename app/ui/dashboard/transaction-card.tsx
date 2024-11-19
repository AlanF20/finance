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
			<div className="w-[20%]  flex items-center justify-center">
				<img className="w-[32px] rounded-full h-[32px]" src={avatar} /> 
			</div>
			<p className={`w-[50%] ${textPreset4Bold} flex items-center`}>{name}</p>
			<div className="w-[30%] flex flex-col justify-center items-center">
				{isPositiveAmount ? 
					<p className={`${textPreset4Bold} text-[--secGreen]`}>+${Math.abs(amount)}</p> :
					<p className={`${textPreset4Bold} text-[--grey900]`}>-${Math.abs(amount)}</p>}
				<p className={`${textPreset5} text-[--grey500]`}>{formatedDate}</p>			
			</div>
		</article>
	)
}
