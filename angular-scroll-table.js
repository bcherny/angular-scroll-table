angular
.module('scrollTable', [])
.value('options', {
	tdClass: 'scroll-wrap',
	divClass: 'scroll',
	templateUrl: 'angular-scroll-table.html'
})
.run(function ($templateCache, options) {

	/*
		TODO: move this to its own file. there's no straight forward
		way to do this since angular doesn't support async `run` blocks,
		so if we load the template over `$http` we can't do it in a `run`.
		we also can't use `ng-transclude` because we're doing more than just
		wrapping child content.
	 */

	return $templateCache
		.put(options.templateUrl, '<tr><td class="{{options.tdClass}}" colspan="{{columns.length}}"><div class="{{options.divClass}}"><table class="{{tableClass}}"><tbody></tbody></table></div></td></tr>');

})
.directive('scrollTable', function ($compile, $templateCache, options) {

	return {

		restrict: 'A',

		link: function (scope, element, attrs) {

			angular.extend(scope, {

				options: options,
				columns: scope[attrs.columns],
				tableClass: element.find('table').attr('class'),

				generate: function() {

					var html = $templateCache.get(options.templateUrl);

					$compile(
						element
							.find('tbody')
							.wrapInner(html)
					)(scope);
				}
			});
			
			scope.generate();

		}
	};
});
