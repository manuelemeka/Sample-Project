import { UserRole } from "./authHelper";

const data = [
  {
    id: "entryOne",
    label: "Entry 1",
    to: `/app/entryOne`,
    roles: [UserRole.User],
  },
  {
    id: "entryTwo",
    label: "Entry 2",
    to: `/app/entryTwo`,
    roles: [UserRole.User],
  },
  {
    id: "entryThree",
    label: "Entry 3",
    to: `/app/entryThree`,
    roles: [UserRole.User],
  },
  {
    id: "adminEntryOne",
    label: "Admin Entry 1",
    to: `/admin/aentryOne`,
    roles: [UserRole.Admin],
  },
  {
    id: "adminEntryTwo",
    label: "Admin Entry 2",
    to: `/admin/aentryTwo`,
    roles: [UserRole.Admin],
  },
  {
    id: "adminEntryThree",
    label: "Admin Entry 3",
    to: `/admin/aentryThree`,
    roles: [UserRole.Admin],
  },
];
export default data;
