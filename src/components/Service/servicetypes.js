import React from 'react'
import {Link} from 'gatsby'

export default function Servicetypes() {
    return (
      
        <div className="row">
            <div className="container">
                <div className="col-10 col-sm-8 mx-auto mx-4 my-3">
                <Link to ="./">
                <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img" alt="..."/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Programming courses</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img" alt="..."/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Web development</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
                </div>  
            </div>           
        </div>
      
    )
}
