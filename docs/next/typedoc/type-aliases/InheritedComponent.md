# InheritedComponent

> **InheritedComponent** = `Partial`\<[`IndividualComponent`](IndividualComponent.md)\> & `object`

Defined in: [parser/types.ts:1794](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L1794)

An InheritedComponent is a component that inherits properties from a baseComponent. This is used to avoid repeating properties in components. This also means that components in the baseComponents object can be partially defined, while components in the components object can inherit from them and must be fully defined and include all properties (after potentially merging with a base component).

## Type Declaration

### baseComponent

> **baseComponent**: `string`
