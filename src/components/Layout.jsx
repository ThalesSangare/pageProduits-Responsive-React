function Layout({ children }) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <header className="bg-black text-white p-4">
        <h1 className="text-xl font-bold">MonShop</h1>
      </header>

      {/* Content */}
      <div className="grid md:grid-cols-[250px_1fr]">
        {/* Sidebar */}
        <aside className="bg-gray-100 p-4 hidden md:block">
          <h2 className="font-semibold mb-3">Filtres</h2>
          <ul className="space-y-2 text-sm">
            <li>Électronique</li>
            <li>Vêtements</li>
            <li>Accessoires</li>
          </ul>
        </aside>

        {/* Main */}
        <main className="p-6">{children}</main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4 text-sm">
        © 2026 MonShop
      </footer>
    </div>
  );
}

export default Layout;
