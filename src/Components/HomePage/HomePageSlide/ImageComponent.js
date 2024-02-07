import {Image, View} from 'react-native';

function ImageComponent (props) {

    return (
            <img src = {require(''+props.imagePath)} width = '100%' style={{border:'1px solid black'}}/>
    )
}

export default ImageComponent;