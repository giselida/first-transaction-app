import { Transaction } from "../../domain/transaction/interface/transaction.interface";

export function badgeUpdate() {
  const $badge = document.querySelector<HTMLSpanElement>(".badge");
  if (!$badge) return;
  const transactionList = localStorage.getItem("transactionList") || "[]";
  const userLogged = localStorage.getItem("client") || "{}";
  const notifications = JSON.parse(transactionList).filter(
    (value: Transaction) => !value.view.includes(JSON.parse(userLogged)?.id) && value.dateOfPayDay
  );
  $badge.hidden = notifications.length <= 0;
  $badge.innerHTML = notifications.length;
}
