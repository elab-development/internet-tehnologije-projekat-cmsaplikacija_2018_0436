import ParallaxImage from "./ParallaxImage";
import { Row, Col } from "antd";
import {
  UsergroupAddOutlined,
  ApiOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";

const Footer = () => (
  <div>
    <ParallaxImage url="/images/image3.jpeg">
      <Row>
        <Col span={8} style={{ textAlign: "center" }}>
          <UsergroupAddOutlined style={{ fontSize: 80 }} />
          <br />
          Moderna CMS platforma
        </Col>

        <Col span={8} style={{ textAlign: "center" }}>
          <ApiOutlined style={{ fontSize: 80 }} />
          <br />
          Izgradjena koristeci MERN aritekturu (MongoDB + Express.js + React (sa
          Next.js))
        </Col>

        <Col span={8} style={{ textAlign: "center" }}>
          <CopyrightOutlined style={{ fontSize: 80 }} />
          <br />
          ITEH {new Date().getFullYear()} &copy;. Sva prava zadrzana.
        </Col>
      </Row>
      <br />
    </ParallaxImage>
  </div>
);
export default Footer;
