import styles from "../Styles/About.module.css"

const MiniProfileList = () => {
    const persons = [
      {
        name: "Bartłomiej Strama",
        photo:
          "https://cdn.discordapp.com/attachments/893183477204254750/945800467651383346/unknown.png",
        role: "Bartłomiej Strama, CEO, Founder, Back-End Developer",
        key: 1,
      },
      {
        name: "Tomasz Mamala",
        photo:
          "https://media.discordapp.net/attachments/893183477204254750/997578759894994944/Nowe_zdjecie_prof_na_5_lat_nie_usuwac_przyciete.jpg?width=511&height=682",
        role: "Tomasz Mamala, CEO, Front-End Developer",
        key: 2,
      },
      {
        name: "Maciej Serweta",
        photo:
          "https://cdn.discordapp.com/attachments/893183477204254750/997587439671574528/unknown.png",
        role: "Maciej Serweta, CMO",
        key: 3,
      },
    ];

    return <div className={styles.miniProfilesGrid}>
        {persons.map((personData) => {
            return <div className={styles.imgWrapper} key={personData.key}>
              <img src={personData.photo} alt={personData.name} />
              <div className={`${styles.content} ${styles.fade}`}>
                {personData.role}
              </div>
            </div>;
        })}
    </div>; 
}

export default MiniProfileList;