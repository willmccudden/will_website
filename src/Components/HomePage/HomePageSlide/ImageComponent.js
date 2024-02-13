import './ImageComponent.css'

function ImageComponent(props) {

    return (
        <img src={require('' + props.imagePath)} alt='SlideImage' width='100%' />
    )
}

export default ImageComponent;