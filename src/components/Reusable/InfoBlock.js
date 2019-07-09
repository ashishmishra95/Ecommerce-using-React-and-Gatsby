import React from 'react'
import Head from './Head';// since, infoblock is used with Heading component so we have imported it here
import {Link} from 'gatsby'

export default function InfoBlock({head}) {
    return (
        <section className = "bg-theme my-2 py-2">
        <div className="container">
            <Head title = {head}/>
            <div className="row">
                <div className="col-9 col-sm-8 mx-auto text-center">
                    <p className="lead text-white mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed adipisci architecto modi blanditiis aperiam unde reiciendis atque. Eveniet similique libero quia porro cumque, iure commodi vitae dolor. Fugiat perspiciatis repellendus voluptatum a, laboriosam aut perferendis, explicabo excepturi, soluta ab dolorum sit esse cum quos possimus ad suscipit ea vitae dicta.
                    </p>
                    <Link to = "/about/">
                        <button className="btn btn-info btn-primary">{head}</button>
                    </Link>
                </div>
            </div>
        </div>
     </section>
    )
}
