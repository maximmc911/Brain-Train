import React from 'react'
import { createRoot } from 'react-dom/client'
import DemoApp from './DemoApp'
import './Calendar.module.css'

document.addEventListener('DOMContentLoaded', function() {
  createRoot(document.body.appendChild(document.createElement('div')))
    .render(<DemoApp />)
})
