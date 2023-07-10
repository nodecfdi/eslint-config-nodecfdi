module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:n/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:unicorn/recommended',
        'prettier',
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: ['./tsconfig.json', './tests/tsconfig.json'],
            },
            alias: {
                extensions: ['.json'],
            },
        },
    },
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tests/tsconfig.json'],
    },
    plugins: [
        '@typescript-eslint',
        'unicorn',
        'import',
        'eslint-comments',
        'eslint-plugin-tsdoc',
    ],
    rules: {
        // Eslint rules
        'no-await-in-loop': 'error',
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true,
            },
        ],
        'no-empty-static-block': 'error',
        'no-promise-executor-return': 'error',
        'no-template-curly-in-string': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-negation': [
            'error',
            {
                enforceForOrderingRelations: true,
            },
        ],
        'no-unsafe-optional-chaining': [
            'error',
            {
                disallowArithmeticOperators: true,
            },
        ],
        'accessor-pairs': [
            'error',
            {
                enforceForClassMembers: true,
            },
        ],
        'array-callback-return': [
            'error',
            {
                allowImplicit: true,
            },
        ],
        'block-scoped-var': 'error',
        'complexity': 'warn',
        'curly': 'error',
        'default-case': 'error',
        'default-case-last': 'error',
        'dot-notation': 'error',
        'dot-location': ['error', 'property'],
        'eqeqeq': 'error',
        'grouped-accessor-pairs': ['error', 'getBeforeSet'],
        'guard-for-in': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-constructor-return': 'error',
        'no-else-return': [
            'error',
            {
                allowElseIf: false,
            },
        ],
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-new': 'error',
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-return-assign': ['error', 'always'],
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': [
            'error',
            {
                enforceForJSX: true,
            },
        ],
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-void': ['error', { allowAsStatement: true }],
        'prefer-promise-reject-errors': [
            'error',
            {
                allowEmptyReject: true,
            },
        ],
        'prefer-regex-literals': [
            'error',
            {
                disallowRedundantWrapping: true,
            },
        ],
        'radix': 'error',
        'wrap-iife': [
            'error',
            'inside',
            {
                functionPrototypeMethods: true,
            },
        ],
        'yoda': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': ['error', 'event'],
        'no-undef-init': 'error',
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': ['error', 'consistent'],
        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: false,
            },
        ],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': [
            'error',
            'never',
            {
                enforceForClassMembers: true,
            },
        ],
        'eol-last': 'error',
        'func-call-spacing': ['error', 'never'],
        'func-name-matching': [
            'error',
            {
                considerPropertyDescriptor: true,
            },
        ],
        'func-names': ['error', 'never'],
        'function-call-argument-newline': ['error', 'consistent'],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'keyword-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        'max-depth': 'warn',
        'max-nested-callbacks': ['warn', 4],
        'max-statements-per-line': 'error',
        'new-parens': 'error',
        'no-array-constructor': 'error',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
            },
        ],
        'no-negated-condition': 'error',
        'no-new-object': 'error',
        'no-whitespace-before-property': 'error',
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': 'error',
        'operator-assignment': ['error', 'always'],
        'padded-blocks': [
            'error',
            'never',
            {
                allowSingleLineBlocks: false,
            },
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: 'multiline-block-like',
                next: '*',
            },
        ],
        'prefer-exponentiation-operator': 'error',
        'prefer-object-spread': 'error',
        'quote-props': ['error', 'consistent'],
        'quotes': ['error', 'single'],
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'semi-style': ['error', 'last'],
        'semi': ['error', 'always'],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    exceptions: ['-', '+', '*'],
                    markers: ['!', '/', '=>'],
                },
                block: {
                    exceptions: ['-', '+', '*'],
                    markers: ['!', '*'],
                    balanced: true,
                },
            },
        ],
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false,
            },
        ],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'arrow-body-style': 'error',
        'arrow-parens': 'error',
        'arrow-spacing': 'error',
        'generator-star-spacing': ['error', 'both'],
        'no-constant-binary-expression': 'error',
        'no-new-native-nonconstructor': 'error',
        'no-useless-computed-key': [
            'error',
            {
                enforceForClassMembers: true,
            },
        ],
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': [
            'error',
            'always',
            {
                avoidExplicitReturnArrows: true,
            },
        ],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: true,
            },
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
            },
        ],
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: true,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,

                    // Disabled because object assignment destructuring requires parens wrapping:
                    // `let foo; ({foo} = object);`
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'prefer-numeric-literals': 'error',
        'prefer-object-has-own': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'yield-star-spacing': ['error', 'both'],

        // TSDOC
        'tsdoc/syntax': 'warn',

        // Typescript rules
        // Typescript rules
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array-simple',
            },
        ],
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-expect-error': 'allow-with-description',
                'minimumDescriptionLength': 4,
            },
        ],
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: false,
                types: {
                    'String': {
                        message: 'Use `string` instead.',
                        fixWith: 'string',
                    },
                    'Number': {
                        message: 'Use `number` instead.',
                        fixWith: 'number',
                    },
                    'Boolean': {
                        message: 'Use `boolean` instead.',
                        fixWith: 'boolean',
                    },
                    'Symbol': {
                        message: 'Use `symbol` instead.',
                        fixWith: 'symbol',
                    },
                    'BigInt': {
                        message: 'Use `bigint` instead.',
                        fixWith: 'bigint',
                    },
                    'Object': {
                        message:
                            'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
                        fixWith: 'Record<string, unknown>',
                    },
                    '{}': {
                        message:
                            'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
                        fixWith: 'Record<string, unknown>',
                    },
                    'object': {
                        message:
                            'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
                        fixWith: 'Record<string, unknown>',
                    },
                    'Function':
                        'Use a specific function type instead, like `() => void`.',
                    '[]': "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
                    '[[]]': "Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
                    '[[[]]]':
                        "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
                    '[[[[]]]]': 'ur drunk 🤡',
                    '[[[[[]]]]]': '🦄💥',
                },
            },
        ],
        '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: false,
                allowIIFEs: true,
            },
        ],
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow-as-parameter',
            },
        ],
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/consistent-type-exports': [
            'error',
            {
                fixMixedExportsWithInlineTypeSpecifier: true,
            },
        ],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                fixStyle: 'inline-type-imports',
            },
        ],
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/member-ordering': 'error',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/no-duplicate-type-constituents': 'error',
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true,
            },
        ],
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',
        '@typescript-eslint/no-extraneous-class': [
            'error',
            {
                allowConstructorOnly: false,
                allowEmpty: false,
                allowStaticOnly: true,
                allowWithDecorator: true,
            },
        ],
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/parameter-properties': [
            'error',
            {
                prefer: 'parameter-property',
            },
        ],
        '@typescript-eslint/prefer-nullish-coalescing': [
            'error',
            {
                ignoreTernaryTests: false,
                ignoreConditionalTests: false,
                ignoreMixedLogicalExpressions: false,
            },
        ],
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        'quotes': 'off',
        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/require-array-sort-compare': [
            'error',
            {
                ignoreStringArrays: true,
            },
        ],
        'semi': 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: /^_/.source,
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: /^_$/.source,
            },
        ],

        // Import rules
        'import/default': 'error',
        'import/export': 'error',
        'import/first': 'error',
        'import/no-absolute-path': 'error',
        'import/no-anonymous-default-export': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-cycle': [
            'error',
            {
                ignoreExternal: true,
            },
        ],
        'import/no-useless-path-segments': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': [
            'error',
            {
                'prefer-inline': true,
            },
        ],
        'import/no-empty-named-blocks': 'error',
        'import/no-extraneous-dependencies': [
            'error',
            {
                includeTypes: true,
            },
        ],
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-named-as-default': 'error',
        'import/order': [
            'error',
            {
                'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
                'newlines-between': 'never',
                'warnOnUnassignedImports': true,
            },
        ],
        'import/no-unresolved': 'error',

        // Unicorn rules
        'unicorn/prevent-abbreviations': [
            'error',
            {
                checkFilenames: false,
                checkDefaultAndNamespaceImports: false,
                checkShorthandImports: false,
                extendDefaultReplacements: false,
                replacements: {
                    // https://thenextweb.com/dd/2020/07/13/linux-kernel-will-no-longer-use-terms-blacklist-and-slave/
                    whitelist: {
                        include: true,
                    },
                    blacklist: {
                        exclude: true,
                    },
                    master: {
                        main: true,
                    },
                    slave: {
                        secondary: true,
                    },

                    // Not part of `eslint-plugin-unicorn`
                    application: {
                        app: true,
                    },
                    applications: {
                        apps: true,
                    },

                    // Part of `eslint-plugin-unicorn`
                    arr: {
                        array: true,
                    },
                    e: {
                        error: true,
                        event: true,
                    },
                    el: {
                        element: true,
                    },
                    elem: {
                        element: true,
                    },
                    len: {
                        length: true,
                    },
                    msg: {
                        message: true,
                    },
                    num: {
                        number: true,
                    },
                    obj: {
                        object: true,
                    },
                    opts: {
                        options: true,
                    },
                    param: {
                        parameter: true,
                    },
                    params: {
                        parameters: true,
                    },
                    prev: {
                        previous: true,
                    },
                    req: {
                        request: true,
                    },
                    res: {
                        response: true,
                        result: true,
                    },
                    ret: {
                        returnValue: true,
                    },
                    str: {
                        string: true,
                    },
                    temp: {
                        temporary: true,
                    },
                    tmp: {
                        temporary: true,
                    },
                    val: {
                        value: true,
                    },
                    err: {
                        error: true,
                    },
                },
            },
        ],
        'unicorn/no-null': 'off',
        'unicorn/prefer-ternary': ['error', 'only-single-line'],
        'unicorn/consistent-function-scoping': 'off',

        // n
        'n/no-missing-import': 'off',

        // Eslint comments
        'eslint-comments/disable-enable-pair': [
            'error',
            {
                allowWholeFile: true,
            },
        ],
        'eslint-comments/no-aggregating-enable': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
    },
};
