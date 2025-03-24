'use client'
import React from 'react'
import { Hotel } from '../../interface'
import { useRouter } from 'next/navigation'
import { MapPin, Phone } from 'lucide-react'

function HotelCard({hotel}:{hotel:Hotel}) {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/hotels/${hotel.data.id}`)
    }
    const addressText = hotel.data.address ? `${hotel.data.address.street}, ${hotel.data.address.district}, ${hotel.data.address.province} ${hotel.data.address.postal_code}`: "No address info";
  return (
    <div className="max-w-sm w-full bg-white text-black rounded-lg shadow-md overflow-hidden" onClick={handleClick}>
      <div className="relative h-52 bg-gray-600">
        {/* <img
          src={hotel.data.image}
          alt="hotel"
          className="w-full h-full object-cover"
        /> */}
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{hotel.data.name}</h2>
        <div className="flex items-center mb-2">
          <MapPin />
          <span className="ml-2">{addressText}</span>
        </div>
        <div className="flex items-center">
          <Phone />
          <span className="ml-2">{hotel.data.tel}</span>
        </div>
      </div>
    </div>
    
  )
}

export default HotelCard