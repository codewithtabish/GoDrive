"use client"


type SkillCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
}

export function CityCard({ icon: Icon, title }: SkillCardProps) {
  return (
    <div className="flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-xl border bg-card shadow-sm">
      <div className="text-2xl">
        <Icon />
      </div>
      <span className="text-xs font-medium text-center">{title}</span>
    </div>
  )
}
