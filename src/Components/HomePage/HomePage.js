
import HomePageText from './HomePageText';
import ProfilePhoto from './ProfilePhoto';
import { SplitScreen } from '../UtilComponents/SplitScreen';

function HomePage() {
    return (
    <SplitScreen leftWeight = {1} rightWeight = {3}>
        <ProfilePhoto/>
        <HomePageText/>
    </SplitScreen>)
}

export default HomePage;