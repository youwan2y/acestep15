'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ImageItem {
  src: string
  alt: string
  caption?: string
}

interface ImageGalleryProps {
  images: ImageItem[]
  title?: string
  columns?: 2 | 3 | 4
  showCaptions?: boolean
}

export default function ImageGallery({
  images,
  title = 'Visual Examples',
  columns = 3,
  showCaptions = true,
}: ImageGalleryProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{title}</span>
          </h2>
        </motion.div>

        <div className={`grid ${gridCols[columns]} gap-6`}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl neon-border"
            >
              <div className="aspect-video relative bg-black/30">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {showCaptions && image.caption && (
                <div className="p-4 bg-black/40 backdrop-blur-sm">
                  <p className="text-sm text-gray-300">{image.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
