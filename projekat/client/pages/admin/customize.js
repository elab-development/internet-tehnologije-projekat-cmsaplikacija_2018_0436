import { useState, useContext, useEffect } from "react";
import { Row, Col, Input, Button, Image, Divider } from "antd";
import Media from "../../components/Media";
import { MediaContext } from "../../context/media";
import axios from "axios";
import toast from "react-hot-toast";
import AdminLayout from "../../components/layout/AdminLayout";
import useHome from "../../hooks/useHome";

const Customize = () => {
  // context
  const [media, setMedia] = useContext(MediaContext);
  // state
  const [loading, setLoading] = useState("");

  const {
    title,
    subtitle,
    fullWidthImage,
    setTitle,
    setSubtitle,
    setFullWidthImage,
  } = useHome();

  const handleSave = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/page", {
        page: "home",
        title,
        subtitle,
        fullWidthImage: media?.selected?._id,
      });
      setLoading(false);
      toast.success("Sacuvano!");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <Row>
        <Col span={24}>
          <Divider>
            <h1>Uredi pocetnu stranicu</h1>
            <p>Postavi pozadinu, naslov i podnaslov na pocetnoj strani</p>
          </Divider>
        </Col>

        <Col span={18}>
          <Media />

          <Input
            style={{ margin: "20px 0px 20px 0px" }}
            size="large"
            placeholder="Napisi neki naslov"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            size="large"
            placeholder="Napisi neki podnaslov"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />

          <Button
            onClick={handleSave}
            type="default"
            style={{ margin: "10px 0px 10px 0px" }}
            loading={loading}
            block
          >
            Sacuvaj
          </Button>
        </Col>

        <Col span={6}>
          <div style={{ margin: "40px 0px 0px 20px" }}>
            {media?.selected ? (
              <Image width="100%" src={media?.selected?.url} />
            ) : fullWidthImage ? (
              <Image width="100%" src={fullWidthImage.url} />
            ) : (
              ""
            )}
          </div>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default Customize;
