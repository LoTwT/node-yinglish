# Node版本的淫语翻译器！

修改自 https://github.com/RimoChan/yinglish

## Usage

首先安装一下。
```bash
> pnpm add node-yinglish
```

只暴露了一个接口！但是我还是不想用`export default`，所以你要指定这个唯一的函数名。

```ts
import { chs2yin } from 'node-yinglish'

console.log(chs2yin('吃葡萄不吐葡萄皮。'))
// ……吃〇〇……不……吐葡……葡萄〇……
```

