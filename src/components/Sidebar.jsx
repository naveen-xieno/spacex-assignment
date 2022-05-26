import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {
  
} from "react-router-dom";

const Sidebar = () => {

  return (
    <React.Fragment>
    <div className="lg:w-1/6 lg:mr-10 mb-10 lg:mb:0">

<div className='bg-white p-4 rounded-lg'>
    <h2 className='font-bold text-xl mb-2'>Filters</h2>

    <div className='text-center mb-5'>
      <h3 className='border-b inline px-5 pb-1'>Launch Year</h3>
    </div>
    
    <div className='grid grid-cols-2 gap-4'>
        <Link to="/year/2006" className='py-1 bg-lime-500  rounded-lg text-center cursor-pointer'>2006</Link>
        <Link to="/year/2007" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2007</Link>
        <Link to="/year/2008" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2008</Link>
        <Link to="/year/2009" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2009</Link>
        <Link to="/year/2010" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2010</Link>
        <Link to="/year/2011" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2011</Link>
        <Link to="/year/2012" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2012</Link>
        <Link to="/year/2013" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2013</Link>
        <Link to="/year/2014" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2014</Link>
        <Link to="/year/2015" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2015</Link>
        <Link to="/year/2016" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2016</Link>
        <Link to="/year/2017" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2017</Link>
        <Link to="/year/2018" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2018</Link>
        <Link to="/year/2019" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2019</Link>
        <Link to="/year/2020" className='py-1 bg-lime-200  rounded-lg text-center cursor-pointer'>2020</Link>
    </div>

    <div className='text-center mt-5 mb-5'>
      <h3 className='border-b inline px-5 pb-1'>Successful Launch</h3>
    </div>
    
     <div className='grid grid-cols-2 gap-4 '>
      <Link to="/launch/true" className="py-1 bg-lime-200  rounded-lg text-center cursor-pointer">True</Link>
      <Link to="/launch/false" className="py-1 bg-lime-200 rounded-lg text-center cursor-pointer">False</Link>
    </div>

    <div className='text-center mt-5 mb-5'>
      <h3 className='border-b inline px-5 pb-1'>Successful Landing</h3>
    </div>

    <div className='grid grid-cols-2 gap-4 '>
      <Link to="/landing/true" className="py-1 bg-lime-200  rounded-lg text-center cursor-pointer">True</Link>
      <Link to="/landing/false" className="py-1 bg-lime-200 rounded-lg text-center cursor-pointer">False</Link>
    </div>

</div>


</div>
</React.Fragment>
  )
}

export default Sidebar