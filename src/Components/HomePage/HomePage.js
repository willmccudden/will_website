
import HomePageText from './HomePageText';
import ProfilePhoto from './ProfilePhoto';
import HeroSection from '../HeroSection/HeroSection';
import { SplitScreen } from '../UtilComponents/SplitScreen';

function HomePage() {
    return (
        <div>
            <HeroSection className="light hero">
                <div className="heroInner">
                    <span>
                        <h1>Will McCudden</h1>
                        <a href="#" className="btn btn-light">
                            Download my CV
                        </a>
                    </span>
                </div>
            </HeroSection>

            <SplitScreen leftWeight={1} rightWeight={3}>
                <ProfilePhoto />
                <HomePageText />
            </SplitScreen></div>)
}

export default HomePage;