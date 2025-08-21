import React from 'react'
import {data} from '../restApi.json'

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">Popular Dishes</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cum? Fugiat iure impedit sapiente eius voluptatem, omnis id, voluptate modi tempora aspernatur neque accusamus sunt numquam incidunt molestias! Quos, praesentium.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h2>{element.title}</h2>
                            <p>{element.description}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Menu