import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

const Post = ({
  image,
  date,
  type,
  description,
  title,
  _id,
  recentArticle = false,
}) => {
  return (
    <article
      className={`${styles.blogPostArticle} ${
        recentArticle ? styles.recentArticle : ""
      }`}
    >
      {!recentArticle && (
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={title}
            width={350}
            height={200}
            objectFit="cover"
          />
        </div>
      )}
      <div className={styles.meta}>
        <span>{date}</span>
        <span>{type}</span>
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>
          {recentArticle ? description.slice(0, 95) : description}
        </p>
      </div>
      <div className={styles.headingContainer}>
        <span className={styles.line} style={{ borderColor: "#ff00f7" }}></span>
        <Link href={`/blog/${_id}`}>
          <a
            className={styles.heading}
            style={{ color: "#ff00f7", fontWeight: "500" }}
          >
            Read more
          </a>
        </Link>
      </div>
    </article>
  );
};

export default Post;
