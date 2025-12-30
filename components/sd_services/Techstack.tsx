import React from 'react';
import { motion } from 'framer-motion';

const Techstack = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-[#4A9EFF]">Tech Stack</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build robust, scalable, and innovative solutions that drive business growth.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="relative w-full max-w-4xl">
            {/* Tech Stack Image */}
            <img
              src="/Techstack.png"
              alt="Tech Stack - Crestcode Technologies"
              className="w-full h-auto"
              style={{
                objectFit: 'contain',
                width: '100%',
                height: 'auto',
                maxHeight: '400px'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Techstack;