import { Summary } from "@/app/ui/dashboard/mainContent/Summary";
import { textPreset1 } from "@/app/ui/fonts";

export default function Dashboard() {
	return (
		<>
			<p className={`${textPreset1}`}>Overview</p>
			<Summary />
		</>
	)
}
