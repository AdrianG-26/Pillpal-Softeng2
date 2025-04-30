import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Configure notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const scheduleMedicineNotification = async (
  medicineId: string,
  medicineName: string,
  dosage: string,
  mode: string,
  scheduledTime: Date
) => {
  // Request permissions
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  
  if (finalStatus !== 'granted') {
    console.log('Failed to get push token for push notification!');
    return;
  }

  // Cancel any existing notification for this medicine
  await Notifications.cancelScheduledNotificationAsync(medicineId);

  // Schedule the new notification
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Medicine Reminder',
      body: `Time to take ${medicineName}: ${dosage} ${mode}`,
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      vibrate: [0, 250, 250, 250],
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DATE,
      date: scheduledTime,
    },
    identifier: medicineId,
  });
};

export const cancelMedicineNotification = async (medicineId: string) => {
  await Notifications.cancelScheduledNotificationAsync(medicineId);
};

export const initializeNotifications = async () => {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('medicine-reminders', {
      name: 'Medicine Reminders',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
}; 