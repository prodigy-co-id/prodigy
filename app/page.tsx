'use client'
import { StatCard } from "@/components/stat-card"
import { TargetCard } from "@/components/target-card"
import { TryoutCard } from "@/components/tryout-card"
import { Card, CardDescription } from "@/components/ui/card"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Diamond } from "lucide-react"
import { useState, useEffect } from "react"
import { targetPTN } from "./pages/api/targetptn"

export default function DashboardPage() {
  const router = useRouter()

  const [currentCurrency] = useState(0) // Curr balance
  const [initialValueInt] = useState(0) // Int type stat

  const [hasTarget, setHasTarget] = useState<boolean>(false)
  const [targets, setTarget] = useState<targetPTN[]>([])

  {/* Fetch data API univ dan jurusan*/}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/targetptn');
        const data: targetPTN[] = await response.json(); // Type the response
        if (data.length > 0) {
          setHasTarget(true);
          setTarget(data);
        }
      } catch (error) {
        console.error('Failed to fetch targets:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="min-h-screen bg-violet-50">
      {/* Dashboard Section */}
      <div className="bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-500 p-6 rounded-b-[2rem] space-y-6">
        {/* Stat Bar */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">
              <Image src="/prodigylogo.svg" height={100} width={100} alt="Prodigy Logo" onClick={() => router.push("/")}/>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-white rounded-full px-3 py-1 shadow">
              <Diamond className="h-4 w-4 text-blue-500 mr-1" />
              <span className="font-semibold">{currentCurrency}</span>
              </div>
              <Button onClick={() => router.push('/payment')} variant="default" className="bg-green-500 text-white font-black">
                Top Up
              </Button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        
          {/* Stats Grid */}
          <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StatCard title="Streak" value={initialValueInt} emoji="🔥" className="text-sm sm:text-base lg:text-lg" />
            <StatCard title="Skor Tryout tertinggi" value={initialValueInt} emoji="📈" className="text-sm sm:text-base lg:text-lg" />
            <StatCard title="Peluang Masuk PTN" value={initialValueInt} emoji="🎉" className="hidden lg:block text-sm sm:text-base lg:text-lg" />
          </div>

          {/* Target PTN */}
          <div className="bg-white rounded-xl p-4 mt-6">
            <h2 className="mb-3 font-bold">Target PTN</h2>
            {hasTarget === true ? (
            <div className="flex gap-4">
              {targets.map((targetPTN, index) => (
                <TargetCard key={index} faculty={targetPTN.faculty} university={targetPTN.university} />
              ))}
            </div>
            ) : (
            <p>Kamu belum set target PTN di akun, tambah sekarang yuk!</p>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 grid md:grid-cols-2 gap-6 mx-auto max-w-7xl">
        {/* Tryout Performance */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Performa Tryout kamu</h2>
            <button className="text-sm text-gray-500">Lihat semua</button>
          </div>
            <Card title="Tryout Terakhir">
              <CardDescription title="Cek dan analisa tryout terakhir kamu disini, ya!"></CardDescription>
            <TryoutCard id="1" number={1} title="Tryout Prodigy #1" date="Dimulai pada 8 Februari 2025" />
            </Card>
        </div>

        {/* Available Tryouts */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Tryout tersedia</h2>
            <button className="text-sm text-gray-500">Lihat semua</button>
          </div>
          <TryoutCard id="1" number={1} title="Tryout Prodigy #1" date="Dimulai pada 8 Februari 2025" variant="available" />
        </div>
      </div>
    </div>
  )
}