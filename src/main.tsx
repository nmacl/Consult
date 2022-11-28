import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './components/AppRouter'


import './index.css'

function Navbar() {
  return(
    <>
      <div className="z-15 nav-bar bg-white" >
        <ul className="flex text-3xl p-2" id='nav-list'>

          <li><a className="mx-2 p-1 transition-all delay-100 hover:bg-indigo-200 hover:p-2 hover:border-4" href="">Home</a></li>
          <li><a className="mx-2 p-1  transition-all delay-100  hover:bg-yellow-100 hover:p-2 hover:border-4" href="">Promote</a></li>
          <li><a className="mx-2 p-1 transition-all delay-100 hover:bg-red-100 hover:p-2 hover:border-4" href="">About</a></li>
        </ul>
      </div>
    </>
  );
}

function Card() {
  return(
    <>
      <div className="my-4 max-w-sm p-12 bg-white border rounded-lg shadow-md dark:border-gray-700 hover:shadow-xl transition-all delay-50">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Interested in promoting your OnlyFans?</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">With rates starting as low as $50</p>
          
          <a href="#" className="m-4 inline-flex items-center px-3 py-2 text-sm font-large text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Contact Us
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>

          <a href="#" className=" inline-flex items-center px-3 py-2 text-sm font-large text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Promote
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
      </div>
    </>
  );
}

function Process() {
  return(
    <>
    
      <div className="table border-4 border-spacing-4 text-white max-w-sm text-left mx-12 px-12">
        <h1 className="text-red-300 text-3xl border-b-2 border-spacing-4 text-center">
          Step 1.
        </h1>
        <p className="text-xl tracking-wide m-4">
            Start by reaching out. Our team is flexible. We understand that each situation is unique. Simply by communicating we can structure a plan that's right for you.
        </p>
      </div>

      <div className="table border-4 border-spacing-4 text-white max-w-sm text-left mx-12 px-12">
        <h1 className="text-yellow-300 text-3xl border-b-2 text-center">
          Step 2.
        </h1>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Package</th>
              <th>$</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Limited Trial</td>
              <td>$50</td>
              <td>1 month</td>
            </tr>
            <tr>
              <td>Full Promotion</td>
              <td>$500</td>
              <td>6 months</td>
            </tr>
            <tr>
              <td>Lifetime+</td>
              <td>$1000</td>
              <td>2 years</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table border-4 border-spacing-4 text-white max-w-sm text-left mx-12 px-12">
        <h1 className="text-green-300 text-3xl border-b-2 text-center">
          Step 3.
        </h1>
        <p className="text-xl tracking-wide m-4">
            Start by reaching out. Our team is flexible. We understand that each situation is unique. Simply by communicating we can structure a plan that's right for you.
        </p>
      </div>
    </>
  );
}

const App = document.getElementById('root')
const Root: FC = () => {
  return (
    <div className=""> 
        <Navbar />
        <div className="flex justify-center text-center">
          <Card />
        </div>
        <div className="flex justify-center text-center">
          <h2 className="mt-4 pt-4 border-y-4 text-2xl font-light tracking-tight text-slate-800 hover:border-blue-300 transition-all delay-50 ">
                Meet Maya
                <img className="m-4 p-4 h-48 rounded-3xl shadow-sm" src="only.png" />
            </h2>
        </div>

        <div className="rounded flex justify-center text-center mt-8">
            <a href="#">
            </a>
        </div>

        <div className="flex justify-center text-center">
           <p className="text-xl border-b-2 m-4 border-red-700 mb-20 ">
                After only 3 months of our promotional services, her subscription count has <strong>tripled.</strong>
            </p>
        </div>

        <div className="flex justify-center text-center rounded-xl background ">
          <h1 className="font-bold mt-10 text-3xl text-white ">But she couldn't have done it without help.</h1>
          <div className="flex absolute mt-40 justify-center text-center">
            <Process/>
          </div>
        </div>
    </div>
    
  )
}

createRoot(App!).render(<Root />)
