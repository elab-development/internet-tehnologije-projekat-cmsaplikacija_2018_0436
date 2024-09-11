import { useState, useContext, useEffect } from "react";
import { Form, Input, Button, Checkbox, Col, Row } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

function ContactForm() {
  // state
  const [loading, setLoading] = useState(false);
  // hooks
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    // console.log("values => ", values);
    setLoading(true);
    try {
      const { data } = await axios.post("/contact", values);
      if (data?.error) {
        toast.error(data?.error);
        setLoading(false);
      } else {
        toast.success("Vasa poruka je uspesno poslata!");
        form.resetFields();
        setLoading(false);
      }
    } catch (err) {
      console.log("err => ", err);
      setLoading(false);
      toast.error("Email nije ispravan. Pokusaj ponovo.");
    }
  };

  return (
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: "100px" }}>Kontakt</h1>

        <Form
          form={form}
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          {/* name */}
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Unesi svoje ime..." }]}
            hasFeedback
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Vase ime"
            />
          </Form.Item>
          {/* email */}
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Unesi svoj email..." }]}
            hasFeedback
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Vas email"
            />
          </Form.Item>
          {/* message */}
          <Form.Item
            name="message"
            rules={[{ required: true, message: "Unesi poruku..." }]}
            hasFeedback
          >
            <Input.TextArea
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Napisi poruku ovde..."
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Posalji poruku!
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default ContactForm;
