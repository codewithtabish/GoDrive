import Gravity, { MatterBody } from "@/components/fancy/physics/gravity"

export default function CitiesGravitySection() {
  return (
    <div className="w-dvw h-dvh flex flex-col relative font-azeret-mono">
      <div className="pt-20 text-6xl sm:text-7xl md:text-8xl text-foreground dark:text-muted w-full text-center font-calendas italic">
        {/* fancy */}
      </div>
      <p className="pt-4 text-base sm:text-xl md:text-2xl text-foreground dark:text-muted w-full text-center">
        {/* components made with: */}
      </p>

      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="30%" y="10%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#0015ff] text-white rounded-full hover:cursor-pointer px-10 py-5">
            DHA
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="30%" y="30%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#e794da] text-white rounded-full hover:cursor-grab px-10 py-5">
            Clifton
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="40%" y="20%" angle={10}>
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#1f464d] text-white rounded-full hover:cursor-grab px-10 py-5">
            Gulshan-e-Iqbal
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="75%" y="10%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#ff5941] text-white rounded-full hover:cursor-grab px-10 py-5">
            North Nazimabad
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="80%" y="20%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#f97316] text-white rounded-full hover:cursor-grab px-10 py-5">
            PECHS
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="50%" y="10%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#ffd726] text-white rounded-full hover:cursor-grab px-10 py-5">
            Saddar
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="60%" y="25%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#3c873a] text-white rounded-full hover:cursor-grab px-10 py-5">
            Malir
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="70%" y="30%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#000000] text-white rounded-full hover:cursor-grab px-10 py-5">
            Korangi
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="40%" y="50%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#ff9900] text-white rounded-full hover:cursor-grab px-10 py-5">
            Shah Faisal
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="50%" y="60%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#306998] text-white rounded-full hover:cursor-grab px-10 py-5">
            Bahadurabad
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="55%" y="40%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#7f52ff] text-white rounded-full hover:cursor-grab px-10 py-5">
            Gulistan-e-Johar
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="65%" y="50%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#ff2d95] text-white rounded-full hover:cursor-grab px-10 py-5">
            Garden
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="35%" y="60%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#00bcd4] text-white rounded-full hover:cursor-grab px-10 py-5">
            Lyari
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="45%" y="35%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#ff5722] text-white rounded-full hover:cursor-grab px-10 py-5">
            Landhi
          </div>
        </MatterBody>

        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="60%" y="70%">
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#4caf50] text-white rounded-full hover:cursor-grab px-10 py-5">
            Nazimabad
          </div>
        </MatterBody>
      </Gravity>
    </div>
  )
}
