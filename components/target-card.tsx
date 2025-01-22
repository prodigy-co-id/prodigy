interface TargetCardProps {
  faculty: string
  university: string
}

export function TargetCard({ faculty, university }: TargetCardProps) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs">ITS</div>
      <div className="text-sm">
        <p className="font-medium">Pilihan {faculty}</p>
        <p className="text-gray-600">{university}</p>
      </div>
    </div>
  )
}

