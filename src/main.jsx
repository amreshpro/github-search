import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// font
import './assets/fonts/font.css'

import SearchLogic from './controller/SearchLogic'





ReactDOM.createRoot(document.getElementById('root')).render(
  
// context wrapper
<SearchLogic>
<App />
</SearchLogic>



)
