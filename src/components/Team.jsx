import inter from "@/app/InterFont";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

export default function Team() {
  return (
    <section className={`relative bg-gradient-to-b from-transparent via-[rgba(97,106,115,0.12)] via-[40%] via-[rgba(97,106,115,0.12)] via-[60%] to-transparent text-white py-20 lg:px-6 font-normal  ${inter.className}`}>
      <div className="page-max-width mx-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6  ">
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
          BossGPT AI is built on the principles that define the best project management teams— efficiency, precision, and smart automation. Whether you're tracking progress, breaking down complex tasks, or optimizing workflows, BossGPT AI ensures seamless project execution with AI-powered automation.{" "}
            <Link href="/switch" className="text-white font-medium hover:underline">
              Make the switch &rarr;
            </Link>
          </motion.p>
        </motion.div>
      </div>

{/* Cards Section */}
<motion.div  
  initial={{ opacity: 0, y: 50, scale: 0.9 }} 
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, staggerChildren: 0.3, ease: "easeOut" }} 
  className="mt-10 flex gap-3 lg:gap-6 justify-start overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full pr-6"
>
  {/* Card 1 */}
  <motion.div className="group bg-pmBlack p-6 medium-transition hover:brightness-[170%] rounded-lg w-[80%] sm:w-[60%] md:w-[45%] lg:w-1/3 flex-shrink-0 snap-start">
    <Image
      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/fc435ee2-fabf-4f10-5a37-d89874f4bf00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
      alt="Product Development"
      width={500}
      height={500}
      className="rounded-lg"
    />
    <div className="mt-4 flex justify-between items-center">
      <p className="text-lg font-medium">AI-Powered Task Management</p>
      <button className="p-2 px-4 rounded-full bg-pmBlack border-[0.8px] border-white/40 medium-transition group-hover:bg-mbg-tertiary group-hover:border-mbg-translucent transition">
        <span className="plusSign">+</span>
      </button>
    </div>
  </motion.div>

  {/* Card 2 */}
  <motion.div className="group bg-pmBlack p-6 medium-transition hover:brightness-[170%] rounded-lg w-[80%] sm:w-[60%] md:w-[45%] lg:w-1/3 flex-shrink-0 snap-start">
    <Image
      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/0e6d3edd-cd37-4bf8-c1bf-b93960169400/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
      alt="Move Fast"
      width={500}
      height={500}
      className="rounded-lg"
    />
    <div className="mt-4 flex justify-between items-center">
      <p className="text-lg font-medium">Designed to move fast</p>
      <button className="p-2 px-4 rounded-full bg-pmBlack border-[0.8px] border-white/40 medium-transition group-hover:bg-mbg-tertiary group-hover:border-mbg-translucent transition">
        <span className="plusSign group-hover:text-white">+</span>
      </button>
    </div>
  </motion.div>

  {/* Card 3 */}
  <motion.div className="group bg-pmBlack p-6 medium-transition hover:brightness-[170%] rounded-lg w-[80%] sm:w-[60%] md:w-[45%] lg:w-1/3 flex-shrink-0 snap-start">
    <Image
      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/99eeb9b8-3d99-4191-0081-9f302d26f400/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
      alt="Perfection"
      width={500}
      height={500}
      className="rounded-lg"
    />
    <div className="mt-4 flex justify-between items-center">
      <p className="text-lg font-medium">Intelligent Workflows & Recommendations</p>
      <button className="p-2 px-4 rounded-full bg-pmBlack border-[0.8px] border-white/40 text-white medium-transition group-hover:bg-mbg-tertiary group-hover:border-mbg-translucent transition">
        <span className="plusSign">+</span>
      </button>
    </div>
  </motion.div>
</motion.div>

      </div>
    </section>
  );
}
