import LOGO_footer from "/LOGO_footer.svg"
import "../styles/footer.css"

export default function Footer ()  {
    return (
        <footer>
            <img src={LOGO_footer} alt="footer" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

