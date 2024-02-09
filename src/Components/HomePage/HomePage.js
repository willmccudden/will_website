
import ImageComponent from './HomePageSlide/ImageComponent';
import HeroSection from '../HeroSection/HeroSection';
import { HomePageSlide } from './HomePageSlide/HomePageSlide';
import './HomePage.css'
import HomePageText1 from './HomePageSlide/HomePageText1';
import HomePageText2 from './HomePageSlide/HomePageText2';
import HomePageText3 from './HomePageSlide/HomePageText3';
import { Reveal } from '../UtilComponents/Reveal';

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

            <h1> MY JOURNEY </h1>
            <Reveal>
                <HomePageSlide leftWeight={1} rightWeight={3}>
                    <ImageComponent imagePath='./UniversityPhoto.jpg' />
                    <p>{HomePageText1}</p>
                </HomePageSlide>
            </Reveal>

            <Reveal>
                <HomePageSlide leftWeight={1} rightWeight={3}>
                    <ImageComponent imagePath='./IBMLogo.png' />
                    <p>{HomePageText2}</p>
                </HomePageSlide>
            </Reveal>

            <Reveal>
                <HomePageSlide leftWeight={1} rightWeight={3}>
                    <ImageComponent imagePath='./SurfingPhoto.jpg' />
                    <p>{HomePageText3}</p>
                </HomePageSlide>
            </Reveal>

            <h1> MY WEBSITE </h1>

            <p>This website is an oppurtunity for me to learn front end in the hopes of making myself more employable
                whilst also keeping myself occupied while searching for work opportunities. I'm keeping track of the website's development <a href='https://willmccudden.atlassian.net/jira/software/projects/WW/boards/2'>here</a> and the whole project is open source in my git repo <a href='https://github.com/willmccudden/will_website'>here</a>

            </p>
        </div>
    )
}

export default HomePage;