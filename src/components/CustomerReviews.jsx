"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./utils/SectionWrapper";

const reviews = [
    {
      name: "Emily Johnson",
      review:
        "This AI tool has completely transformed how I work! It’s fast, reliable, and makes everything so much easier.",
    
    // *  imageUrl: "https://source.unsplash.com/200x200/?woman,portrait",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael Lee",
      review:
        "Absolutely love the simplicity and power of this platform. Highly recommended for anyone managing projects.",
    //   imageUrl: "https://source.unsplash.com/200x200/?man,portrait",
      imageUrl: "https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sophia Brown",
      review:
        "From automation to smooth workflows, this tool has exceeded my expectations. It’s a game changer!",
    //   imageUrl: "https://source.unsplash.com/200x200/?girl,smile",
      imageUrl: "https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?q=80&w=2509&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "James Carter",
      review:
        "I can’t imagine going back to my old workflow. This has made everything so much more efficient.",
    //   imageUrl: "https://source.unsplash.com/200x200/?man,smiling",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
    {
      name: "Olivia Davis",
      review:
        "BossGPT has made managing my business so much easier. The automation features are spot on!",
    //   imageUrl: "https://source.unsplash.com/200x200/?woman,smiling",
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
    {
      name: "William Harris",
      review:
        "The AI’s ability to handle repetitive tasks has saved me so much time. It's like having an extra team member!",
    //   imageUrl: "https://source.unsplash.com/200x200/?man,professional",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
    {
      name: "Ava Miller",
      review:
        "I’m really impressed with how BossGPT understands my business needs and adapts. Truly an essential tool.",
    //   imageUrl: "https://source.unsplash.com/200x200/?woman,business",
    imageUrl: "https://images.unsplash.com/photo-1512375890245-7862e320210a?q=80&w=3686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     trial:"p"
},
    {
      name: "Benjamin Wilson",
      review:
        "It’s not just efficient, but it also helps me make smarter decisions. Highly recommend BossGPT to anyone looking to boost productivity.",
    //   imageUrl: "https://source.unsplash.com/200x200/?man,thinking",
    imageUrl: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=3246&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
    {
      name: "Isabella Martinez",
      review:
        "The support team is incredible! They helped me integrate BossGPT seamlessly into my workflow.",
    //   imageUrl: "https://source.unsplash.com/200x200/?woman,office",
    imageUrl: "https://images.unsplash.com/photo-1613424969431-62a604d2cf67?q=80&w=3686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
    {
      name: "Lucas Anderson",
      review:
        "BossGPT’s simplicity combined with its power is unmatched. This is the future of business automation.",
    //   imageUrl: "https://source.unsplash.com/200x200/?man,casual",
    imageUrl: "https://images.unsplash.com/photo-1508908324153-d1a219719814?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
  ];
  

const CustomerReviews = () => {
  return (
    <section className="w-full py-16 background: bg-gradient-to-b from-mbg-translucent to-transparent to-20% text-white" id="customers">
   <SectionWrapper>
   <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        <p className="text-gray-400 mt-2">
          See how our platform is transforming the way people work.
        </p>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-2 lg:gap-x-5 mt-10 w-[93%] lg:w-full mx-auto  ">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: index * 0.2 }}
            viewport={{ amount: 0.2, once: true }}
            className={` p-2 lg:p-3.5 rounded-lg border-[1.35px] border-white/10 hover:border-white/30  bg-mbg-tertiary/40 shadow-lg shadow-white/10 text-center ${index==0&&("border-white/30")}`}
          >
            <div className=" items-center space-x-4 ">
              <Image
                src={review.imageUrl}
                alt={review.name}
                width={50}
                height={50}
                className="mb-4 rounded-12  w-full h-40 lg:h-48 object-cover border border-white/20 bg-mbg-tertiary/80"
              />
              <h3 className="text-lg font-semibold ">{review.name}</h3>
            </div>
            <p className="text-gray-300 text-sm mt-3 mb-3">{review.review}</p>
            <div className=" text-xs my-3 p-1 px-3 rounded-full border border-white/10 bg-white/80 text-mbg-tertiary font-semibold  uppercase  inline-block  shadow-xl shadow-white/40  ">Pro Member</div>
          </motion.div>
        ))}
      </div>
   </SectionWrapper>
    </section>
  );
};

export default CustomerReviews;
