import React from 'react'
import Head from './Head'
import {Link} from 'gatsby'

export default function DualInfoBlock({head}) {
    return (
        <section className = "my-2 py-2 bg-theme">
        <div className="container">
            <Head title = {head}/>
            <div className="row">
                <div className="col-8 mx-auto">
                    <p className="lead text-center my-3 font-weight-light text-white">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae mollitia neque necessitatibus id omnis, voluptatem perferendis dolore earum soluta voluptas odio nihil odit aspernatur placeat fugiat totam eligendi voluptate ex, dolorum itaque error recusandae ad laboriosam doloribus? Voluptates earum quo, explicabo magni alias corrupti quibusdam expedita non aliquid exercitationem eius!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod repudiandae reprehenderit dolores nihil cumque. Quasi veritatis perspiciatis laborum unde beatae perferendis fuga doloribus ea nostrum asperiores aliquid exercitationem, necessitatibus repudiandae fugit modi voluptatem facilis cumque, reiciendis officia, itaque nisi!
                    </p>

                    
                </div>
                <div className="col-4">
                <div className="card">
                <img src="https://images.pexels.com/photos/1385633/pexels-photo-1385633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="We are flexible"/>
                <div className="card-body">
                  <h5 className="card-title">Some cool stuffs</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque excepturi tenetur cumque pariatur id quia perferendis quasi accusamus deserunt voluptas?</p>
                  <Link to ="/about/" class="btn btn-outline-warning">{head}</Link>
                </div>
              </div>
            </div> 
            </div>
            </div>
  </section>
    )
}
