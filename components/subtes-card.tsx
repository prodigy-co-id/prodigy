interface SubjectSectionProps {
    title: string
    subjects: string[]
  }
  
  export function Subtes({ title, subjects }: SubjectSectionProps) {
    return (
      <div className="bg-purple-100 rounded-xl p-4 mb-4">
        <h3 className="font-medium mb-2">{title}</h3>
        {subjects.map((subject, index) => (
          <div key={index} className="bg-white rounded-lg p-3 mb-2 last:mb-0">
            {subject}
          </div>
        ))}
      </div>
    )
  }  