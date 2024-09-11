import { useState, useContext } from "react";
import { Form, Input, Button, Checkbox, Col, Row } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";

function ForgotPassword() {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  // state
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  // hooks
  const router = useRouter();
  const [form] = Form.useForm();

  const forgotPasswordRequest = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/forgot-password", values);
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        toast.success(
          "Proveri email adresu. Kod za resetovanje sifre je poslat."
        );
        setLoading(false);
        setVisible(true);
      }
    } catch (err) {
      console.log(err);
      toast.error("Neuspeh. Probaj ponovo.");
      setLoading(false);
    }
  };

  const resetPasswordRequest = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/reset-password", values);
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        toast.success(
          "Sifra promenjena uspesno. Prijavi se sa novom sifrom nakon zatvaranja ovog obavestenja."
        );
        form.resetFields(["email"]);
        setLoading(false);
        setVisible(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("Neuspeh.");
      setLoading(false);
    }
  };

  return (
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: "100px" }}>Zaboravili ste sifru?</h1>

        <Form
          form={form}
          name="normal_login"
          className="login-form"
          onFinish={visible ? resetPasswordRequest : forgotPasswordRequest}
        >
          {/* email */}
          <Form.Item name="email" rules={[{ type: "email" }]}>
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          {/* password */}
          {visible && (
            <>
              <Form.Item name="resetCode">
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Unesi kod za resetovanje sifre"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Unesite novu sifru!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Nova sifra..."
                />
              </Form.Item>
            </>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Potvrdi
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default ForgotPassword;
