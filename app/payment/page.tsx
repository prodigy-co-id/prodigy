"use client"

import { useState, useEffect } from "react"
import { Diamond, CreditCard, ChevronLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useRouter} from 'next/navigation'

const plans = [
  {
    id: 1,
    name: "Basic",
    diamonds: 100,
    price: 4.99,
    promo: "10% off first purchase",
    features: ["Access to basic features", "Limited daily rewards", "24/7 support"],
  },
  {
    id: 2,
    name: "Standard",
    diamonds: 500,
    price: 19.99,
    promo: "Free 50 diamonds on signup",
    features: [
      "Access to all basic features",
      "Increased daily rewards",
      "Priority support",
      "Exclusive monthly events",
    ],
  },
  {
    id: 3,
    name: "Premium",
    diamonds: 1000,
    price: 34.99,
    promo: "20% off annual subscription",
    features: [
      "Access to all features",
      "Maximum daily rewards",
      "VIP support",
      "Exclusive weekly events",
      "Early access to new features",
    ],
  },
]

// Mock data for testimonials
const testimonials = [
  { id: 1, name: "Alice Johnson", avatar: "AJ", comment: "This app has revolutionized my productivity!", rating: 5 },
  { id: 2, name: "Bob Smith", avatar: "BS", comment: "Great features and excellent customer support!", rating: 4 },
  { id: 3, name: "Carol Williams", avatar: "CW", comment: "The premium plan is totally worth it!", rating: 5 },
]

export default function PaymentPlans() {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  const [currentBalance] = useState(0) // Mock current balance
  const [currentCurrency] = useState(0) // Initial diamond count
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#f1f1ff] p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
        
          <Button variant="ghost" onClick={handleBack} className="flex items-center text-gray-600">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Kembali
          </Button>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white rounded-full px-3 py-1 shadow">
              <Diamond className="h-4 w-4 text-blue-500 mr-1" />
              <span className="font-semibold">{currentCurrency}</span>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center">Paket dan Top-up Aura</h1>

        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-white md:col-span-1">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Aura kamu sekarang:</CardTitle>
              <CardDescription>Top up gak sih ~</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="flex items-center justify-center">
                <Diamond className="mr-2 h-12 w-12 text-blue-500" />
                <span className="text-5xl font-bold">{currentBalance}</span>
              </div>
            </CardContent>
            <CardFooter className="justify-center pt-0">
              <Button size="sm">
                <CreditCard className="mr-2 h-4 w-4" /> Top Up Now
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white md:col-span-3">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Apa kata mereka</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="flex flex-col items-center justify-center h-full">
                <Avatar className="w-16 h-16 mb-4">
                  <AvatarFallback>{testimonials[currentTestimonialIndex].avatar}</AvatarFallback>
                </Avatar>
                <p className="text-center mb-2">{testimonials[currentTestimonialIndex].comment}</p>
                <p className="font-semibold">{testimonials[currentTestimonialIndex].name}</p>
                <div className="flex mt-2">
                  {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="md:col-span-4">
            <div className="flex flex-col md:flex-row gap-4">
              {plans.map((plan) => (
                <Card key={plan.id} className="flex flex-col bg-white flex-1">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">{plan.name} Plan</CardTitle>
                    <CardDescription className="text-sm">{plan.promo}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pb-4">
                    <div className="flex items-center justify-center mb-2">
                      <Diamond className="mr-1 h-6 w-6 text-blue-500" />
                      <span className="text-3xl font-bold">{plan.diamonds}</span>
                    </div>
                    <p className="text-xl font-semibold text-center mb-3">${plan.price}</p>
                    <ul className="space-y-1 text-sm">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Diamond className="mr-1 h-4 w-4 text-blue-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button size="sm" className="w-full">
                      Choose {plan.name} Plan
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

