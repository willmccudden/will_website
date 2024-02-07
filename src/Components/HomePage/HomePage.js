
import ImageComponent from './HomePageSlide/ImageComponent';
import HeroSection from '../HeroSection/HeroSection';
import { HomePageSlide } from './HomePageSlide/HomePageSlide';
import './HomePage.css'
import HomePageText1 from './HomePageSlide/HomePageText1';

function HomePage() {
    return (
        <div>
            <HeroSection className="light hero">
                <div className="heroInner">
                    <span>
                        <h1>Will McCudden</h1>
                        {/* <a href="/" className="btn btn-light">
                            Download my CV
                        </a> */}
                    </span>
                </div>
            </HeroSection>

            <HomePageSlide leftWeight={1} rightWeight={3}>
                <ImageComponent imagePath = './UniversityPhoto.jpg'/>
                <p>{HomePageText1}</p>
            </HomePageSlide>

            <HomePageSlide leftWeight={3} rightWeight={1}>
                <p>{HomePageText1}</p>
                <ImageComponent imagePath = './IBMLogo.png'/>
            </HomePageSlide>

            <HomePageSlide leftWeight={1} rightWeight={3}>
                <ImageComponent imagePath = './SurfingPhoto.jpg'/>
                <p>{HomePageText1}</p>
            </HomePageSlide>
        </div>
    )
}

export default HomePage;