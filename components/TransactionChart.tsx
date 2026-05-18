"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { day: "Lun", transactions: 4000 },
  { day: "Mar", transactions: 3000 },
  { day: "Mié", transactions: 5000 },
  { day: "Jue", transactions: 4500 },
  { day: "Vie", transactions: 6200 },
  { day: "Sáb", transactions: 5200 },
  { day: "Dom", transactions: 4100 },
]

export default function TransactionsChart() {

  return (

    <div
      className="
        bg-white
        rounded-2xl
        border
        border-zinc-200
        p-6
        w-full
      "
    >

      <div className="mb-6">

        <h2 className="text-xl font-bold text-black">
          Transacciones Semanales
        </h2>

        <p className="text-zinc-500 text-sm">
          Actividad bancaria por día
        </p>

      </div>

      <div className="w-full h-[300px] min-w-0">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="transactions"
              stroke="#000000"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  )
}
