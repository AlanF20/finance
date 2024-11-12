import Link from "next/link";
import { textPreset2, textPreset4 } from "../../fonts";
import { TransactionsList } from "../transactions-list";

export default function Transaction(){
	return(
		<section className="w-full bg-white px-[20px] py-[24px] rounded-[12px] flex flex-wrap gap-[20px]">
			<header className="w-full flex justify-between items-center">
				<p className={`${textPreset2}`}>Transactions</p>
				<Link href={'/#'} className={`${textPreset4} text-[--grey500]`}>View All</Link>			
			</header>
			<TransactionsList />	
		</section>
	)
}
