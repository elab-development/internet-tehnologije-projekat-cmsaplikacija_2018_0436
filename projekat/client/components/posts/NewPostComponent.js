import { useContext, useState, useEffect } from "react";
import { Layout, Row, Col, Input, Select, Modal, Button, Image } from "antd";
import Editor from "rich-markdown-editor";
import { ThemeContext } from "../../context/theme";
import axios from "axios";
import { uploadImage } from "../../functions/upload";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { UploadOutlined } from "@ant-design/icons";
import Media from "../media";
import { MediaContext } from "../../context/media";

const { Option } = Select;
const { Content, Sider } = Layout;

function NewPostComponent({ page = "admin" }) {
  // load from local storage
  const savedTitle = () => {
    if (process.browser) {
      if (localStorage.getItem("post-title")) {
        return JSON.parse(localStorage.getItem("post-title"));
      }
    }
  };
  const savedContent = () => {
    if (process.browser) {
      if (localStorage.getItem("post-content")) {
        return JSON.parse(localStorage.getItem("post-content"));
      }
    }
  };
  // context
  const [theme, setTheme] = useContext(ThemeContext);
  const [media, setMedia] = useContext(MediaContext);
  // state
  const [title, setTitle] = useState(savedTitle());
  const [content, setContent] = useState(savedContent());
  const [categories, setCategories] = useState([]);
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // hook
  const router = useRouter();

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const { data } = await axios.get("/categories");
      setLoadedCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePublish = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/create-post", {
        title,
        content,
        categories,
        featuredImage: media?.selected?._id,
      });
      if (data?.error) {
        toast.error(data?.error);
        setLoading(false);
      } else {
        // console.log("POST PUBLISHED RES => ", data);
        toast.success("Post kreiran uspesno!");
        localStorage.removeItem("post-title");
        localStorage.removeItem("post-content");
        setMedia({ ...media, selected: null });
        router.push(`/${page}/posts`);
      }
    } catch (err) {
      console.log(err);
      toast.error("Post neuspesno kreiran.");
      setLoading(false);
    }
  };

  return (
    <Row>
      <Col span={14} offset={1}>
        <h1>Kreiraj novu objavu</h1>
        <Input
          size="large"
          value={title}
          placeholder="Napisi naslov objave..."
          onChange={(e) => {
            setTitle(e.target.value);
            localStorage.setItem("post-title", JSON.stringify(e.target.value));
          }}
        />
        <br />
        <br />
        <div className="editor-scroll">
          <Editor
            dark={theme === "light" ? false : true}
            defaultValue={content}
            onChange={(v) => {
              setContent(v());
              localStorage.setItem("post-content", JSON.stringify(v()));
            }}
            uploadImage={uploadImage}
          />
        </div>

        <br />
        <br />
      </Col>

      <Col span={6} offset={1}>
        <Button
          style={{ margin: "10px 0px 10px 0px", width: "100%" }}
          onClick={() => setVisible(true)}
        >
          Prikazi pregled pre objavljivanja
        </Button>

        <Button
          style={{ margin: "10px 0px 10px 0px", width: "100%" }}
          onClick={() => setMedia({ ...media, showMediaModal: true })}
        >
          <UploadOutlined /> Featured Image
        </Button>

        <h4>Kategorije</h4>

        <Select
          mode="multiple"
          allowClear={true}
          placeholder="Odaberi kategorije...."
          style={{ width: "100%" }}
          onChange={(v) => setCategories(v)}
        >
          {loadedCategories.map((item) => (
            <Option key={item.name}>{item.name}</Option>
          ))}
        </Select>

        {media?.selected && (
          <div style={{ marginTop: "15px" }}>
            <Image width="100%" src={media?.selected?.url} />
          </div>
        )}

        <Button
          loading={loading}
          style={{ margin: "10px 0px 10px 0px", width: "100%" }}
          type="primary"
          onClick={handlePublish}
        >
          Objavi
        </Button>
      </Col>
      {/* preview modal */}
      <Modal
        title="Preview"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={720}
        footer={null}
      >
        <h1>{title}</h1>
        <Editor
          dark={theme === "light" ? false : true}
          defaultValue={content}
          readOnly={true}
        />
      </Modal>
      {/* media modal */}
      <Modal
        visible={media.showMediaModal}
        title="Media"
        onOk={() => setMedia({ ...media, showMediaModal: false })}
        onCancel={() => setMedia({ ...media, showMediaModal: false })}
        width={720}
        footer={null}
      >
        <Media />
      </Modal>
    </Row>
  );
}

export default NewPostComponent;
