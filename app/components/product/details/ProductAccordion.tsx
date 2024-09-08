import {motion} from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import {productAccordionData} from './productAccordionData';

const containerVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {opacity: 0, y: 10},
  visible: {opacity: 1, y: 0},
};

export default function ProductAccordion() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.1}}
      className="w-full"
    >
      <Accordion type="single" collapsible className="w-full">
        {productAccordionData.map((item, index) => (
          <motion.div key={item.title} variants={itemVariants}>
            <AccordionItem value={`item-${index}`} className="w-full">
              <AccordionTrigger className="flex items-center flex-grow w-full gap-2">
                <div className="flex items-center gap-2 ml-2">
                  {item.icon}
                  {item.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-2">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}
