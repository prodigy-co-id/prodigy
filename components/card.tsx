import React from 'react';

interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function Card({ title, description, children }: CardProps) {
  return (
    <div className="p-4 bg-white rounded-lg border">
      <div className="mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}