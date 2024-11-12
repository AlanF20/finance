import Card from "../card";

export function Summary() {
	return (
		<section className="flex w-full flex-wrap gap-[12px]">
			<Card title="Current Balance" value="$4,836.00" primary />
			<Card title="Income" value="$3,814.25" primary={false} />
			<Card title="Expenses" value="$1,700.50" primary={false} />
		</section>
	)
}
