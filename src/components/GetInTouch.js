'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster, toast } from 'react-hot-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success(' Message sent successfully!');
        reset();
      } else {
        toast.error(' ' + result.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error(' Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 bg-gradient-to-br  text-white font-poppins relative">
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

      {/* Left Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="text-white font-semibold tracking-widest uppercase mb-4">Get In Touch 👈</h4>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          {`Let's work`} <span className="text-yellow-300">together !</span>
        </h1>
      </motion.div>

      {/* Right Section - Contact Form */}
      <motion.form
        className="md:w-1/2 w-full bg-[#e84e34] p-8 rounded-lg border border-white/20 shadow-lg backdrop-blur-sm"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6">
          <label className="block mb-2 text-sm">Your Name</label>
          <input
            type="text"
            {...register('name')}
            className="text-white bg-transparent w-full border-b border-white/30 focus:outline-none py-2"
          />
          {errors.name && <p className="text-sm text-yellow-200 mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm">Your Email</label>
          <input
            type="email"
            {...register('email')}
            className="text-white bg-transparent w-full border-b border-white/30 focus:outline-none py-2"
          />
          {errors.email && <p className="text-sm text-yellow-200 mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm">Your Message</label>
          <textarea
            rows="4"
            {...register('message')}
            className="text-white bg-transparent w-full border-b border-white/30 focus:outline-none py-2"
          ></textarea>
          {errors.message && <p className="text-sm text-yellow-200 mt-1">{errors.message.message}</p>}
        </div>

        <div className="text-center md:text-left">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-white text-black px-8 py-3 rounded-full shadow-lg font-semibold"
          >
            Send Message
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default GetInTouch;
