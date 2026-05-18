type KPIProps = {
  title: string
  value: string
}

export default function KPI({ title, value }: KPIProps) {
  return (

    <div className="
      bg-white
      p-5
      rounded-2xl
      border
      border-zinc-200
      shadow-sm
    ">

      <p className="text-zinc-500 text-sm mb-2">
        {title}
      </p>

      <h3 className="text-3xl font-bold text-black">
        {value}
      </h3>

    </div>

  )
}
