---
title: "A Note on Hot Module Reload"
---

So webpack has a nifty ability to do what's called hot module reload (HMR.) If you've ever used LiveReload's CSS injection, this will sound familiar. HMR will take your code, compile it on the fly, and then inject it into your live-running code. Pretty cool tech.

If you're working a dropdown that requires three different clicks to get there, it's pretty neat to be able to change the code and watch the UI change without having to reload and get the UI back into a state where you can see the effects of your change.

But we're not going to do it today. For one, HMR does not work with our stateless functional components at all. So we'd have to convert everything to classes which is a burden. It also just requires a lot of setup that can be finicky at times. The author himself says [the tech is a (great) hack][hmr-death].

So suffice to say, I want you to be aware of its existence and continuing evolution but I feel like our time is better off investigating other parts of the React ecosystem.

[hmr-death]: https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4#.80xafsv2d