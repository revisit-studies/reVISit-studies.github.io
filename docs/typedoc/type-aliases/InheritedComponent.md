# InheritedComponent

> **InheritedComponent** = `Partial`\<[`IndividualComponent`](IndividualComponent.md)\> & `object`

Defined in: [parser/types.ts:1759](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L1759)

An InheritedComponent is a component that inherits properties from a baseComponent. This is used to avoid repeating properties in components. This also means that components in the baseComponents object can be partially defined, while components in the components object can inherit from them and must be fully defined and include all properties (after potentially merging with a base component).

## Type Declaration

### baseComponent

> **baseComponent**: `string`
