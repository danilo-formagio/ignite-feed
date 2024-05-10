import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/5075904?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Danilo Formagio</strong>
              <time
                title="29 de abril às 20:00h"
                dateTime="2024-04-29 20:00:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
