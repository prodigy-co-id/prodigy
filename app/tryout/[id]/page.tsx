'use client'
import { TryoutInfo } from "@/components/tryout-info";
import { Subtes } from "@/components/subtes-card";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Diamond, ChevronLeft } from "lucide-react"
import { useState } from "react";

export default function TryoutDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  const [currentCurrency] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-sm relative">
        <Button variant="ghost" onClick={handleBack} className="flex items-center text-gray-600">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Kembali
        </Button>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-white rounded-full px-3 py-1 shadow">
            <Diamond className="h-4 w-4 text-blue-500 mr-1" />
            <span className="font-semibold">{currentCurrency}</span>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:grid md:grid-cols-2 gap-4 p-4">
        {/* Left Column - Purple Card */}
        <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 flex flex-col">
          <h2 className="text-white text-xl font-medium mb-4">Detail Tryout</h2>

          {/* Tryout Info Section */}
          <div className="flex-1 flex flex-col gap-4">
            <TryoutInfo
              number={Number.parseInt(params.id)}
              title={`Tryout Prodigy #${params.id}`}
              date="8 Februari, 2024"
              duration="1h 23j 23m"
            />

            {/* Target Jurusan Section - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block">
              <div className="bg-white rounded-xl p-4">
                <h3 className="text-center font-medium mb-4">Target Jurusan</h3>
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">⚙️</span>
                  </div>
                </div>
                <p className="text-center font-medium mt-4">Teknik Industri</p>
              </div>
            </div>
          </div>

          {/* Button - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block mt-4">
            <Button variant="default" size="lg" className="w-full bg-green-400 on-hover:bg-green-500">
              Kerjakan Tryout
            </Button>
          </div>
        </div>

        {/* Right Column - Detail Soal Section */}
        <div className="flex flex-col flex-1 p-6 bg-white rounded-xl shadow-lg md:overflow-y-auto md:max-h-[calc(100vh-5rem)]">
          <h2 className="text-xl font-medium">Detail Soal</h2>

          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-2">
              <span className="text-red-500">120</span>
              <span>Menit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">160</span>
              <span>Soal</span>
              <span>📝</span>
            </div>
          </div>

          <div className="flex-1 space-y-4 mt-4">
            <Subtes
              title="Tes Penalaran Skolastik"
              subjects={[
                "Kemampuan Penalaran Umum",
                "Pengetahuan dan Pemahaman Umum",
                "Kemampuan Memahami Bacaan dan Menulis",
                "Pengetahuan Kuantitatif",
              ]}
            />

            <Subtes
              title="Tes Literasi Bahasa"
              subjects={["Literasi Bahasa Inggris", "Literasi Bahasa Indonesia"]}
            />

            <Subtes title="Penalaran Matematika" subjects={["Penalaran Matematika"]} />
          </div>
        </div>
      </div>

      {/* Mobile: Fixed button at bottom */}
      <div className="sticky bottom-0 p-4 bg-white border-t md:hidden">
        <Button variant="secondary" size="lg" className="w-full font-black bg-green-400 on-hover:bg-green-500">
          Kerjakan Tryout
        </Button>
      </div>
    </div>
  );
}