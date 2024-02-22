
import HeroSection from '../../Components/HeroSection/HeroSection';
import { HomePageSlide } from '../../Components/HomePageSlide/HomePageSlide';
import './HomePage.css'
import HomePageText1 from '../../Components/HomePageSlide/HomePageText1';
import HomePageText2 from '../../Components/HomePageSlide/HomePageText2';
import HomePageText3 from '../../Components/HomePageSlide/HomePageText3';
import { Reveal } from '../../Components/UtilComponents/Reveal';
import styled from 'styled-components';
import NavBar from '../../Components/NavBar/NavBar';
import { View } from 'react-native-web';
import UniversityPhoto from '../../Images/UniversityPhoto.jpg'
import IBMLogo from '../../Images/IBMLogo.png'
import SurfingPhoto from '../../Images/SurfingPhoto.jpg'


const WholePage = styled.div`
    display: flex;
    // padding: 6em
    // height: 305px
    // opacity: ${props => props.hiddenValue}
`;

const Column = styled.div`
    flex: ${props => props.weight};
    // padding: 1em;
`;

function HomePage() {

    return (
        <div>
            <HeroSection>   

                <NavBar/>
                <div className="heroInner">
                    <span>
                        <h1>Will McCudden</h1>
                    </span>
                </div>
            </HeroSection>
            <WholePage>
                <Column weight={6}>

                    <h1>---- MY JOURNEY ----</h1>
                    <Reveal>
                        <HomePageSlide leftWeight={1} rightWeight={4}>
                            <img src = {UniversityPhoto} width='100%' alt = 'University Photo'/>
                            <p className='slide-text'>{HomePageText1}</p>
                        </HomePageSlide>
                    </Reveal>

                    <Reveal>
                        <HomePageSlide leftWeight={1} rightWeight={4}>
                            <img className = 'slide-image' src = {IBMLogo} width='100%' alt = 'IBM Logo'/>
                            <p className='slide-text'>{HomePageText2}</p>
                        </HomePageSlide>
                    </Reveal>

                    <Reveal>
                        <HomePageSlide leftWeight={1} rightWeight={4}>
                            <img className = 'slide-image'src = {SurfingPhoto} width='100%' alt = 'Surfing Photo'/>
                            <p className='slide-text'>{HomePageText3}</p>
                        </HomePageSlide>
                    </Reveal>

                    <h1>---- MY WEBSITE ----</h1>

                    <p>This website is an oppurtunity for me to learn front-end, and in future add back-end functionality, in the hopes of making myself more employable
                        whilst also keeping myself occupied while searching for work opportunities. I'm keeping track of the website's development <a href='https://willmccudden.atlassian.net/jira/software/projects/WW/boards/2'>here</a> and the whole project is open source in my git repo <a href='https://github.com/willmccudden/will_website'>here</a>

                    </p>
                </Column>
            </WholePage>
        </div>
    )
}

export default HomePage;