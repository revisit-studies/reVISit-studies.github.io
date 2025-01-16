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

[parser/types.ts:1134](https://github.com/revisit-studies/study/blob/d40680e297ef7919b6480928cce0c5ed59a62e7e/src/parser/types.ts#L1134)
