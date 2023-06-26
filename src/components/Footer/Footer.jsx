import { FooterStyle, HeartIcon, SocialLink } from "./Footer.styled"
import { BsGithub, BsLinkedin } from 'react-icons/bs';


export const Footer = () => {
    return (
        <FooterStyle>
            <HeartIcon/>
            <p> Мельниченко Євгенія</p>
            <SocialLink to='https://github.com/MelnychenkoJenny?tab=repositories'><BsGithub/></SocialLink>
            <SocialLink to='https://www.linkedin.com/in/yevheniia-melnychenko/'><BsLinkedin/></SocialLink>
             
        </FooterStyle>
    )
}