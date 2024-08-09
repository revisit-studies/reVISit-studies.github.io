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

[parser/types.ts:1099](https://github.com/revisit-studies/study/blob/d65e91ab4af88102fb0ed9f3885702e20d5a1b2a/src/parser/types.ts#L1099)
