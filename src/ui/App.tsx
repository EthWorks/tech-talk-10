import React from 'react'
import { Slideshow } from './Slideshow'
import { ServiceContext, setup } from './services'

import { SlideIntro } from './slides/SlideIntro'
import { SlideUseState } from './slides/SlideUseState'
import { SlideUseStateForm } from './slides/SlideUseStateForm'
import { SlideUseEffect } from './slides/SlideUseEffect'
import { SlideSubscriptions } from './slides/SlideSubscriptions'
import { SlideDataFetching } from './slides/SlideDataFetching'
import { SlideContext } from './slides/SlideContext'
import { SlideUseRef } from './slides/SlideUseRef'
import { SlideUseReducer } from './slides/SlideUseReducer'
import { SlideCustomHooks } from './slides/SlideCustomHooks'

const services = setup()

export const App = () => (
  <ServiceContext.Provider value={services}>
    <Slideshow slides={[
      SlideIntro,
      SlideUseState,
      SlideUseStateForm,
      SlideUseEffect,
      SlideSubscriptions,
      SlideDataFetching,
      SlideContext,
      SlideUseRef,
      SlideUseReducer,
      SlideCustomHooks,
    ]} />
  </ServiceContext.Provider>
)
