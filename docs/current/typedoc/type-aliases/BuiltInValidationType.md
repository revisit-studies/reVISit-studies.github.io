# BuiltInValidationType

> **BuiltInValidationType** = `"email"` \| `"phoneNumber"` \| `"usPhoneNumber"` \| `"url"`

Defined in: [parser/types.ts:679](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L679)

The built-in validation operations available for short text responses.

- `email`: An email in `local@domain.tld` format, such as `test@revisit.dev`.
- `phoneNumber`: An international phone number containing 7–15 digits, with an optional leading `+` and hyphens between digits.
- `usPhoneNumber`: A 10-digit US phone number in `000-000-0000` format.
- `url`: An absolute HTTP or HTTPS URL, such as `https://revisit.dev`.
