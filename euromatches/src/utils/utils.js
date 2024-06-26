/**
 * Returns a given date in following format: 'DAY-DD-MM'
 * @param {Date} inDate -  Initial, selected date
 * @returns {string} String with formatted date
 * @example
 * inDate = "2024-06-14T21:00:00+02:00"
 * result = Friday, 14 June
 */
export function formatDate(inDate) {
  const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date(inDate),
  );
  const date = String(new Date(inDate).getDate());
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date(inDate),
  );
  return `${day}, ${date} ${month}`;
}

/**
 * Returns the group play in which the match belongs to
 * @param {number} element - ID that correlates to a group
 * @param {Array} groupIds - Array of the group IDs
 * @returns {string} Returns the letter correlating to the given ID and index
 * @example
 * element = 691296
 * groupIds = [691296, 691297, 691300]
 * result = 'A'
 */
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

/**
 * Returns the status of the match
 * @param {number} num - ID that correlates to different stages of the match based on the API
 * @returns {string} Returns status "Finished", "Scheduled" or "Live"
 * @example
 * num = 3
 * result = "Scheduled"
 */
export function matchStatus(num) {
  return num === 1
    ? "Finished"
    : num >= 2 && num <= 6
      ? "Scheduled"
      : num >= 7 && num <= 31
        ? "Live"
        : "Unknown";
}
