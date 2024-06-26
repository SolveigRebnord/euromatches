export function formatDate(d) {
  const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date(d),
  );
  const date = String(new Date(d).getDate());
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date(d),
  );
  return `${day} ${date} ${month}`;
}

export function findGroup(element, groupIds) {
  let group = groupIds.findIndex((x) => x === element);

  return group === 0
    ? "A"
    : group === 1
      ? "B"
      : group === 2
        ? "C"
        : group === 3
          ? "D"
          : group === 4
            ? "E"
            : group === 5
              ? "F"
              : "Unknown";
}

export function matchStatus(num) {
  return num === 1
    ? "Finished"
    : num >= 2 && num <= 6
      ? "Scheduled"
      : num >= 7 && num <= 31
        ? "Live"
        : "Unknown";
}
