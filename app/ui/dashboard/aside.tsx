import NavLinks from "./nav-links";

export default function Aside() {
  return (
    <aside>
      <main className="flex bg-[--grey900] px-[16px] pt-[16px] rounded-s-lg">
        <NavLinks />
      </main>
    </aside>
  )
}