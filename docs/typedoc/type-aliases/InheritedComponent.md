# InheritedComponent

> **InheritedComponent** = `Partial`\<[`IndividualComponent`](IndividualComponent.md)\> & `object`

Defined in: [parser/types.ts:1508](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L1508)

An InheritedComponent is a component that inherits properties from a baseComponent. This is used to avoid repeating properties in components. This also means that components in the baseComponents object can be partially defined, while components in the components object can inherit from them and must be fully defined and include all properties (after potentially merging with a base component).

## Type Declaration

### baseComponent

> **baseComponent**: `string`
