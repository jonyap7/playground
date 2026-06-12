// ============ i18n ============
const T = {
  en:{tagline:"Find Work Today. Find Staff Today.",
    roleWorker:"Find Work",roleEmployer:"Hire Staff",
    w_jobs:"Jobs",w_apps:"My Jobs",w_profile:"Profile",
    e_post:"Post",e_jobs:"My Jobs",e_biz:"Business",
    near:"Nearby",urgentOnly:"⚡ Urgent",all:"All",within:"Within",
    kmAway:"km away",here:"nearby",spotsLeft:"spots left",full:"FULL",
    apply:"Apply",applyAlone:"Apply alone",applyFriend:"Apply with a friend",chooseFriend:"Or bring a friend",howApply:"How do you want to apply?",
    appliedBadge:"Applied ✓",applied:"Waiting",accepted:"Accepted",declined:"Declined",completed:"Completed",noshow:"No-show",
    today:"TODAY",tomorrow:"TOMORROW",verified:"Verified",new:"New",reliable:"reliable",
    reliability:"Reliability",completedJobs:"Completed jobs",noshows:"No-shows",
    postTitle:"Post a job in 30 seconds",
    fTitle:"Job title",fLoc:"Location",fDate:"Date",fTime:"Time",fPay:"Pay",fNeeded:"Number needed",fUrg:"When?",
    uToday:"⚡ Need staff TODAY",uTomorrow:"⚡ Need staff TOMORROW",uNormal:"Normal",publish:"Publish job",
    applicants:"applicants",accept:"Accept",decline:"Decline",complete:"✓ Showed up",markNoshow:"No-show",chat:"💬",
    noJobs:"No jobs in this range. Try a wider distance.",noApps:"You haven't applied yet — browse jobs and tap Apply!",
    noMyJobs:"No jobs posted yet. Tap Post to hire in 30 seconds.",noApplicants:"No applicants yet.",
    name:"Name",age:"Age",languages:"Languages",actingAs:"Demo: act as",
    bizName:"Business",jobsPosted:"Jobs posted",completionRate:"Completion rate",avgRating:"Avg rating",
    send:"Send",typeMsg:"Type a message…",you:"You",friend:"friend",
    rateThis:"Rate this employer:",rated:"You rated",loadDemo:"Load demo",clearAll:"Clear all",
    needPax:"Need",pax:"pax",appliedToast:"Applied! The employer can see you now.",postedToast:"Job posted! Workers can see it now.",
    spotsFilled:"filled",chatWith:"Chat",reviews:"reviews"},
  ms:{tagline:"Cari Kerja Hari Ini. Cari Pekerja Hari Ini.",
    roleWorker:"Cari Kerja",roleEmployer:"Cari Pekerja",
    w_jobs:"Kerja",w_apps:"Kerja Saya",w_profile:"Profil",
    e_post:"Iklan",e_jobs:"Iklan Saya",e_biz:"Perniagaan",
    near:"Berdekatan",urgentOnly:"⚡ Segera",all:"Semua",within:"Dalam",
    kmAway:"km jauh",here:"dekat",spotsLeft:"kekosongan",full:"PENUH",
    apply:"Mohon",applyAlone:"Mohon sendiri",applyFriend:"Mohon dengan kawan",chooseFriend:"Atau bawa kawan",howApply:"Bagaimana anda mahu mohon?",
    appliedBadge:"Telah mohon ✓",applied:"Menunggu",accepted:"Diterima",declined:"Ditolak",completed:"Selesai",noshow:"Tak hadir",
    today:"HARI INI",tomorrow:"ESOK",verified:"Disahkan",new:"Baru",reliable:"boleh percaya",
    reliability:"Kebolehpercayaan",completedJobs:"Kerja selesai",noshows:"Tak hadir",
    postTitle:"Iklan kerja dalam 30 saat",
    fTitle:"Nama kerja",fLoc:"Lokasi",fDate:"Tarikh",fTime:"Masa",fPay:"Gaji",fNeeded:"Bilangan diperlukan",fUrg:"Bila?",
    uToday:"⚡ Perlu HARI INI",uTomorrow:"⚡ Perlu ESOK",uNormal:"Biasa",publish:"Siar iklan",
    applicants:"pemohon",accept:"Terima",decline:"Tolak",complete:"✓ Hadir",markNoshow:"Tak hadir",chat:"💬",
    noJobs:"Tiada kerja dalam jarak ini. Cuba lebih jauh.",noApps:"Anda belum memohon — lihat kerja dan tekan Mohon!",
    noMyJobs:"Belum ada iklan. Tekan Iklan untuk upah dalam 30 saat.",noApplicants:"Belum ada pemohon.",
    name:"Nama",age:"Umur",languages:"Bahasa",actingAs:"Demo: jadi",
    bizName:"Perniagaan",jobsPosted:"Iklan disiar",completionRate:"Kadar selesai",avgRating:"Penilaian",
    send:"Hantar",typeMsg:"Taip mesej…",you:"Anda",friend:"kawan",
    rateThis:"Nilai majikan ini:",rated:"Anda beri",loadDemo:"Muat contoh",clearAll:"Padam semua",
    needPax:"Perlu",pax:"orang",appliedToast:"Telah mohon! Majikan boleh nampak anda.",postedToast:"Iklan disiar! Pekerja boleh nampak.",
    spotsFilled:"diisi",chatWith:"Sembang",reviews:"ulasan"},
  zh:{tagline:"今天找工作。今天找员工。",
    roleWorker:"找工作",roleEmployer:"招员工",
    w_jobs:"工作",w_apps:"我的工作",w_profile:"个人",
    e_post:"发布",e_jobs:"我的招聘",e_biz:"商家",
    near:"附近",urgentOnly:"⚡ 急聘",all:"全部",within:"范围",
    kmAway:"公里",here:"附近",spotsLeft:"空缺",full:"已满",
    apply:"申请",applyAlone:"单独申请",applyFriend:"和朋友一起",chooseFriend:"或带上朋友",howApply:"你想怎样申请？",
    appliedBadge:"已申请 ✓",applied:"等待中",accepted:"已录取",declined:"已拒绝",completed:"已完成",noshow:"缺席",
    today:"今天",tomorrow:"明天",verified:"已认证",new:"新",reliable:"可靠",
    reliability:"可靠度",completedJobs:"完成工作",noshows:"缺席次数",
    postTitle:"30秒发布工作",
    fTitle:"工作名称",fLoc:"地点",fDate:"日期",fTime:"时间",fPay:"薪水",fNeeded:"需要人数",fUrg:"何时？",
    uToday:"⚡ 今天需要",uTomorrow:"⚡ 明天需要",uNormal:"普通",publish:"发布工作",
    applicants:"位申请",accept:"录取",decline:"拒绝",complete:"✓ 出席",markNoshow:"缺席",chat:"💬",
    noJobs:"此范围没有工作。试试更远。",noApps:"你还没申请——看看工作并点击申请！",
    noMyJobs:"还没有发布。点击发布，30秒招人。",noApplicants:"还没有申请者。",
    name:"姓名",age:"年龄",languages:"语言",actingAs:"演示：身份",
    bizName:"商家",jobsPosted:"已发布",completionRate:"完成率",avgRating:"平均评分",
    send:"发送",typeMsg:"输入信息…",you:"你",friend:"朋友",
    rateThis:"评价这位雇主：",rated:"你给了",loadDemo:"加载示例",clearAll:"清除全部",
    needPax:"需要",pax:"人",appliedToast:"已申请！雇主可以看到你了。",postedToast:"已发布！工人可以看到了。",
    spotsFilled:"已满",chatWith:"聊天",reviews:"评价"},
  bn:{tagline:"আজই কাজ খুঁজুন। আজই কর্মী খুঁজুন।",
    roleWorker:"কাজ খুঁজুন",roleEmployer:"কর্মী নিন",
    w_jobs:"কাজ",w_apps:"আমার কাজ",w_profile:"প্রোফাইল",
    e_post:"পোস্ট",e_jobs:"আমার পোস্ট",e_biz:"ব্যবসা",
    near:"কাছাকাছি",urgentOnly:"⚡ জরুরি",all:"সব",within:"মধ্যে",
    kmAway:"কিমি দূরে",here:"কাছে",spotsLeft:"খালি পদ",full:"পূর্ণ",
    apply:"আবেদন",applyAlone:"একা আবেদন",applyFriend:"বন্ধুর সাথে",chooseFriend:"অথবা বন্ধু আনুন",howApply:"কিভাবে আবেদন করবেন?",
    appliedBadge:"আবেদন করা ✓",applied:"অপেক্ষায়",accepted:"গৃহীত",declined:"প্রত্যাখ্যাত",completed:"সম্পন্ন",noshow:"অনুপস্থিত",
    today:"আজ",tomorrow:"আগামীকাল",verified:"যাচাইকৃত",new:"নতুন",reliable:"নির্ভরযোগ্য",
    reliability:"নির্ভরযোগ্যতা",completedJobs:"সম্পন্ন কাজ",noshows:"অনুপস্থিতি",
    postTitle:"৩০ সেকেন্ডে কাজ পোস্ট করুন",
    fTitle:"কাজের নাম",fLoc:"স্থান",fDate:"তারিখ",fTime:"সময়",fPay:"বেতন",fNeeded:"কতজন দরকার",fUrg:"কখন?",
    uToday:"⚡ আজ দরকার",uTomorrow:"⚡ আগামীকাল দরকার",uNormal:"সাধারণ",publish:"কাজ প্রকাশ",
    applicants:"আবেদনকারী",accept:"গ্রহণ",decline:"প্রত্যাখ্যান",complete:"✓ উপস্থিত",markNoshow:"অনুপস্থিত",chat:"💬",
    noJobs:"এই দূরত্বে কাজ নেই। বেশি দূরত্ব দেখুন।",noApps:"আপনি এখনো আবেদন করেননি — কাজ দেখে আবেদন করুন!",
    noMyJobs:"এখনো পোস্ট নেই। ৩০ সেকেন্ডে কর্মী নিন।",noApplicants:"এখনো আবেদনকারী নেই।",
    name:"নাম",age:"বয়স",languages:"ভাষা",actingAs:"ডেমো: হিসেবে",
    bizName:"ব্যবসা",jobsPosted:"পোস্ট করা",completionRate:"সম্পন্নের হার",avgRating:"গড় রেটিং",
    send:"পাঠান",typeMsg:"বার্তা লিখুন…",you:"আপনি",friend:"বন্ধু",
    rateThis:"এই নিয়োগকর্তাকে রেট দিন:",rated:"আপনি দিয়েছেন",loadDemo:"নমুনা লোড",clearAll:"সব মুছুন",
    needPax:"দরকার",pax:"জন",appliedToast:"আবেদন হয়েছে! নিয়োগকর্তা এখন দেখতে পাবেন।",postedToast:"পোস্ট হয়েছে! কর্মীরা দেখতে পাবেন।",
    spotsFilled:"পূর্ণ",chatWith:"চ্যাট",reviews:"রিভিউ"},
};
// extra strings (notifications, plans, GPS, featured) merged into each language
const EXTRA = {
  en:{ notifs:"Notifications",noNotifs:"No notifications yet.",
    notiApplied:"applied to",notiBuddy:"(with a friend)",notiAccepted:"🎉 You're accepted for",notiDeclined:"Not selected for",notiMsg:"💬 New message —",notiUrgent:"⚡ New urgent job nearby:",
    useGPS:"📍 Use my location",gpsOn:"Using your live location 📍",gpsFail:"Location off — using your town",
    plan:"Plan",planFree:"Free",planPro:"Pro",planPremium:"Premium",current:"Current plan",choosePlan:"Choose a plan",
    featured:"Featured",featureThis:"✨ Feature this job (Premium)",unlimited:"Unlimited",perMonth:"/month",
    freeLimit:"Free plan allows 5 jobs. Upgrade for unlimited.",postsUsed:"jobs used",upgraded:"Plan updated!",featureLocked:"Featuring is a Premium feature.",
    planFreeDesc:"5 job posts / month",planProDesc:"Unlimited posts · priority listing",planPremiumDesc:"Featured jobs · applicant boost · company badge" },
  ms:{ notifs:"Notifikasi",noNotifs:"Tiada notifikasi lagi.",
    notiApplied:"memohon",notiBuddy:"(dengan kawan)",notiAccepted:"🎉 Anda diterima untuk",notiDeclined:"Tidak dipilih untuk",notiMsg:"💬 Mesej baru —",notiUrgent:"⚡ Kerja segera berdekatan:",
    useGPS:"📍 Guna lokasi saya",gpsOn:"Menggunakan lokasi langsung 📍",gpsFail:"Lokasi tutup — guna bandar anda",
    plan:"Pelan",planFree:"Percuma",planPro:"Pro",planPremium:"Premium",current:"Pelan semasa",choosePlan:"Pilih pelan",
    featured:"Pilihan",featureThis:"✨ Ketengahkan kerja (Premium)",unlimited:"Tanpa had",perMonth:"/bulan",
    freeLimit:"Pelan percuma 5 kerja sahaja. Naik taraf untuk tanpa had.",postsUsed:"kerja digunakan",upgraded:"Pelan dikemas kini!",featureLocked:"Ketengah adalah ciri Premium.",
    planFreeDesc:"5 iklan / bulan",planProDesc:"Iklan tanpa had · keutamaan",planPremiumDesc:"Kerja pilihan · galak pemohon · lencana syarikat" },
  zh:{ notifs:"通知",noNotifs:"还没有通知。",
    notiApplied:"申请了",notiBuddy:"（和朋友）",notiAccepted:"🎉 你被录取：",notiDeclined:"未被选中：",notiMsg:"💬 新消息 —",notiUrgent:"⚡ 附近急聘：",
    useGPS:"📍 使用我的位置",gpsOn:"正在使用实时位置 📍",gpsFail:"定位关闭 — 使用你的城镇",
    plan:"套餐",planFree:"免费",planPro:"专业",planPremium:"高级",current:"当前套餐",choosePlan:"选择套餐",
    featured:"精选",featureThis:"✨ 精选此工作（高级）",unlimited:"无限",perMonth:"/月",
    freeLimit:"免费版限5个工作。升级享无限。",postsUsed:"已用",upgraded:"套餐已更新！",featureLocked:"精选为高级功能。",
    planFreeDesc:"每月5个发布",planProDesc:"无限发布 · 优先展示",planPremiumDesc:"精选工作 · 申请者加成 · 公司徽章" },
  bn:{ notifs:"নোটিফিকেশন",noNotifs:"এখনো কোনো নোটিফিকেশন নেই।",
    notiApplied:"আবেদন করেছে",notiBuddy:"(বন্ধুসহ)",notiAccepted:"🎉 আপনি গৃহীত:",notiDeclined:"নির্বাচিত হননি:",notiMsg:"💬 নতুন বার্তা —",notiUrgent:"⚡ কাছেই জরুরি কাজ:",
    useGPS:"📍 আমার লোকেশন",gpsOn:"লাইভ লোকেশন ব্যবহার হচ্ছে 📍",gpsFail:"লোকেশন বন্ধ — শহর ব্যবহার হচ্ছে",
    plan:"প্ল্যান",planFree:"ফ্রি",planPro:"প্রো",planPremium:"প্রিমিয়াম",current:"বর্তমান প্ল্যান",choosePlan:"প্ল্যান বাছুন",
    featured:"ফিচার্ড",featureThis:"✨ এই কাজ ফিচার করুন (প্রিমিয়াম)",unlimited:"আনলিমিটেড",perMonth:"/মাস",
    freeLimit:"ফ্রি প্ল্যানে ৫টি কাজ। আনলিমিটেডের জন্য আপগ্রেড করুন।",postsUsed:"কাজ ব্যবহৃত",upgraded:"প্ল্যান আপডেট হয়েছে!",featureLocked:"ফিচার করা প্রিমিয়াম সুবিধা।",
    planFreeDesc:"মাসে ৫টি পোস্ট",planProDesc:"আনলিমিটেড পোস্ট · অগ্রাধিকার",planPremiumDesc:"ফিচার্ড কাজ · আবেদনকারী বুস্ট · কোম্পানি ব্যাজ" },
};
for(const l in T) Object.assign(T[l], EXTRA[l]||{});
// share + install strings
const EXTRA2 = {
  en:{ shareWA:"Share to WhatsApp", share:"Share", install:"📲 Install app", installed:"App installed!", shareText:"is hiring on WhatsBiz GIG" },
  ms:{ shareWA:"Kongsi ke WhatsApp", share:"Kongsi", install:"📲 Pasang apl", installed:"Apl dipasang!", shareText:"sedang mengupah di WhatsBiz GIG" },
  zh:{ shareWA:"分享到 WhatsApp", share:"分享", install:"📲 安装应用", installed:"应用已安装！", shareText:"正在 WhatsBiz GIG 招聘" },
  bn:{ shareWA:"WhatsApp এ শেয়ার", share:"শেয়ার", install:"📲 অ্যাপ ইনস্টল", installed:"অ্যাপ ইনস্টল হয়েছে!", shareText:"WhatsBiz GIG-এ নিয়োগ দিচ্ছে" },
};
for(const l in T) Object.assign(T[l], EXTRA2[l]||{});
// search string
const EXTRA3 = {
  en:{searchPh:"Search jobs…",category:"Category",list:"List",map:"Map",saved:"🔖 Saved",noSaved:"No saved jobs yet. Tap 🤍 on a job to save it.",room:"Sync room",cloudOn:"Cloud sync on",cloudOff:"Local only",fAll:"All"},
  ms:{searchPh:"Cari kerja…",category:"Kategori",list:"Senarai",map:"Peta",saved:"🔖 Disimpan",noSaved:"Belum ada kerja disimpan. Tekan 🤍 untuk simpan.",room:"Bilik segerak",cloudOn:"Segerak awan aktif",cloudOff:"Setempat sahaja",fAll:"Semua"},
  zh:{searchPh:"搜索工作…",category:"类别",list:"列表",map:"地图",saved:"🔖 收藏",noSaved:"还没有收藏。点 🤍 收藏工作。",room:"同步房间",cloudOn:"云同步已开",cloudOff:"仅本地",fAll:"全部"},
  bn:{searchPh:"কাজ খুঁজুন…",category:"বিভাগ",list:"তালিকা",map:"মানচিত্র",saved:"🔖 সংরক্ষিত",noSaved:"সংরক্ষিত কাজ নেই। 🤍 চাপুন।",room:"সিংক রুম",cloudOn:"ক্লাউড সিংক চালু",cloudOff:"শুধু লোকাল",fAll:"সব"} };
