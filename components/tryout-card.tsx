import Link from "next/link"

interface TryoutCardProps {
  id: string
  number: number
  title: string
  date: string
  variant?: "available" | "completed"
}

export function TryoutCard({ id, number, title, date, variant = "completed" }: TryoutCardProps) {
  return (
    <Link href={`/tryout/${id}`} className="block hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 p-4 bg-white rounded-lg border">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-lg text-xl font-bold ${
            variant === "available" ? "bg-blue-100 text-blue-600" : "bg-blue-600 text-white"
          }`}
        >
          {number}
        </div>
        <div className="flex-1">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </Link>
  )
}

