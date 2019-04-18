import React from 'react'
import { Slideshow } from './Slideshow'

import { SlideUseState } from './slides/SlideUseState'
import { SlideUseStateForm } from './slides/SlideUseStateForm'
import { SlideUseEffect } from './slides/SlideUseEffect'
import { SlideSubscriptions } from './slides/SlideSubscriptions'
import { SlideDataFetching } from './slides/SlideDataFetching'

export const App = () => (
  <Slideshow slides={[
    SlideUseState,
    SlideUseStateForm,
    SlideUseEffect,
    SlideSubscriptions,
    SlideDataFetching,
  ]} />
)