for(const l in T) Object.assign(T[l], EXTRA3[l]||{});
// profile editing strings
const EXTRA4 = {
  en:{edit:"Edit",save:"Save",photo:"Photo",withdraw:"Withdraw",hometown:"Home area",editBiz:"Edit business",profileSaved:"Saved!",bizName2:"Business name"},
  ms:{edit:"Sunting",save:"Simpan",photo:"Foto",withdraw:"Tarik balik",hometown:"Kawasan rumah",editBiz:"Sunting perniagaan",profileSaved:"Disimpan!",bizName2:"Nama perniagaan"},
  zh:{edit:"编辑",save:"保存",photo:"头像",withdraw:"撤回",hometown:"所在地区",editBiz:"编辑商家",profileSaved:"已保存！",bizName2:"商家名称"},
  bn:{edit:"এডিট",save:"সেভ",photo:"ছবি",withdraw:"প্রত্যাহার",hometown:"এলাকা",editBiz:"ব্যবসা এডিট",profileSaved:"সেভ হয়েছে!",bizName2:"ব্যবসার নাম"} };
for(const l in T) Object.assign(T[l], EXTRA4[l]||{});
// two-way trust: employer rates the worker after the shift
const EXTRA5 = {
  en:{ rateWorker:"Rate this worker", rating:"Rating", notiRated:"⭐ You were rated for", newWorker:"New" },
  ms:{ rateWorker:"Nilai pekerja ini", rating:"Penilaian", notiRated:"⭐ Anda dinilai untuk", newWorker:"Baru" },
  zh:{ rateWorker:"评价这位工人", rating:"评分", notiRated:"⭐ 你获得评分：", newWorker:"新" },
  bn:{ rateWorker:"এই কর্মীকে রেট দিন", rating:"রেটিং", notiRated:"⭐ আপনি রেটিং পেয়েছেন:", newWorker:"নতুন" },
};
for(const l in T) Object.assign(T[l], EXTRA5[l]||{});
// phone verification (worker trust badge)
const EXTRA6 = {
  en:{ verifyTitle:"Verify your phone", verifySub:"Verified workers get hired faster.", phoneLabel:"Phone number",
    sendCode:"Send code", codeLabel:"Enter the 6-digit code", verifyNow:"Verify", verifiedToast:"Phone verified! ✔",
    demoCode:"Demo code", badCode:"Wrong code — try again", resend:"Resend code", verifyCta:"Verify phone", badPhone:"Enter a valid phone number" },
  ms:{ verifyTitle:"Sahkan telefon anda", verifySub:"Pekerja disahkan diupah lebih cepat.", phoneLabel:"Nombor telefon",
    sendCode:"Hantar kod", codeLabel:"Masukkan kod 6 digit", verifyNow:"Sahkan", verifiedToast:"Telefon disahkan! ✔",
    demoCode:"Kod demo", badCode:"Kod salah — cuba lagi", resend:"Hantar semula", verifyCta:"Sahkan telefon", badPhone:"Masukkan nombor telefon yang sah" },
  zh:{ verifyTitle:"验证你的电话", verifySub:"已验证的工人更快被录用。", phoneLabel:"电话号码",
    sendCode:"发送验证码", codeLabel:"输入6位验证码", verifyNow:"验证", verifiedToast:"电话已验证！✔",
    demoCode:"演示验证码", badCode:"验证码错误 — 再试一次", resend:"重新发送", verifyCta:"验证电话", badPhone:"请输入有效的电话号码" },
  bn:{ verifyTitle:"আপনার ফোন যাচাই করুন", verifySub:"যাচাইকৃত কর্মীরা দ্রুত কাজ পান।", phoneLabel:"ফোন নম্বর",
    sendCode:"কোড পাঠান", codeLabel:"৬-সংখ্যার কোড দিন", verifyNow:"যাচাই", verifiedToast:"ফোন যাচাই হয়েছে! ✔",
    demoCode:"ডেমো কোড", badCode:"ভুল কোড — আবার চেষ্টা করুন", resend:"আবার পাঠান", verifyCta:"ফোন যাচাই", badPhone:"সঠিক ফোন নম্বর দিন" },
};
for(const l in T) Object.assign(T[l], EXTRA6[l]||{});
const PHOTOS = ["🧑","👨","👩","🧔","👧","👦","🧕","👳","🧑‍🦱","👨‍🦳","👩‍🦰","🧓"];
const LANGS  = ["English","Malay","Chinese","Tamil","Bengali","Indonesian","Burmese","Nepali"];
// ============ Job categories ============
const CATS = { event:"🎪", promoter:"📣", waiter:"🍽️", retail:"🛍️", warehouse:"📦", roadshow:"🚚", kitchen:"👨‍🍳", cleaning:"🧹", emcee:"🎤", photographer:"📸", general:"🧰" };
const CAT_IDS = Object.keys(CATS);
const CATLAB = {
  en:{event:"Event Crew",promoter:"Promoter",waiter:"Waiter",retail:"Retail",warehouse:"Warehouse",roadshow:"Roadshow",kitchen:"Kitchen",cleaning:"Cleaning",emcee:"Emcee",photographer:"Photographer",general:"General"},
  ms:{event:"Kru Acara",promoter:"Promoter",waiter:"Pelayan",retail:"Runcit",warehouse:"Gudang",roadshow:"Roadshow",kitchen:"Dapur",cleaning:"Pencucian",emcee:"Pengacara",photographer:"Jurugambar",general:"Am"},
  zh:{event:"活动人员",promoter:"促销员",waiter:"服务员",retail:"零售",warehouse:"仓库",roadshow:"路演",kitchen:"厨房",cleaning:"清洁",emcee:"司仪",photographer:"摄影师",general:"一般"},
  bn:{event:"ইভেন্ট ক্রু",promoter:"প্রোমোটার",waiter:"ওয়েটার",retail:"রিটেইল",warehouse:"গুদাম",roadshow:"রোডশো",kitchen:"রান্নাঘর",cleaning:"পরিষ্কার",emcee:"উপস্থাপক",photographer:"ফটোগ্রাফার",general:"সাধারণ"},
};
const catLabel = id => (CATLAB[lang] && CATLAB[lang][id]) || CATLAB.en[id] || id;
const catName = id => (CATS[id]?CATS[id]+" ":"") + catLabel(id);
let lang = localStorage.getItem("wg_lang") || "en";
const t = k => (T[lang][k] ?? T.en[k] ?? k);
const PLAN_PRICE = { free:"RM0", pro:"RM29", premium:"RM99" };

