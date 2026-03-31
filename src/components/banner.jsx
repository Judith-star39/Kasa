import "../styles/banner.css";

export default function Banner ()  {
  return (
    <section className="main-content">
        <div className="banner-img">
            <img src="/bannerImg.png" alt="accueil" />
            <div className="banner-text">
                <h1>Chez vous, partout ailleurs</h1>
            </div>
        </div>
    </section>
  )


}

