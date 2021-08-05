import React from 'react'
import { Navbar } from './Navbar'

export const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <div className="layout">
                <main>
                    {props.children}
                </main>
            </div>
        </div>
    )   
}