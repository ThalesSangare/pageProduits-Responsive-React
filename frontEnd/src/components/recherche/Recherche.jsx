import { Search } from "lucide-react";

function Recherche() {
  return (
    <div className="relative w-full max-w-xl mx-auto mt-4 mb-6">
      {/* Icône 🔍 */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <Search className="w-5 h-5" />
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Que recherchez-vous ?"
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition shadow-sm"
      />
    </div>
  );
}

export default Recherche;
