# InheritedComponent

> **InheritedComponent** = `Partial`\<[`IndividualComponent`](IndividualComponent.md)\> & `object`

Defined in: [parser/types.ts:1711](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L1711)

An InheritedComponent is a component that inherits properties from a baseComponent. This is used to avoid repeating properties in components. This also means that components in the baseComponents object can be partially defined, while components in the components object can inherit from them and must be fully defined and include all properties (after potentially merging with a base component).

## Type Declaration

### baseComponent

> **baseComponent**: `string`
