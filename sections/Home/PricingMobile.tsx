import PricingItem, { IPricingItem } from "@/components/Home/PricingItem";
import classNames from "classnames";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";

const variants: Variants = {
  hidden: { opacity: 0.2 },
  visible: { opacity: 1 },
};

type Props = {
  pricingItems: IPricingItem[];
};

export default function PricingMobile({ pricingItems }: Props) {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className="border overflow-hidden rounded-xl flex items-center justify-center mb-8">
        {pricingItems.map((e, i) => (
          <a
            key={e.title}
            className={classNames("btn rounded-none flex-1", {
              "btn-info": i === activeTab,
            })}
            onClick={() => setActiveTab(i)}
          >
            {e.title}
          </a>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          transition={{ duration: 0.1 }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          <PricingItem pricingItem={pricingItems[activeTab]} isMobile />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
