import NavLinks from "./nav-links";

export default function Aside() {
	return (
		<aside className="w-full flex items-center bg-[--grey900] px-[16px] pt-[16px] rounded-t-[8px] justify-around h-full justify-self-end z-50">
			<NavLinks />
		</aside>
	)
}
