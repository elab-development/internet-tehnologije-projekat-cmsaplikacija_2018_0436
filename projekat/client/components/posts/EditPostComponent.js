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

function EditPost({ page = "admin" }) {
  // context
  const [theme, setTheme] = useContext(ThemeContext);
  const [media, setMedia] = useContext(MediaContext);
  // state
  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]); // post's existing categories
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [featuredImage, setFeaturedImage] = useState({});
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  // media Modal
  // const [visibleMedia, setVisibleMedia] = useState(false);
  // hook
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.slug) {
      loadPost();
    }
  }, [router?.query?.slug]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadPost = async () => {
    try {
      const { data } = await axios.get(`/post/${router.query.slug}`);
      console.log("GOT POST FOR EDIT", data);
      setTitle(data.post.title);
      setContent(data.post.content);
      setFeaturedImage(data.post.featuredImage);
      setPostId(data.post._id);
      // push category names
      let arr = [];
      data.post.categories.map((c) => arr.push(c.name));
      setCategories(arr);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const loadCategories = async () => {
    try {
      const { data } = await axios.get("/categories");
      setLoadedCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePublish = async () => {
    if (!postId) {
      toast.error("Post ID nedostaje. Ne moze se azurirati post.");
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.put(`/edit-post/${postId}`, {
        title,
        content,
        categories,
        featuredImage: media?.selected?._id
          ? media?.selected?._id
          : featuredImage?._id
          ? featuredImage._id
          : undefined,
      });
      if (data?.error) {
        toast.error(data?.error);
        setLoading(false);
      } else {
        // console.log("POST PUBLISHED RES => ", data);
        toast.success("Post uspesno azuriran!");
        setMedia({ ...media, selected: null });
        router.push(`/${page}/posts`);
      }
    } catch (err) {
      console.log(err);
      toast.error("Kreiranje objave neuspesno!");
      setLoading(false);
    }
  };

  return (
    <Row>
      <Col span={14} offset={1}>
        <h1>Izmeni objavu</h1>
        <Input
          size="large"
          value={title}
          placeholder="Postavi naziv objave"
          onChange={(e) => {
            setTitle(e.target.value);
            localStorage.setItem("post-title", JSON.stringify(e.target.value));
          }}
        />
        <br />
        <br />
        {loading ? (
          <div>Ucitavanje...</div>
        ) : (
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
        )}

        <br />
        <br />
      </Col>

      <Col span={6} offset={1}>
        <Button
          style={{ margin: "10px 0px 10px 0px", width: "100%" }}
          onClick={() => setVisible(true)}
        >
          Preview
        </Button>

        <Button
          style={{ margin: "10px 0px 10px 0px", width: "100%" }}
          onClick={() => setMedia({ ...media, showMediaModal: true })}
        >
          <UploadOutlined /> Istaknuta slika
        </Button>

        <h4>Kategorije</h4>

        <Select
          mode="multiple"
          allowClear={true}
          placeholder="Selektuj kategorije..."
          style={{ width: "100%" }}
          onChange={(v) => setCategories(v)}
          value={[...categories]}
        >
          {loadedCategories.map((item) => (
            <Option key={item.name}>{item.name}</Option>
          ))}
        </Select>

        {media?.selected ? (
          <div style={{ marginTop: "15px" }}>
            <Image width="100%" src={media?.selected?.url} />
          </div>
        ) : featuredImage?.url ? (
          <div style={{ marginTop: "15px" }}>
            <Image width="100%" src={featuredImage?.url} />
          </div>
        ) : (
          ""
        )}

        <Button
          loading={loading}
          style={{ margin: "10px 0px 10px 0px", width: "100%" }}
          type="primary"
          onClick={handlePublish}
        >
          Publish
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

export default EditPost;
