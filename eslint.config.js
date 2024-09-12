import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import standard from 'eslint-config-standard' // Agregar eslint-config-standard
import importPlugin from 'eslint-plugin-import' // Agregar eslint-plugin-import
import promisePlugin from 'eslint-plugin-promise' // Agregar eslint-plugin-promise
import nPlugin from 'eslint-plugin-n'

export default [
  { ignores: ['dist'] }, // Ignorar la carpeta dist
  {
    files: ['**/*.{js,jsx}'], // Aplicar ESLint a archivos .js y .jsx
    languageOptions: {
      ecmaVersion: 2020, // Versión de ECMAScript
      globals: globals.browser, // Variables globales del navegador
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true }, // Habilitar JSX
        sourceType: 'module' // Usa módulos ES
      }
    },
    settings: { react: { version: '18.3' } }, // Detectar la versión de React
    plugins: {
      react, // Plugin para React
      'react-hooks': reactHooks, // Plugin para React Hooks
      'react-refresh': reactRefresh, // Plugin para react-refresh
      import: importPlugin, // Plugin para gestionar importaciones
      promise: promisePlugin,
      n: nPlugin // Plugin para gestionar promesas
    },
    rules: {
      ...js.configs.recommended.rules, // Reglas recomendadas de ESLint
      ...react.configs.recommended.rules, // Reglas recomendadas de React
      ...react.configs['jsx-runtime'].rules, // Reglas para el nuevo JSX runtime
      ...reactHooks.configs.recommended.rules, // Reglas recomendadas de React Hooks
      ...standard.rules, // Reglas de Standard JS
      'react/jsx-no-target-blank': 'off', // Desactivar regla para enlaces con _blank
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  }
]
