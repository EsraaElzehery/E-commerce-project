// import { Truck, Lock, Clock, RotateCcw } from "lucide-react"
import { Truck } from "lucide-react";
import { Clock } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { Lock } from "lucide-react";

export default function Features() {

  const features = [
        {id:1, icon: Truck, text: 'Free Shipping', subtext: 'On orders over $100'},
        {id:2, icon: Lock, text: 'Secure Payment', subtext: '100% protected payments'},
        {id:4, icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service'},
        {id:3, icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy'},
        
    ];


  return (
    <div className="md:py-20 py-15 bg-slate-100  ">
        <div className="max-w-7xl mx-auto" >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center  " >

                {
                    features.map((feature)=>(
                        <div key={feature.id} className="flex md:flex-row flex-col items-center justify-center gap-4  
                       md:text-start text-center  " >
                            <feature.icon className="w-10 h-10 " aria-hidden='true'/>
                            <div className="">
                            <p className="text-lg  font-semibold" >{feature.text}</p>
                            <p className="text-gray-600 text-sm">{feature.subtext}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}
