import { Modal } from "antd";
import { MicroApp } from "umi";
export default function (props) {
  const { visible, setLoginVisible } = props;
  return (
    <Modal
      visible={visible}
      width={800}
      onCancel={() => {
        setLoginVisible(false);
      }}
      bodyStyle={{ padding: 0 }}
      footer={null}
    >
      <MicroApp name="login" />
    </Modal>
  );
}
