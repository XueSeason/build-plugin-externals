# build-plugin-externals

Webpack 规范自定义 externals:

```json
{
  "type": "rax",
  "targets": [
    "web"
  ],
  "plugins": [
    [
      "build-plugin-externals", 
      {
        "rax": "rax"
      }
    ]
  ]
}
```