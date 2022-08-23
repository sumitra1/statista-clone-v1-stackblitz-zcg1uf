import React from 'react'
import './ContentPage.css'
import BarChart from './BarChart'
import StackedBarChart from './StackedBarChart'

const ContentPage = () => {
  return (
    <div className='container'>
      <main className='content-section'>
        <div className='content-main'>
          <p className='label'>Consumer Markets</p>
          <h1 className="heading-1">Alcoholic Drinks</h1>
          <p className="badge">Worldwide <span className='info'>i</span></p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laudantium tenetur aut fuga, dolore quibusdam. Qui explicabo nesciunt dolor doloribus! Nam facilis neque nisi autem praesentium dolorem facere, voluptatibus consectetur!
          </p>
        </div>

        <div className='content-sidebar'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit sint illum omnis excepturi nam cum maiores officiis dolore, minus cupiditate nihil id! Illo id aliquid, nesciunt quaerat quibusdam aliquam nobis.
          </p>
        </div>
      </main>

      <section className='content-section'>
        <div className='content-main'>
          <h1 className="heading-1">Revenue</h1>
          <div className="card">
            <BarChart className="chart" />
            <p className="chart-description">
              Placeat cum veritatis, assumenda accusantium aliquid ratione quae, non commodi cumque molestiae debitis illum repellendus magni enim modi mollitia ea veniam saepe.
              <span className='br-custom'/>
              Ducimus temporibus distinctio ratione.
              <span className='br-custom'/>
              Asperiores, vel?
            </p>
          </div>

          <div className="card">
            <StackedBarChart className="chart" />
            <p className="chart-description">
              Placeat cum veritatis, assumenda accusantium aliquid ratione quae, non commodi cumque molestiae debitis illum repellendus magni enim modi mollitia ea veniam saepe.
              <span className='br-custom'/>
              Ducimus temporibus distinctio ratione.
              <span className='br-custom'/>
              Asperiores, vel?
            </p>

          </div>
        </div>

        <div className='content-sidebar'>
          <p className='list-title'>Overview</p>
          <ul className='list-unordered'>
            <li>Revenue</li>
            <li>Analyst Opinion</li>
            <li>Sales Channels</li>
            <li>Volume</li>
            <li>Price</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default ContentPage