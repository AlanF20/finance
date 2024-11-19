'use client'
import { transactions } from "@/app/lib/utils";
import TransactionCard from "./transaction-card";
	export function TransactionsList(){
		return(
			<>
				{transactions.slice(0,5).map((transaction, index) => {
					const isLastItem = index !== 4	
					return(
						<>
						<TransactionCard 
						key={index}
						amount={transaction.amount}
						avatar={transaction.avatar}
						category={transaction.category}
						recurring={transaction.recurring}
						name={transaction.name} 
						date={transaction.date}/>	
						{ isLastItem && <div className="w-full h-[1px] bg-[--grey100]"></div>}
					</>
					)
				})
			}
			</>
		)
	}	
