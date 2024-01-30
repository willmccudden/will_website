import {Image, View} from 'react-native';
import ProfileImage from './Profile_Photo.jpg'

function ProfilePhoto() {

    const ProfileImage = require('./Profile_Photo.jpg');
    return (
        // <View>
        //     <Image source={ProfileImage} alt='ProfilePhoto' width='100%' style={{ borderColor: 'black', borderWidth: 5 }} />
        // </View>
        <img src = {ProfileImage} width = '100%' style={{border:'2px solid black'}}/>
    )
}

export default ProfilePhoto;