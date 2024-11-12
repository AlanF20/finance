'use client'
import { transactions } from "@/app/lib/utils";
import TransactionCard from "./transaction-card";
	export function TransactionsList(){
		return(
			<>
				{transactions.map(transaction => {
					return(
				<TransactionCard 
					amount={transaction.amount}
					avatar={transaction.avatar}
					category={transaction.category}
					recurring={transaction.recurring}
					name={transaction.name} 
					date={transaction.date}/>

					)	
				})
			}
			</>
		)
	}	
