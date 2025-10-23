import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function ModalExamplePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Руководство</title>
      </Helmet>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Link to="/">На главную</Link>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </HelmetProvider>
  );
}

export default ModalExamplePage;
