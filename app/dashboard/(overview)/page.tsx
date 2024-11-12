import { Summary } from "@/app/ui/dashboard/mainContent/Summary";
import { textPreset1 } from "@/app/ui/fonts";
import Transaction from "@/app/ui/dashboard/mainContent/Transaction";
import Pots from "@/app/ui/dashboard/mainContent/Pots";

export default function Dashboard() {
	return (
		<>
			<p className={`${textPreset1}`}>Overview</p>
			<Summary />
			<Pots />
			<Transaction />
		</>
	)
}
