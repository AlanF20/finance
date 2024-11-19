'use client'
import Link from "next/link";
import { textPreset1, textPreset2, textPreset4 } from "../../fonts";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement)

export default function Budgets(){
	return(
		<section className="w-full bg-white px-[20px] py-[24px] rounded-[12px] flex flex-wrap gap-[20px]">
			<header className="w-full flex justify-between items-center">
				<p className={`${textPreset2}`}>Budgets</p>
				<Link href={'/#'} className={`${textPreset4} text-[--grey500]`}>See Details</Link>			
			</header>
			<main className="w-full flex flex-col justify-between items-center">
			<article className="relative top-[170px] w-full flex flex-col justify-center align-center">
				<p className={`${textPreset1} text-center`}>$338</p>
				<p className={`${textPreset4} text-[--grey500] text-center`}>of $975 limit</p>
			</article>
			<Doughnut data={
				{
					labels: ['Bills', 'Personal Care', 'Dining Out', 'Entertainment'],
					datasets: [
						{
							label: 'My first dataset',
							data: [750, 100, 75, 50],
							hoverOffset: 4,
							backgroundColor:[
								'rgb(130,201,215)',
								'rgb(242,205,172)',
								'rgb(98,96,112)',
								'rgb(39,124,120)',
							]
						}
					],
				}
			} />
			</main>
			
		</section>
	)
}
