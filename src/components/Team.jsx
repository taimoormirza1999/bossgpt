import inter from "@/app/InterFont";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <section className={`relative bg-gradient-to-b from-transparent via-[#616A73]/12 to-transparent [background:linear-gradient(180deg,transparent,rgba(97,106,115,.12)_40%,rgba(97,106,115,.12)_60%,rgba(97,106,115,0))] text-white py-20 px-6 font-normal  ${inter.className}`}>
      <div className="page-max-width mx-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        {/* Left Section - Title & Description */}
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Made for modern <br /> product teams
          </h1>

          {/* Subtitle with Link */}
          <p className="text-gray-400 max-w-lg">
            Linear is shaped by the practices and principles that distinguish
            world-class product teams from the rest: relentless focus, fast
            execution, and a commitment to the quality of craft.{" "}
            <Link href="/switch" className="text-white font-semibold hover:underline">
              Make the switch &rarr;
            </Link>
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
        {/* Card 1 */}
        <div className="bg-pmBlack p-6 medium-transition hover:brightness-[170%] rounded-lg w-full md:w-1/3">
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

        {/* Card 2 */}
        <div className="bg-pmBlack p-6 medium-transition hover:brightness-[170%] rounded-lg w-full md:w-1/3">
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
        </div>

        {/* Card 3 */}
        <div className="bg-pmBlack p-6 medium-transition hover:brightness-[170%] rounded-lg w-full md:w-1/3">
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
        </div>
      </div>
      </div>
    </section>
  );
}
