import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import KPI from "@/components/KPI"
import Chat from "@/components/Chat"
import Transacciones from "@/components/Transacciones"
import TransactionChart from "@/components/TransactionChart"
export default function Dashboard(){
  return (
    <main className = "flex h-screen">

      {/*Barra lateral */}
      <Sidebar />

      {/*Main*/}
      <section className="flex-1 p-6 bg-white-100 overflow-auto">
      <Topbar />
        <h2 className = "text-3xl font-bold mb-6">
          Dashboard
        </h2>

      {/*KPI's*/}
      <div className="grid grid-cols-3 gap-6 mb-6">

        <KPI
          title="Transacciones"
          value="14,500"
        />

        <KPI
          title="Alertas de Fraude"
          value="12"
        />

        <KPI
          title="Retorno"
          value="$2.1M"
        />

      </div>
      {/*ChatBot*/}
      <div className="mb-6">
        <Chat />
      </div>

      <div className="mb-6">
        <Transacciones />
      </div>

      <div className="w-full mb-6">
        <TransactionChart />
      </div>
      </section>
    </main>
  )
} 
