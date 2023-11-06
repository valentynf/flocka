import { v4 as uuid } from 'uuid';
import { MessageData } from '../types/appTypes';

export const generateMessage = (
  senderId: string,
  message: string
): MessageData => {
  const messageData = { senderId, message, id: uuid(), timestamp: Date.now() };
  return messageData;
};
