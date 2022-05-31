import Nav from "./nav"
import { Layout } from "antd"
const { Header, Footer, Sider, Content } = Layout

const MyLayout = ({ children, categories, seo, currentMenu }) => (
  <Layout>
    <Header style={{ padding: "0" }}>
      <Nav categories={categories} currentMenu={currentMenu} />
    </Header>
    <Content>{children}</Content>
  </Layout>
)

export default MyLayout
