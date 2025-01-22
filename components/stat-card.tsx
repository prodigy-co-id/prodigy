import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  emoji?: string;
  className?: string;
}

export function StatCard({ title, value, emoji, className = "" }: StatCardProps) {
  return (
    <div className={`bg-white rounded-xl p-4 shadow-sm ${className}`}>
      <div className="space-y-2">
        <p className="text-l font-black flex justify-center items-center text-center">{title}</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-5xl font-bold">{value}</span>
          {emoji && <span className="text-5xl">{emoji}</span>}
        </div>
      </div>
    </div>
  );
}