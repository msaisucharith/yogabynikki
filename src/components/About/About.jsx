import Styles from "./About.module.css";

function About() {
  return (
    <>
      <div className={Styles.about} id="about">
        <div className={Styles.aboutInfo}>
          <h2>We are YogaByNikki, a yoga studio based in Vancouver, Canada.</h2>
          <p>
            In our beautiful studio, learn from our workshops, restore your body
            and soul with our classes, and feel better about yourself.
          </p>
        </div>
        <div className={Styles.aboutPic}>
          <img
            className={Styles.imgs}
            src="public/aboutimg.jpg"
            alt="About-img"
          />
        </div>
      </div>

      <div className={Styles.classes}>
        <div className={Styles.content}>
          <div className={Styles.classesAbout}>
            <h2>Our Classes</h2>
            <p>
              The studio conducts daily classes that welcome participants of all
              levels. In case you are a complete novice, we also provide basic
              classes to assist you in gaining the necessary confidence to
              acquaint yourself with your body.
            </p>
            <div className={Styles.classesAboutImg}>
              <button>View Classes</button>
            </div>
          </div>
          <div className={Styles.classesPhoto}>
            <img
              src="public/classesImg.jpeg"
              alt="ClassesImg"
              className={Styles.classesImg}
            />
          </div>
        </div>
      </div>

      {/* about instagram */}

      <div className={Styles.instagramPage} id="contact">
        <p>Vist our Instagram page</p>
        <div className={Styles.instagramPageImg}>
          <button>Instagram</button>
        </div>
      </div>
    </>
  );
}

export default About;
