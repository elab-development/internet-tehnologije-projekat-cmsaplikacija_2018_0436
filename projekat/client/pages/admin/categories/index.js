import { useState, useEffect, useContext } from "react";
import { Layout } from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Form, Input, Row, Col, Button, List } from "antd";
import { EditOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-hot-toast";
import CategoryUpdateModal from "../../../components/modal/CategoryUpdateModal";
import { PostContext } from "../../../context/post";

const { Content, Sider } = Layout;

function Categories() {
  // context
  const [post, setPost] = useContext(PostContext);
  // state
  const [loading, setLoading] = useState(false);
  // update state
  const [updatingCategory, setUpdatingCategory] = useState({});
  const [visible, setVisible] = useState(false);
  // hooks
  const [form] = Form.useForm();

  const { categories } = post;

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const { data } = await axios.get("/categories");
      setPost((prev) => ({ ...prev, categories: data }));
    } catch (err) {
      console.log(err);
    }
  };

  const onFinish = async (values) => {
    // console.log("values => ", values);
    try {
      setLoading(true);
      const { data } = await axios.post("/category", values);
      setPost((prev) => ({ ...prev, categories: [data, ...categories] }));
      // console.log(data);
      toast.success("Kategorija kreirana uspesno!");
      setLoading(false);
      form.resetFields(["name"]);
    } catch (err) {
      console.log(err);
      toast.error("Kategorija neuspesno kreirana!");
      setLoading(false);
    }
  };

  const handleDelete = async (item) => {
    try {
      const { data } = await axios.delete(`/category/${item.slug}`);
      setPost((prev) => ({
        ...prev,
        categories: categories.filter((cat) => cat._id !== data._id),
      }));
      toast.success("Kategorija obrisana uspesno!");
    } catch (err) {
      console.log(err);
      toast.error("Brisanje neuspesno!");
    }
  };

  const handleEdit = async (item) => {
    setUpdatingCategory(item);
    setVisible(true);
  };

  const handleUpdate = async (values) => {
    try {
      const { data } = await axios.put(
        `/category/${updatingCategory.slug}`,
        values
      );
      const newCategories = categories.map((cat) => {
        if (cat._id === data._id) {
          return data;
        }
        return cat;
      });
      setPost((prev) => ({ ...prev, categories: newCategories }));
      toast.success("Kategorija azurirana uspesno!");
      setVisible(false);
      setUpdatingCategory({});
    } catch (err) {
      console.log(err);
      toast.error("Neuspesno azuriranje!");
    }
  };

  return (
    <AdminLayout>
      <Row>
        {/* first column */}
        <Col xs={22} sm={22} lg={10} offset={1}>
          <h1>Kategorije</h1>
          <p>Dodaj novu kategoriju</p>

          <Form onFinish={onFinish} form={form}>
            <Form.Item name="name">
              <Input
                prefix={<EditOutlined className="site-form-item-icon" />}
                placeholder="Naziv..."
              />
            </Form.Item>
            <Button loading={loading} type="primary" htmlType="submit">
              Potvrdi
            </Button>
          </Form>
        </Col>
        {/* second column */}
        <Col xs={22} sm={22} lg={10} offset={1}>
          <List
            itemLayout="horizontal"
            dataSource={categories}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <a onClick={() => handleEdit(item)}>izmeni</a>,
                  <a onClick={() => handleDelete(item)}>obrisi</a>,
                ]}
              >
                <List.Item.Meta title={item.name} />
              </List.Item>
            )}
          ></List>
        </Col>

        <CategoryUpdateModal
          visible={visible}
          setVisible={setVisible}
          handleUpdate={handleUpdate}
          updatingCategory={updatingCategory}
        />
      </Row>
    </AdminLayout>
  );
}

export default Categories;
