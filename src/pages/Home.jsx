import React from 'react'
import { Hero } from '../components/widgets/Hero'
import { CoreTracks } from '../components/widgets/CoreTracks'
import { SpecilizeTracks } from '../components/widgets/SpecilizeTracks'

export const Home = () => {
  return (
    <>
     <Hero/>
     <CoreTracks/>
     <SpecilizeTracks/>
    </>
  )
}
