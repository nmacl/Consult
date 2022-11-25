import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './components/AppRouter'


import './index.css'

const App = document.getElementById('root')
const Root: FC = () => {
  return (
  <div className=""> 

    <div className="nav-bar bg-gray-300" >
      <ul className="flex text-3xl p-2" id='nav-list'>

        <li><a className="mx-2 p-1 transition-all delay-100 hover:bg-indigo-200 hover:p-2 hover:border-4" href="">Home</a></li>
        <li><a className="mx-2 p-1  transition-all delay-100  hover:bg-yellow-100 hover:p-2 hover:border-4" href="">Promote</a></li>
        <li><a className="mx-2 p-1 transition-all delay-100 hover:bg-red-100 hover:p-2 hover:border-4" href="">About</a></li>
      </ul>
    </div>

      <div className="background absolute h-full w-full flex items-center justify-center ">
        <div className="max-w-sm p-6 bg-white border rounded-lg shadow-md dark:border-gray-700">
          <div className="">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Interested in promoting your OnlyFans?</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">With rates starting as low as $50</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Contact Us
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>

          </div>
      </div>
      </div>
    </div>
  )
}

createRoot(App!).render(<Root />)
