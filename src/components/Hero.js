import React from 'react'

function Hero({heroName}) {
    if(heroName==='Joker'){
        throw new Error('ERROR: Unexpected hero name');  
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
