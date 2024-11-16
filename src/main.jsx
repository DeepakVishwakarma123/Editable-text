import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { ShowGreetingMessage } from './components/Message'
import { List } from './components/list'


createRoot(document.querySelector('.root')).render(
  <StrictMode>
    <ShowGreetingMessage/>
    <List/>
  </StrictMode>,
)
