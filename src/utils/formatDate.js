// 2025-12-29T20:04:00 → 2025. 12. 29
export function formatDate(value) {
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);

  const yy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yy}. ${mm}. ${dd}`;
}


// 2025-12-29T20:04:00 → 2025. 12. 29 오후 08:04
export function formatDateTime(isoString) {
  if (!isoString) return "";

  const d = new Date(isoString);

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");

  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");

  const isPM = hours >= 12;
  const ampm = isPM ? "오후" : "오전";

  hours = hours % 12;
  if (hours === 0) hours = 12;

  const hourStr = String(hours).padStart(2, "0");

  return `${year}.${month}.${day} ${ampm} ${hourStr}:${minutes}`;
}


// 2025-12-29T20:04:00 → ex) 3일 전
export function formatRelativeTime(isoString) {
  if (!isoString) return "";

  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";

  const diffMs = date.getTime() - Date.now(); // 과거면 음수
  const diffSec = Math.round(diffMs / 1000);

  const rtf = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });

  const abs = Math.abs(diffSec);

  if (abs < 60) return rtf.format(Math.round(diffSec), "second");
  const diffMin = Math.round(diffSec / 60);
  if (Math.abs(diffMin) < 60) return rtf.format(diffMin, "minute");

  const diffHour = Math.round(diffMin / 60);
  if (Math.abs(diffHour) < 24) return rtf.format(diffHour, "hour");

  const diffDay = Math.round(diffHour / 24);
  if (Math.abs(diffDay) < 7) return rtf.format(diffDay, "day");

  const diffWeek = Math.round(diffDay / 7);
  if (Math.abs(diffWeek) < 5) return rtf.format(diffWeek, "week");

  const diffMonth = Math.round(diffDay / 30);
  if (Math.abs(diffMonth) < 12) return rtf.format(diffMonth, "month");

  const diffYear = Math.round(diffDay / 365);
  return rtf.format(diffYear, "year");
}