import React from "react";
import Footer from "../../components/Footer";
import styles from "../../styles/Blog.module.css";
import { FaSearch } from "react-icons/fa";
import { blogArticles } from "../../data/blog/articles";
import Image from "next/image";
import Link from "next/link";
import Post from "../../components/Post";
import CallToAction from "../../components/CallToAction";

const Blog = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <header className={styles.sectionOne}>
        <div className={styles.headingContainer}>
          <span className={styles.line}></span>
          <h1 className={styles.heading}>Blog</h1>
        </div>
        <div className={styles.mainParagraph}>
          <p>Articles and News</p>
        </div>
      </header>
      <main>
        <div className={styles.sectionTwo}>
          <div className={styles.sectonTwoFirstDiv}>
            <h3 className={styles.sectonTwoFirstDivH3}>Latest From The Blog</h3>
            <p className={styles.sectonTwoFirstDivP}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, nam
              culpa nemo vitae nisi officiis quia architecto{" "}
            </p>
          </div>
          <div className={styles.sectonTwoSecondDiv}>
            <form
              onSubmit={handleSearch}
              className={styles.sectionTwoSecondDivForm}
            >
              <input
                type="text"
                placeholder="Search here"
                className={styles.sectionTwoSecondDivInput}
              />
              <button
                type="submit"
                className={styles.sectionTwoSecondDivButton}
              >
                <FaSearch size={20} />
              </button>
            </form>
          </div>
        </div>
        <section className={styles.blogPostsContainer}>
          {blogArticles.map((blogArticle, index) => {
            const { _id, date, type, image, title, description } = blogArticle;

            return (
              <Post
                key={_id}
                date={date}
                type={type}
                image={image}
                title={title}
                description={description}
                _id={_id}
              />
            );
          })}
        </section>
        <section className={styles.recentArticlesContainer}>
          <div className={styles.recentArticlesContainerFirstDiv}>
            <h2 className={styles.recentArticlesContainerH2}>
              Recent Articles
            </h2>
            <p className={styles.recentArticlesContainerP}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolor
              debitis sed reprehenderit tenetur exercitationem omnis autem ipsa
            </p>
          </div>
          <div className={styles.blogPostsContainer}>
            {blogArticles
              .filter((x, index) => index < 3)
              .map((blogArticle) => {
                const { _id, date, type, image, title, description } =
                  blogArticle;

                return (
                  <Post
                    key={_id}
                    date={date}
                    type={type}
                    image={image}
                    title={title}
                    description={description}
                    _id={_id}
                    recentArticle
                  />
                );
              })}
          </div>
          <div className={styles.recentLoadMore}>
            <button className={styles.recentLoadMoreButton}>Load More</button>
          </div>
        </section>
        <section>
          <CallToAction
            title="Want to know more about metricks?"
            actionName="Learn who we are and what drives us."
            backgroundColor
          />
        </section>
      </main>
      <Footer backgroundColor={false} />
    </div>
  );
};

export default Blog;
