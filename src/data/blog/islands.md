---
title: 'Astro Islands Architecture কী?'
description: 'শুধু প্রয়োজনীয় অংশে JavaScript ব্যবহার করে কীভাবে দ্রুত এবং ইন্টার‌্যাকটিভ ওয়েবসাইট তৈরি করা যায়।'
pubDate: 2026-10-01
tags: ['astro', 'islands', 'javascript']
---

একটি ওয়েব পেজের প্রতিটি অংশকে ইন্টার‌্যাকটিভ করার প্রয়োজন হয় না। Navigation, article বা footer-এর মতো অংশগুলো সাধারণ HTML হিসেবেই ভালো কাজ করে। Astro Islands Architecture এই ধারণাটাকেই ব্যবহার করে: পুরো পেজকে JavaScript অ্যাপ না বানিয়ে শুধু প্রয়োজনীয় অংশগুলোকে interactive island হিসেবে hydrate করা।

## Island বলতে কী বোঝায়?

একটি island হলো static HTML-এর মধ্যে থাকা ছোট একটি interactive component। যেমন, একটি search box, theme switcher বা image carousel। পেজের বাকি অংশ server-rendered HTML হিসেবে থাকে, আর শুধু এই component-টির জন্য browser-এ JavaScript পাঠানো হয়।

```astro
---
import ThemeToggle from '../components/ThemeToggle.jsx';
---

<header>
	<h1>আমার ব্লগ</h1>
	<ThemeToggle client:load />
</header>
```

এখানে heading-এর জন্য কোনো client-side JavaScript প্রয়োজন নেই। শুধু `ThemeToggle` component-টি `client:load` directive-এর কারণে browser-এ সক্রিয় হবে।

## Hydration কখন হবে?

Astro বিভিন্ন hydration directive দেয়, যাতে component কখন browser-এ চালু হবে তা নির্দিষ্ট করা যায়:

- `client:load` পেজ লোড হওয়ার সঙ্গে সঙ্গে component চালু করে।
- `client:idle` browser idle হলে component চালু করে।
- `client:visible` component viewport-এ দেখা গেলে JavaScript লোড করে।
- `client:media` নির্দিষ্ট media query মিলে গেলে component চালু করে।

সঠিক directive বেছে নিলে initial page load দ্রুত থাকে এবং অপ্রয়োজনীয় কাজ কমে।

## কেন এটি গুরুত্বপূর্ণ?

সাধারণ single-page application-এ ব্যবহারকারীকে প্রথমে JavaScript bundle ডাউনলোড, parse এবং execute করতে হয়। Content-first সাইটে এর অনেকটাই অপ্রয়োজনীয়। Islands Architecture HTML-কে অগ্রাধিকার দেয় এবং interactivity-কে ছোট, আলাদা অংশে সীমাবদ্ধ রাখে।

এর ফলে:

- প্রথম content দ্রুত দেখা যায়।
- কম JavaScript download হয়।
- ধীর ডিভাইসেও interaction-এর চাপ কম থাকে।
- component-এর দায়িত্ব এবং performance cost সহজে বোঝা যায়।

## শেষ কথা

Islands Architecture-এর মূল শিক্ষা হলো সবকিছুকে interactive করার দরকার নেই। যে অংশে interaction দরকার, শুধু সেই অংশে JavaScript ব্যবহার করলেই অনেক সময় simpler code এবং faster experience পাওয়া যায়। Astro এই পদ্ধতিটাকে default workflow-এর অংশ করে দিয়েছে।
