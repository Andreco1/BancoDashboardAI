const transactions = [
  {
    id: 1,
    branch: "CDMX",
    amount: "$1,200",
    status: "Completada"
  },

  {
    id: 2,
    branch: "Monterrey",
    amount: "$850",
    status: "Pendiente"
  },

  {
    id: 3,
    branch: "Guadalajara",
    amount: "$2,400",
    status: "Fraude"
  },

  {
    id: 4,
    branch: "Puebla",
    amount: "$430",
    status: "Completada"
  }
]

export default function TransactionsTable() {

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      border-zinc-200
      p-6
    ">

      {/* Header */}
      <div className="mb-6">

        <h2 className="text-xl font-bold text-black">
          Transacciones Recientes
        </h2>

        <p className="text-zinc-500 text-sm">
          Última actividad bancaria
        </p>

      </div>

      {/* Table */}
      <table className="w-full">

        <thead>

          <tr className="text-left border-b border-zinc-200">

            <th className="pb-3 text-zinc-500">
              ID
            </th>

            <th className="pb-3 text-zinc-500">
              Sucursal
            </th>

            <th className="pb-3 text-zinc-500">
              Monto
            </th>

            <th className="pb-3 text-zinc-500">
              Estado
            </th>

          </tr>

        </thead>

        <tbody>

          {transactions.map((transaction) => (

            <tr
              key={transaction.id}
              className="border-b border-zinc-100"
            >

              <td className="py-4 text-black">
                {transaction.id}
              </td>

              <td className="py-4 text-black">
                {transaction.branch}
              </td>

              <td className="py-4 text-black font-medium">
                {transaction.amount}
              </td>

              <td className="py-4">

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium

                    ${
                      transaction.status === "Completada"
                        ? "bg-green-100 text-green-700"
                        : transaction.status === "Pendiente"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }
                  `}
                >
                  {transaction.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}
