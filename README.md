# React + TypeScript + Vite

# 사용법

`git clone https://github.com/Jamkris/React_Ts_Setting_Vite.git client`

`cd client`

`yarn install`

`yarn run dev`

# 풀더 구조

client <br>
 ┣ public <br>
 ┣ src <br>
 ┃ ┣ assets <br>
 ┃ ┃ ┣ font <br>
 ┃ ┃ ┣ icon <br>
 ┃ ┃ ┗ image <br>
 ┃ ┣ components <br>
 ┃ ┣ config <br>
 ┃ ┣ data <br>
 ┃ ┣ hooks <br>
 ┃ ┣ lib <br>
 ┃ ┃ ┣ api <br>
 ┃ ┃ ┗ utils <br>
 ┃ ┃ ┃ ┗ style <br>
 ┃ ┣ pages <br>
 ┃ ┃ ┗ Main <br>
 ┃ ┃ ┃ ┣ index.t <br>
 ┃ ┃ ┃ ┗ style.ts <br>
 ┃ ┣ router <br>
 ┃ ┃ ┗ index.tsx <br>
 ┃ ┣ types <br>
 ┃ ┣ App.tsx <br>
 ┃ ┣ index.css <br>
 ┃ ┗ index.tsx <br>
 ┣ .eslintrc <br>
 ┣ .eslintrc.json <br>
 ┣ .gitignore <br>
 ┣ .prettierrc <br>
 ┣ LICENSE <br>
 ┣ LICENSE copy <br>
 ┣ README.md <br>
 ┣ custom.d.ts <br>
 ┣ package.json <br>
 ┣ tsconfig.json <br>
 ┗ yarn.lock <br>

 # 의존성 및 세팅
설치되는 의존성 `react-query` `react-router-dom` `styled-components` `TypeScript`

## Custom.d.ts
```
./custom.d.ts
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

./src/custom.d.ts
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
```
모든 이미지파일 import 가능

## Eslint
```
.eslintrc
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["@typescript-eslint", "prettier"],
  "ignorePatterns": ["node_modules/"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}

./eslintrc.json
{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  "plugins": ["@typescript-eslint", "react"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
}
```
입맛에 맛게 조정이 필요함 꽤 깐깐한 eslint 설정

## tsconfig
```
./tsconfig.json
{
  "compilerOptions": {
    "allowImportingTsExtensions": true,
    "typeRoots": ["./node_modules/@types"],
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "src"
  },
  "include": ["src", "src/custom.d.ts"]
}
```
baseUrl = src