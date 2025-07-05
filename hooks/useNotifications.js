import { useSelector } from "react-redux";
import {
  selectNotifications,
  selectUnreadCount,
} from "../redux/slices/notificationSlice";

export const useNotifications = () => {
  const notifications = useSelector(selectNotifications);
  const unreadCount = useSelector(selectUnreadCount);

  return { notifications, unreadCount };
}; 