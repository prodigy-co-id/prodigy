interface TryoutInfoProps {
    number: number
    title: string
    date: string
    duration: string
  }
  
  export function TryoutInfo({ number, title, date, duration }: TryoutInfoProps) {
    return (
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
            {number}
          </div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4">
          <p className="text-gray-600">Durasi waktu pengerjaan:</p>
          <p className="font-medium">{duration}</p>
        </div>
      </div>
    )
  }
  
  