import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home/Index'
import { About } from './components/About/Index'

import './styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu/Index'
import { Post } from './components/Post/Index'
import { Redirect } from './components/Redirect/Index'
import { Notfound } from './components/NotFound/Index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />}>
          <Route
            path=":id"
            element={
              <div>
                <p>teste</p>
              </div>
            }
          />
        </Route>

        <Route path="redirect" element={<Redirect />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
