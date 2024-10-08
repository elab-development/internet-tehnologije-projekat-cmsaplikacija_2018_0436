import { useState, useContext, useEffect } from "react";
import { Form, Input, Button, Checkbox, Col, Row } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";

function Signin() {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  // state
  const [loading, setLoading] = useState(false);
  // hooks
  const router = useRouter();
  // const [form] = Form.useForm();

  useEffect(() => {
    if (auth?.token) {
      router.push("/");
    }
  }, [auth]);

  const onFinish = async (values) => {
    // console.log("values => ", values);
    try {
      setLoading(true);
      const { data } = await axios.post("/signin", values);
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        // console.log("signin response => ", data);
        // save user and token to context
        setAuth(data);
        // save user and token to local storage
        localStorage.setItem("auth", JSON.stringify(data));
        toast.success("Uspesno prijavljivanje. Dobrodosli u aplikaciju!");
        // redirect user
        if (data?.user?.role === "Admin") {
          router.push("/admin");
        } else if (data?.user?.role === "Author") {
          router.push("/author");
        } else {
          router.push("/subscriber");
        }
        // form.resetFields();
      }
    } catch (err) {
      console.log("err => ", err);
      setLoading(false);
      toast.error("Prijava neuspesna. Pokusaj ponovo.");
    }
  };

  return (
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: "100px" }}>Prijava</h1>

        <Form
          // form={form}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
            email: "jelena@gmail.com",
            password: "",
          }}
          onFinish={onFinish}
        >
          {/* email */}
          <Form.Item name="email" rules={[{ type: "email" }]}>
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          {/* password */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Unesi svoju sifru!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Link href="/forgot-password">
            <a>Da li si zaboravio sifru?</a>
          </Link>
          <br />
          <br />

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Prijavi se
            </Button>
            <br />
            Or{" "}
            <Link href="/signup">
              <a>Registruj se sada!</a>
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default Signin;