// ============ Towns (Penang) for distance ============
// xy = simple grid for the demo; ll = real lat/lng used when live GPS is on.
const TOWNS = {
  georgetown:{n:"Georgetown",xy:[5,18],ll:[5.4141,100.3288]}, tanjung:{n:"Tanjung Tokong",xy:[4,21],ll:[5.4631,100.2840]},
  gelugor:{n:"Gelugor",xy:[5,13],ll:[5.3593,100.3010]}, bayanlepas:{n:"Bayan Lepas",xy:[4,5],ll:[5.2945,100.2640]},
  butterworth:{n:"Butterworth",xy:[12,17],ll:[5.3991,100.3638]}, bukitmertajam:{n:"Bukit Mertajam",xy:[16,12],ll:[5.3636,100.4667]},
};
const townName = k => (TOWNS[k]?.n || k);
function dist(a,b){ const A=TOWNS[a]?.xy,B=TOWNS[b]?.xy; if(!A||!B) return 99;
  return Math.round(Math.hypot(A[0]-B[0],A[1]-B[1])); }
function haversine(a,b){ const R=6371,dLat=(b[0]-a[0])*Math.PI/180,dLng=(b[1]-a[1])*Math.PI/180;
  const s=Math.sin(dLat/2)**2+Math.cos(a[0]*Math.PI/180)*Math.cos(b[0]*Math.PI/180)*Math.sin(dLng/2)**2;
  return 2*R*Math.asin(Math.sqrt(s)); }
// distance from the current worker to a job — live GPS if available, else town grid
function distanceTo(job){ const w=me();
  if(w && w.coords && TOWNS[job.town]?.ll) return Math.max(1, Math.round(haversine(w.coords, TOWNS[job.town].ll)));
  return dist(w.town, job.town); }

// ============ State ============
const DB = {
  workers: JSON.parse(localStorage.getItem("wg_workers")||"null"),
  employers: JSON.parse(localStorage.getItem("wg_employers")||"null"),
  jobs: JSON.parse(localStorage.getItem("wg_jobs")||"null"),
  apps: JSON.parse(localStorage.getItem("wg_apps")||"null"),
  msgs: JSON.parse(localStorage.getItem("wg_msgs")||"null"),
  notifs: JSON.parse(localStorage.getItem("wg_notifs")||"null"),
};
const S = { role:"worker", workerId:"me", employerId:"e1", tab:"jobs", dist:"all", urgent:false, cat:"all", q:"", jobsView:"list", savedOnly:false, appFilter:"all", modal:null, toast:null };
const uid = () => Math.random().toString(36).slice(2,9);
let cloudPush=null, cloudStatus={on:false,room:""};   // set up by initCloud() when configured
function save(){ for(const k of ["workers","employers","jobs","apps","msgs","notifs"]) localStorage.setItem("wg_"+k, JSON.stringify(DB[k]));
  if(cloudPush) cloudPush(); }
const FREE_LIMIT = 5;
const PLANS = ["free","pro","premium"];

function seed(){
  DB.workers = [
    {id:"me",  name:"You",      age:24, photo:"🧑", langs:["English","Malay"],   town:"georgetown",   completed:5,  noshow:0, saved:[], ratingSum:23,  ratingCount:5},
    {id:"w2",  name:"Rahman",   age:28, photo:"👨", langs:["Bengali","Malay"],   town:"gelugor",      completed:42, noshow:1, ratingSum:198, ratingCount:42, verified:true, phone:"012-345 6789"},
    {id:"w3",  name:"Mei Ling", age:22, photo:"👩", langs:["Chinese","English"], town:"georgetown",   completed:18, noshow:0, ratingSum:89,  ratingCount:18, verified:true, phone:"016-777 1234"},
    {id:"w4",  name:"Arjun",    age:25, photo:"🧔", langs:["Tamil","English"],   town:"butterworth",  completed:7,  noshow:3, ratingSum:25,  ratingCount:7},
    {id:"w5",  name:"Siti",     age:20, photo:"👧", langs:["Malay"],             town:"bayanlepas",   completed:0,  noshow:0},
  ];
  DB.employers = [ {id:"e1", biz:"StageWorks Events", verified:true, plan:"premium", ratingSum:23, ratingCount:5} ];
  DB.jobs = [
    {id:"j1", empId:"e1", title:"Event Crew",      cat:"event",     town:"georgetown",   date:"Sat 20 Aug", time:"8am – 6pm",  pay:"RM120/day",  needed:15, urg:"today",    featured:true},
    {id:"j2", empId:"e1", title:"Roadshow Promoter",cat:"promoter", town:"bayanlepas",  date:"Sun 21 Aug", time:"10am – 8pm", pay:"RM100/day",  needed:5,  urg:"tomorrow"},
    {id:"j3", empId:"e1", title:"Wedding Waiter",   cat:"waiter",    town:"bukitmertajam",date:"Sat 27 Aug", time:"5pm – 11pm", pay:"RM90/night", needed:8,  urg:"normal"},
    {id:"j4", empId:"e1", title:"Warehouse Helper", cat:"warehouse", town:"butterworth", date:"Mon 22 Aug", time:"9am – 5pm",  pay:"RM15/hour",  needed:3,  urg:"normal"},
  ];
  DB.apps = [
    {id:uid(), jobId:"j1", workerId:"w2", friendId:null, status:"applied"},
    {id:uid(), jobId:"j1", workerId:"w3", friendId:"w5", status:"applied"},
    {id:uid(), jobId:"j1", workerId:"w4", friendId:null, status:"accepted"},
    {id:uid(), jobId:"j2", workerId:"me", friendId:null, status:"applied"},
    {id:uid(), jobId:"j4", workerId:"me", friendId:null, status:"completed"},
    {id:uid(), jobId:"j3", workerId:"w2", friendId:null, status:"completed", empRated:5},
  ];
  DB.msgs = [ {id:uid(), jobId:"j1", workerId:"w4", from:"employer", text:"Hi, please come to the main gate at 7:45am.", ts:Date.now()-3600000} ];
  DB.notifs = [
    {id:uid(), forRole:"employer", forId:"e1", text:"Rahman "+T.en.notiApplied+" Event Crew", ts:Date.now()-5400000, read:false},
    {id:uid(), forRole:"worker", forId:"me", text:"⚡ Bluebird Café — Weekend Barista nearby", ts:Date.now()-7200000, read:true},
  ];
  save();
}
if(!DB.workers){ seed(); }
if(!DB.notifs){ DB.notifs=[]; }   // guard for data saved before notifications existed

// ============ Helpers ============
const W = id => DB.workers.find(w=>w.id===id);
const E = id => DB.employers.find(e=>e.id===id);
const J = id => DB.jobs.find(j=>j.id===id);
const me = () => W(S.workerId);
function reliability(w){ const tot=w.completed+w.noshow; return tot? Math.round(w.completed/tot*100) : null; }
function relClass(s){ return s==null?"":(s>=90?"g":s>=70?"m":"b"); }
// employer→worker quality rating (separate from showed-up reliability %)
function workerRating(w){ return w&&w.ratingCount? (w.ratingSum/w.ratingCount) : null; }
function wStarChip(w){ const r=workerRating(w); return r==null?"":`<span class="pill gold">★ ${r.toFixed(1)} <span class="xs">(${w.ratingCount})</span></span>`; }
const verifiedChip = w => (w&&w.verified) ? `<span class="verified">✔ ${t("verified")}</span>` : "";
function acceptedFill(jobId){ return DB.apps.filter(a=>a.jobId===jobId&&(a.status==="accepted"||a.status==="completed"))
    .reduce((n,a)=>n+1+(a.friendId?1:0),0); }
function spotsLeft(job){ return Math.max(0, job.needed - acceptedFill(job.id)); }
function savedSet(){ const w=me(); if(!w.saved) w.saved=[]; return w.saved; }
const isSaved = jobId => savedSet().includes(jobId);
// keep typed values when re-rendering the edit-worker sheet (photo/lang toggles)
function syncWorkerDraft(){
  if(!S.modal || S.modal.type!=="editWorker") return;
  const d=S.modal.draft, n=document.getElementById("ew_name"), a=document.getElementById("ew_age"), tn=document.getElementById("ew_town");
  if(n) d.name=n.value; if(a) d.age=a.value; if(tn) d.town=tn.value;
}
function appsForJob(id){ return DB.apps.filter(a=>a.jobId===id); }
function myApp(jobId){ return DB.apps.find(a=>a.jobId===jobId && (a.workerId===S.workerId||a.friendId===S.workerId)); }
function empJobs(eid){ return DB.jobs.filter(j=>j.empId===eid); }
function esc(s){ return String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
function toast(msg){ S.toast=msg; render(); clearTimeout(toast._t); toast._t=setTimeout(()=>{S.toast=null;render();},2200); }
// notifications
function notify(forRole, forId, text){ DB.notifs.push({id:uid(), forRole, forId, text, ts:Date.now(), read:false}); }
const notifTargetId = () => S.role==="worker" ? S.workerId : S.employerId;
const myNotifs = () => DB.notifs.filter(n=>n.forRole===S.role && n.forId===notifTargetId()).sort((a,b)=>b.ts-a.ts);
const unreadCount = () => myNotifs().filter(n=>!n.read).length;
function timeAgo(ts){ const m=Math.round((Date.now()-ts)/60000); if(m<1)return"now"; if(m<60)return m+"m"; const h=Math.round(m/60); if(h<24)return h+"h"; return Math.round(h/24)+"d"; }
// plans
const empPlan = e => e.plan || "free";
const isPremium = e => empPlan(e)==="premium";
const planRank = e => empPlan(e)==="free" ? 1 : 0;   // 0 = priority listing
// share — forward a job to WhatsApp (or the native share sheet) with a deep link back in
function shareJob(jobId){
  const job=J(jobId); if(!job) return;
  const url = (typeof location!=="undefined" ? location.origin+location.pathname : "") + "?job=" + jobId;
  const urg = job.urg==="today" ? "🔥 " : job.urg==="tomorrow" ? "⚡ " : "";
  const text = `${urg}${E(job.empId).biz} ${t("shareText")}\n\n`+
    `*${job.title}* · ${job.pay}\n📅 ${job.date} ${job.time}\n📍 ${townName(job.town)}\n👥 ${t("needPax")} ${job.needed} ${t("pax")}\n\n${t("apply")} 👉 ${url}`;
  if(typeof navigator!=="undefined" && navigator.share){
    navigator.share({ title:"WhatsBiz GIG", text, url }).catch(()=>{});
  } else if(typeof window!=="undefined"){
    window.open("https://wa.me/?text="+encodeURIComponent(text), "_blank");
  }
}
let deferredInstall=null;  // captured beforeinstallprompt event
const installBtn = () => deferredInstall ? `<button class="btn" style="margin-bottom:12px" data-act="install">${t("install")}</button>` : "";
// crisp line icons (stroke = currentColor so active colour applies)
const _ic = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ICN = {
  jobs:    _ic('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),
  apps:    _ic('<path d="M9 4h6v3H9z"/><rect x="5" y="5" width="14" height="16" rx="2"/><path d="M9 12h6M9 16h4"/>'),
  profile: _ic('<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>'),
  post:    _ic('<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>'),
  store:   _ic('<path d="M4 10l1-5h14l1 5"/><path d="M5 10v9h14v-9"/><path d="M9 19v-5h6v5"/><path d="M4 10a3 3 0 0 0 6 0 3 3 0 0 0 4 0 3 3 0 0 0 6 0"/>'),
  bell:    _ic('<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.5 21a2 2 0 0 1-3 0"/>'),
};

// ============ Components ============
function urgBadge(job){
  if(job.urg==="today") return `<span class="pill hot">🔥 ${t("today")}</span>`;
  if(job.urg==="tomorrow") return `<span class="pill amber">⚡ ${t("tomorrow")}</span>`;
  return "";
}
function relChip(w){
  const s=reliability(w);
  if(s==null) return `<span class="pill blue">✨ ${t("new")}</span>`;
  return `<span class="rel ${relClass(s)}">⭐ ${s}%</span>`;
}
function distLabel(job){ const d=distanceTo(job); return d<=1? t("here") : `${d} ${t("kmAway")}`; }
const isFeatured = job => job.featured && isPremium(E(job.empId));

// ---- Worker: job card ----
function jobCard(job){
  const left=spotsLeft(job), mine=myApp(job.id);
  let action;
  if(mine) action=`<button class="btn alt" disabled>${t("appliedBadge")}</button>`;
  else if(left<=0) action=`<button class="btn alt" disabled>${t("full")}</button>`;
  else action=`<button class="btn" data-act="openApply" data-id="${job.id}">${t("apply")}</button>`;
  const feat = isFeatured(job);
  return `<div class="card job${feat?" feat":""}">
    ${feat?`<div class="featbar">✨ ${t("featured")}</div>`:""}
    <div class="emp">🏢 ${esc(E(job.empId).biz)} ${E(job.empId).verified?`<span class="verified">✔ ${t("verified")}</span>`:""}
      <button class="bm ${isSaved(job.id)?"on":""}" data-act="save" data-id="${job.id}" aria-label="save">${isSaved(job.id)?"🔖":"🤍"}</button>
    </div>
    <div class="jt"><div class="name">${urgBadge(job)} ${esc(job.title)}</div><div class="pay">${esc(job.pay)}</div></div>
    <div class="meta">
      <span class="pill cat">${catName(job.cat||"general")}</span>
      <span>📅 ${esc(job.date)}</span><span>🕒 ${esc(job.time)}</span>
      <span>📍 ${esc(townName(job.town))} · ${distLabel(job)}</span>
    </div>
    <div class="spots muted">👥 ${t("needPax")} ${job.needed} ${t("pax")} · <b style="color:var(--brand)">${left}</b> ${t("spotsLeft")}</div>
    <div style="margin-top:12px">${action}</div>
  </div>`;
}
function filteredJobs(){
  const q=S.q.trim().toLowerCase();
  let jobs=DB.jobs.map(j=>({j,d:distanceTo(j)}));
  if(S.dist!=="all") jobs=jobs.filter(x=>x.d<=Number(S.dist));
  if(S.urgent) jobs=jobs.filter(x=>x.j.urg!=="normal");
  if(S.savedOnly) jobs=jobs.filter(x=>isSaved(x.j.id));
  if(S.cat!=="all") jobs=jobs.filter(x=>(x.j.cat||"general")===S.cat);
  if(q) jobs=jobs.filter(x=>(x.j.title+" "+catLabel(x.j.cat||"general")+" "+townName(x.j.town)+" "+E(x.j.empId).biz).toLowerCase().includes(q));
  const urgRank={today:0,tomorrow:1,normal:2};
  jobs.sort((a,b)=> (isFeatured(b.j)-isFeatured(a.j))
    || (urgRank[a.j.urg]-urgRank[b.j.urg])
    || (planRank(E(a.j.empId))-planRank(E(b.j.empId)))
    || (a.d-b.d));
  return jobs;
}
function workerJobs(){
  const jobs=filteredJobs();
  const gpsOn=!!me().coords;
  const topbar=`<div class="topbar">
    <div class="searchwrap"><span>🔎</span><input id="jobSearch" class="search" placeholder="${t("searchPh")}" value="${esc(S.q)}" autocomplete="off" /></div>
    <div class="seg compact">
      <button data-act="jobsView" data-v="list" class="${S.jobsView==="list"?"on":""}">${t("list")}</button>
      <button data-act="jobsView" data-v="map" class="${S.jobsView==="map"?"on":""}">${t("map")}</button>
    </div>
  </div>`;
  const catRow=`<div class="filters cats">
    <button data-act="cat" data-v="all" class="${S.cat==="all"?"on":""}">${t("all")}</button>
    ${CAT_IDS.map(id=>`<button data-act="cat" data-v="${id}" class="${S.cat===id?"on":""}">${catName(id)}</button>`).join("")}
  </div>`;
  const distSel=`<select class="distsel" data-act="distSel">
    ${[["all",t("all")],["2","2km"],["5","5km"],["10","10km"]].map(([v,l])=>`<option value="${v}" ${S.dist===v?"selected":""}>${v==="all"?"📍 "+t("all"):t("within")+" "+l}</option>`).join("")}
  </select>`;
  const toolrow=`<div class="toolrow">
    ${distSel}
    <button class="tgl ${gpsOn?"on":""}" data-act="useGPS">📍 GPS</button>
    <button class="tgl ${S.urgent?"on":""}" data-act="urg">⚡</button>
    <button class="tgl ${S.savedOnly?"on":""}" data-act="savedOnly">🔖</button>
  </div>`;
  let body;
  if(S.jobsView==="map") body=workerMap(jobs);
  else body = jobs.length? jobs.map(x=>jobCard(x.j)).join("")
    : `<div class="empty">${S.savedOnly?t("noSaved"):t("noJobs")}</div>`;
  return topbar+catRow+toolrow+body;
}
// ---- Worker: map view (real map via Leaflet + OpenStreetMap) ----
function workerMap(jobs){
  return `<div class="card mapcard"><div id="leafmap" class="leafmap"></div>
    ${jobs.length?"":`<div class="empty" style="margin-top:10px">${S.savedOnly?t("noSaved"):t("noJobs")}</div>`}</div>`;
}
let leafletP=null;
function loadLeaflet(){
  if(typeof window==="undefined") return Promise.reject();
  if(window.L) return Promise.resolve(window.L);
  if(leafletP) return leafletP;
  if(!document.getElementById("leaflet-css")){
    const lk=document.createElement("link"); lk.id="leaflet-css"; lk.rel="stylesheet";
    lk.href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"; document.head.appendChild(lk);
  }
  leafletP=new Promise((res,rej)=>{
    const s=document.createElement("script"); s.src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    s.onload=()=>res(window.L); s.onerror=rej; document.head.appendChild(s);
  });
  return leafletP;
}
function initWorkerMap(){
  const el=document.getElementById("leafmap"); if(!el) return;
  loadLeaflet().then(L=>{
    if(!document.body.contains(el)) return;            // view changed before load
    const w=me(), o=w.coords || TOWNS[w.town]?.ll || [5.41,100.33];
    const map=L.map(el,{attributionControl:false}).setView(o,12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19}).addTo(map);
    L.circleMarker(o,{radius:8,color:"#fff",weight:2,fillColor:"#38bdf8",fillOpacity:1}).addTo(map).bindTooltip("📍 "+esc(me().name));
    const pts=[o];
    filteredJobs().forEach(({j})=>{ const ll=TOWNS[j.town]?.ll; if(!ll) return; pts.push(ll);
      L.marker(ll).addTo(map).bindPopup(
        `<b>${esc(j.title)}</b><br>${esc(j.pay)} · ${esc(townName(j.town))}<br><button class="btn sm" style="margin-top:6px" data-act="openApply" data-id="${j.id}">${t("apply")}</button>`);
    });
    if(pts.length>1) map.fitBounds(pts,{padding:[34,34],maxZoom:14});
    setTimeout(()=>map.invalidateSize(),120);
  }).catch(()=>{ const e2=document.getElementById("leafmap"); if(e2) e2.innerHTML=svgMiniMap(filteredJobs()); });
}
// offline fallback: relative pins + distance rings (no tiles needed)
function svgMiniMap(jobs){
  const w=me(), o=w.coords || TOWNS[w.town]?.ll || [5.41,100.33];
  const C=160, maxKm=12, scale=148/maxKm, cosL=Math.cos(o[0]*Math.PI/180);
  const rings=[2,5,10].map(km=>`<circle cx="${C}" cy="${C}" r="${km*scale}" class="ring"/><text x="${C}" y="${(C-km*scale+12).toFixed(0)}" class="ringlbl">${km}km</text>`).join("");
  const pins=jobs.map(({j})=>{ const jll=TOWNS[j.town]?.ll||o;
    let kx=(jll[1]-o[1])*111.32*cosL, ky=(jll[0]-o[0])*110.57, km=Math.hypot(kx,ky);
    if(km>maxKm){ const f=maxKm/km; kx*=f; ky*=f; }
    return `<g class="pin" data-act="openApply" data-id="${j.id}" transform="translate(${(C+kx*scale).toFixed(1)},${(C-ky*scale).toFixed(1)})">
      <circle r="15" class="pindot ${isFeatured(j)?"feat":j.urg!=="normal"?"urg":""}"/>
      <text class="pinemo" y="5" text-anchor="middle">${CATS[j.cat||"general"]||"🧰"}</text></g>`;
  }).join("");
  return `<svg viewBox="0 0 320 320" class="map">${rings}
    <g transform="translate(${C},${C})"><circle r="9" class="mehere"/><text y="-14" text-anchor="middle" class="melbl">📍 ${esc(me().name)}</text></g>
    ${pins}</svg>`;
}

// ---- Worker: my applications ----
function workerApps(){
  const all=DB.apps.filter(a=>a.workerId===S.workerId||a.friendId===S.workerId);
  if(!all.length) return `<div class="empty">${t("noApps")}</div>`;
  const filters=[["all",t("fAll")],["applied",t("applied")],["accepted",t("accepted")],["completed",t("completed")]];
  const bar=`<div class="filters">${filters.map(([v,lab])=>`<button data-act="appFilter" data-v="${v}" class="${S.appFilter===v?"on":""}">${lab}</button>`).join("")}</div>`;
  const mine = S.appFilter==="all"? all : all.filter(a=>a.status===S.appFilter);
  const statusPill={applied:"gray",accepted:"green",declined:"red",completed:"blue",noshow:"red"};
  if(!mine.length) return bar+`<div class="empty">${t("noApps")}</div>`;
  return bar+mine.map(a=>{
    const job=J(a.jobId); if(!job) return "";
    const buddy=a.friendId? ` <span class="pill blue">+1 ${t("friend")}</span>`:"";
    let rate="";
    if(a.status==="completed"){
      rate = a.rated
        ? `<div class="sm muted" style="margin-top:8px">${t("rated")} ${"⭐".repeat(a.rated)}</div>`
        : `<div style="margin-top:8px"><div class="sm muted">${t("rateThis")}</div>
            <div class="stars" data-act="rate" data-id="${a.id}">${[1,2,3,4,5].map(n=>`<span data-n="${n}">☆</span>`).join("")}</div></div>`;
    }
    return `<div class="card">
      <div class="jt"><div class="name" style="font-size:1rem">${esc(job.title)}${buddy}</div><div class="pay" style="font-size:1rem">${esc(job.pay)}</div></div>
      <div class="meta"><span>🏢 ${esc(E(job.empId).biz)}</span><span>📅 ${esc(job.date)}</span><span>📍 ${esc(townName(job.town))}</span></div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;gap:8px">
        <span class="pill ${statusPill[a.status]}">${t(a.status)}</span>
        <div style="display:flex;gap:8px">
          ${a.status==="applied"?`<button class="ghost" data-act="withdraw" data-id="${a.id}">${t("withdraw")}</button>`:""}
          <button class="ghost" data-act="chat" data-id="${job.id}" data-w="${a.workerId}">💬 ${t("chatWith")}</button>
        </div>
      </div>${rate}
    </div>`;
  }).join("");
}

// ---- Worker: profile ----
function workerProfile(){
  const w=me(), s=reliability(w);
  const others=DB.workers.map(x=>`<option value="${x.id}" ${x.id===S.workerId?"selected":""}>${esc(x.name)}</option>`).join("");
  return `${installBtn()}<div class="card" style="text-align:center">
    <div class="avatar" style="width:74px;height:74px;font-size:2.6rem;margin:4px auto 8px">${w.photo}</div>
    <div style="font-weight:800;font-size:1.2rem">${esc(w.name)}, ${w.age} ${verifiedChip(w)}</div>
    <div class="muted sm">🗣️ ${w.langs.join(", ")}</div>
    <div class="muted sm">📍 ${townName(w.town)}</div>
    <div style="margin:14px 0">
      ${s==null?`<span class="pill blue" style="font-size:1rem;padding:8px 16px">✨ ${t("new")}</span>`
        :`<div class="rel ${relClass(s)}" style="font-size:2.2rem">⭐ ${s}%</div><div class="muted sm">${t("reliability")} · ${t("reliable")}</div>`}
    </div>
    <div class="stat"><span class="muted">⭐ ${t("rating")}</span><b>${workerRating(w)==null?"—":workerRating(w).toFixed(1)+` <span class="muted sm">(${w.ratingCount})</span>`}</b></div>
    <div class="stat"><span class="muted">✅ ${t("completedJobs")}</span><b>${w.completed}</b></div>
    <div class="stat"><span class="muted">⛔ ${t("noshows")}</span><b>${w.noshow}</b></div>
    ${w.verified?"":`<button class="btn" data-act="verifyPhone" style="margin-top:12px">📱 ${t("verifyCta")}</button>`}
    <button class="btn alt" data-act="editWorker" style="margin-top:12px">✏️ ${t("edit")}</button>
  </div>
  <div class="card">
    <label>${t("actingAs")}</label>
    <select data-act="actAs">${others}</select>
    <div class="row" style="margin-top:14px">
      <button class="ghost" data-act="loadDemo">${t("loadDemo")}</button>
      <button class="ghost" data-act="clearAll">${t("clearAll")}</button>
    </div>
    ${cloudLine()}
  </div>`;
}
const cloudLine = () => `<div class="muted xs" style="text-align:center;margin-top:6px">`+
  (cloudStatus.on ? `☁️ ${t("cloudOn")} · ${t("room")}: ${esc(cloudStatus.room)}` : `📴 ${t("cloudOff")}`)+`</div>`;

// ---- Employer: post ----
function employerPost(){
  const e=E(S.employerId), towns=Object.entries(TOWNS).map(([k,v])=>`<option value="${k}">${v.n}</option>`).join("");
  const used=empJobs(e.id).length, plan=empPlan(e);
  // free plan: enforce the 5-job limit with an upgrade prompt
  if(plan==="free" && used>=FREE_LIMIT){
    return `<div class="card"><h2>${t("postTitle")}</h2>
      <div class="empty" style="border-color:var(--accent);color:var(--text)">
        🔒 ${t("freeLimit")}<br><span class="muted sm">${used}/${FREE_LIMIT} ${t("postsUsed")}</span>
      </div>
      <button class="btn amber" style="margin-top:12px" data-act="tab" data-v="biz">⭐ ${t("choosePlan")}</button>
    </div>`;
  }
  const usage = plan==="free" ? `<div class="muted xs" style="margin-bottom:8px">${used}/${FREE_LIMIT} ${t("postsUsed")} · ${t("planFree")}</div>`
    : `<div class="muted xs" style="margin-bottom:8px">${t("unlimited")} · ${t("plan"+plan[0].toUpperCase()+plan.slice(1))}</div>`;
  const feature = isPremium(e)
    ? `<label class="check"><input type="checkbox" id="p_feat" /> ${t("featureThis")}</label>`
    : `<div class="muted xs" style="margin-top:10px">🔒 ${t("featureLocked")} <a data-act="tab" data-v="biz" style="color:var(--brand);cursor:pointer">${t("choosePlan")}</a></div>`;
  return `<div class="card"><h2>${t("postTitle")}</h2>${usage}
    <label>${t("fTitle")}</label><input id="p_title" placeholder="Event Crew" />
    <label>${t("category")}</label><select id="p_cat">${CAT_IDS.map(id=>`<option value="${id}">${catName(id)}</option>`).join("")}</select>
    <label>${t("fLoc")}</label><select id="p_town">${towns}</select>
    <div class="row">
      <div><label>${t("fDate")}</label><input id="p_date" placeholder="20 Aug" /></div>
      <div><label>${t("fTime")}</label><input id="p_time" placeholder="8am – 6pm" /></div>
    </div>
    <div class="row">
      <div><label>${t("fPay")}</label><input id="p_pay" placeholder="RM120/day" /></div>
      <div><label>${t("fNeeded")}</label><input id="p_needed" type="number" min="1" value="1" /></div>
    </div>
    <label>${t("fUrg")}</label>
    <select id="p_urg"><option value="today">${t("uToday")}</option><option value="tomorrow">${t("uTomorrow")}</option><option value="normal" selected>${t("uNormal")}</option></select>
    ${feature}
    <button class="btn" style="margin-top:16px" data-act="publish">${t("publish")}</button>
  </div>`;
}

// ---- Employer: my jobs + applicants ----
function applicantRow(a){
  const w=W(a.workerId); if(!w) return "";
  const friend=a.friendId?W(a.friendId):null;
  let act="";
  if(a.status==="applied") act=`<div class="row" style="gap:6px;margin-top:8px">
      <button class="btn sm" style="flex:1" data-act="accept" data-id="${a.id}">${t("accept")}</button>
      <button class="btn sm red" style="flex:1" data-act="decline" data-id="${a.id}">${t("decline")}</button></div>`;
  else if(a.status==="accepted") act=`<div class="row" style="gap:6px;margin-top:8px">
      <button class="btn sm amber" style="flex:1" data-act="complete" data-id="${a.id}">${t("complete")}</button>
      <button class="btn sm red" style="flex:1" data-act="noshow" data-id="${a.id}">${t("markNoshow")}</button></div>`;
  else if(a.status==="completed") act=`<div class="sm muted" style="margin-top:6px">${t("completed")}</div>`+rateWorkerWidget(a);
  else act=`<div class="sm muted" style="margin-top:6px">${t(a.status)}</div>`;
  return `<div class="applicant">
    <div class="avatar">${w.photo}</div>
    <div style="flex:1;min-width:0">
      <div style="font-weight:700">${esc(w.name)} ${verifiedChip(w)}${friend?` <span class="pill blue">+ ${esc(friend.name)}</span>`:""}</div>
      <div class="xs muted">🗣️ ${w.langs.join(", ")} · ✅ ${w.completed} · ⛔ ${w.noshow}</div>
      ${act}
    </div>
    <div style="text-align:right">${relChip(w)}${wStarChip(w)?"<br>"+wStarChip(w):""}
      <div><button class="ghost" style="margin-top:6px" data-act="chat" data-id="${a.jobId}" data-w="${a.workerId}">💬</button></div>
    </div>
  </div>`;
}
// star widget the employer uses to rate a worker once the shift is done
function rateWorkerWidget(a){
  return a.empRated
    ? `<div class="sm muted" style="margin-top:6px">${t("rated")} ${"⭐".repeat(a.empRated)}</div>`
    : `<div style="margin-top:8px"><div class="sm muted">${t("rateWorker")}:</div>
        <div class="stars" data-act="rateWorker" data-id="${a.id}">${[1,2,3,4,5].map(n=>`<span data-n="${n}">☆</span>`).join("")}</div></div>`;
}
function employerJobs(){
  const jobs=empJobs(S.employerId);
  if(!jobs.length) return `<div class="empty">${t("noMyJobs")}</div>`;
  return jobs.map(job=>{
    const apps=appsForJob(job.id), fill=acceptedFill(job.id);
    const list = apps.length? apps.map(applicantRow).join("") : `<div class="sm muted" style="padding:8px 0">${t("noApplicants")}</div>`;
    return `<div class="card">
      <div class="jt"><div class="name" style="font-size:1.05rem">${urgBadge(job)} ${esc(job.title)}</div><div class="pay" style="font-size:1rem">${esc(job.pay)}</div></div>
      <div class="meta"><span>📅 ${esc(job.date)}</span><span>🕒 ${esc(job.time)}</span><span>📍 ${esc(townName(job.town))}</span></div>
      <div class="sm muted">👥 ${fill}/${job.needed} ${t("spotsFilled")} · ${apps.length} ${t("applicants")}</div>
      <button class="btn wa full" style="margin-top:10px" data-act="share" data-id="${job.id}">${t("shareWA")}</button>
      <div style="margin-top:6px">${list}</div>
    </div>`;
  }).join("");
}

// ---- Employer: business profile ----
function employerBiz(){
  const e=E(S.employerId), jobs=empJobs(e.id);
  const allApps=DB.apps.filter(a=>jobs.some(j=>j.id===a.jobId));
  const done=allApps.filter(a=>a.status==="completed").length;
  const noshow=allApps.filter(a=>a.status==="noshow").length;
  const rate=(done+noshow)? Math.round(done/(done+noshow)*100):null;
  const avg=e.ratingCount? (e.ratingSum/e.ratingCount).toFixed(1):"—";
  const plan=empPlan(e);
  const planLabel={free:t("planFree"),pro:t("planPro"),premium:t("planPremium")};
  return `${installBtn()}<div class="card" style="text-align:center">
    <div class="avatar" style="width:74px;height:74px;font-size:2.4rem;margin:4px auto 8px">🏢</div>
    <div style="font-weight:800;font-size:1.2rem">${esc(e.biz)} ${e.verified?`<span class="verified">✔</span>`:""}</div>
    <div style="margin-top:4px"><span class="pill ${plan==="free"?"gray":"gold"}">${plan==="free"?"":"⭐ "}${planLabel[plan]}</span></div>
    <div style="margin:14px 0"><div class="rel g" style="font-size:2rem">⭐ ${avg}</div><div class="muted sm">${t("avgRating")} · ${e.ratingCount} ${t("reviews")}</div></div>
    <div class="stat"><span class="muted">📋 ${t("jobsPosted")}</span><b>${jobs.length}</b></div>
    <div class="stat"><span class="muted">✅ ${t("completionRate")}</span><b>${rate==null?"—":rate+"%"}</b></div>
    <button class="btn alt" data-act="editEmployer" style="margin-top:12px">✏️ ${t("editBiz")}</button>
  </div>
  ${plansCard(plan)}
  <div class="card"><div class="row">
    <button class="ghost" data-act="loadDemo">${t("loadDemo")}</button>
    <button class="ghost" data-act="clearAll">${t("clearAll")}</button>
  </div>${cloudLine()}</div>`;
}
function plansCard(current){
  const tiers=[
    {k:"free",    name:t("planFree"),    desc:t("planFreeDesc")},
    {k:"pro",     name:t("planPro"),     desc:t("planProDesc")},
    {k:"premium", name:t("planPremium"), desc:t("planPremiumDesc")},
  ];
  return `<div class="card"><h3>⭐ ${t("plan")}</h3>
    ${tiers.map(p=>{
      const on=current===p.k;
      return `<div class="tier${on?" on":""}">
        <div style="flex:1">
          <div style="font-weight:800">${p.name} <span class="muted sm">${PLAN_PRICE[p.k]}${p.k==="free"?"":t("perMonth")}</span></div>
          <div class="muted xs">${p.desc}</div>
        </div>
        ${on?`<span class="pill green">✓ ${t("current")}</span>`
            :`<button class="btn sm amber" data-act="setPlan" data-v="${p.k}">${t("choosePlan")}</button>`}
      </div>`;
    }).join("")}
  </div>`;
}

// ---- Modals ----
function modalEditWorker(){
  const d=S.modal.draft;
  const towns=Object.entries(TOWNS).map(([k,v])=>`<option value="${k}" ${d.town===k?"selected":""}>${v.n}</option>`).join("");
  return `<div class="ov" data-act="closeOv"><div class="sheet" data-act="stop">
    <div class="grab"></div><h3>✏️ ${t("edit")}</h3>
    <label>${t("photo")}</label>
    <div class="emojis">${PHOTOS.map(p=>`<button data-act="pickPhoto" data-v="${p}" class="${d.photo===p?"on":""}">${p}</button>`).join("")}</div>
    <label>${t("name")}</label><input id="ew_name" value="${esc(d.name)}" />
    <label>${t("age")}</label><input id="ew_age" type="number" min="13" value="${esc(d.age)}" />
    <label>${t("hometown")}</label><select id="ew_town">${towns}</select>
    <label>${t("languages")}</label>
    <div class="filters" style="flex-wrap:wrap">${LANGS.map(l=>`<button data-act="toggleLang" data-v="${l}" class="${d.langs.includes(l)?"on":""}">${l}</button>`).join("")}</div>
    <button class="btn" style="margin-top:16px" data-act="saveWorker">${t("save")}</button>
  </div></div>`;
}
function modalEditEmployer(){
  const d=S.modal.draft;
  return `<div class="ov" data-act="closeOv"><div class="sheet" data-act="stop">
    <div class="grab"></div><h3>✏️ ${t("editBiz")}</h3>
    <label>${t("bizName2")}</label><input id="ee_name" value="${esc(d.biz)}" />
    <button class="btn" style="margin-top:16px" data-act="saveEmployer">${t("save")}</button>
  </div></div>`;
}
function modalNotifs(){
  const list=myNotifs();
  const body = list.length
    ? list.map(n=>`<div class="noti${n.read?"":" unread"}">
        <div>${esc(n.text)}</div><div class="muted xs" style="margin-top:2px">${timeAgo(n.ts)}</div></div>`).join("")
    : `<div class="empty">${t("noNotifs")}</div>`;
  return `<div class="ov" data-act="closeOv"><div class="sheet" data-act="stop">
    <div class="grab"></div>
    <h3>🔔 ${t("notifs")}</h3>
    <div style="margin-top:12px">${body}</div>
  </div></div>`;
}
function modalApply(jobId){
  const job=J(jobId);
  const friends=DB.workers.filter(w=>w.id!==S.workerId && !DB.apps.some(a=>a.jobId===jobId&&(a.workerId===w.id||a.friendId===w.id)));
  return `<div class="ov" data-act="closeOv"><div class="sheet" data-act="stop">
    <div class="grab"></div>
    <h3>${esc(job.title)} · ${esc(job.pay)}</h3>
    <div class="muted sm" style="margin-bottom:14px">${t("howApply")}</div>
    <button class="btn" data-act="applyAlone" data-id="${jobId}">🙋 ${t("applyAlone")}</button>
    <div class="muted sm" style="margin:16px 0 8px">👥 ${t("chooseFriend")}</div>
    ${friends.length? friends.map(f=>`<button class="btn alt" style="margin-bottom:8px;text-align:left" data-act="applyFriend" data-id="${jobId}" data-f="${f.id}">
        ${f.photo} ${esc(f.name)} ${verifiedChip(f)} · ${relChip(f).replace(/<span class="rel ([gmb]?)">/,'<span class="rel $1" style="float:right">')}</button>`).join("") : ""}
  </div></div>`;
}
// Phone verification sheet — two steps: enter number → enter the 6-digit code.
function modalVerify(){
  const m=S.modal;
  if(m.step==="code"){
    return `<div class="ov" data-act="closeOv"><div class="sheet" data-act="stop">
      <div class="grab"></div><h3>📱 ${t("verifyTitle")}</h3>
      <div class="muted sm" style="margin-bottom:12px">${t("codeLabel")} · <b>${esc(m.phone)}</b></div>
      <input id="vf_code" inputmode="numeric" maxlength="6" placeholder="••••••" value="${esc(m.entered||"")}" style="letter-spacing:.4em;text-align:center;font-size:1.3rem" />
      ${m.err?`<div class="sm" style="color:#e11d48;margin-top:8px">${t("badCode")}</div>`:""}
      <button class="btn" style="margin-top:14px" data-act="doVerify">${t("verifyNow")}</button>
      <button class="ghost" style="margin-top:8px" data-act="sendCode">${t("resend")}</button>
    </div></div>`;
  }
  return `<div class="ov" data-act="closeOv"><div class="sheet" data-act="stop">
    <div class="grab"></div><h3>📱 ${t("verifyTitle")}</h3>
    <div class="muted sm" style="margin-bottom:12px">${t("verifySub")}</div>
    <label>${t("phoneLabel")}</label>
    <input id="vf_phone" inputmode="tel" placeholder="012-345 6789" value="${esc(m.phone||"")}" />
    <button class="btn" style="margin-top:14px" data-act="sendCode">${t("sendCode")}</button>
  </div></div>`;
}
function modalChat(jobId, workerId){
  const job=J(jobId), w=W(workerId);
  const thread=DB.msgs.filter(m=>m.jobId===jobId&&m.workerId===workerId).sort((a,b)=>a.ts-b.ts);
  const mineSide = S.role; // 'worker' or 'employer'
  const bubbles = thread.length? thread.map(m=>{
    const mine = m.from===mineSide;
    const who = m.from==="employer"? esc(E(job.empId).biz) : esc(w.name);
    return `<div class="bub ${mine?"me":"them"}"><div class="who">${who}</div>${esc(m.text)}</div>`;
  }).join("") : `<div class="muted sm" style="text-align:center;margin:auto">—</div>`;
  const title = S.role==="employer"? `${esc(w.name)}` : `${esc(E(job.empId).biz)}`;
  return `<div class="ov" data-act="closeOv"><div class="sheet" data-act="stop">
    <div class="grab"></div>
    <h3>💬 ${title}</h3><div class="muted sm">${esc(job.title)}</div>
    <div class="msgs" id="msgs">${bubbles}</div>
    <form class="chatform" data-act="sendForm" data-id="${jobId}" data-w="${workerId}">
      <input id="msgInput" placeholder="${t("typeMsg")}" autocomplete="off" />
      <button class="btn sm" type="submit">${t("send")}</button>
    </form>
  </div></div>`;
}

// ============ Render ============
function render(){
  document.getElementById("tagline").textContent=t("tagline");
  document.getElementById("lang").value=lang;
  // notification bell (injected into the header row, before the language picker)
  const hrow=document.querySelector(".hrow");
  if(hrow){
    let bell=document.getElementById("bell");
    if(!bell){ bell=document.createElement("button"); bell.id="bell"; bell.className="bell"; bell.dataset.act="openNotifs";
      hrow.insertBefore(bell, document.getElementById("lang")); }
    const n=unreadCount();
    bell.innerHTML=`${ICN.bell}${n?`<span class="bdot">${n>9?"9+":n}</span>`:""}`;
  }
  // roles
  document.getElementById("roles").innerHTML=
    `<button data-act="role" data-v="worker" class="${S.role==="worker"?"on":""}">${t("roleWorker")}</button>
     <button data-act="role" data-v="employer" class="${S.role==="employer"?"on":""}">${t("roleEmployer")}</button>`;
  // nav
  const tabs = S.role==="worker"
    ? [["jobs",ICN.jobs,t("w_jobs")],["apps",ICN.apps,t("w_apps")],["profile",ICN.profile,t("w_profile")]]
    : [["post",ICN.post,t("e_post")],["jobs",ICN.apps,t("e_jobs")],["biz",ICN.store,t("e_biz")]];
  if(!tabs.some(x=>x[0]===S.tab)) S.tab=tabs[0][0];
  document.getElementById("nav").innerHTML=tabs.map(([k,ic,lab])=>
    `<button data-act="tab" data-v="${k}" class="${S.tab===k?"on":""}"><span class="ic">${ic}</span>${lab}</button>`).join("");
  // body
  let html="";
  if(S.role==="worker"){
    if(S.tab==="jobs") html=workerJobs();
    else if(S.tab==="apps") html=workerApps();
    else html=workerProfile();
  } else {
    if(S.tab==="post") html=employerPost();
    else if(S.tab==="jobs") html=employerJobs();
    else html=employerBiz();
  }
  const app=document.getElementById("app");
  app.innerHTML=html;
  // keep focus in the search box while typing
  if(S._sfocus){ const js=document.getElementById("jobSearch"); if(js){ js.focus(); const v=js.value; js.setSelectionRange(v.length,v.length); } S._sfocus=false; }
  // mount the real map when in map view
  if(S.role==="worker" && S.tab==="jobs" && S.jobsView==="map") initWorkerMap();
  // modal
  let ov=document.getElementById("ovroot"); if(ov) ov.remove();
  if(S.modal){
    const root=document.createElement("div"); root.id="ovroot";
    root.innerHTML = S.modal.type==="apply"? modalApply(S.modal.jobId)
      : S.modal.type==="notifs"? modalNotifs()
      : S.modal.type==="editWorker"? modalEditWorker()
      : S.modal.type==="editEmployer"? modalEditEmployer()
      : S.modal.type==="verify"? modalVerify()
      : modalChat(S.modal.jobId,S.modal.workerId);
    document.body.appendChild(root);
    const mi=document.getElementById("msgInput")||document.getElementById("vf_code")||document.getElementById("vf_phone"); if(mi) mi.focus();
    const mb=document.getElementById("msgs"); if(mb) mb.scrollTop=mb.scrollHeight;
  }
  // toast
  let tt=document.getElementById("toastroot"); if(tt) tt.remove();
  if(S.toast){ const r=document.createElement("div"); r.id="toastroot"; r.innerHTML=`<div class="toast">${esc(S.toast)}</div>`; document.body.appendChild(r); }
}

// ============ Events ============
document.addEventListener("click", e=>{
  const el=e.target.closest("[data-act]"); if(!el) return;
  const act=el.dataset.act, id=el.dataset.id;
  switch(act){
    case "role": S.role=el.dataset.v; S.tab=null; render(); break;
    case "tab": S.tab=el.dataset.v; render(); break;
    case "dist": S.dist=el.dataset.v; render(); break;
    case "urg": S.urgent=!S.urgent; render(); break;
    case "cat": S.cat=el.dataset.v; render(); break;
    case "jobsView": S.jobsView=el.dataset.v; render(); break;
    case "savedOnly": S.savedOnly=!S.savedOnly; render(); break;
    case "appFilter": S.appFilter=el.dataset.v; render(); break;
    case "save": { const set=savedSet(); const i=set.indexOf(id); if(i<0) set.push(id); else set.splice(i,1); save(); render(); break; }
    case "withdraw": DB.apps=DB.apps.filter(x=>x.id!==id); save(); render(); break;
    case "editWorker": { const w=me(); S.modal={type:"editWorker",draft:{name:w.name,age:w.age,photo:w.photo,town:w.town,langs:[...(w.langs||[])]}}; render(); break; }
    case "verifyPhone": S.modal={type:"verify",step:"phone",phone:me().phone||""}; render(); break;
    case "sendCode": {
      const inp=document.getElementById("vf_phone");
      const phone=(inp? inp.value : S.modal.phone||"").trim();
      if((phone.replace(/\D/g,"")).length<7){ toast(t("badPhone")); break; }
      const code=sendOtp(phone);                          // demo: returns the code; real SMS provider drops in here
      S.modal={type:"verify",step:"code",phone,code,entered:"",err:false};
      toast(`${t("demoCode")}: ${code}`);                 // DEMO ONLY — a real build sends this via SMS, never shows it
      render(); break;
    }
    case "doVerify": {
      const inp=document.getElementById("vf_code");
      const entered=(inp? inp.value : "").trim();
      if(entered===S.modal.code){
        const w=me(); w.phone=S.modal.phone; w.verified=true;
        save(); S.modal=null; toast(t("verifiedToast"));
      } else { S.modal.entered=entered; S.modal.err=true; render(); }
      break;
    }
    case "editEmployer": { const e=E(S.employerId); S.modal={type:"editEmployer",draft:{biz:e.biz}}; render(); break; }
    case "pickPhoto": syncWorkerDraft(); S.modal.draft.photo=el.dataset.v; render(); break;
    case "toggleLang": { syncWorkerDraft(); const ls=S.modal.draft.langs, v=el.dataset.v, i=ls.indexOf(v); if(i<0) ls.push(v); else ls.splice(i,1); render(); break; }
    case "saveWorker": { syncWorkerDraft(); const d=S.modal.draft, w=me();
        w.name=d.name.trim()||w.name; w.age=Math.max(13,Number(d.age)||w.age); w.photo=d.photo; w.town=d.town; w.langs=d.langs.length?d.langs:w.langs;
        save(); S.modal=null; toast(t("profileSaved")); break; }
    case "saveEmployer": { const v=document.getElementById("ee_name").value.trim(); const e=E(S.employerId); if(v) e.biz=v; save(); S.modal=null; toast(t("profileSaved")); break; }
    case "openApply": S.modal={type:"apply",jobId:id}; render(); break;
    case "closeOv": S.modal=null; render(); break;
    case "stop": break;  // click inside a sheet — swallow so it doesn't close the overlay
    case "openNotifs": myNotifs().forEach(n=>n.read=true); save(); S.modal={type:"notifs"}; render(); break;
    case "useGPS":
      if(!navigator.geolocation){ toast(t("gpsFail")); break; }
      navigator.geolocation.getCurrentPosition(
        pos=>{ const w=me(); w.coords=[pos.coords.latitude,pos.coords.longitude]; save(); toast(t("gpsOn")); render(); },
        ()=>toast(t("gpsFail")), {timeout:8000});
      break;
    case "setPlan": { const e=E(S.employerId); if(e){ e.plan=el.dataset.v; save(); toast(t("upgraded")); render(); } break; }
    case "applyAlone": {
      const job=J(id); DB.apps.push({id:uid(),jobId:id,workerId:S.workerId,friendId:null,status:"applied"});
      notify("employer", job.empId, `${me().name} ${t("notiApplied")} ${job.title}`);
      save(); S.modal=null; S.tab="apps"; toast(t("appliedToast")); break; }
    case "applyFriend": {
      const job=J(id); DB.apps.push({id:uid(),jobId:id,workerId:S.workerId,friendId:el.dataset.f,status:"applied"});
      notify("employer", job.empId, `${me().name} ${t("notiApplied")} ${job.title} ${t("notiBuddy")}`);
      save(); S.modal=null; S.tab="apps"; toast(t("appliedToast")); break; }
    case "chat": S.modal={type:"chat",jobId:id,workerId:el.dataset.w}; render(); break;
    case "share": shareJob(id); break;
    case "install":
      if(deferredInstall){ deferredInstall.prompt(); deferredInstall.userChoice.finally(()=>{ deferredInstall=null; render(); }); }
      break;
    case "accept": { const a=DB.apps.find(x=>x.id===id); if(a){ const job=J(a.jobId);
        [a.workerId,a.friendId].filter(Boolean).forEach(wid=>notify("worker",wid,`${t("notiAccepted")} ${job.title}`)); }
        setStatus(id,"accepted"); break; }
    case "decline": { const a=DB.apps.find(x=>x.id===id); if(a){ const job=J(a.jobId);
        [a.workerId,a.friendId].filter(Boolean).forEach(wid=>notify("worker",wid,`${t("notiDeclined")} ${job.title}`)); }
        setStatus(id,"declined"); break; }
    case "complete": resolveJob(id,true); break;
    case "noshow": resolveJob(id,false); break;
    case "rate": { const n=e.target.dataset.n; if(n) doRate(id,Number(n)); break; }
    case "rateWorker": { const n=e.target.dataset.n; if(n) doRateWorker(id,Number(n)); break; }
    case "publish": publish(); break;
    case "loadDemo": if(confirm("Load demo data?")){ seed(); S.modal=null; render(); } break;
    case "clearAll": if(confirm("Clear everything?")){ DB.workers=[{id:"me",name:"You",age:24,photo:"🧑",langs:["English"],town:"georgetown",completed:0,noshow:0,ratingSum:0,ratingCount:0,saved:[]}]; DB.employers=[{id:"e1",biz:"My Business",verified:false,plan:"free",ratingSum:0,ratingCount:0}]; DB.jobs=[];DB.apps=[];DB.msgs=[];DB.notifs=[]; S.workerId="me"; save(); render(); } break;
  }
});
document.addEventListener("change", e=>{
  if(e.target.id==="lang"){ lang=e.target.value; localStorage.setItem("wg_lang",lang); render(); }
  if(e.target.dataset.act==="actAs"){ S.workerId=e.target.value; render(); }
  if(e.target.dataset.act==="distSel"){ S.dist=e.target.value; render(); }
});
document.addEventListener("input", e=>{
  if(e.target.id==="jobSearch"){ S.q=e.target.value; S._sfocus=true; render(); }
});
document.addEventListener("submit", e=>{
  const f=e.target.closest("[data-act='sendForm']"); if(!f) return;
  e.preventDefault();
  const input=document.getElementById("msgInput"); const text=input.value.trim(); if(!text) return;
  const jobId=f.dataset.id, wId=f.dataset.w, job=J(jobId);
  DB.msgs.push({id:uid(),jobId,workerId:wId,from:S.role,text,ts:Date.now()});
  if(S.role==="worker") notify("employer", job.empId, `${t("notiMsg")} ${job.title}`);
  else notify("worker", wId, `${t("notiMsg")} ${job.title}`);
  save(); render();
});
function setStatus(appId,status){ const a=DB.apps.find(x=>x.id===appId); if(a){a.status=status; save(); render();} }
function resolveJob(appId, showed){
  const a=DB.apps.find(x=>x.id===appId); if(!a) return;
  a.status = showed? "completed":"noshow";
  [a.workerId, a.friendId].filter(Boolean).forEach(wid=>{ const w=W(wid); if(w){ if(showed) w.completed++; else w.noshow++; } });
  save(); render();
}
function doRate(appId, n){
  const a=DB.apps.find(x=>x.id===appId); if(!a||a.rated) return;
  a.rated=n; const job=J(a.jobId); const e=E(job.empId); if(e){ e.ratingSum+=n; e.ratingCount++; }
  save(); render();
}
// employer rates the worker(s) on a completed app — feeds the worker's public ★ score
function doRateWorker(appId, n){
  const a=DB.apps.find(x=>x.id===appId); if(!a||a.empRated) return;
  a.empRated=n; const job=J(a.jobId);
  [a.workerId, a.friendId].filter(Boolean).forEach(wid=>{ const w=W(wid);
    if(w){ w.ratingSum=(w.ratingSum||0)+n; w.ratingCount=(w.ratingCount||0)+1;
      notify("worker", wid, `${t("notiRated")} ${job.title} (${"⭐".repeat(n)})`); } });
  save(); render();
}
// Generate (and "send") a one-time code. DEMO: returns the code so the UI can show it.
// To go live, POST {phone} to a Supabase Edge Function / Twilio Verify here and return
// nothing — the provider sends the SMS and you verify the code server-side instead.
function sendOtp(phone){
  return String(Math.floor(100000 + Math.random()*900000));
}
function publish(){
  const e=E(S.employerId);
  if(empPlan(e)==="free" && empJobs(e.id).length>=FREE_LIMIT){ toast(t("freeLimit")); return; }
  const v=id=>document.getElementById(id).value.trim();
  const title=v("p_title"); if(!title){ alert("Job title?"); return; }
  const featEl=document.getElementById("p_feat");
  const urg=document.getElementById("p_urg").value;
  const job={ id:uid(), empId:S.employerId, title, cat:document.getElementById("p_cat").value,
    town:document.getElementById("p_town").value, date:v("p_date")||"-", time:v("p_time")||"-",
    pay:v("p_pay")||"-", needed:Math.max(1,Number(v("p_needed"))||1), urg,
    featured: isPremium(e) && featEl && featEl.checked };
  DB.jobs.unshift(job);
  // urgent jobs ping all workers
  if(urg!=="normal") DB.workers.forEach(w=>notify("worker", w.id, `${t("notiUrgent")} ${title}`));
  save(); S.tab="jobs"; toast(t("postedToast"));
}

// ============ PWA + deep links ============
if(typeof window!=="undefined"){
  // installable app: capture the prompt and surface our own Install button
  window.addEventListener("beforeinstallprompt", e=>{ e.preventDefault(); deferredInstall=e; render(); });
  window.addEventListener("appinstalled", ()=>{ deferredInstall=null; toast(t("installed")); });
  // register the service worker (ignored on file:// or unsupported browsers)
  if("serviceWorker" in navigator){ window.addEventListener("load", ()=>navigator.serviceWorker.register("/sw.js").catch(()=>{})); }
  // deep link: ?job=<id> opens that job for a worker (used by shared WhatsApp links)
  try{
    const jid=new URLSearchParams(location.search).get("job");
    if(jid && J(jid)){ S.role="worker"; S.tab="jobs"; S.modal={type:"apply",jobId:jid}; }
  }catch(_){}
}

// ============ Optional cloud sync (Supabase) ============
// Active only when window.__GIG_SUPA has a url + anon key (set from env in app/page.js).
// Stores the whole app state as one JSON blob per "room" and live-syncs via realtime,
// so two phones in the same room see each other. Falls back to localStorage otherwise.
(function initCloud(){
  const cfg = (typeof window!=="undefined") && window.__GIG_SUPA;
  if(!cfg || !cfg.url || !cfg.key) return;            // not configured → local only
  const ROOM = cfg.room || "demo";
  const CLIENT = uid();
  const KEYS = ["workers","employers","jobs","apps","msgs","notifs"];
  let sb=null, pushTimer=null;
  cloudStatus = { on:true, room:ROOM };
  function applyBlob(d){
    if(!d) return;
    KEYS.forEach(k=>{ if(d[k]) DB[k]=d[k]; });
    KEYS.forEach(k=>localStorage.setItem("wg_"+k, JSON.stringify(DB[k])));
    render();
  }
  cloudPush = function(){
    if(!sb) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(async ()=>{
      try{
        const data={ _w:CLIENT, _t:Date.now() };
        KEYS.forEach(k=>data[k]=DB[k]);
        await sb.from("gig_rooms").upsert({ id:ROOM, data, updated_at:new Date().toISOString() });
      }catch(_){}
    }, 400);
  };
  import("https://esm.sh/@supabase/supabase-js@2").then(async ({ createClient })=>{
    sb = createClient(cfg.url, cfg.key, { auth:{ persistSession:false } });
    try{
      const { data } = await sb.from("gig_rooms").select("data").eq("id",ROOM).maybeSingle();
      if(data && data.data) applyBlob(data.data);
      else cloudPush();                                // seed the room from local data
    }catch(_){}
    sb.channel("gig_"+ROOM)
      .on("postgres_changes", { event:"*", schema:"public", table:"gig_rooms", filter:"id=eq."+ROOM },
        payload=>{ const d=payload.new && payload.new.data; if(d && d._w!==CLIENT) applyBlob(d); })
      .subscribe();
    render();
  }).catch(()=>{ cloudStatus={ on:false, room:ROOM }; });
})();

render();
