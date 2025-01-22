interface TopBarProps {
    showBackButton: boolean
    points: number
    gems: number
    profileUrl?: string
  }
  
  export function TopBar({ showBackButton, points, gems, profileUrl }: TopBarProps) {
    return (
      <div className="flex items-center justify-between p-4">
        {showBackButton && (
          <button className="flex items-center text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="ml-2">Kembali</span>
          </button>
        )}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
            <span>⭐</span>
            <span>{points.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
            <span>💎</span>
            <span>{gems.toLocaleString()}</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            {profileUrl && (
              <div className="w-8 h-8 rounded-full bg-gray-200" />
            )}
          </div>
        </div>
      </div>
    )
  }
  