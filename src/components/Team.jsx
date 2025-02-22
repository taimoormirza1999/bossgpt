import inter from "@/app/InterFont";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

export default function Team() {
  return (
    <section className={`relative bg-gradient-to-b from-transparent via-[rgba(97,106,115,0.12)] via-[40%] via-[rgba(97,106,115,0.12)] via-[60%] to-transparent text-white py-20 px-6 font-normal  ${inter.className}`}>
      <div className="page-max-width mx-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        {/* Left Section - Title & Description */}
        <motion.div  initial={{ opacity: 0, x: -350 }} // Start position
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }} className="space-y-6">
          {/* Title */}
          <motion.h1      className="text-4xl md:text-5xl font-bold leading-tight text-white/90">
            Made for modern <br /> product teams
          </motion.h1>

          {/* Subtitle with Link */}
          <motion.p     className="text-white/70 max-w-lg">
            BossGPT is shaped by the practices and principles that distinguish
            world-class product teams from the rest: relentless focus, fast
            execution, and a commitment to the quality of craft.{" "}
            <Link href="/switch" className="text-white font-semibold hover:underline">
              Make the switch &rarr;
            </Link>
          </motion.p>
        </motion.div>
      </div>

{/* Cards Section */}
<motion.div  initial={{ opacity: 0, y: 50, scale: 0.9 }} 
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, staggerChildren: 0.3, ease: "easeOut" }} 
 className="mt-10 flex gap-3 lg:gap-6 justify-center overflow-x-auto scrollbar-hide snap-x snap-mandatory md:flex-row lg:pl-0  w-full">
  {/* Card 1 */}
  <div className="bg-pmBlack p-6 medium-transition hover:brightness-[170%] rounded-lg w-full md:w-1/3 flex-shrink-0 snap-center">
    <Image
      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/fc435ee2-fabf-4f10-5a37-d89874f4bf00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
      alt="Product Development"
      width={500}
      height={500}
      className="rounded-lg"
    />
    <div className="mt-4 flex justify-between items-center">
      <p className="text-lg font-semibold">Purpose-built for product development</p>
      <button className="p-2 px-4 rounded-full bg-pmBlack hover:bg-mtext-tertiary transition">
        <span className="plusSign">+</span>
      </button>
    </div>
  </div>
  {/* Card 01 */}
  <motion.div  className="lg:hidden bg-pmBlack p-6 medium-transition hover:brightness-[170%] rounded-lg w-full md:w-1/3 flex-shrink-0 snap-start">
    <Image
      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/fc435ee2-fabf-4f10-5a37-d89874f4bf00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
      alt="Product Development"
      width={500}
      height={500}
      className="rounded-lg"
    />
    <div className="mt-4 flex justify-between items-center">
      <p className="text-lg font-semibold">Purpose-built for product development</p>
      <button className="p-2 px-4 rounded-full bg-pmBlack hover:bg-mtext-tertiary transition">
        <span className="plusSign">+</span>
      </button>
    </div>
  </motion.div>

  {/* Card 2 */}
  <motion.div  className="bg-pmBlack p-6 medium-transition hover:brightness-[170%] rounded-lg w-full md:w-1/3 flex-shrink-0 snap-start">
    <Image
      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/0e6d3edd-cd37-4bf8-c1bf-b93960169400/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
      alt="Move Fast"
      width={500}
      height={500}
      className="rounded-lg"
    />
    <div className="mt-4 flex justify-between items-center">
      <p className="text-lg font-semibold">Designed to move fast</p>
      <button className="p-2 px-4 rounded-full bg-pmBlack hover:bg-mbg-tertiary transition">
        <span className="plusSign">+</span>
      </button>
    </div>
  </motion.div>

  {/* Card 3 */}
  <motion.div  className="bg-pmBlack p-6 medium-transition hover:brightness-[170%] rounded-lg w-full md:w-1/3 flex-shrink-0 snap-start">
    <Image
      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/99eeb9b8-3d99-4191-0081-9f302d26f400/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
      alt="Perfection"
      width={500}
      height={500}
      className="rounded-lg"
    />
    <div className="mt-4 flex justify-between items-center">
      <p className="text-lg font-semibold">Crafted to perfection</p>
      <button className="p-2 px-4 rounded-full bg-pmBlack hover:bg-mtext-tertiary transition">
        <span className="plusSign">+</span>
      </button>
    </div>
  </motion.div>
</motion.div>


      </div>
    </section>
  );
}
