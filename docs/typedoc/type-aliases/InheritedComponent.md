# InheritedComponent

> **InheritedComponent** = `Partial`\<[`IndividualComponent`](IndividualComponent.md)\> & `object`

Defined in: [parser/types.ts:1659](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1659)

An InheritedComponent is a component that inherits properties from a baseComponent. This is used to avoid repeating properties in components. This also means that components in the baseComponents object can be partially defined, while components in the components object can inherit from them and must be fully defined and include all properties (after potentially merging with a base component).

## Type Declaration

### baseComponent

> **baseComponent**: `string`
