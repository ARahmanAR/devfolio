---
title: 'Markdown লেখার কয়েকটি সহজ টিপস'
description: 'সুন্দর, পাঠযোগ্য এবং maintainable Markdown লেখার জন্য কয়েকটি ব্যবহারিক নিয়ম।'
pubDate: 2026-10-01
tags: ['markdown', 'writing', 'documentation']
---

Markdown দেখতে সহজ, কিন্তু একটু নিয়ম মেনে লিখলে এর পাঠযোগ্যতা অনেক বেড়ে যায়। Blog post, documentation বা project note লেখার সময় নিচের অভ্যাসগুলো কাজে লাগে।

## Heading-এর hierarchy ঠিক রাখুন

একটি পোস্টে সাধারণত একটি `#` heading থাকে। এরপর বড় অংশের জন্য `##` এবং তার ভেতরের অংশের জন্য `###` ব্যবহার করুন। শুধু বড় দেখানোর জন্য heading level বাদ দেবেন না।

```markdown
# পোস্টের শিরোনাম

## প্রথম অংশ

### প্রথম অংশের একটি বিষয়

## দ্বিতীয় অংশ
```

এই hierarchy screen reader ব্যবহারকারী এবং search engine দুজনের জন্যই বিষয়বস্তু বোঝা সহজ করে।

## ছোট paragraph লিখুন

দীর্ঘ paragraph চোখে পড়তে কষ্টকর। এক paragraph-এ একটি মূল ধারণা রাখুন এবং প্রয়োজন হলে দুই বা তিনটি paragraph-এ ভাগ করুন। এতে মোবাইল স্ক্রিনেও লেখা স্বচ্ছ থাকে।

## তালিকা ব্যবহার করুন

একাধিক item, ধাপ বা বৈশিষ্ট্য থাকলে list ব্যবহার করুন:

- গুরুত্বপূর্ণ বিষয় দ্রুত scan করা যায়।
- প্রতিটি item আলাদা করে বোঝা যায়।
- লেখার visual rhythm ভালো থাকে।

ধাপের ক্রম গুরুত্বপূর্ণ হলে numbered list ব্যবহার করুন:

1. সমস্যাটি পরিষ্কারভাবে লিখুন।
2. সমাধানের ধাপ দেখান।
3. ফলাফল এবং প্রয়োজনীয় সতর্কতা যোগ করুন।

## Code আলাদা করে দেখান

ছোট code বা command-এর জন্য inline code ব্যবহার করুন, যেমন `npm run dev`। বড় snippet হলে language identifier-সহ fenced code block ব্যবহার করা ভালো:

```js
const greeting = 'Hello, Markdown!';
console.log(greeting);
```

Language identifier syntax highlighting চালু করতে সাহায্য করে এবং code পড়া সহজ হয়।

## Link-এর text অর্থপূর্ণ রাখুন

`এখানে ক্লিক করুন` লেখার বদলে link-এর text-এ গন্তব্যের অর্থ প্রকাশ করুন:

```markdown
[Astro documentation](https://docs.astro.build)
```

এতে link-টি context ছাড়াও বোঝা যায় এবং accessibility উন্নত হয়।

## শেষবার পড়ে দেখুন

Publish করার আগে heading, spelling, code block এবং link পরীক্ষা করুন। একটি ভালো Markdown document শুধু syntax-এ সঠিক নয়, পাঠকের জন্য scan করা এবং follow করাও সহজ।
