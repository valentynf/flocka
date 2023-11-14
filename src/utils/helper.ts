import { v4 as uuid } from 'uuid';
import { MessageData, UsersData } from '../types/appTypes';

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

export const usersDataToRecord = (usersData: UsersData[]) =>
  usersData.reduce(
    (acc: Record<string, { name: string; avatar_src: string }>, el) => {
      acc[`${el.id}`] = { name: el.name, avatar_src: el.avatar_src };
      return acc;
    },
    {}
  );

export const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const dayTime = hours >= 12 ? 'PM' : 'AM';

  return `${hours % 12 || 12}:${minutes} ${dayTime}`;
};
