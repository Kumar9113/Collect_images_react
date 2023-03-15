import React from 'react'
import classes from './Gallary.module.css'


const Gallery = ({data}) => {
    return (
        
        <div className={classes.col}>
        {data.map((image) =><div key={image.id}>
        <div className="col">
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
        width='200' height='250' alt={image.title}/>
        </div>
        </div>)}
        </div>
        
    )
}

export default Gallery