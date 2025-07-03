
import ResponsiveBanner from "@/components/ResponsiveBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Responsive Banner */}
      <ResponsiveBanner />
      
      {/* Demo content to show banner in context */}
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Demo strony z banerem</h1>
        <p className="text-gray-600 mb-4">
          Powyżej widzisz w pełni responsywny baner, który dostosowuje się do wszystkich rozmiarów ekranów.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Przykładowa treść {item}</h3>
              <p className="text-gray-600">
                To jest przykładowa treść demonstrująca, jak baner wygląda w kontekście strony internetowej.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
