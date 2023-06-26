import { FooterStyle } from "./Footer.styled"
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <FooterStyle>
            <p>❤ Мельниченко Євгенія</p>
            <Link to='https://github.com/MelnychenkoJenny?tab=repositories'><BsGithub/></Link>
            <Link to='https://www.linkedin.com/in/yevheniia-melnychenko/'><BsLinkedin/></Link>
             
        </FooterStyle>
    )
}