// SPDX-License-Identifier: MIT
const LINE =
  "Are you a firmware update? Because ever since you arrived, I keep rebooting, and after every restart I still choose you.";

// Guard: the entry must stay a single line of at most 200 characters.
if (LINE.length > 200) {
  throw new Error(`pickup line is ${LINE.length} characters, over the 200 cap`);
}
if (LINE.includes("\n")) {
  throw new Error("pickup line must be a single line");
}

console.log(LINE);
