const status = ["valid", "invalid", "pending"] as const;
type Status = (typeof status)[number];

const sizes = ["wide", "compact"] as const;
type Size = (typeof sizes)[number];

export { status, sizes };
export type { Status, Size };
