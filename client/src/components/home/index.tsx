import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center px-6 ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mt-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Effortless Invoice Management
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          Create, manage, and track invoices easily with our powerful and
          user-friendly platform.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Button
            as="a"
            href="/create-invoice"
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary transition"
          >
            Create Invoice
          </Button>
          <Button
            as="a"
            href="/invoices"
            // variant="outline"
            className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition"
          >
            View History
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl"
      >
        <FeatureCard
          title="Fast & Easy"
          description="Generate invoices in just a few clicks with our seamless interface."
        />
        <FeatureCard
          title="Track Invoices"
          description="Keep an eye on payments and due invoices in one place."
        />
        <FeatureCard
          title="Secure & Reliable"
          description="Your invoice data is safely stored and accessible anytime."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 max-w-4xl text-center"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Testimonial
            name="Amit Sharma"
            review="This platform has saved me hours of work! The invoice generation process is seamless and fast."
          />
          <Testimonial
            name="Priya Desai"
            review="The UI is clean, and tracking invoices has never been easier. Highly recommended!"
          />
        </div>
      </motion.div>
      <div className="mt-16 w-full">
        <hr className="border-t border-gray-400 w-full my-8 opacity-50" />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
const FeatureCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-[#606062] p-6 rounded-lg text-center shadow-lg border-l-4 border-primary"
  >
    <h3 className="text-xl font-semibold text-primary">{title}</h3>
    <p className="text-gray-300 mt-2">{description}</p>
  </motion.div>
);

const Testimonial: React.FC<{ name: string; review: string }> = ({
  name,
  review,
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-[#606062] p-6 rounded-lg shadow-lg border-l-4 border-primary"
  >
    <p className="text-gray-300 italic">"{review}"</p>
    <h4 className="text-primary font-semibold mt-4">- {name}</h4>
  </motion.div>
);
