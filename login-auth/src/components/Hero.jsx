import React from 'react'

export const Hero = (handleLogOut) => {
    return (
        <div>
             <h2>welcome</h2>
             <button className="btn" onClick ={handleLogOut}>logout</button>
        </div>
    )
}
