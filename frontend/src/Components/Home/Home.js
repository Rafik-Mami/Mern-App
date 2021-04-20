import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import image1 from '../../Assests/img1.jpg'
import image2 from '../../Assests/img2.jpg'
import image3 from '../../Assests/img3.jpg'
import image4 from '../../Assests/img4.jpg'
import image5 from '../../Assests/img5.jpg'
import image6 from '../../Assests/img6.jpg'
import image7 from '../../Assests/img7.jpg'
import image8 from '../../Assests/img8.jpg'
import image9 from '../../Assests/img9.jpg'
import image10 from '../../Assests/img10.jpg'
import image11 from '../../Assests/img11.jpg'
import image12 from '../../Assests/img12.jpg'
import './Home.css'
const Home = () => {
    const [image, setImage] = useState(0)
    const ToggleImagePlus = () => {


        setImage(image + 1)

    }
    const ToggleImageMinus = () => {
        setImage(image - 1)
    }
    return (<div className="home">

        <h1>Welcome to Tunisia</h1>
        <p>It may be but a slim wedge of North Africa’s vast horizontal expanse, but Tunisia has enough history and diverse natural beauty to pack a country many times its size. With a balmy, sand-fringed Mediterranean coast, scented with jasmine and sea breezes, and where the fish on your plate is always fresh, Tunisia is prime territory for a straightforward sun-sand-and-sea holiday. But beyond the beaches, it’s a thrilling, underrated destination where distinct cultures and incredible extremes of landscape – forested coastlines, Saharan sand seas in the south – can be explored in just a few days.</p>
        <div className="image">
            <img src={'https://cdn.icon-icons.com/icons2/81/PNG/128/arrow_left_15601.png'} style={{ width: '2rem', height: '2rem' }} onClick={ToggleImageMinus} />

            {image == 0 ? <><img src={image1} style={{ width: '18rem', height: '10rem' }} /><img src={image2} alt="image2" style={{ width: '18rem', height: '10rem' }} />
                <img src={image3} alt="image3" style={{ width: '18rem', height: '10rem' }} /></> :
                image == 1 ? <><img src={image4} alt="image3" style={{ width: '18rem', height: '10rem' }} /><img src={image5} alt="image3" style={{ width: '18rem', height: '10rem' }} /><img src={image6} alt="image3" style={{ width: '18rem', height: '10rem' }} /></> : image == 2 ?
                    <><img src={image7} style={{ width: '18rem', height: '10rem' }} /><img src={image8} alt="image2" style={{ width: '18rem', height: '10rem' }} />
                        <img src={image9} alt="image3" style={{ width: '18rem', height: '10rem' }} /></> : image == 3 ? <><img src={image10} style={{ width: '18rem', height: '10rem' }} /><img src={image11} alt="image2" style={{ width: '18rem', height: '10rem' }} />
                            <img src={image12} alt="image3" style={{ width: '18rem', height: '10rem' }} /></> : <><img src={image1} style={{ width: '18rem', height: '10rem' }} /><img src={image2} alt="image2" style={{ width: '18rem', height: '10rem' }} />
                        <img src={image3} alt="image3" style={{ width: '18rem', height: '10rem' }} /></>}
            <img src={'https://cdn.icon-icons.com/icons2/81/PNG/128/arrow_right_15600.png'} style={{ width: '2rem', height: '2rem' }} onClick={ToggleImagePlus} />

        </div>

    </div>
    )
}

export default Home
