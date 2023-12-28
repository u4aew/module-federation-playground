import { Channels } from '@/events/const/channels';
import { EnumRole } from '@/types';

let eventHandler: ((event: Event) => void) | null = null;

export const onChangeUserRole = (cb: (role: EnumRole) => void): void => {
  eventHandler = (event: Event) => {
    const customEvent = event as CustomEvent<{ role: EnumRole }>;
    if (customEvent.detail) {
      console.log(`On ${Channels.changeUserRole} - ${customEvent.detail.role}`);
      cb(customEvent.detail.role);
    }
  };

  window.addEventListener(Channels.changeUserRole, eventHandler);
};

export const stopListeningToUserRoleChange = (): void => {
  if (eventHandler) {
    window.removeEventListener(Channels.changeUserRole, eventHandler);
    eventHandler = null;
  }
};

export const emitChangeUserRole = (newRole: EnumRole): void => {
  console.log(`Emit ${Channels.changeUserRole} - ${newRole}`);
  const event = new CustomEvent(Channels.changeUserRole, {
    detail: { role: newRole },
  });
  window.dispatchEvent(event);
};
