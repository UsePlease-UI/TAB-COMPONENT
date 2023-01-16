module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:jsx-a11y/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'prettier', '@typescript-eslint', 'import'],
    rules: {
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before'
                    },
                    {
                        pattern: 'components/**',
                        patternOptions: { partial: true, nocomment: true },
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'components',
                        patternOptions: { partial: true, nocomment: true },
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'styles/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: '*.+(css|scss)',
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true
                        },
                        group: 'object',
                        position: 'after'
                    }
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                },
                warnOnUnassignedImports: true
            }
        ],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ],
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        ]
    },
    settings: {
        'import/resolver': {
            typescript: {},
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    }
};
