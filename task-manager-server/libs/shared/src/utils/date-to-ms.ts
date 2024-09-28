const s = 1000
const m = s * 60
const h = m * 60
const d = h * 24
const w = d * 7
const y = d * 365.25

type Unit =
  | "D"
  | "Day"
  | "Days"
  | "H"
  | "Hour"
  | "Hours"
  | "Hr"
  | "Hrs"
  | "M"
  | "Millisecond"
  | "Milliseconds"
  | "Min"
  | "Mins"
  | "Minute"
  | "Minutes"
  | "Ms"
  | "Msec"
  | "Msecs"
  | "s"
  | "Sec"
  | "Second"
  | "Seconds"
  | "Secs"
  | "W"
  | "Week"
  | "Weeks"
  | "Y"
  | "Year"
  | "Years"
  | "Yr"
  | "Yrs"

type UnitAnyCase = Lowercase<Unit> | Unit | Uppercase<Unit>

export type DateToMsValue = `${number} ${UnitAnyCase}` | `${number}` | `${number}${UnitAnyCase}`

export const dateToMs = (string: DateToMsValue) => {
  if (typeof string !== "string" || string.length === 0 || string.length > 100)
    throw new Error(`Value ${string} provided to ms() must be a string with length between 1 and 99.`)

  const match =
    /^(?<value>-?(?:\d+)?\.?\d+) *(?<type>milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      string,
    )

  const groups = match?.groups as { type?: string; value: string } | undefined

  if (!groups) return NaN

  const n = parseFloat(groups.value)
  const type = (groups.type || "ms").toLowerCase() as Lowercase<Unit>

  switch (type) {
    case "d":
    case "day":
    case "days":
      return n * d
    case "h":
    case "hour":
    case "hours":
    case "hr":
    case "hrs":
      return n * h
    case "m":
    case "min":
    case "mins":
    case "minute":
    case "minutes":
      return n * m
    case "millisecond":
    case "milliseconds":
    case "ms":
    case "msec":
    case "msecs":
      return n
    case "s":
    case "sec":
    case "second":
    case "seconds":
    case "secs":
      return n * s
    case "w":
    case "week":
    case "weeks":
      return n * w
    case "y":
    case "year":
    case "years":
    case "yr":
    case "yrs":
      return n * y
    default:
      throw new Error(`Invalid value ${type} provided to ms()`)
  }
}
