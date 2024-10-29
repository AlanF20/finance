export default function Card({ title, value }: {title: string, value: string}) {
  return (
    <div>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  )
}