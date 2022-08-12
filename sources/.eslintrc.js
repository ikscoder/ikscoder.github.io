module.exports = {
	root: true,
	env: {
		node: true,
	},
	globals: {
		process: 'readonly',
		__filename: 'readonly',
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 2020,
		parser: '@typescript-eslint/parser',
		project: 'tsconfig.json',
		tsconfigRootDir: '.',
		extraFileExtensions: ['.vue'],
	},
	plugins: ['@typescript-eslint', 'sonarjs', 'unicorn', 'lodash'],
	rules: {
		'arrow-body-style': ['error', 'as-needed'], // Лишний код, нет никакого смысла в таком теле
		'array-callback-return': ['error'], // Обычно это семантически неправильное использование функции
		'dot-notation': ['error'], // Не дает обходить правило @typescript-eslint/naming-convention и писать лишние скобки
		'no-alert': ['error'], // надо использовать this.$alert/this.$confirm/@Confirmable
		'no-await-in-loop': ['error'], // Ожидание в циклах в большинстве случаев ошибка, только если запросы действительно надо выполнять по порядку нет.
		'no-console': ['error'], // Код для дебага не нужен, кроме логирования ошибок(хотя лучше их обрабатывать)
		'no-duplicate-imports': ['error'], // Стоит объединять такие импорты
		'no-else-return': ['error'], // Позволяет бороться с излишней вложенностью
		'no-global-assign': ['error'], // Писать просто так в глобальный объект не надо
		'no-implicit-globals': ['error'], // Писать просто так в глобальный объект не надо
		'no-implied-eval': ['error'], // Тайком пропихивать eval очень плохо
		'no-lone-blocks': ['error'], // Зачем создавать скоупы, если они не нужны?
		'no-mixed-spaces-and-tabs': ['off'], // Противоречит правилам автофрматирования
		'no-new-func': ['error'], // Тайком пропихивать eval очень плохо
		'no-new-wrappers': ['error'], // лишнее использование new
		'no-return-await': ['error'], // Нет смысла оборачивать промис в промис
		'no-self-compare': ['error'], // На NaN надо проверять соответствующей функцией
		'no-template-curly-in-string': ['error'], // Проверяет на забыли ли `` вместо ""
		'no-var': 'error',
		'no-unneeded-ternary': ['error'], // Лишний код затрудняет чтение
		'no-unreachable': ['error'], // Недостижимый код - ошибка
		'no-useless-call': ['error'], // Просто вызывать метод
		'no-useless-concat': ['error'], // Строки могут быть объединены без этого
		'prefer-const': ['error'], // Нужно сразу обозначать неизменяемые переменные(в идеале не использовать let вообще)
		'require-await': ['error'], // нет смысла делать функции async без await
		yoda: ['error'], // Никто вроде пока такого не пишет
		'no-unexpected-multiline': ['off'],
		'prefer-object-has-own': ['error'],

		'@typescript-eslint/no-unsafe-argument': ['off'], // TODO
		'@typescript-eslint/no-unused-vars': ['error'], // Неиспользуемые переменные не нужны
		'@typescript-eslint/ban-ts-comment': ['error'], // не стоит обманывать ts
		'@typescript-eslint/no-extra-non-null-assertion': ['error'], // лишний код
		'@typescript-eslint/prefer-as-const': ['error'], // Лучше использовать const если примитивное значение должно быть равно типу
		'@typescript-eslint/prefer-for-of': ['error'], // Индекс используется только для чтения элемента
		'@typescript-eslint/prefer-includes': ['error'], // Специальные методы делают код понятнее
		'@typescript-eslint/prefer-nullish-coalescing': ['error'], // Это правило нацелено на использование более безопасного оператора.
		'@typescript-eslint/prefer-optional-chain': ['error'], // Это правило нацелено на использование более безопасного оператора.
		'@typescript-eslint/prefer-readonly': ['error'], // Если у вас есть такие срабатывания, в коде мб ошибка
		'@typescript-eslint/require-array-sort-compare': ['error'], // Стоит задавать метод сортировки, чтобы потом не было ничего неожиданного, для строк - (a, b) => String(a).localeCompare(b)
		'@typescript-eslint/no-non-null-asserted-optional-chain': ['error'], // надо как-то обрабатывать возможные null|undefined
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{
				allowNumber: true,
				allowAny: false,
				allowBoolean: false,
				allowNullish: false,
			},
		], // Неявное преобразование объекта в строку - ошибка
		'@typescript-eslint/no-floating-promises': ['off'], // Слишком много исключений - тосты, алерты и пр.
		'@typescript-eslint/unbound-method': ['off'], // Отключен из-за перебинживания Vue this на компонент, в остальных файлах надо смотреть на контекст
		'@typescript-eslint/no-namespace': ['error'], // Namespace повторяет функционал импортов и уже не нужен, заменить в проекте все использования
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false, // Можно использовать асинхронные функции в addEventListener(пока)
			},
		],

		'vue/this-in-template': ['error'], // this точно лишний
		'vue/html-closing-bracket-newline': ['error'], // Надо включать форматирование
		'vue/no-parsing-error': ['off'], // Из-за анализа секций i18n глючит. Если удастся игнорировать эти секции - включить правило. Пример: \src\base-components\local\v-lookup-filter.vue
		'vue/max-attributes-per-line': ['off'], // Этим рулит автоформатирование
		'vue/mustache-interpolation-spacing': ['off'], // Незначительно
		'vue/attributes-order': ['error'],
		'vue/attribute-hyphenation': ['off'], // Незначительно
		'vue/multiline-html-element-content-newline': ['off'], // Противоречит правилам форматирования
		'vue/no-invalid-model-keys': ['error'],
		'vue/no-multiple-template-root': ['off'],
		'vue/html-closing-bracket-spacing': [
			'off',
			{
				startTag: 'never',
				endTag: 'never',
				selfClosingTag: 'never',
			},
		],
		'vue/html-indent': ['error', 'tab'], // Показывает на плохое форматирование

		eqeqeq: ['error', 'smart'],
		'no-implicit-coercion': ['error', { allow: ['!!'] }], // Явное лучше неявного 							https://eslint.org/docs/rules/no-implicit-coercion
		'@typescript-eslint/no-unnecessary-condition': ['off'], // Позволяет смотреть где обмануты типы
		'@typescript-eslint/no-unsafe-assignment': ['error'], // Очень бы хотелось включить следующие 4 правила, но 3к срабатываний
		'@typescript-eslint/no-unsafe-call': ['error'],
		'@typescript-eslint/no-unsafe-member-access': ['error'],
		'@typescript-eslint/no-unsafe-return': ['error'],
		'@typescript-eslint/no-implicit-any-catch': ['off'], // пока не работает с vscode ,надо избегать any
		'require-atomic-updates': ['off'], // TODO разобраться как исправлять, будет полезно для предотвращения race condition
		'@typescript-eslint/no-use-before-define': ['off', { functions: false, classes: false }], // Противоречит организации кода, такие ошибки проверяются при компиляции

		complexity: ['error', 45],
		'max-lines': ['error', { max: 1000, skipBlankLines: true, skipComments: true }], // файлы делить по секциям, извлекать подкомпоненты и пр.
		'max-lines-per-function': ['off', { max: 50, skipBlankLines: true, skipComments: true }], // уменьшать сложность функций

		'sonarjs/cognitive-complexity': ['error', 45],
		'sonarjs/no-all-duplicated-branches': ['error'],
		'sonarjs/no-collapsible-if': ['error'],
		'sonarjs/no-collection-size-mischeck': ['error'],
		'sonarjs/no-element-overwrite': ['error'],
		'sonarjs/no-redundant-boolean': ['error'],
		'sonarjs/no-redundant-jump': ['error'],
		'sonarjs/no-unused-collection': ['error'],
		'sonarjs/no-useless-catch': ['error'],
		'sonarjs/prefer-immediate-return': ['error'],
		'sonarjs/prefer-single-boolean-return': ['error'],

		'sonarjs/no-ignored-return': ['error'],
		'sonarjs/no-gratuitous-expressions': ['error'],
		'sonarjs/no-empty-collection': ['error'],
		'sonarjs/non-existent-operator': ['error'],
		'sonarjs/no-identical-functions': ['error'],
		'vue/valid-define-props': ['error'],
		'vue/valid-define-emits': ['error'],

		'unicorn/better-regex': 'error', // Улучшает регулярки
		'unicorn/error-message': 'error', // без текста тяжелей разобраться что происходит
		'unicorn/expiring-todo-comments': 'error', // ?
		'unicorn/new-for-builtins': 'error', // Код надо переписать декларативно
		'unicorn/no-abusive-eslint-disable': 'error', // eslint отключать вообще не стоит
		'unicorn/no-array-instanceof': 'error', // Более надежная проверка
		'unicorn/prefer-event-key': 'error', // Код читаемей
		'unicorn/prefer-array-flat-map': 'error', // flat пока нет
		'unicorn/prefer-negative-index': 'error', // Меньше писать
		'unicorn/prefer-array-find': 'error', // find быстрее, специфичнее и лучше типизирован
		'unicorn/prefer-array-some': 'error',
		'unicorn/prefer-default-parameters': 'error',
		'unicorn/prefer-array-flat': 'error',
		'unicorn/require-number-to-fixed-digits-argument': 'error',
		'unicorn/require-array-join-separator': 'error',
		'unicorn/no-await-expression-member': 'off',
		'unicorn/prefer-export-from': ['off', { ignoreUsedVariables: true }], // TODO пока не работает ignoreUsedVariables
		'unicorn/template-indent': [
			'warn',
			{
				tags: ['outdent', 'dedent', 'gql', 'sql', 'html', 'styled'],
				functions: ['dedent', 'stripIndent'],
				selectors: [],
				comments: ['HTML', 'indent'],
			},
		],
		'unicorn/prefer-ternary': 'off', // Пока отключен, т.к. не везде становиться лучше
		'unicorn/prefer-query-selector': 'error',
		'unicorn/prevent-abbreviations': [
			'off',
			{
				allowList: {
					reqFields: true,
					ctx: true,
					el: true,
					attr: true,
					attrs: true,
					arg: true,
					args: true,
					e: true,
					param: true,
					temp: true,
					obj: true,
					prop: true,
					props: true,
					acc: true,
					doc: true,
					msg: true,
					elem: true,
					i: true,
					str: true,
				},
			},
		], // Пока лучше пинать по убиранию императивного кода, потом мб включить.
		'unicorn/throw-new-error': 'error',
		'unicorn/no-lonely-if': 'error',
		'unicorn/no-new-array': 'error',
		'unicorn/prefer-array-index-of': 'error',
		'unicorn/prefer-regexp-test': 'error',
		'unicorn/prefer-number-properties': 'error',
		'unicorn/no-array-for-each': 'off',
		'unicorn/no-array-push-push': 'error',
		'unicorn/no-this-assignment': 'error',
		'unicorn/prefer-object-from-entries': 'off',
		'unicorn/no-useless-length-check': 'error',
		'unicorn/no-useless-spread': 'error',
		'unicorn/prefer-set-has': 'error',
		'unicorn/import-style': [
			'error',
			{
				styles: {
					xlsx: {
						named: true,
					},
				},
			},
		],

		'lodash/prop-shorthand': 'error',
		'lodash/prefer-noop': 'error',
		'lodash/import-scope': ['error', 'member'], // т.к. lodash вынесен в отдельный бандл, чтобы каждую функцию в конфиге не прописывать включен полностью

		// TODO fetch запретить за пределами апи
		'@typescript-eslint/interface-name-prefix': ['off'], // TODO Переделать на правило naming-convention
		'@typescript-eslint/consistent-type-assertions': ['off'], // 205 errors
		'@typescript-eslint/no-non-null-assertion': ['off'], //!! ✖ 1196 errors
		'@typescript-eslint/no-explicit-any': ['error'], // any Убивает типизацию в проекте, не надо его использовать нигде. Ни явно, ни неявно
		'@typescript-eslint/explicit-function-return-type': ['off'], //warn

		'@typescript-eslint/explicit-module-boundary-types': ['off'], //(4060 warnings)
		'@typescript-eslint/restrict-plus-operands': ['off'], //(192 errors)
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
		'@typescript-eslint/no-restricted-imports': ['off'], //! https://eslint.org/docs/rules/no-restricted-imports
		'@typescript-eslint/no-unnecessary-type-constraint': ['off'], // TODO TS подглючивает тут, проверить после обновления

		'vue/one-component-per-file': ['off'],
		'vue/order-in-components': ['off'],
		'vue/singleline-html-element-content-newline': ['off'],
		'vue/html-self-closing': ['error', { html: { normal: 'always', void: 'always' } }],
		'vue/require-default-prop': ['off'], // Не работает с class-component
		'vue/no-v-html': ['off'],
		'vue/multi-word-component-names': ['off'],
		'vue/valid-v-memo': ['error'], // !												 			https://eslint.vuejs.org/rules/valid-v-memo.html
		'vue/component-api-style': ['off'], //														https://eslint.vuejs.org/rules/component-api-style.html
		'vue/no-template-target-blank': ['error'], // !	https://habr.com/ru/post/282880/ 			https://eslint.vuejs.org/rules/no-template-target-blank.html
		'vue/no-duplicate-attr-inheritance': ['off'], //* не работает 								https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html
		'vue/no-unused-properties': ['off'], //* не работает 										https://eslint.vuejs.org/rules/no-unused-properties.html
		'vue/no-mutating-props': ['error'], // ! 													https://eslint.vuejs.org/rules/no-mutating-props.html
		'vue/no-potential-component-option-typo': ['error'], //! 									https://eslint.vuejs.org/rules/no-potential-component-option-typo.html
		'vue/no-multiple-slot-args': ['error'], //! 												https://eslint.vuejs.org/rules/no-multiple-slot-args.html
		'vue/no-useless-v-bind': ['error'], //! 													https://eslint.vuejs.org/rules/no-useless-v-bind.html
		'vue/no-useless-mustaches': ['error'], //! 													https://eslint.vuejs.org/rules/no-useless-mustaches.html
		'vue/no-multiple-objects-in-class': ['error'], //! 											https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html
		'vue/no-lone-template': ['error'], //!														https://eslint.vuejs.org/rules/no-lone-template.html
		'vue/no-dupe-v-else-if': ['error'], //! 													https://eslint.vuejs.org/rules/no-dupe-v-else-if.html
		'vue/dot-notation': ['error'], //!															https://eslint.vuejs.org/rules/dot-notation.html
		'vue/no-useless-concat': ['error'], //!														https://eslint.vuejs.org/rules/no-useless-concat.html
		'vue/component-tags-order': ['error'], //!													https://eslint.vuejs.org/rules/component-tags-order.html
		'vue/no-template-shadow': ['error'], //!													https://eslint.vuejs.org/rules/no-template-shadow.html
		'vue/no-restricted-call-after-await': ['error'], //!										https://eslint.vuejs.org/rules/no-restricted-call-after-await.html
		'vue/no-constant-condition': ['error'], //!													https://eslint.vuejs.org/rules/no-constant-condition.html
		'vue/valid-next-tick': ['error'], //!														https://eslint.vuejs.org/rules/valid-next-tick.html
		'vue/next-tick-style': ['off', 'promise'], //*												https://eslint.vuejs.org/rules/no-extra-parens.html
		'vue/no-extra-parens': ['error'], // !														https://eslint.vuejs.org/rules/no-extra-parens.html
		'vue/v-slot-style': ['error', 'shorthand'], //!												https://eslint.vuejs.org/rules/v-slot-style.html
		'vue/custom-event-name-casing': ['off'], //													https://eslint.vuejs.org/rules/custom-event-name-casing.html
		'vue/no-v-model-argument': ['off'], //														https://eslint.vuejs.org/rules/no-v-model-argument.html
		'vue/no-v-for-template-key': ['off'], // 													https://v3.vuejs.org/guide/migration/key-attribute.html#overview
		'vue/component-definition-name-casing': ['error', 'kebab-case'], // глобальные правила наименования компонентов/файлов
		'vue/no-restricted-class': ['off'], // 														https://eslint.vuejs.org/rules/no-restricted-class.html
		'vue/no-useless-template-attributes': ['error'], //! 										https://eslint.vuejs.org/rules/no-useless-template-attributes.html
		'vue/prefer-separate-static-class': ['off'], //! 											https://eslint.vuejs.org/rules/prefer-separate-static-class.html
		'vue/no-child-content': ['error'], //! 														https://eslint.vuejs.org/rules/no-child-content.html
		'vue/no-expose-after-await': ['error'], //! 												https://eslint.vuejs.org/rules/no-expose-after-await.html
		'vue/component-options-name-casing': ['error', 'kebab-case'], //! 							https://eslint.vuejs.org/rules/component-options-name-casing.html
		'vue/prefer-true-attribute-shorthand': ['error'], //! 										https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html
	},
	reportUnusedDisableDirectives: true,
};

