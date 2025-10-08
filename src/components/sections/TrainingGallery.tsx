"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, GraduationCap, Users, Award } from "lucide-react";
import Section from "../ui/Section";

// Generate array of 58 training images
const trainingImages = Array.from({ length: 58 }, (_, i) => ({
  src: `/trainings/picture-${i + 1}.jpeg`,
  alt: `Environmental and Social Safeguards Training ${i + 1}`,
}));

const trainingStats = [
  { icon: GraduationCap, value: "58+", label: "Training Sessions" },
  { icon: Users, value: "500+", label: "Participants Trained" },
  { icon: Award, value: "100%", label: "Certification Rate" },
];

export default function TrainingGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? trainingImages.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === trainingImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  return (
    <Section id="training-gallery" background="white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-wide">
            Capacity Building
          </span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Environmental And Social{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Safeguards Training Series
          </span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Comprehensive training programs delivered to government agencies, NGOs,
          and corporate organizations on environmental protection, social impact
          assessment, community engagement, and regulatory compliance standards.
        </p>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {trainingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
        {trainingImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ delay: (index % 24) * 0.03, duration: 0.4 }}
            className="group relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            {/* Loading Skeleton */}
            {!loadedImages.has(index) && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
            )}

            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              onLoad={() => handleImageLoad(index)}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                loadedImages.has(index) ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-semibold text-xs sm:text-sm line-clamp-2">
                  Training Session {index + 1}
                </p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ZoomIn className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Training Topics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-12 sm:mt-16 max-w-5xl mx-auto"
      >
        <div className="p-6 sm:p-8 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white rounded-2xl shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Training Modules Delivered
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Environmental Impact Assessment (EIA)",
              "Social Impact Assessment (SIA)",
              "Resettlement Action Plans (RAP)",
              "Stakeholder Engagement Planning",
              "Community Health and Safety",
              "Biodiversity Conservation",
              "Climate Change Adaptation",
              "Gender and Social Inclusion",
              "Grievance Redress Mechanisms",
              "Monitoring & Evaluation",
            ].map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="w-2 h-2 bg-green-300 rounded-full flex-shrink-0" />
                <span className="text-sm sm:text-base">{topic}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm z-10">
              {selectedImage + 1} / {trainingImages.length}
            </div>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={trainingImages[selectedImage].src}
                alt={trainingImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
