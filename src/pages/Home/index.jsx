import HeroSection from './Sections/Hero'
import StorySection from './Sections/StorySec'
import WhatWeOfferSection from './Sections/WhatWeOffer'
import AmbienceSection from './Sections/Ambience'
import ReviewSection from './Sections/Reviews'
import OurBrandsSection from './Sections/OurBrands'

const Homepage = () => {
  return (
    <div>
      <HeroSection/>
      <StorySection/>
      <WhatWeOfferSection/>
      <AmbienceSection/>
      <ReviewSection/>
      <OurBrandsSection/>
    </div>
  )
}

export default Homepage