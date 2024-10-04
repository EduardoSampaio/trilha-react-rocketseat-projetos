import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/11180235?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Eduardo Sampaio</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 maio ás 08:13" dateTime="2022-05-11 08:13:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
          voluptatum ullam nulla doloribus, nihil alias, voluptates saepe
          provident, delectus ipsam odit voluptatem tenetur nostrum neque vitae
          ipsa inventore excepturi? Accusantium?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
          voluptatum ullam nulla doloribus, nihil alias, voluptates saepe
          provident, delectus ipsam odit voluptatem tenetur nostrum neque vitae
          ipsa inventore excepturi? Accusantium?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
          voluptatum ullam nulla doloribus, nihil alias, voluptates saepe
          provident, delectus ipsam odit voluptatem tenetur nostrum neque vitae
          ipsa inventore excepturi? Accusantium?
        </p>
      </div>
    </article>
  );
}
