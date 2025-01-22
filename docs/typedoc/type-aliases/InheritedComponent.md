---
sidebar_position: 1
displayed_sidebar: reference
---

# InheritedComponent

> **InheritedComponent**: `Partial`\<[`IndividualComponent`](IndividualComponent.md)\> & `object`

Defined in: [parser/types.ts:1205](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L1205)

An InheritedComponent is a component that inherits properties from a baseComponent. This is used to avoid repeating properties in components. This also means that components in the baseComponents object can be partially defined, while components in the components object can inherit from them and must be fully defined and include all properties (after potentially merging with a base component).

## Type declaration

### baseComponent

> **baseComponent**: `string`
