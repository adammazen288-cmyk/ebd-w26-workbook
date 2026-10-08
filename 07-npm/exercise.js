import dayjs from "dayjs";

export function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}

export function yearOf(dateString) {
  return dayjs(dateString).year();
}

export function addDays(dateString, days) {
  return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
}

export const myPackage = "lodash";