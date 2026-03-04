'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for trying out',
    features: [
      '5 generations per month',
      'Basic customization',
      'MP3 downloads',
      'Community support',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'Best for creators',
    features: [
      'Unlimited generations',
      'Advanced customization',
      'WAV & STEM downloads',
      'Priority support',
      'Commercial license',
      'Early access to new features',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For teams and businesses',
    features: [
      'Everything in Pro',
      'API access',
      'Custom model training',
      'Dedicated support',
      'SLA guarantee',
    ],
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Simple Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl backdrop-blur-sm flex flex-col ${
                plan.popular
                  ? 'neon-border bg-black/50 glow-box'
                  : 'border border-white/10 bg-black/30'
              }`}
            >
              {/* 热门标签 */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-sm font-bold text-white">
                  Most Popular
                </div>
              )}

              {/* 计划名称 */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              {/* 价格 */}
              <div className="mb-6">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              {/* 功能列表 */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA 按钮 */}
              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold transition-all mt-auto block text-center cursor-pointer ${
                  plan.popular
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                    : 'border border-white/20 text-white hover:border-neon-blue/50 hover:bg-white/5'
                }`}
              >
                Join Waitlist
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
