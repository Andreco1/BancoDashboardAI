export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-950 text-white border-r border-zinc-800 p-6">

      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          BanCogo
        </h1>

        <p className="text-zinc-400 text-sm">
          AI Banking Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">

        <button className="w-full text-left p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition">
          Dashboard
        </button>

        <button className="w-full text-left p-3 rounded-xl hover:bg-zinc-900 transition">
          Transacciones
        </button>

        <button className="w-full text-left p-3 rounded-xl hover:bg-zinc-900 transition">
          Fraude
        </button>

        <button className="w-full text-left p-3 rounded-xl hover:bg-zinc-900 transition">
          Reportes
        </button>

        <button className="w-full text-left p-3 rounded-xl hover:bg-zinc-900 transition">
          AI Assistant
        </button>

      </nav>

    </aside>
  )
}
