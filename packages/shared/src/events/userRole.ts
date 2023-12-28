import { Channels } from '@/events/const/channels';
import { EnumRole } from '@/types';

export const onChangeUserRole = (cb: (role: EnumRole) => void): void => {
  window.addEventListener(Channels.changeUserRole, (event: Event) => {
    const customEvent = event as CustomEvent<{ role: EnumRole }>;
    if (customEvent.detail) {
      cb(customEvent.detail.role);
    }
  });
};

export const emitChangeUserRole = (newRole: EnumRole): void => {
  const event = new CustomEvent(Channels.changeUserRole, {
    detail: { role: newRole },
  });
  window.dispatchEvent(event);
};
