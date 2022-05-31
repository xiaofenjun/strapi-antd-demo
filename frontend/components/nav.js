import React from "react"
import { Menu } from "antd"
import Router from "next/router"

const Nav = ({ categories, currentMenu }) => {
  let items = categories.map((category) => {
    return {
      label: category.attributes.name,
      key: String(category.id),
      url: `/category/${category.attributes.slug}`,
    }
  })
  items = [{ label: "Strapi Blog", key: "0", url: "/" }, ...items]

  const onClick = (e) => {
    Router.push(e.item.props.url)
  }

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[currentMenu]}
      mode="horizontal"
      items={items}
    />
  )
}

export default Nav
