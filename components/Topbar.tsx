export default function Topbar() {
  return (
    <div className="flex items-center justify-between mb-8">

      {/* Search */}
      <div className="w-full max-w-xl">

        <input
          type="text"
          placeholder="Buscar transacciones, reportes..."
          className="
            w-full
            bg-grey
            border
            border-zinc-200
            rounded-2xl
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-black
          "
        />

      </div>

      {/* Right section */}
      <div className="flex items-center gap-4 ml-6">

        {/* Notifications */}
        <button className="
          p-3
          rounded-2xl
          hover:bg-zinc-100
          transition
        ">
        
        🔔
        </button>

        {/* User */}
        <div className="
          bg-white
          border
          border-zinc-200
          px-4
          py-2
          rounded-2xl
        ">
          <p className="font-semibold text-black">
            Andrés
          </p>

          <p className="text-sm text-zinc-500">
            Analyst
          </p>
        </div>

      </div>

    </div>
  )
}
