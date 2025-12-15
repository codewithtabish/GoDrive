export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            EuroDrive in numbers
          </h2>
          <p className="text-muted-foreground">
            Trusted ride-hailing and car rental service, currently operating
            across Karachi with a growing network of drivers and vehicles.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">10,000+</div>
            <p className="text-muted-foreground">Completed Rides</p>
          </div>

          <div className="space-y-4">
            <div className="text-5xl font-bold">500+</div>
            <p className="text-muted-foreground">Cars Available</p>
          </div>

          <div className="space-y-4">
            <div className="text-5xl font-bold">25+</div>
            <p className="text-muted-foreground">Areas Covered in Karachi</p>
          </div>
        </div>
      </div>
    </section>
  )
}
