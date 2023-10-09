import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, TicketIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Live Event Streaming',
    description:
      'Watch the most exhilarating Valorant matches live as they unfold. Our streaming service guarantees top-tier quality, smooth streaming, and impeccable in-game sound.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Ticket Purchasing',
    description:
      'Whether you are securing a spot to witness the event in person or want a virtual front-row seat, our platform ensures a seamless ticket buying experience. Choose from various ticket tiers, including VIP experiences.',
    icon: TicketIcon,
  },
  {
    name: 'Real-time Stats & Updates',
    description:
      'Stay informed with our live stats dashboard. From player KDA ratios to spike plant stats, we have got you covered. Never miss out on key plays or turning points in the match.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Event Merchandise',
    description:
      'Shop exclusive event merchandise from our online store. From team jerseys to special edition posters, grab memorabilia to remember the event.',
    icon: FingerPrintIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Grab Ticket faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know about the event
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          At VCT Champs, be more than just a spectator—become part of a global Valorant community. Experience electrifying live matches, access real-time game insights, and dive deep with expert analyses. Join us in-person for an immersive atmosphere, exclusive interactions, and grab special edition merchandise. Witness Valorant like never before!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
