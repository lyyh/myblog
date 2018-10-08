## 组件开发-样式篇
### 需求
1. 兼容全局样式、局部样式
2. 样式可覆盖
3. BEM规范，且class便于开发

### CSS模块化
使用CSS Modules模块化方案
```
{
                test: /\.scss$/,
                exclude: path.resolve(__dirname, 'styles'),
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?outputStyle=expanded'
                ]
            }, {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'styles'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]__[hash:base64:7]'
                        }
                    },
                    'sass-loader?outputStyle=expanded'
                ]
            },
```

