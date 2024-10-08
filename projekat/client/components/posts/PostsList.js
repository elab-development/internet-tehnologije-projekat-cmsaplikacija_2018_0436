import { List } from "antd";
import Link from "next/link";

const PostsList = ({ posts, handleDelete, handleEdit }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={posts}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a onClick={() => handleEdit(item)}>edituj</a>,
            <a onClick={() => handleDelete(item)}>obrisi</a>,
          ]}
        >
          <List.Item.Meta title={item.title} />
        </List.Item>
      )}
    />
  );
};

export default PostsList;
