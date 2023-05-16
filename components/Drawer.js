import React, { useState } from "react";
import { Modal, Button } from "react-native";

const Drawer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        title="Open Modal"
        onPress={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <Modal
          visible={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <View>
            <Text>This is the content of the modal</Text>
          </View>
        </Modal>
      )}
    </>
  );
};

export default Drawer;
