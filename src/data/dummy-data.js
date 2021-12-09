function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export const data = {
  items: [
    {
      id: "1",
      name: "Anker USB C Charger 20W, 511 Charger (Nano Pro), PIQ 3.0 Durable Compact Fast Charger, Anker Nano Pro for iPhone 13/13 Mini/13 Pro/13 Pro Max/12, Galaxy, Pixel 4/3, iPad/iPad mini (Cable Not Included)",
      price: 19.99,
      arrivalDate: addDays(Date.now(), 2),
      image: "61a4iMOJTcL._AC_SL1500_.jpg",
      description: `Designed for iPhone: Provide full-speed 20W charging for the iPhone 13.`,
      comments: [
        {
          id: "1",
          text: "I was charging my iPad pro and when I went to unplug the brick and it was super hot to the touch I am not sure if that is a defect or anyone else brick is doing the same thing?",
        },
        {
          id: "2",
          text: "Product overall charges my iPhone 13 pro max fairly quick. However the little charger can get fairly warm pretty fast. And I noticed that it doesn’t stop charging the phone it’s at 100%. I’m not sure if it is suppose to be that way because i had a Samsung note 10 and it automatically cuts off the charging after its @100%. Overall pretty good little charger that can handle the iPhone 13 pro max",
        },
      ],
      ratings: [
        { id: "1", rating: 4 },
        { id: "2", rating: 4 },
        { id: "3", rating: 4 },
      ],
      detailedInfo: `About this item
Designed for iPhone: Provide full-speed 20W charging for the iPhone 13.
High-Speed Charging: 20W USB-C charging gives you the power you need to charge up your iPhone to 50% in just 25 minutes—that’s up to 3 times faster than your old 5W charger.
Advanced Safety Features: Equipped with our all-new ActiveShield️ safety system to offer enhanced protection. Features a Dynamic Temperature Sensor which actively monitors temperature, and a Power Tuner Chip which adjusts power output to safeguard your connected device.
Our Speed, Your Style: Choose between 4 unique colors to find the one that suits your style.
What You Get: Anker 511 Charger ( Nano Pro ), welcome guide, our worry-free 18-month warranty, and friendly customer service (cable not included).`,
      ratingsAverage: 4,
    },
    {
      id: "2",
      name: "Anker Magnetic Wireless Charger, 623 MagGo 2-in-1 Wireless Charging Station with 20W USB-C Charger, for iPhone 13/13 Pro / 13 Pro Max / 13 Mini/iPhone 12/12 Pro, AirPods Pro (Dolomite White)",
      price: 79.94,
      arrivalDate: addDays(Date.now(), 5),
      image: "61PAkmZfqtL._AC_SL1500_.jpg",
      description:
        "Power for 2: Supports simultaneous wireless charging of your iPhone 13/12 and earbuds in a single place. Time to get rid of those messy cables!",
      comments: [],
      ratings: [{ id: "1", rating: 3 }],
      detailedInfo: `About this item
Power for 2: Supports simultaneous wireless charging of your iPhone 13/12 and earbuds in a single place. Time to get rid of those messy cables!
Flex—Your Way: Flip up the phone-charging platform to a maximum range of 60° and attach your iPhone horizontally or vertically for perfect viewing pleasure.
Never Feel Weighed Down: Save valuable space with a versatile magnetic charging station that can quickly power up your iPhone and earbuds and is 40% smaller than a soda can.
Multi-Functional Base: The non-slip base keeps the charging station in place and prevents sliding when charging. It also features a sleep-friendly LED indicator that shows you the charging status*.
What You Get: Anker 623 Magnetic Wireless Charger (MagGo), 20W USB-C charger, 5 ft (1.5 m) USB-C to USB-C charging cable, welcome guide, 24-month stress-free warranty, and friendly customer service.`,
      ratingsAverage: 3,
    },
    {
      id: "3",
      name: "Soundcore by Anker Life Q20+ Active Noise Cancelling Headphones, 40H Playtime, Hi-Res Audio, Soundcore App, Connect to 2 Devices, Memory Foam Earcups, Bluetooth Headphones for Travel, Home Office",
      price: 69.99,
      arrivalDate: addDays(Date.now(), 5),
      image: "61ym-3p6GwL._AC_SL1500_.jpg",
      description:
        "Hi-Res Audio: Custom oversized 40 mm dynamic drivers produce Hi-Res Audio ensures devices are capable of producing exceptional sound. Music is reproduced with high frequencies that",
      comments: [
        {
          id: "1",
          text: `I’m very happy with these so far. Sound quality is very good to my ear. Using the mic for calls seems fine, what little I’ve tested so far. The headphones seem well constructed, fit comfortably, and look nice and stylish! The buttons seem to be well placed. It’s easy enough to familiarize yourself with where the controls are at, and use them to manage playback, volume, answer calls, etc. Noise cancellation seems pretty good. It doesn’t cut 100% of the background noise when there’s no music playing, but it does muffle it a lot. If there’s some music playing background noise pretty well vanishes. I like that it supports multiple bluetooth connections.`,
        },
        {
          id: "2",
          text: `Working remote is going to be the new normal. I traveled 50% or more for work since 2009, but 2020 was the year of virtual meetings. I use windows laptops and desktop + apple iPad and iPhone. Having different wired headphones was a bit of a pain. I use Raycon earbuds as my everyday for working out. I needed something better that would be an all around great fit. The mic works great for calls and the noise canceling works really well. Better than I expected at this price point.`,
        },
        {
          id: "3",
          text: `Tried these out as an alternative to my airpods since the train is too noisy to be able to hear them - everything is controlled via an app which works well. They pair and stay paired quickly and the cancellation is quite good - perfect for a commute on a noisy train. The ability to switch to 'transparent' and 'off' via the app is helpful too. Battery life is solid.`,
        },
      ],
      ratings: [
        { id: "1", rating: 5 },
        { id: "2", rating: 5 },
      ],
      detailedInfo: `About this item
Incredible Sound Loved by 20 Million+ People
Hi-Res Audio: Custom oversized 40 mm dynamic drivers produce Hi-Res Audio ensures devices are capable of producing exceptional sound. Music is reproduced with high frequencies that reach up to 40kHz for stunning clarity and detail.
Reduce Ambient Noises By Up to 90%: Life Q20+ has 4 ANC microphones and a digital active noise cancellation algorithm to detect and cancel out a wider range of low and mid-frequency noises such as cars and airplane engines.
Extended Playtime: Enjoy 40 hours of playtime in wireless noise cancelling mode (at 60% volume) or 60 hours’ in standard mode. Also enjoy 4 hours of listening when you charge Life Q20+ active noise cancelling headphones for just 5 minutes.
Multipoint Connection: Connect Life Q20+ active noise cancelling headphones to 2 devices at once via your local Bluetooth network and seamlessly switch between them.`,
      ratingsAverage: 5,
    },
    {
      id: "4",
      name: "Anker USB C Hub, 341 USB-C Hub (7-in-1), with 4K HDMI, 100W Power Delivery, USB-C and 2 USB-A 5Gbps Data Ports, microSD and SD Card Reader, for MacBook Air, MacBook Pro, XPS, and More",
      price: 29.74,
      arrivalDate: addDays(Date.now(), 10),
      image: "61thMtrP5rL._AC_SL1500_.jpg",
      description:
        "Massive Expansion: Get way more out of your laptop’s USB-C port, with 4K@30Hz HDMI, SD card connectivity, USB-A / USB-C data ports, as well as high-speed pass-through charging with Power Delivery.",
      comments: [
        {
          id: "1",
          text: "That MacBook is now sitting in a repair shop two months after purchasing it, with all ports unable to receive power and thus the computer out of battery and unusable. The repair is covered by AppleCare but guess what - the data recovery by the third party repair shop is not covered by AppleCare (Apple says they care too much about privacy to offer this service -_-). And data recovery is needed because the genius bar rep told me if it's a logic board issue, it's 100% chance of data loss without a data recovery because the hard drive is sodered to the logic board.",
        },
        {
          id: "2",
          text: "I should have paid attention to the posts about this product frying ports on a MacBook Pro. This is exactly what happened to us, and now the brand new MacBook is bricked. Do NOT buy this for use with a MacBook Pro.",
        },
        {
          id: "3",
          text: "Solid build quality - for such a dinky hub, it’s got some heft. Shouldn’t slide around on the desk too much unlike the all-plastic hub I use at work.",
        },
      ],
      ratings: [{ id: "1", rating: 2.5 }],
      detailedInfo: `About this item
The Anker Advantage: Join the 65 million+ powered by our leading technology.
Massive Expansion: Get way more out of your laptop’s USB-C port, with 4K@30Hz HDMI, SD card connectivity, USB-A / USB-C data ports, as well as high-speed pass-through charging with Power Delivery.
Powerful Pass-Through Charging: Compatible with USB-C Power Delivery to provide high-speed pass-through charging to your laptop at up to 85W.
High-Speed, High-Def: USB-C and USB-A data ports provide file transfer at speeds up to 5 Gbps, while an HDMI port supports media display at resolutions up to 4K@30Hz.
What You Get: Anker 341 USB-C Hub (7-in-1)/Premium 7-in-1 USB-C Hub, travel pouch, welcome, guide, worry-free 18-month warranty, and friendly customer service.`,
      ratingsAverage: 2.5,
    },
    {
      id: "5",
      name: `Anker PowerConf C300 Smart Full HD Webcam, AI-Powered Framing & Autofocus, 1080p Webcam with Noise-Cancelling Microphones, Adjustable FoV, HDR, 60 FPS, Low-Light Correction, Zoom Certified`,
      price: 129.98,
      arrivalDate: addDays(Date.now(), 1),
      image: "61EfJuWKycL._AC_SL1500_.jpg",
      description:
        "Look Like a Pro: Make a great first impression with clients and impress your boss with PowerConf C300’s crisp HD webcam 1080p/60FPS camera with true-to-life colors.",
      comments: [
        {
          id: "1",
          text: "Anker has continued to release firmware and software updates. At this point, I'd say the HDR feature definitely has an impact on color quality. It's noticeably better with HDR turned on. But then, why is it even an option? Who's choosing to turn off better color reproduction??",
        },
      ],
      ratings: [{ id: "1", rating: 2.5 }],
      detailedInfo: `About this item
Look Like a Pro: Make a great first impression with clients and impress your boss with PowerConf C300’s crisp HD webcam 1080p/60FPS camera with true-to-life colors.
Clear Voice Pickup: Be heard loud and clear via HD webcam while working from home thanks to the ultra-sensitive dual microphones.
Shine Bright in Low Light: When working late or calling clients in different time zones, the HD webcam’s AI-powered auto low-light correction kicks in to ensure you stand out, even in poor lighting conditions.
Fit Everyone In Frame: Whether you’re calling solo from home or huddled with colleagues in the office, our revolutionary AI technology automatically adjusts the field of view depending on the number of people in your meeting.
No Time Wasted: Automatically focuses on people or objects within just 0.35 seconds. Use auto-focus AI to show off every detail of your latest samples and prototypes without waiting for the focus to catch up.`,
      ratingsAverage: 2.5,
    },
    {
      id: "6",
      name: "Soundcore by Anker Life P3 Noise Cancelling Earbuds, Big Bass, 6 Mics, Clear Calls, Multi Mode Noise Cancelling, Wireless Charging, Soundcore App with Gaming Mode, Sleeping Mode, Find Your Earbuds",
      price: 79.99,
      arrivalDate: addDays(Date.now(), 5),
      image: "51mIGwN1eFS._AC_SL1500_.jpg",
      description:
        "Pocket-Sized Pop of Color: Life P3 noise cancelling earbuds come in 5 eye-catching colors to pair with your personal style. And the ultra-compact case fits effortlessly in small bags or pockets.",
      comments: [
        {
          id: "1",
          text: "I have been looking for something to replace my Airpods as the Airpods will not stay in my ears without silicone covers on them, which I have to take off and put on every time I put them in and take out of the case. Not a big deal, but a bit of an annoyance. Plus my son REALLY wants Airpods, so he may get mine ;)",
        },
      ],
      ratings: [{ id: "1", rating: 4.5 }],
      detailedInfo: `Incredible Sound Loved By 20 Million+ People
Pocket-Sized Pop of Color: Life P3 noise cancelling earbuds come in 5 eye-catching colors to pair with your personal style. And the ultra-compact case fits effortlessly in small bags or pockets.
Fueled By The Beat: Life P3 noise cancelling earbuds’ thumping sound is produced by custom 11mm composite drivers. Activate BassUp mode in the app to further intensify bass in real-time.
Multi-Mode Noise Cancelling: Sync the noise cancelling to your location for an optimized experience. Transport, Outdoor, and Indoor modes are each tailored to block out irritating background noises in each environment.
Enhanced Call Performance: Life P3 noise cancelling earbuds have 6 microphones and an exclusive algorithm to tune out background noises. Your voice will be heard clearly on calls, video chats, livestreams, and more.`,
      ratingsAverage: 4.5,
    },
    {
      id: "7",
      name: "Anker Wireless Charger, 313 Wireless Charger (Stand), Qi-Certified for iPhone 12, 12 mini, 12 Pro Max, SE, 11, 11 Pro, 11 Pro Max, XR, XS Max, 10W Fast-Charging Galaxy S20, S10 (No AC Adapter)",
      price: 18.99,
      arrivalDate: addDays(Date.now(), 7),
      image: "51J1d8kZsCL._AC_SL1250_.jpg",
      description:
        "A Galaxy of Speed: A high-efficiency chipset provides 10W high-speed charging for Samsung Galaxy. iPhones get a boosted 5W charge at 10% faster than other wireless chargers.",
      comments: [
        {
          id: "1",
          text: "I have been looking for something to replace my Airpods as the Airpods will not stay in my ears without silicone covers on them, which I have to take off and put on every time I put them in and take out of the case. Not a big deal, but a bit of an annoyance. Plus my son REALLY wants Airpods, so he may get mine ;)",
        },
      ],
      ratings: [
        { id: "1", rating: 4 },
        { id: "2", rating: 3 },
        { id: "3", rating: 5 },
      ],
      detailedInfo: `The Anker Advantage: Join the 55+ million powered by our leading technology
A Galaxy of Speed: A high-efficiency chipset provides 10W high-speed charging for Samsung Galaxy. iPhones get a boosted 5W charge at 10% faster than other wireless chargers
Flip It: Charge in landscape orientation while watching videos or portrait mode for messaging and facial recognition
Case Friendly: Don't fumble with your phone case. PowerWave charges directly through protective cases. Rubber/plastic/TPU cases less than 5 mm thick only. Magnetic and metal attachments or cards will prevent charging
What You Get: Anker 313 Wireless Charger (Stand) / PowerWave Stand, 4 ft Micro USB Cable, welcome guide, worry-free 18-month warranty, and friendly customer service`,
      ratingsAverage: 4,
    },
    {
      id: "8",
      name: "Soundcore by Anker Life A1 True Wireless Earbuds, Powerful Customized Sound, 35H Playtime, Wireless Charging, USB-C Fast Charge, IPX7 Waterproof, Button Control, Bluetooth Earbuds, Commute, Sports",
      price: 49.99,
      arrivalDate: addDays(Date.now(), 3),
      image: "71d+A4McZxL._AC_SL1500_.jpg",
      description:
        "Expertly-Tuned Sound: Life A1 true wireless earbuds have oversized 8mm drivers with triple-layer composite diaphragms to produce powerful sound with 40% more bass, 100% more treble, and clear mids.",
      comments: [
        {
          id: "1",
          text: "I bought these to conduct conference calls, but none of my devices detect that these have mics, such as OnePlus7, iPhone X, and macOS laptop. Disappointing. I want to send them back, but I recycled the box.",
        },
      ],
      ratings: [
        { id: "1", rating: 2.5 },
        { id: "2", rating: 4.5 },
      ],
      detailedInfo: `Incredible Sound Loved by 20 Million+ People
Expertly-Tuned Sound: Life A1 true wireless earbuds have oversized 8mm drivers with triple-layer composite diaphragms to produce powerful sound with 40% more bass, 100% more treble, and clear mids.
3 Custom Sound Modes: Signature mode produces balanced sound that’s perfect for all music genres. Switch to Bass Booster to intensify bass-heavy songs for workouts or choose Podcast to enhance mids for podcasts and audiobooks.
35-Hour Playtime: Life A1 true wireless earbuds have 9 hours of playtime from a single charge and an extra 3 charges from the compact charging case. A quick 10-minute charge gives you 1.5 hours of listening when you’re in a rush.
2 Ways to Charge: Use the included Anker USB-C cable to charge the case quickly or simply place it down on a wireless charging pad for super-convenient recharging.`,
      ratingsAverage: 3.5,
    },
  ],
};
