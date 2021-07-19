import React from 'react'
import "./Gallery.css"
const Gallery = ({results}) => {

    return (
        <div className="gallery">
            {
                results.map((item) =>{
                return (
                    <div className="images" key= {item.id} >
                        <img src={item.urls.regular} alt ="No Image Found"/>
                    </div>

                )})
            }
        </div>
    )
}

export default Gallery
