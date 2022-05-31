import React from "react"
import MyLayout from "../components/my-layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import { Typography } from "antd"

const Home = ({ articles, categories, homepage }) => {
  return (
    <MyLayout categories={categories} currentMenu="0">
      <Seo seo={homepage.attributes.seo} />
      <Typography.Title>{homepage.attributes.hero.title}</Typography.Title>
      {/*<div className="uk-section">*/}
      {/*  <div className="uk-container uk-container-large">*/}
      {/*    <h1>{homepage.attributes.hero.title}</h1>*/}
      {/*    <Articles articles={articles} />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </MyLayout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
