import LOGO_footer from "/LOGO_footer.svg"
import "../styles/footer.css"

const Footer = () => {
    return (
        <footer>
            <img src={LOGO_footer} alt="footer" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer