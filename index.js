module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:n/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:unicorn/recommended',
        'prettier'
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: ['./tsconfig.json', './tests/tsconfig.json']
            },
            alias: {
                extensions: ['.json']
            }
        }
    },
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tests/tsconfig.json']
    },
    plugins: [
        '@typescript-eslint',
        'unicorn',
        'import',
        'eslint-comments',
        'eslint-plugin-tsdoc'
    ],
    rules: {
        // TSDOC
        'tsdoc/syntax': 'warn',

        // Typescript rules
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array-simple'
            }
        ],
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-expect-error': 'allow-with-description',
                'minimumDescriptionLength': 4
            }
        ],
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: false,
                types: {
                    'String': {
                        message: 'Use `string` instead.',
                        fixWith: 'string'
                    },
                    'Number': {
                        message: 'Use `number` instead.',
                        fixWith: 'number'
                    },
                    'Boolean': {
                        message: 'Use `boolean` instead.',
                        fixWith: 'boolean'
                    },
                    'Symbol': {
                        message: 'Use `symbol` instead.',
                        fixWith: 'symbol'
                    },
                    'BigInt': {
                        message: 'Use `bigint` instead.',
                        fixWith: 'bigint'
                    },
                    'Object': {
                        message:
                            'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
                        fixWith: 'Record<string, unknown>'
                    },
                    '{}': {
                        message:
                            'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
                        fixWith: 'Record<string, unknown>'
                    },
                    'object': {
                        message:
                            'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
                        fixWith: 'Record<string, unknown>'
                    },
                    'Function':
                        'Use a specific function type instead, like `() => void`.',
                    '[]': "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
                    '[[]]': "Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
                    '[[[]]]':
                        "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
                    '[[[[]]]]': 'ur drunk 🤡',
                    '[[[[[]]]]]': '🦄💥'
                }
            }
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
                allowIIFEs: true
            }
        ],
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow-as-parameter'
            }
        ],
        '@typescript-eslint/consistent-type-exports': [
            'error',
            {
                fixMixedExportsWithInlineTypeSpecifier: true
            }
        ],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                fixStyle: 'inline-type-imports'
            }
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
                allowSingleExtends: true
            }
        ],
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',
        '@typescript-eslint/no-extraneous-class': [
            'error',
            {
                allowConstructorOnly: false,
                allowEmpty: false,
                allowStaticOnly: true,
                allowWithDecorator: true
            }
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
                prefer: 'parameter-property'
            }
        ],
        '@typescript-eslint/prefer-nullish-coalescing': [
            'error',
            {
                ignoreTernaryTests: false,
                ignoreConditionalTests: false,
                ignoreMixedLogicalExpressions: false
            }
        ],
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        'quotes': 'off',
        '@typescript-eslint/quotes': ['error', 'single'],
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/require-array-sort-compare': [
            'error',
            {
                ignoreStringArrays: true
            }
        ],
        'semi': 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',

        // Import rules
        'import/default': 'error',
        'import/export': 'error',
        'import/no-absolute-path': 'error',
        'import/no-anonymous-default-export': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-cycle': [
            'error',
            {
                ignoreExternal: true
            }
        ],
        'import/no-useless-path-segments': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': [
            'error',
            {
                'prefer-inline': true
            }
        ],
        'import/no-empty-named-blocks': 'error',
        'import/no-extraneous-dependencies': [
            'error',
            {
                includeTypes: true
            }
        ],
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-named-as-default': 'error',
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
                        include: true
                    },
                    blacklist: {
                        exclude: true
                    },
                    master: {
                        main: true
                    },
                    slave: {
                        secondary: true
                    },

                    // Not part of `eslint-plugin-unicorn`
                    application: {
                        app: true
                    },
                    applications: {
                        apps: true
                    },

                    // Part of `eslint-plugin-unicorn`
                    arr: {
                        array: true
                    },
                    e: {
                        error: true,
                        event: true
                    },
                    el: {
                        element: true
                    },
                    elem: {
                        element: true
                    },
                    len: {
                        length: true
                    },
                    msg: {
                        message: true
                    },
                    num: {
                        number: true
                    },
                    obj: {
                        object: true
                    },
                    opts: {
                        options: true
                    },
                    param: {
                        parameter: true
                    },
                    params: {
                        parameters: true
                    },
                    prev: {
                        previous: true
                    },
                    req: {
                        request: true
                    },
                    res: {
                        response: true,
                        result: true
                    },
                    ret: {
                        returnValue: true
                    },
                    str: {
                        string: true
                    },
                    temp: {
                        temporary: true
                    },
                    tmp: {
                        temporary: true
                    },
                    val: {
                        value: true
                    },
                    err: {
                        error: true
                    }
                }
            }
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
                allowWholeFile: true
            }
        ],
        'eslint-comments/no-aggregating-enable': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/no-unused-enable': 'error'
    }
};
