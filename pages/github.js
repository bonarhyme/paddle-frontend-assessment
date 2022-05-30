import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  TiArrowLeftOutline,
  TiArrowRightOutline,
  TiTimes,
  TiHomeOutline,
} from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import styles from "../styles/Github.module.css";
import imageA from "../data/github/placeholders/imageA.png";

const requestInitialState = {
  loading: false,
  success: false,
  list: [],
  error: false,
  errorMessage: "",
};

const mostStaredRepositoryURL = `https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc`;

const Github = () => {
  const [requestState, setRequestState] = useState(requestInitialState);

  useEffect(() => {
    try {
      const getRepository = async () => {
        setRequestState({
          loading: true,
          error: false,
          success: false,
          errorMessage: "",
          list: [],
        });
        const { data } = await axios.get(mostStaredRepositoryURL);

        // console.log(data.items);
        setRequestState({
          loading: false,
          error: false,
          success: true,
          errorMessage: "",
          list: data?.items,
        });
        console.log(data.items);
      };
      getRepository();
    } catch (error) {
      setRequestState({
        loading: false,
        error: true,
        success: false,
        errorMessage: error,
        list: [],
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Trending Repos</h1>
        <div className={styles.sectionOneDiv}>
          <span className={styles.icon}>
            <TiArrowLeftOutline size={30} />
          </span>
          <span className={styles.icon}>
            <TiArrowRightOutline size={30} />
          </span>
          <span className={styles.icon}>
            <TiTimes size={30} />
          </span>
          <span className={styles.icon}>
            <TiHomeOutline size={30} />
          </span>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="" className={styles.input} />
            <button
              type="submit"
              // className={styles.sectionTwoSecondDivButton}
            >
              <FaSearch size={20} />
            </button>
          </form>
        </div>
      </header>
      <main>
        <section className={styles.sectionTwo}>
          {requestState.loading && (
            <div className={styles.spinnerContainer}>
              <div className={styles.spinner}></div>
            </div>
          )}
          {requestState.list.length > 0 &&
            requestState.list.map((repo, index) => {
              console.log(index);
              const {
                owner,
                name,
                description,
                open_issues,
                stargazers_count,
                pushed_at,
                id,
              } = repo;

              return (
                <article key={id} className={styles.sectionTwoArticle}>
                  <div className={styles.imageContainer}>
                    {owner?.avatar_url && (
                      <Image
                        src={owner.avatar_url ? owner.avatar_url : imageA}
                        alt={description}
                        width={200}
                        height={200}
                        objectFit="cover"
                      />
                    )}
                  </div>
                  <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div>
                      <span>Starts: {stargazers_count}</span>
                      <span>Issues: {open_issues}</span>
                      <span>
                        Submitted {pushed_at} by {owner?.login}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
        </section>
      </main>
    </div>
  );
};

export default Github;
