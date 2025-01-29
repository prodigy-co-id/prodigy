import { StatCard } from "@/components/stat-card"
import { TargetCard } from "@/components/target-card"
import { TryoutCard } from "@/components/tryout-card"
import { Card } from "@/components/card"
import Image from 'next/image'


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
              <Image src="/prodigylogo.svg" height={100} width={100} alt="Prodigy Logo" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-white">
                <span>🌟</span>
                <span>9,999</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-white">
                <span>💎</span>
                <span>999</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>

        
          {/* Stats Grid */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StatCard title="Streak" value="12" emoji="🔥" className="text-sm sm:text-base lg:text-lg" />
            <StatCard title="Skor Tryout tertinggi" value="768" emoji="📈" className="text-sm sm:text-base lg:text-lg" />
            <StatCard title="Peluang Masuk PTN" value="99%" emoji="🎉" className="hidden lg:block text-sm sm:text-base lg:text-lg" />
          </div>

          {/* Target PTN */}
          <div className="bg-white rounded-xl p-4 mt-6">
            <h2 className="font-medium mb-3">Target PTN</h2>
            <div className="flex gap-4">
              <TargetCard faculty="1" university="Teknik Industri" />
              <TargetCard faculty="2" university="Sistem Informasi" />
            </div>
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
            <Card title="Tryout Terakhir" description="Analisa performa Tryout terakhir kamu disini.">
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
          <TryoutCard id="1" number={1} title="TO Prodigy x TI ITS" date="Dimulai pada 8 Februari 2025" variant="available" />
        </div>
      </div>
    </div>
  )
}