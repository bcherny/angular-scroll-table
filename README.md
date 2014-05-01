angular-sticky-table-header
===================

### dependencies

- angular 1.0.8
- jquery 1.x.x

### usage

**html**

```html
<div ng-controller="mainCtrl">
	<div scroll-table columns="columnCollection" rows="rowCollection">
		<table>
			<thead>
				...
			</thead>
			<tbody>
				...
			</tbody>
		</table>
	</div>
</div>
```

**js**

```js
angular
.module('demo', ['scrollTable'])
.controller('mainCtrl', function ($scope, $timeout) {

	$scope.columnCollection = ['column1', 'column2', 'column3', 'column4'];
	$scope.rowCollection = [
		['foo', 'bar', 'baz', 'moo'],
		...
	];

...
```

**css**

```css
[scroll-table] .scroll-wrap {
	border: 0;
	margin: 0;
	padding: 0;
}

[scroll-table] .scroll {
	max-height: 300px;
	overflow-y: auto;
}

[scroll-table] .scroll table {
	border: 0;
	margin: 0;
	width: 100%;
}
```

### running the demo

```shell
sass index.scss index.css
bower install
```

then pop open index.html in a browser.

### how it works

we wrap the child table's `<tbody>` with a `<div>`, and set a `height` and `overflow` on that `div`. we take this roundabout approach because `<tbody>` isn't block-level, so we can't set a `height` on it directly. if we make it block-level using `display:block`, we would then lose a big benefit of html tables - auto-sizing columns.

### todo

- unit tests
- layout tests