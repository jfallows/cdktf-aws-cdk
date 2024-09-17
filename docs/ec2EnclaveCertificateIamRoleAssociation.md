# `ec2EnclaveCertificateIamRoleAssociation` Submodule <a name="`ec2EnclaveCertificateIamRoleAssociation` Submodule" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2EnclaveCertificateIamRoleAssociation <a name="Ec2EnclaveCertificateIamRoleAssociation" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer"></a>

```typescript
import { ec2EnclaveCertificateIamRoleAssociation } from '@cdktf/aws-cdk'

new ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation(scope: Construct, id: string, config: Ec2EnclaveCertificateIamRoleAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig">Ec2EnclaveCertificateIamRoleAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig">Ec2EnclaveCertificateIamRoleAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport">generateConfigForImport</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isConstruct"></a>

```typescript
import { ec2EnclaveCertificateIamRoleAssociation } from '@cdktf/aws-cdk'

ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformElement"></a>

```typescript
import { ec2EnclaveCertificateIamRoleAssociation } from '@cdktf/aws-cdk'

ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformResource"></a>

```typescript
import { ec2EnclaveCertificateIamRoleAssociation } from '@cdktf/aws-cdk'

ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport"></a>

```typescript
import { ec2EnclaveCertificateIamRoleAssociation } from '@cdktf/aws-cdk'

ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2EnclaveCertificateIamRoleAssociationConfig <a name="Ec2EnclaveCertificateIamRoleAssociationConfig" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.Initializer"></a>

```typescript
import { ec2EnclaveCertificateIamRoleAssociation } from '@cdktf/aws-cdk'

const ec2EnclaveCertificateIamRoleAssociationConfig: ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---



