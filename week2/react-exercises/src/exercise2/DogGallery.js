import { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";




const DogGallery = () => {

    const [dogPhotos, setDogPhotos] = useState([]);

    const getDogPhotos = async() => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random/3');
            const {message} = await response.json();
            setDogPhotos(message);
        } catch (error) {
            console.log(error)
        }
    }   

    return(
        <div>
            <Button getDogPhotos={getDogPhotos} />
            <div className="gallery">
            {dogPhotos.length ? 
                dogPhotos.map((dogPhoto, index) => <DogPhoto dogPhoto={dogPhoto} key={index} />) :
                <p>Get your first dog by clicking the button!</p>
            }
            </div>
        </div>
    )

}


export default DogGallery;