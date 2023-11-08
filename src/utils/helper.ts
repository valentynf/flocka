import { v4 as uuid } from 'uuid';
import { MessageData } from '../types/appTypes';

export const generateMessage = (
  senderId: string,
  message: string
): MessageData => {
  const messageData = { senderId, message, id: uuid(), timestamp: Date.now() };
  return messageData;
};

export const loadImageFromInput = (
  file: File,
  setImageSrc: (src: string) => void
) => {
  const reader = new FileReader();
  reader.onload = () => {
    setImageSrc(reader.result as string);
  };
  reader.readAsDataURL(file);
};
