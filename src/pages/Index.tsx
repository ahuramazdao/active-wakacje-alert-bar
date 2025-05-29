
import InfoBanner from "@/components/InfoBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Info Banner */}
      <InfoBanner />
      
      {/* Demo content to show banner in context */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Pasek Informacyjny</h1>
          <p className="text-xl text-gray-600 mb-8">
            Responsywny, animowany pasek z informacją o programie "Aktywne Wakacje 2025"
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Funkcje paska:</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Responsywny design (mobile-first)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Animacje hover i focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Pulsująca ikona kalendarza</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Efekty gradientowe i świetlne</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Automatyczne przekierowanie</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Gotowy do osadzenia w HTML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
