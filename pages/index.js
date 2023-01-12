import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yotam Levy | Cellist</title>
        <meta
          name="description"
          content="Hi. I am Yotam Levy, a performing cellist and instructor from Hamilton."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.appbar}>
          Yotam Levy<span style={{ color: "var(--orange)" }}>.</span>
        </div>
        <div className={styles.hello}>
          <div className={styles.helloImage}>
            <Image src="/hello.jpeg" alt="hero-yotam" fill />
          </div>
          <h1
            style={{
              fontSize: "32px",
              marginTop: "48px",
              fontWeight: "bold",
              letterSpacing: "1.3px",
            }}
          >
            Hello! <br />I am Yotam
          </h1>
          <div
            style={{
              marginTop: "16px",
              fontSize: "24px",
              fontFamily: "montserrat",
            }}
          >
            <span style={{ color: "orange" }}>
              cellist | performer | teacher
            </span>
          </div>
        </div>

        <div className={styles.about}>
          <div className={styles.aboutImage}>
            <Image src="/about.jpeg" alt="about-yotam" fill />
          </div>
          <div className={styles.aboutText}>
            <h2>About</h2>
            <p>
              Israel-born Yotam Levy started playing the cello under the
              tutelage of Susan Berman, prior to coming to New Zealand in 2003.
              He subsequently carried on his studies with Martin Griffiths for
              six years, and later graduated from the University of Waikato with
              a Bachelor of Music in cello performance. His musical activities
              are many and varied - a balance of teaching with an extensive
              involvement in a diverse stream of projects locally, from
              orchestral playing to chamber music; recording; multiple
              collaborations with local composers and artists, bringing new and
              original works to the performance stage.
            </p>
          </div>
        </div>
        <div className={styles.teaching}>
          <div className={styles.teachingImage}>
            <Image src="/teaching.jpg" alt="teaching-yotam" fill />
          </div>
          <div className={styles.teachingText}>
            <h2>My Teaching Style</h2>
            <p>
              Israel-born Yotam Levy started playing the cello under the
              tutelage of Susan Berman, prior to comingw to New Zealand in 2003.
              He subsequently carried on his studies with Martin Griffiths for
              six years, and later graduated from the University of Waikato with
              a Bachelor of Music in cello performance. His musical activities
              are many and varied - a balance of teaching with an extensive
              involvement in a diverse stream of projects locally, from
              orchestral playing to chamber music; recording; multiple
              collaborations with local composers and artists, bringing new and
              original works to the performance stage.
            </p>
          </div>
        </div>

        <div className={styles.contact}>
          <p
            style={{
              fontFamily: "PT serif",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Need a cello instructor or performer? <br />
            Feel free to drop me a line
          </p>
          <p
            style={{
              fontFamily: "montserrat",
              fontSize: "16px",
              margin: "16px",
            }}
          >
            yotamlevyvioloncellonz@gmail.com{" "}
          </p>

          <p
            style={{
              fontFamily: "PT serif",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Or feel out my lesson{" "}
            <a href="https://flni2grdqq9.typeform.com/to/KM0lwsMt">
              inquiry form
            </a>
          </p>
        </div>

        <div
          style={{
            textAlign: "center",
            margin: "32px 0",
            fontFamily: "montserrat",
            fontSize: "10px",
            color: "var(--yellow)",
          }}
        >
          <p>
            © <span style={{ fontFamily: "bungee" }}>Yotam Levy</span> 2023
          </p>
          <p style={{ marginTop: "8px" }}>
            Designed and built by Alejandro Larumbe
          </p>
        </div>
      </main>
    </>
  );
}
