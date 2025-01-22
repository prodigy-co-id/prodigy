import { TopBar } from "@/components/top-bar"
import { TryoutInfo } from "@/components/tryout-info"
import { Subtes } from "@/components/subtes-card"
import { Button } from "@/components/ui/button"

export default function TryoutDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopBar points={9999} gems={999} showBackButton={true} />

      <div className="flex-1 flex flex-col md:grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="relative">
          {/* Purple Background Section */}
          <div className="bg-gradient-to-b from-purple-500 to-purple-600 p-6 md:min-h-[calc(100vh-5rem)] flex flex-col">
            <h2 className="text-white text-xl font-medium mb-6">Detail Tryout</h2>

            {/* Mobile: Only show TryoutInfo */}
            <div className="md:flex-1 md:flex md:flex-col md:gap-6">
              <TryoutInfo
                number={Number.parseInt(params.id)}
                title={`Tryout Prodigy #${params.id}`}
                date="8 FEB 2025"
                duration="1h 23j 23m"
              />

              {/* Hide on mobile, show on desktop */}
              <div className="hidden md:block">
                <div className="bg-white rounded-xl p-4 mt-6">
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

            {/* Desktop: Button at bottom of purple section */}
            <div className="hidden md:block mt-6">
              <Button variant="secondary" size="lg" className="w-full">
                Kerjakan Tryout
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col flex-1 p-6 md:p-6 md:overflow-y-auto md:max-h-[calc(100vh-5rem)]">
          <h2 className="text-xl font-medium">Detail Soal</h2>

          <div className="flex justify-between mt-6">
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

          <div className="flex-1 space-y-6 mt-6">
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
        <Button variant="secondary" size="lg" className="w-full">
          Kerjakan Tryout
        </Button>
      </div>
    </div>
  )
}

