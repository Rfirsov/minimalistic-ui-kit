import { lazy as _lazy } from 'react';

type SvgIconImport = Promise<{ default: React.ComponentType<React.SVGProps<SVGSVGElement>> }>;

const lazy = (importFn: () => SvgIconImport) => {
  return _lazy(async () => {
    const m = await importFn();
    return { default: m.default };
  });
};

export const Icons = {
  Alarm: lazy(async () => import('./../../../src/assets/icons/alarm.svg?react')),
  Arrow: lazy(async () => import('./../../../src/assets/icons/arrow.svg?react')),
  Calendar: lazy(async () => import('./../../../src/assets/icons/calendar.svg?react')),
  Check: lazy(async () => import('./../../../src/assets/icons/check.svg?react')),
  CheckCircleOutline: lazy(async () => import('./../../../src/assets/icons/check-circle-outline.svg?react')),
  CheckCircleSolid: lazy(async () => import('./../../../src/assets/icons/check-circle-solid.svg?react')),
  Close: lazy(async () => import('./../../../src/assets/icons/close.svg?react')),
  ErrorOutline: lazy(async () => import('./../../../src/assets/icons/error-outline.svg?react')),
  ErrorSolid: lazy(async () => import('./../../../src/assets/icons/error-solid.svg?react')),
  FilterOutline: lazy(async () => import('./../../../src/assets/icons/filter-outline.svg?react')),
  FilterSolid: lazy(async () => import('./../../../src/assets/icons/filter-solid.svg?react')),
  HelpCircleOutline: lazy(async () => import('./../../../src/assets/icons/help-circle-outline.svg?react')),
  HelpCircleSolid: lazy(async () => import('./../../../src/assets/icons/help-circle-solid.svg?react')),
  HomeAltOutline: lazy(async () => import('./../../../src/assets/icons/home-alt-outline.svg?react')),
  HomeAltSolid: lazy(async () => import('./../../../src/assets/icons/home-alt-solid.svg?react')),
  Mail: lazy(async () => import('./../../../src/assets/icons/mail.svg?react')),
  MessageWarning: lazy(async () => import('./../../../src/assets/icons/message-warning.svg?react')),
  LocationSolid: lazy(async () => import('./../../../src/assets/icons/location-solid.svg?react')),
  NotificationSolid: lazy(async () => import('./../../../src/assets/icons/notification-solid.svg?react')),
  Settings: lazy(async () => import('./../../../src/assets/icons/settings.svg?react')),
  SettingsSolid: lazy(async () => import('./../../../src/assets/icons/settings-solid.svg?react')),
  Slider: lazy(async () => import('./../../../src/assets/icons/slider.svg?react')),
  TrashFull: lazy(async () => import('./../../../src/assets/icons/trash-full.svg?react')),
  UserSquare: lazy(async () => import('./../../../src/assets/icons/user-square.svg?react')),
  WarningOutline: lazy(async () => import('./../../../src/assets/icons/warning-outline.svg?react')),
  WarningSolid: lazy(async () => import('./../../../src/assets/icons/warning-solid.svg?react')),
};
