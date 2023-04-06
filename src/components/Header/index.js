import {MainContainer,Container,MediaCon,Para,Image1,Image2,Image3} from './styledComponents'

const Header=()=>(
    <MainContainer>
        <Container>
            <Para>RA</Para>
        </Container>
        <MediaCon>
            <Image1 src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png" alt="linkedIn"/>
            <Image2 src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png" alt="githib"/>
            <Image3 src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png" alt="twitter"/>
        </MediaCon>
    </MainContainer>
)

export default Header