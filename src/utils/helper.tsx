import { v4 as uuid } from 'uuid';
import { MessageData, UsersData } from '../types/appTypes';
import PublicChannelIcon from '../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import PrivateChannelIcon from '../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PrivateChannelIcon';

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

  return `${hours % 12 || 12}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${dayTime}`;
};

export const formatMessageDate = (timestamp: number): string => {
  const currentDate = new Date();
  const messageDate = new Date(timestamp);
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);

  if (isSameDay(currentDate, messageDate)) {
    return 'Today';
  }

  if (isSameDay(yesterday, messageDate)) {
    return 'Yesterday';
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  return `${messageDate.toLocaleDateString(undefined, options)}`;
};

const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const getThreeParticipants = (participants: string[]): string[] => {
  if (participants.length <= 3) return participants;
  return participants.slice(0, 3);
};

export const isMatchingThePattern = (
  input: string,
  pattern: string
): boolean => {
  return new RegExp(pattern).test(input);
};

export const getChannelIcon = (type: 'public' | 'private') => {
  return type === 'public' ? <PublicChannelIcon /> : <PrivateChannelIcon />;
};

export const focusInput = (
  inputRef: React.MutableRefObject<HTMLInputElement | null>
) => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
};
