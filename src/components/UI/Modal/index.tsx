

import Button from "../Button";
import styles from "./style";
import {
  Modal,
  View,
  Text,
  GestureResponderEvent,
} from "react-native";

interface AppModalProps {
  visible: boolean;
  title?: string;
  message?: string;
  onConfirm?: (event: GestureResponderEvent) => void;
  onCancel?: (event: GestureResponderEvent) => void;
  confirmText?: string;
  cancelText?: string;
}

const AppModal = ({
  visible,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: AppModalProps) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {title && <Text style={styles.title}>{title}</Text>}
          {message && <Text style={styles.message}>{message}</Text>}

          <View style={styles.actions}>
            <Button
              textStyle={styles.cancelText}
              onPress={onCancel}
              variant="text"
              text={cancelText}
            />

            <Button
              style={styles.confirmBtn}
              textStyle={styles.confirmText}
              onPress={onConfirm}
              variant="outline"
              text={confirmText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AppModal;
