```html
<!doctype html>
```

---

```plantuml
@startmindmap
* HTML <!DOCTYPE> Declaration
** 扩展阅读
*** https://www.w3schools.com/tags/tag_doctype.ASP
*** https://developer.mozilla.org/en-US/docs/Glossary/Doctype
*** https://html.spec.whatwg.org/multipage/syntax.html#the-doctype
*** https://www.freecodecamp.org/news/what-is-the-doctype-declaration-in-html/
** 介绍
*** 文档类型声明 / The HTML document type declaration
*** 必须以<!DOCTYPE>声明开头
*** not an HTML tag
*** 确保浏览器尽最大努力遵循相关规范
@endmindmap
```

---

```plantuml
@startmindmap
* HTML <!DOCTYPE> Declaration
** 大小写问题
*** MDN 代码示例的约定是使用小写
*** 但也常见将其写为<!DOCTYPE html>
*** <!DOCTYPE html>
*** <!DocType html>
*** <!Doctype html>
*** <!doctype html>
** 使用注意事项
*** 位置：文档第一行
*** 重要性：不可省略 + 影响SEO和页面表现
** HTML 4.01
*** DOCTYPE声明指的是文档类型定义 (DTD)
*** <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
** XHTML 1.1
*** <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
@endmindmap

```

---

- HTML 4.01 规定了三种文档类型：Strict、Transitional 以及 Frameset。
- XHTML 1.0 规定了三种 XML 文档类型：Strict、Transitional 以及 Frameset。

| 文档类型         | 作用                                                             |     |
| ---------------- | ---------------------------------------------------------------- | --- |
| Strict DTD       | 用于排除 W3C 预计随着 CSS 支持的增长而逐步淘汰的属性和元素的网页 |     |
| Transitional DTD | 用于包含W3C 预计随着 CSS 支持的增长而逐步淘汰的属性和元素的网页  |
| Frameset DTD     | 用于带有框架的网页                                               |

---

- Standards （标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页，
- Quirks（包容）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页。

|                       |                                              |     |
| --------------------- | -------------------------------------------- | --- |
| Full standards mode   | 完全标准模式根据 W3C Web 标准呈现页面        |     |
| Quirks 模式           | 以不符合标准的方式呈现页面                   |
| Almost standards mode | 接近于完全标准模式，但具有支持少量怪癖的功能 |
