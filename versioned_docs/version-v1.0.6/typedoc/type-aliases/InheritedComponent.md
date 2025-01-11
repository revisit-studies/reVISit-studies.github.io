---
sidebar_position: 1
displayed_sidebar: reference
---

# InheritedComponent

> **InheritedComponent**: `Partial`\<[`IndividualComponent`](IndividualComponent.md)\> & `object`

An InheritedComponent is a component that inherits properties from a baseComponent. This is used to avoid repeating properties in components. This also means that components in the baseComponents object can be partially defined, while components in the components object can inherit from them and must be fully defined and include all properties (after potentially merging with a base component).

## Type declaration

### baseComponent

> **baseComponent**: `string`

## Source

[parser/types.ts:1116](https://github.com/revisit-studies/study/blob/9c4c113c6f32066618fad726cae4e0ef00a8c851/src/parser/types.ts#L1116)
