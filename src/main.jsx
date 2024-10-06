import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './app.jsx'
import './index.css'

const elementRoot = document.getElementById('root')
createRoot(elementRoot).render(<App />)