module.exports = {
    env: {
        'browser': true,
        'es2021': true
    },
    extends: [
        // 'eslint:recommended',
        // 'plugin:vue/vue3-essential',
        // 'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: [
        '@typescript-eslint',
    ],

    rules: {
    },
    overrides: [
        {
            files: ['src/**/*.ts'],
            rules: {
                //don’t specify a type, when assigning a value to the variable
                '@typescript-eslint/no-inferrable-types': ['error', {
                    ignoreParameters: true
                }],

                //Always specify the type of arguments passed to the function
                '@typescript-eslint/typedef': ['error', {
                    'parameter': true,
                }],

            }
        },
        {
            files: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.ts'],
            plugins: [
                'vue',
            ],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                sourceType: 'module',
                project: ['./tsconfig.eslint.json'],
                extraFileExtensions: [
                    '.vue'
                ]
            },
            extends: [],
            rules: {

                //use single quotation marks for strings and paths
                quotes: [
                    'error',
                    'single'
                ],

                //don’t use semicolons at the end of the line ;
                semi: [
                    'error',
                    'never'
                ],

                //Code Formatting
                // 'if' with curly braces
                'curly': ['error'],

                // space before closing anf ter opening the curly braces
                'object-curly-spacing': ['error', 'always'],
                'template-curly-spacing': ['error', 'always'],

                //add a space after the function nam
                'space-before-function-paren': ['error', 'always'],

                // don’t use the var keyword to declare a variable, :white_check_mark: use let/const instead
                'no-var': 'error',

                "no-restricted-properties": [2, {
                    "object": "window",
                    "property": "swal"
                }],

                //Every component name should be Capitalized, also while adding it to the HTML:
                'vue/component-name-in-template-casing': ['error', 'PascalCase', {
                    'registeredComponentsOnly': true,
                    'ignores': []
                }],

                //Avoid closing tags when unnecessary.
                'vue/html-self-closing': ['error', {
                    'html': {
                        'void': 'always',
                        'normal': 'any',
                        'component': 'always'
                    },
                    'svg': 'always',
                    'math': 'always'
                }],

                //Add attributes to the proper group when using a component, attributes order:
                'vue/attributes-order': ['error', {
                    'order': [
                        'DEFINITION',
                        'LIST_RENDERING',
                        'CONDITIONALS',
                        'RENDER_MODIFIERS',
                        'GLOBAL',
                        ['UNIQUE', 'SLOT'],
                        'OTHER_DIRECTIVES',
                        'OTHER_ATTR',
                        'TWO_WAY_BINDING',
                        'EVENTS',
                        'CONTENT'
                    ],
                    'alphabetical': false
                }],


                //Please use Object-based syntax, while declaring props.
                // (Do not have an object-based ready rule to use), using the closest.
                'vue/require-prop-type-constructor': ['error'],

                //Order of Methods/variables in components
                'vue/order-in-components': ['error', {
                    'order': [
                        'el',
                        'name',
                        'key',
                        'parent',
                        'functional',
                        ['delimiters', 'comments'],
                        ['components', 'directives', 'filters'],
                        'extends',
                        ['provide', 'inject'],
                        'ROUTER_GUARDS',
                        'layout',
                        'middleware',
                        'validate',
                        'scrollToTop',
                        'transition',
                        'loading',
                        'inheritAttrs',
                        'model',
                        ['props', 'propsData'],
                        'mixins',
                        'emits',
                        'setup',
                        'asyncData',
                        'data',
                        'fetch',
                        'head',
                        'computed',
                        'watch',
                        'watchQuery',
                        'LIFECYCLE_HOOKS',
                        'methods',
                        ['template', 'render'],
                        'renderError'
                    ]
                }],

                //Tags orders
                'vue/component-tags-order': ['error', {
                    'order': ['template', 'script', 'style']
                }],

                //Indent
                'vue/html-indent': ['error', 4, {
                    'attribute': 1,
                    'baseIndent': 1,
                    'closeBracket': 0,
                    'alignAttributesVertically': true,
                    'ignores': []
                }],
                'indent': 'off',
                'vue/script-indent': ['error', 4, {
                    'switchCase': 1,
                    'baseIndent': 1,
                    'ignores': []
                }],

                //Naming convention - variables
                '@typescript-eslint/naming-convention': ['error', {
                    selector: 'variable',
                    format: [
                        'camelCase',
                        'UPPER_CASE',
                        'snake_case'
                    ],
                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'allow',
                },
                    {
                        selector: 'variable',
                        types: ['function'],
                        modifiers: ['const'],
                        format: ['PascalCase', 'camelCase'],
                    },
                    {
                        selector: 'variable',
                        types: ['function'],
                        modifiers: ['const', 'exported'],
                        format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
                    }],

            }
        },
    ]
}
