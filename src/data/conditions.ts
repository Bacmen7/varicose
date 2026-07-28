export type ConditionContent = {
  slug: string;
  name: string;
  badge: string;
  image: string;
  tagline: string;
  intro: string[];
  keyFacts: { label: string; value: string }[];
  symptoms: string[];
  symptomsIntro: string;
  causesIntro: string;
  causes: { title: string; desc: string }[];
  riskFactors: { factor: string; detail: string }[];
  diagnosis: string[];
  treatmentSteps: {
    number: number;
    title: string;
    desc: string;
    details: string[];
  }[];
  prevention: { title: string; desc: string }[];
  complications: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const conditionContent: ConditionContent[] = [
  {
    slug: "spider-veins",
    name: "Spider Veins",
    badge: "Commonly misunderstood",
    image: "/user/spider vein.png",
    tagline:
      "Fine, thread-like veins that are often more than just a cosmetic concern",
    intro: [
      "Spider veins, known medically as telangiectasias, are fine red, blue, or purple veins that sit just beneath the surface of the skin. They usually appear on the thighs, calves, and ankles, and sometimes on the face. Each vein is less than a millimetre wide, but they cluster together in web-like or branching patterns that are clearly visible.",
      "Most people are told that spider veins are purely cosmetic. That is true for some patients, but not all. In a significant number of cases, spider veins are the first visible sign that the deeper veins in the leg are under abnormal pressure. Treating the surface veins without checking underneath is the single most common reason spider veins come back within a year.",
      "At Sira Vascular, every patient with spider veins gets a duplex ultrasound before any treatment is planned. It takes fifteen minutes, involves no needles, and tells us whether we are treating a cosmetic problem or the visible tip of an underlying venous condition.",
    ],
    keyFacts: [
      { label: "Typically affects", value: "Adults aged 30-60, women more than men" },
      { label: "Common sites", value: "Thighs, calves, ankles, and face" },
      { label: "Prevalence", value: "Seen in up to 80% of adults to some degree" },
      { label: "Key diagnostic test", value: "Duplex ultrasound of the leg veins" },
      { label: "Main treatment", value: "Sclerotherapy, often over 2-3 sessions" },
      { label: "Specialist", value: "Vascular surgeon or phlebologist" },
    ],
    symptomsIntro:
      "Spider veins are usually noticed visually before they cause any discomfort. When symptoms do occur, they tend to be mild but persistent, and they often worsen through the day or in warm weather.",
    symptoms: [
      "Fine red, blue, or purple veins visible through the skin in web-like or branching patterns",
      "A mild burning, tingling, or itching sensation over the affected patch, often worse at night",
      "Increased visibility and discomfort in warm weather or after a hot shower",
      "New clusters appearing during or shortly after pregnancy",
      "Aching or heaviness in the leg if larger feeder veins are also involved",
      "Occasional minor bleeding if a very superficial vein is knocked or scratched",
    ],
    causesIntro:
      "Spider veins form when tiny valves inside surface veins stop closing properly. Blood that should travel upward flows backward instead, the vein widens under the extra pressure, and it becomes visible through the skin.",
    causes: [
      {
        title: "Valve failure in surface veins",
        desc: "The one-way valves inside small veins weaken with age or under sustained pressure. Once they fail, blood pools in the vein and it dilates permanently. This is the direct mechanism behind almost every spider vein.",
      },
      {
        title: "Hormonal changes",
        desc: "Oestrogen and progesterone relax vein walls. Pregnancy, hormonal contraception, hormone replacement therapy, and menopause are all strongly associated with new spider veins, which is why women are affected far more often than men.",
      },
      {
        title: "Prolonged standing or sitting",
        desc: "Teachers, surgeons, retail staff, and desk-based workers all spend long stretches without engaging the calf muscle pump. Pressure in the leg veins stays high for hours at a time, and surface veins give way first.",
      },
      {
        title: "Underlying venous insufficiency",
        desc: "In roughly one in three patients, spider veins are fed by a larger refluxing vein deeper in the leg. Unless that feeder vein is treated, sclerotherapy of the surface veins gives short-lived results.",
      },
      {
        title: "Sun damage and skin thinning",
        desc: "Ultraviolet exposure damages collagen in the skin and in vein walls. This is the dominant cause of facial spider veins and a contributing factor on the legs, particularly in older patients.",
      },
    ],
    riskFactors: [
      {
        factor: "Sex and hormonal history",
        detail:
          "Women are affected roughly three times more often than men. Risk climbs with each pregnancy and rises again around menopause. Hormonal contraception and HRT both increase susceptibility.",
      },
      {
        factor: "Family history",
        detail:
          "Vein wall strength and valve structure are strongly inherited. If both parents have visible veins, your likelihood of developing them is well above 80%.",
      },
      {
        factor: "Occupation",
        detail:
          "Jobs that involve four or more hours of continuous standing or sitting significantly increase venous pressure in the lower leg over a working lifetime.",
      },
      {
        factor: "Body weight",
        detail:
          "Excess weight raises abdominal pressure, which slows venous return from the legs and accelerates valve failure in both surface and deeper veins.",
      },
      {
        factor: "Age",
        detail:
          "Vein walls lose elasticity from the fourth decade onwards. Spider veins are uncommon before the age of 25 and increasingly common after 40.",
      },
      {
        factor: "Sun exposure",
        detail:
          "Chronic ultraviolet exposure weakens the collagen scaffolding around small vessels, particularly on the face, cheeks, and nose.",
      },
    ],
    diagnosis: [
      "Clinical examination with the patient standing, which allows the veins to fill and shows their true extent and distribution.",
      "Duplex ultrasound of the great and small saphenous systems to check for reflux in the deeper veins that feed the spider veins.",
      "Mapping of feeder veins, sometimes with transillumination, so that treatment starts at the source rather than the visible cluster.",
      "Assessment of the deep venous system to rule out previous thrombosis, which would change the treatment plan entirely.",
      "Photographic documentation before treatment, which gives an objective baseline to compare results against.",
      "Ruling out look-alikes such as capillary malformations, rosacea on the face, and corona phlebectatica around the ankle, which signals more advanced disease.",
    ],
    treatmentSteps: [
      {
        number: 1,
        title: "Treat any underlying reflux first",
        desc: "If the ultrasound shows a refluxing saphenous vein or a significant feeder, that has to be dealt with before the surface veins. Skipping this step is why spider veins so often return.",
        details: [
          "Endovenous laser ablation (EVLT) or radiofrequency ablation (RFA) for a refluxing saphenous trunk",
          "VenaSeal glue closure where a heat-free option is preferred",
          "Foam sclerotherapy for medium-sized feeder veins that supply the spider vein clusters",
          "A repeat scan four to six weeks later to confirm the treated vein has closed",
        ],
      },
      {
        number: 2,
        title: "Sclerotherapy for the visible veins",
        desc: "This is the definitive treatment for leg spider veins. A very fine needle delivers a sclerosant solution into the vein, which irritates the lining, causes it to seal, and lets the body absorb it over several weeks.",
        details: [
          "Sessions last twenty to thirty minutes and need no anaesthetic",
          "Most patients need two to three sessions spaced four weeks apart",
          "Compression stockings are worn for one to two weeks after each session",
          "You walk out immediately and return to normal activity the same day",
        ],
      },
      {
        number: 3,
        title: "Surface laser for the finest veins",
        desc: "Some veins are too small to cannulate with a needle, particularly on the face and around the ankle. A transcutaneous laser delivers energy through the skin to collapse them.",
        details: [
          "First choice for facial telangiectasia, where sclerotherapy carries more risk",
          "Useful for tiny residual veins after a course of sclerotherapy",
          "Multiple short sessions are usually required",
          "Sun avoidance for four weeks afterwards protects against pigmentation",
        ],
      },
      {
        number: 4,
        title: "Follow-up and maintenance",
        desc: "Treated veins do not come back, but the tendency that produced them remains. A simple maintenance plan keeps new clusters from forming.",
        details: [
          "Review at three months to assess results and treat any residual veins",
          "Graduated compression stockings for occupations involving long standing",
          "Regular calf exercise and leg elevation at the end of the day",
          "An annual scan for patients who had underlying reflux treated",
        ],
      },
    ],
    prevention: [
      {
        title: "Move your calves regularly",
        desc: "The calf muscle is the pump that returns blood from your legs. Ten ankle pumps every hour of standing or sitting does more for your veins than any supplement.",
      },
      {
        title: "Use compression when you have to stand",
        desc: "Graduated compression stockings of 15-20 mmHg worn during long shifts measurably reduce the pressure that creates new spider veins.",
      },
      {
        title: "Elevate at the end of the day",
        desc: "Fifteen minutes with your legs above heart level clears the day's accumulated venous pressure and reduces evening swelling.",
      },
      {
        title: "Protect your skin from the sun",
        desc: "Daily sunscreen on the face and legs slows the collagen loss that makes small vessels more visible with age.",
      },
      {
        title: "Keep your weight in a healthy range",
        desc: "Reducing abdominal pressure directly improves venous return from the legs and slows progression of existing veins.",
      },
      {
        title: "Avoid prolonged direct heat",
        desc: "Very hot baths, saunas, and hot yoga dilate surface veins. Occasional use is fine, but daily exposure worsens the appearance over time.",
      },
    ],
    complications: [
      {
        title: "Progression to varicose veins",
        desc: "When spider veins are driven by underlying reflux that is never assessed, the same pressure eventually produces larger bulging varicose veins over five to ten years.",
      },
      {
        title: "Bleeding from superficial veins",
        desc: "A very thin-walled vein sitting close to the skin surface can bleed surprisingly heavily if knocked or scratched, particularly around the ankle.",
      },
      {
        title: "Skin changes at the ankle",
        desc: "A fan of tiny veins on the inner ankle, called corona phlebectatica, is a recognised marker of advancing venous disease and warrants a full assessment.",
      },
      {
        title: "Recurrence after cosmetic-only treatment",
        desc: "Treating visible veins without correcting a feeding vein leads to recurrence in the majority of patients within twelve to eighteen months.",
      },
    ],
    faqs: [
      {
        q: "Are spider veins dangerous?",
        a: "On their own, no. They do not cause clots and they do not threaten the leg. The reason we still investigate them is that in about a third of patients they sit on top of an underlying venous problem that does progress if left alone.",
      },
      {
        q: "Will they come back after treatment?",
        a: "A vein that has been properly sclerosed does not return. New veins can form over the years, especially if the underlying cause was never treated or if you have strong hormonal or occupational risk factors. Most patients need a short top-up session every few years.",
      },
      {
        q: "Is sclerotherapy painful?",
        a: "Most patients describe a brief sting as the solution enters the vein, followed by a mild cramping sensation for a few seconds. No anaesthetic is needed and you walk out of the clinic straight afterwards.",
      },
      {
        q: "How long before I see results?",
        a: "Treated veins begin fading at two to three weeks and continue improving for up to three months. Expect a 60-80% improvement in appearance after a full course of treatment.",
      },
      {
        q: "Can I treat spider veins during pregnancy?",
        a: "We do not treat during pregnancy. Many pregnancy-related veins improve on their own in the three to six months after delivery, so we assess and plan treatment after that period.",
      },
    ],
  },
  {
    slug: "chronic-venous-insufficiency",
    name: "Chronic Venous Insufficiency",
    badge: "Often undiagnosed",
    image: "/user/chronic venus insufficiency.png",
    tagline:
      "When leg veins can no longer return blood to the heart efficiently",
    intro: [
      "Chronic venous insufficiency, usually shortened to CVI, is what happens when the valves inside your leg veins stop closing properly. Blood that should be pushed upward toward the heart falls back down the leg instead, and pressure builds in the lower leg with every hour you spend upright.",
      "Patients rarely arrive describing CVI by name. They describe legs that feel heavy by four in the afternoon, socks that leave a deep mark on the ankle, cramps that wake them at two in the morning, and skin around the ankle that has slowly changed colour over a couple of years. Each of these is the same pressure problem showing itself in a different way.",
      "CVI is one of the most under-diagnosed conditions we see, largely because the symptoms build so gradually that people adjust to them. It is also one of the most treatable. A fifteen-minute ultrasound identifies exactly which vein is leaking, and a day-care procedure under local anaesthesia closes it.",
    ],
    keyFacts: [
      { label: "Typically affects", value: "Adults over 40, both men and women" },
      { label: "Prevalence in India", value: "Estimated 5% of adults, rising with age" },
      { label: "Main symptom pattern", value: "Heaviness and swelling that worsen through the day" },
      { label: "Key diagnostic test", value: "Venous duplex ultrasound with reflux timing" },
      { label: "Main treatment", value: "Endovenous ablation, done as day care" },
      { label: "Specialist", value: "Vascular surgeon or interventional radiologist" },
    ],
    symptomsIntro:
      "The hallmark of CVI is a symptom pattern that follows the clock. Legs feel reasonable in the morning and progressively worse through the day, improving overnight when you lie flat. That daily rhythm is the strongest clue that the problem is venous rather than muscular or orthopaedic.",
    symptoms: [
      "Legs that feel heavy, tired, or achy by the end of the day, particularly after long standing",
      "Ankle swelling that appears during the day and settles overnight, often leaving sock marks",
      "Night cramps in the calf, or restless legs that disturb sleep",
      "Itching or a dry, flaky patch of skin over the inner ankle",
      "Brown or reddish discolouration of the skin around the ankle, which develops over months to years",
      "Visible varicose veins, although many patients with significant CVI have very few visible veins",
      "A dull ache that eases when you elevate your legs or walk, and worsens when you stand still",
    ],
    causesIntro:
      "Healthy leg veins contain one-way valves that open to let blood pass upward and close to stop it falling back. CVI develops when those valves fail, either because the vein wall has stretched or because the valve leaflets have been damaged.",
    causes: [
      {
        title: "Primary valve failure",
        desc: "The most common cause. The vein wall gradually stretches under years of pressure until the valve leaflets no longer meet in the middle. Blood then refluxes downward with every step, and the pressure at the ankle stays permanently elevated.",
      },
      {
        title: "Post-thrombotic damage",
        desc: "A previous deep vein thrombosis scars the valves as the clot resolves. This produces the most severe forms of CVI, because both reflux and residual obstruction are present in the same leg. Around one in four patients who have had a DVT develop post-thrombotic syndrome.",
      },
      {
        title: "Failure of the calf muscle pump",
        desc: "The calf is the engine that clears blood from the leg. Reduced mobility, a stiff ankle after injury, arthritis, or a sedentary lifestyle all weaken that pump, so blood lingers in the lower leg even when the valves are structurally intact.",
      },
      {
        title: "Raised abdominal pressure",
        desc: "Obesity, pregnancy, chronic constipation, and abdominal tumours all increase the pressure that leg veins must overcome to drain. Over years, this accelerates valve failure.",
      },
      {
        title: "Congenital vein abnormalities",
        desc: "A small proportion of patients are born with absent or malformed valves. These patients typically present much younger, often in their twenties, with symptoms out of proportion to their visible veins.",
      },
    ],
    riskFactors: [
      {
        factor: "Age",
        detail:
          "Prevalence rises steadily after 40 as vein walls lose elasticity. By the age of 70, a substantial proportion of adults have some degree of venous reflux on ultrasound.",
      },
      {
        factor: "Previous DVT",
        detail:
          "The single strongest risk factor. Around a quarter of patients with a past deep vein clot go on to develop post-thrombotic venous insufficiency, often within two years.",
      },
      {
        factor: "Occupation",
        detail:
          "Prolonged standing or sitting without calf activity keeps venous pressure high for hours. Teachers, surgeons, factory workers, retail staff, and long-haul drivers are all over-represented.",
      },
      {
        factor: "Pregnancy",
        detail:
          "Each pregnancy raises abdominal pressure and hormone levels that relax vein walls. Risk increases with the number of pregnancies, and veins that appear during pregnancy often persist afterwards.",
      },
      {
        factor: "Obesity",
        detail:
          "Higher abdominal pressure impairs venous return, and excess weight also reduces mobility, weakening the calf pump. The two effects compound each other.",
      },
      {
        factor: "Family history",
        detail:
          "Venous disease clusters strongly in families. Having one affected parent roughly doubles your risk, and two affected parents raises it considerably further.",
      },
    ],
    diagnosis: [
      "A standing clinical examination, since venous abnormalities are far easier to see and feel when the leg veins are filled.",
      "Venous duplex ultrasound, the definitive test. It measures reflux time in each vein segment; more than half a second of reverse flow confirms valve incompetence.",
      "Mapping of the great and small saphenous veins and their perforators, so the treating team knows exactly which segments need closing.",
      "Assessment of the deep venous system to identify previous thrombosis or obstruction, which changes the treatment approach.",
      "CEAP classification, an international scoring system that grades the disease from C0 to C6 and lets us track progression objectively.",
      "Ruling out other causes of leg swelling such as heart failure, kidney disease, lymphoedema, and medication side effects.",
    ],
    treatmentSteps: [
      {
        number: 1,
        title: "Confirm the diagnosis with ultrasound",
        desc: "Nothing meaningful can be planned without a duplex scan. It distinguishes CVI from other causes of swelling and shows precisely which veins are refluxing.",
        details: [
          "Painless, no needles, no radiation, takes about fifteen minutes",
          "Performed standing, because reflux is missed on a lying-down scan",
          "Reflux time is measured in each segment to grade severity",
          "The deep veins are checked for old clot before any superficial treatment",
        ],
      },
      {
        number: 2,
        title: "Close the refluxing vein",
        desc: "Modern treatment seals the faulty vein from the inside. Blood immediately redirects into healthy veins, and the abnormal pressure at the ankle drops the same day.",
        details: [
          "Endovenous laser ablation (EVLT) delivers laser energy through a thin fibre inside the vein",
          "Radiofrequency ablation (RFA) uses controlled heat and is equally effective",
          "VenaSeal medical adhesive closes the vein without heat, so no tumescent anaesthesia is needed",
          "All three are done under local anaesthesia as day care, and you walk out within an hour",
        ],
      },
      {
        number: 3,
        title: "Deal with the remaining tributaries",
        desc: "Once the main trunk is closed, the visible surface veins that it was feeding are treated in the same sitting or shortly afterwards.",
        details: [
          "Foam sclerotherapy for medium-sized tributaries",
          "Ambulatory phlebectomy through 2 mm incisions for larger bulging veins, leaving no stitches",
          "Standard sclerotherapy for any residual spider veins, usually at six weeks",
        ],
      },
      {
        number: 4,
        title: "Compression and long-term follow-up",
        desc: "Compression supports the result while the treated vein resorbs, and follow-up scans confirm that the leg stays healthy.",
        details: [
          "Graduated stockings for two to four weeks after the procedure",
          "Early and frequent walking from day one, which reduces clot risk and speeds recovery",
          "A duplex scan at six weeks to confirm complete closure",
          "Annual review for patients with previous DVT or advanced skin changes",
        ],
      },
    ],
    prevention: [
      {
        title: "Walk, and walk often",
        desc: "Every step engages the calf pump and empties the deep veins. Thirty minutes of walking a day is the most effective thing you can do for venous health.",
      },
      {
        title: "Break up long periods of standing or sitting",
        desc: "Ankle circles, heel raises, or a two-minute walk every hour keeps venous pressure from staying elevated for hours at a stretch.",
      },
      {
        title: "Wear graduated compression",
        desc: "Properly fitted stockings measurably reduce swelling and symptoms, and they are the mainstay of management for patients who are not yet candidates for a procedure.",
      },
      {
        title: "Elevate your legs daily",
        desc: "Fifteen to twenty minutes with the legs above heart level clears accumulated fluid and gives the venous system a genuine rest.",
      },
      {
        title: "Look after the skin",
        desc: "Daily moisturising of the lower leg prevents the dry, itchy skin that eventually cracks and becomes the starting point for an ulcer.",
      },
      {
        title: "Manage weight and blood pressure",
        desc: "Lowering abdominal pressure directly improves venous return, and controlling cardiovascular risk factors reduces the swelling burden on the leg.",
      },
    ],
    complications: [
      {
        title: "Venous leg ulceration",
        desc: "The most serious consequence. Sustained pressure starves the skin around the ankle of oxygen until it breaks down into an open wound that will not heal with dressings alone.",
      },
      {
        title: "Lipodermatosclerosis",
        desc: "The skin and fat of the lower calf become hard, tight, and inverted like an upside-down champagne bottle. This change is difficult to reverse once established.",
      },
      {
        title: "Superficial thrombophlebitis",
        desc: "Blood stagnating in a dilated surface vein can clot, producing a hard, red, painful cord along the vein that requires prompt assessment.",
      },
      {
        title: "Bleeding from a varicosity",
        desc: "A thin-walled vein under high pressure can rupture through the skin and bleed briskly, most often around the ankle and often at night.",
      },
      {
        title: "Recurrent cellulitis",
        desc: "Chronically swollen, damaged skin is far more prone to bacterial infection, and each episode causes further lymphatic damage.",
      },
    ],
    faqs: [
      {
        q: "Is CVI the same thing as varicose veins?",
        a: "They are closely related but not identical. Varicose veins are one visible manifestation of venous insufficiency. You can have significant CVI with almost no visible veins, which is exactly why so many cases go undiagnosed for years.",
      },
      {
        q: "Can chronic venous insufficiency be cured?",
        a: "The damaged valves cannot be repaired, but closing the refluxing vein removes the abnormal pressure completely. For most patients this resolves the symptoms and stops the disease progressing. In that practical sense, yes.",
      },
      {
        q: "Do I need surgery?",
        a: "Almost certainly not. Traditional vein stripping has been replaced by endovenous techniques done under local anaesthesia through a needle puncture. You walk immediately and most people return to work within one to two days.",
      },
      {
        q: "Will compression stockings alone fix it?",
        a: "Stockings control symptoms very effectively but they do not correct the underlying reflux. They are the right choice for patients who cannot have a procedure, and they support recovery afterwards, but on their own they are management rather than treatment.",
      },
      {
        q: "How urgent is treatment?",
        a: "CVI is not an emergency, but it does not improve on its own and it progresses in a predictable direction. The earlier the refluxing vein is closed, the lower the chance of ever developing skin damage or an ulcer.",
      },
    ],
  },
  {
    slug: "dvt-and-leg-swelling",
    name: "DVT and Leg Swelling",
    badge: "Know the warning signs",
    image: "/user/deep vein reflux.png",
    tagline: "Sudden one-sided leg swelling needs same-day assessment",
    intro: [
      "Deep vein thrombosis is a blood clot that forms in one of the deep veins of the leg, usually in the calf or thigh. Unlike the slow, symmetrical swelling of chronic vein disease, DVT typically causes sudden swelling in one leg, often with pain, warmth, or redness over the affected area.",
      "The reason DVT matters so much is that part of the clot can break away and travel to the lungs, causing a pulmonary embolism. That is a genuine medical emergency. The reassuring side is that a DVT diagnosed early is straightforward to treat, and a duplex ultrasound gives a definitive answer within minutes.",
      "Not every swollen leg is a clot. A large part of our work is helping patients tell the difference between routine venous swelling, which builds through the day in both legs, and the sudden one-sided swelling that needs a scan today. This page explains where that line sits.",
    ],
    keyFacts: [
      { label: "Nature", value: "Medical urgency, needs same-day assessment" },
      { label: "Typical pattern", value: "Sudden swelling in one leg, not both" },
      { label: "Peak risk periods", value: "After surgery, hospitalisation, or long travel" },
      { label: "Key diagnostic test", value: "Compression duplex ultrasound" },
      { label: "Main treatment", value: "Anticoagulation, usually 3-6 months" },
      { label: "Emergency sign", value: "Breathlessness or chest pain with leg swelling" },
    ],
    symptomsIntro:
      "DVT symptoms come on over hours to a couple of days, not weeks. The single most useful distinguishing feature is asymmetry. Chronic venous swelling affects both legs and settles overnight; a clot affects one leg and does not settle.",
    symptoms: [
      "Sudden swelling of one leg, so that it looks and feels noticeably larger than the other",
      "Pain or cramping in the calf that often starts deep and does not ease with rest",
      "Warmth over the swollen area compared with the same spot on the other leg",
      "Redness or a bluish discolouration of the skin over the calf or thigh",
      "A tight, full sensation in the leg that persists overnight rather than settling",
      "Visible surface veins that have become more prominent on the affected leg only",
      "Breathlessness, chest pain, or coughing blood, which suggest the clot has reached the lungs and require emergency care",
    ],
    causesIntro:
      "Clots form when three factors line up: blood flow slows, the vein lining is injured, or the blood itself becomes more prone to clotting. This is known as Virchow's triad, and almost every DVT can be traced back to one or more of these.",
    causes: [
      {
        title: "Immobility and slowed blood flow",
        desc: "Long flights, extended car journeys, hospital admission, bed rest, or a limb in plaster all reduce calf pump activity. Blood moves sluggishly through the deep veins and is far more likely to clot.",
      },
      {
        title: "Surgery and trauma",
        desc: "Major operations, particularly hip and knee replacement, abdominal and pelvic surgery, and lower limb fractures, carry a substantially raised risk. The combination of tissue injury, immobility, and the inflammatory response after surgery is potent.",
      },
      {
        title: "Increased blood clotting tendency",
        desc: "Inherited thrombophilias such as Factor V Leiden, as well as acquired conditions like antiphospholipid syndrome, make blood clot more readily. These are worth testing for after an unprovoked clot in a younger patient.",
      },
      {
        title: "Cancer and its treatment",
        desc: "Many cancers release procoagulant substances, and chemotherapy adds further risk. An unprovoked DVT in an older patient sometimes leads to the discovery of an underlying malignancy.",
      },
      {
        title: "Hormonal factors",
        desc: "Pregnancy and the six weeks after delivery are the highest-risk period in a woman's life for venous thrombosis. Combined oral contraceptives and hormone replacement therapy also raise risk, particularly alongside smoking.",
      },
    ],
    riskFactors: [
      {
        factor: "Recent surgery or hospitalisation",
        detail:
          "The highest single risk period. Orthopaedic surgery, abdominal and pelvic operations, and any admission involving several days of bed rest all substantially increase risk, which is why prophylaxis is routine.",
      },
      {
        factor: "Long-distance travel",
        detail:
          "Flights or journeys of more than four hours restrict leg movement and mildly dehydrate you. Risk rises with journey length and is highest in people who already have other risk factors.",
      },
      {
        factor: "Cancer",
        detail:
          "Active malignancy raises DVT risk several times over. Pancreatic, lung, gastric, and haematological cancers carry the strongest association, and chemotherapy adds further to it.",
      },
      {
        factor: "Pregnancy and postpartum",
        detail:
          "Risk is elevated throughout pregnancy and peaks in the six weeks after delivery, when it is roughly twenty times the baseline rate for a non-pregnant woman of the same age.",
      },
      {
        factor: "Previous clot",
        detail:
          "A personal history of DVT or pulmonary embolism is one of the strongest predictors of another. A family history of clots in first-degree relatives also matters.",
      },
      {
        factor: "Obesity and smoking",
        detail:
          "Excess weight impairs venous return and creates a low-grade prothrombotic state. Smoking damages the vessel lining and compounds hormonal risk considerably.",
      },
    ],
    diagnosis: [
      "Clinical risk scoring, most commonly the Wells score, which combines symptoms and risk factors to estimate the probability of a clot before any test is done.",
      "D-dimer blood test, useful mainly to rule a clot out in low-risk patients; a normal result makes DVT very unlikely.",
      "Compression duplex ultrasound, the definitive investigation. A vein that does not compress under the probe contains clot.",
      "Assessment of clot extent, since a clot in the thigh or pelvis is managed more aggressively than one confined to the calf.",
      "CT pulmonary angiography if there is any breathlessness or chest pain, to check whether clot has reached the lungs.",
      "Thrombophilia screening and, in selected patients, investigation for occult malignancy after an unprovoked clot.",
    ],
    treatmentSteps: [
      {
        number: 1,
        title: "Get scanned the same day",
        desc: "If the pattern suggests DVT, imaging should not wait. A compression ultrasound takes fifteen minutes and either confirms or excludes the diagnosis definitively.",
        details: [
          "No preparation is needed and the scan is completely painless",
          "It shows the exact location and extent of any clot",
          "Both legs are examined for comparison",
          "If the scan is normal but suspicion remains high, it is repeated within a week",
        ],
      },
      {
        number: 2,
        title: "Start anticoagulation",
        desc: "Blood thinners stop the clot from growing and let the body's own systems dissolve it. Started promptly, they dramatically reduce the risk of pulmonary embolism.",
        details: [
          "Direct oral anticoagulants (DOACs) are first line for most patients and need no routine monitoring",
          "Low molecular weight heparin is preferred in pregnancy and in cancer-associated clots",
          "Warfarin is still used where DOACs are unsuitable, with regular INR monitoring",
          "Treatment usually continues for three to six months, longer if the clot was unprovoked or recurrent",
        ],
      },
      {
        number: 3,
        title: "Compression and mobilisation",
        desc: "Early walking is safe once anticoagulation has started and it improves outcomes. Compression controls swelling and reduces long-term complications.",
        details: [
          "Graduated compression stockings help control acute swelling and discomfort",
          "Walking is encouraged from the first day rather than bed rest",
          "The leg is elevated when resting to reduce swelling",
          "Long flights are avoided until the treating team confirms it is safe",
        ],
      },
      {
        number: 4,
        title: "Follow up for post-thrombotic syndrome",
        desc: "Around one in four patients develops lasting venous damage after a DVT. Structured follow-up catches it early, when it is still easy to manage.",
        details: [
          "A repeat duplex scan at three to six months documents residual clot and valve damage",
          "Ongoing symptoms of heaviness and swelling are assessed for post-thrombotic syndrome",
          "Long-term compression is prescribed where valve damage is confirmed",
          "Prevention plans are made for future high-risk situations such as surgery or long travel",
        ],
      },
    ],
    prevention: [
      {
        title: "Move on long journeys",
        desc: "Stand and walk every hour on flights and long drives, and do ankle pumps in your seat. This keeps the calf pump working when you cannot get up.",
      },
      {
        title: "Stay hydrated and skip the alcohol on flights",
        desc: "Dehydration thickens the blood. Water rather than alcohol or coffee on long journeys is a simple, evidence-backed measure.",
      },
      {
        title: "Use compression stockings when advised",
        desc: "Flight stockings meaningfully reduce clot risk in people who already have risk factors, and cost very little.",
      },
      {
        title: "Follow post-surgical prevention",
        desc: "Take prescribed blood thinners after surgery exactly as directed and start walking as early as your surgeon allows. Most post-operative clots are preventable.",
      },
      {
        title: "Stop smoking",
        desc: "Smoking damages the vein lining and multiplies the clotting risk from hormonal contraception. This is the single largest modifiable risk factor in younger women.",
      },
      {
        title: "Know your personal risk",
        desc: "If you have had a clot before or have a family history, tell every doctor before any surgery, pregnancy, or long journey so that prophylaxis can be planned.",
      },
    ],
    complications: [
      {
        title: "Pulmonary embolism",
        desc: "The most dangerous complication. Part of the clot breaks off and lodges in the lung arteries, causing breathlessness, chest pain, and in severe cases collapse. This is a medical emergency.",
      },
      {
        title: "Post-thrombotic syndrome",
        desc: "Roughly a quarter of patients develop chronic heaviness, swelling, and skin changes in the affected leg after a DVT, caused by scarred valves and residual obstruction.",
      },
      {
        title: "Recurrent thrombosis",
        desc: "Having had one clot substantially increases the likelihood of another, particularly if the first was unprovoked or if anticoagulation is stopped too early.",
      },
      {
        title: "Venous ulceration",
        desc: "Severe post-thrombotic damage produces the highest ankle pressures of any venous condition, and these are the ulcers most difficult to heal.",
      },
      {
        title: "Chronic thromboembolic pulmonary hypertension",
        desc: "An uncommon but serious late consequence in which unresolved clot in the lung arteries raises pulmonary pressure permanently.",
      },
    ],
    faqs: [
      {
        q: "How do I know whether my swelling is a clot?",
        a: "Ask two questions. Is it one leg or both? Did it come on suddenly? Clot-related swelling is one-sided, appears over hours to days, and does not settle overnight. Chronic venous swelling affects both legs, builds through the day, and is better by morning. If it is one-sided and sudden, get a scan the same day.",
      },
      {
        q: "Is DVT an emergency?",
        a: "It needs same-day assessment. It becomes an emergency the moment there is breathlessness, chest pain, or coughing blood, because that suggests the clot has travelled to the lungs. In that situation, go to an emergency department immediately.",
      },
      {
        q: "How long will I be on blood thinners?",
        a: "Usually three to six months. If the clot was provoked by a clear temporary factor such as surgery, three months is often enough. Unprovoked or recurrent clots, or an underlying clotting disorder, may mean long-term treatment.",
      },
      {
        q: "Can I fly after a DVT?",
        a: "Yes, once you are established on anticoagulation and your treating team agrees. You will be advised to wear compression stockings, stay hydrated, and move regularly during the flight.",
      },
      {
        q: "Will my leg go back to normal?",
        a: "Most patients recover well. About a quarter develop some degree of post-thrombotic syndrome with lasting swelling or heaviness. Early treatment, consistent compression, and regular walking all reduce that risk considerably.",
      },
    ],
  },
  {
    slug: "vein-ulcers",
    name: "Swelling, Skin Changes and Ulcers",
    badge: "Advanced stage care",
    image: "/user/swelling.png",
    tagline:
      "Advanced vein disease needs the underlying vein treated, not just the wound",
    intro: [
      "A venous leg ulcer is an open wound near the ankle that will not heal, caused by years of sustained pressure inside the leg veins. It is the end point of untreated venous disease, and it accounts for the large majority of all chronic leg wounds.",
      "The skin does not break down overnight. It gives warning signs for months or years first: brown staining around the inner ankle, skin that becomes dry, itchy, tight, and leathery, and swelling that no longer settles overnight. Each of these is a stage on the same road, and each is a chance to intervene before the skin actually opens.",
      "The most important thing to understand about venous ulcers is that they are not a skin problem. Dressings alone rarely heal them, and countless patients spend years changing dressings without progress. Once the refluxing vein underneath is closed and proper compression is applied, the majority of these ulcers heal within three months and stay healed.",
    ],
    keyFacts: [
      { label: "Typical location", value: "Inner ankle, above the bony prominence" },
      { label: "Share of all leg ulcers", value: "Venous disease causes roughly 70%" },
      { label: "Warning signs", value: "Brown staining, hard skin, persistent itching" },
      { label: "Key diagnostic test", value: "Duplex ultrasound plus ankle-brachial index" },
      { label: "Healing rate with correct treatment", value: "Most heal within 12 weeks" },
      { label: "Specialist", value: "Vascular surgeon with a wound care team" },
    ],
    symptomsIntro:
      "Venous skin damage follows a recognisable sequence. Recognising the earlier stages matters far more than recognising the ulcer itself, because everything before the skin opens is comparatively easy to treat.",
    symptoms: [
      "Brown or purple staining of the skin around the inner ankle, caused by iron deposits from leaking red blood cells",
      "Skin that feels hard, tight, and leathery to the touch, sometimes with the lower calf visibly narrowed",
      "Persistent itching and dry, flaking skin over the lower leg, often mistaken for eczema",
      "Swelling that no longer settles overnight, unlike the earlier stages of vein disease",
      "A small white, scarred patch of skin called atrophie blanche, which frequently precedes ulceration",
      "An open, shallow wound near the ankle with irregular edges and a moist base",
      "Weeping or oozing of clear fluid from the skin, and repeated episodes of cellulitis in the same area",
    ],
    causesIntro:
      "Venous ulcers are caused by sustained venous hypertension. When the pressure inside the leg veins stays high hour after hour, fluid and proteins leak out of the smallest vessels into the surrounding tissue, and the skin is progressively starved of oxygen until it breaks down.",
    causes: [
      {
        title: "Long-standing venous reflux",
        desc: "Years of blood falling back down the leg keep the pressure at the ankle permanently elevated. The small vessels in the skin become damaged, and eventually the tissue can no longer sustain itself.",
      },
      {
        title: "Untreated varicose veins",
        desc: "Varicose veins that were dismissed as cosmetic are the commonest background story in patients presenting with a first ulcer. The visible veins were never the problem; the reflux behind them was.",
      },
      {
        title: "Post-thrombotic damage",
        desc: "A previous DVT scars the deep vein valves and can leave residual obstruction. This produces the highest ankle pressures of any venous condition and the most stubborn ulcers.",
      },
      {
        title: "A failing calf muscle pump",
        desc: "Reduced mobility, a fused or stiff ankle, and obesity all weaken the pump that normally clears blood from the leg. Pressure then stays high even between steps.",
      },
      {
        title: "Minor trauma on damaged skin",
        desc: "Skin that has become hard and poorly perfused cannot repair itself. A knock, a scratch, or an insect bite that would be trivial on healthy skin becomes the starting point of an ulcer.",
      },
    ],
    riskFactors: [
      {
        factor: "Duration of vein disease",
        detail:
          "Risk rises sharply once venous insufficiency has been present for more than five to ten years without treatment. Time under pressure is the single most important variable.",
      },
      {
        factor: "Previous DVT",
        detail:
          "Post-thrombotic syndrome carries the highest ulceration risk of all venous conditions, because both valve failure and outflow obstruction are present together.",
      },
      {
        factor: "Age and mobility",
        detail:
          "Most venous ulcers occur after 60. Reduced walking and a stiff ankle joint weaken the calf pump exactly when the venous system is least able to compensate.",
      },
      {
        factor: "Obesity",
        detail:
          "Raised abdominal pressure worsens venous return, and greater leg circumference makes effective compression harder to apply and maintain.",
      },
      {
        factor: "Previous ulcer",
        detail:
          "A leg that has ulcerated once is far more likely to ulcerate again, particularly if the underlying reflux was never corrected and compression was abandoned after healing.",
      },
      {
        factor: "Diabetes",
        detail:
          "Diabetes impairs wound healing and reduces protective sensation, so minor injuries go unnoticed for longer and take longer to close once treatment starts.",
      },
    ],
    diagnosis: [
      "Careful wound assessment, since venous ulcers have a characteristic position above the inner ankle, shallow depth, irregular border, and moist base.",
      "Duplex ultrasound to identify exactly which superficial and deep veins are refluxing and whether previous clot is present.",
      "Ankle-brachial pressure index (ABPI), a mandatory step before any compression is applied, since compression on an arterially compromised leg is dangerous.",
      "Wound swab if infection is suspected clinically, rather than routinely, because all chronic wounds carry surface bacteria.",
      "Blood tests for diabetes, anaemia, and nutritional status, all of which affect healing capacity.",
      "Biopsy of any ulcer that fails to improve after three months of correct treatment, to exclude a rare skin malignancy.",
    ],
    treatmentSteps: [
      {
        number: 1,
        title: "Assess the arteries before anything else",
        desc: "Compression is the foundation of ulcer healing, but applying it to a leg with poor arterial supply causes harm. The ABPI measurement decides what is safe.",
        details: [
          "A simple, non-invasive Doppler pressure measurement at the ankle and arm",
          "An ABPI above 0.8 allows full compression to be applied safely",
          "Reduced values trigger an arterial assessment before compression begins",
          "This step is repeated if the ulcer fails to progress as expected",
        ],
      },
      {
        number: 2,
        title: "Treat the underlying vein",
        desc: "This is what actually heals the ulcer. Closing the refluxing vein removes the pressure that has been keeping the wound open, and healing rates improve dramatically once it is done.",
        details: [
          "Endovenous laser or radiofrequency ablation of the refluxing saphenous vein",
          "Foam sclerotherapy for perforator veins feeding the ulcer bed",
          "Performed under local anaesthesia as day care, even in elderly patients",
          "Early treatment shortens healing time and substantially reduces recurrence",
        ],
      },
      {
        number: 3,
        title: "Multi-layer compression bandaging",
        desc: "Compression counteracts venous hypertension while healing takes place. It is the most evidence-backed component of ulcer care and works best once reflux has been corrected.",
        details: [
          "Multi-layer bandaging applied by a trained nurse and changed weekly at first",
          "Gradual transition to compression hosiery as the wound closes",
          "Correct sizing and technique matter more than the brand of bandage",
          "Compression is continued long term after healing to prevent recurrence",
        ],
      },
      {
        number: 4,
        title: "Wound care and skin protection",
        desc: "Dressings do not heal venous ulcers on their own, but the right dressing keeps the wound bed in the best condition for the vein treatment and compression to work.",
        details: [
          "Simple non-adherent dressings chosen for exudate level, not for cost or marketing",
          "Debridement of slough where it is limiting healing",
          "Emollients on the surrounding skin to prevent cracking and further breakdown",
          "Antibiotics reserved for genuine clinical infection, not routine surface colonisation",
        ],
      },
      {
        number: 5,
        title: "Prevent recurrence",
        desc: "Healing the ulcer is half the job. Without a maintenance plan, recurrence rates are high, and each recurrence is harder to heal than the last.",
        details: [
          "Lifelong graduated compression hosiery, replaced every six months",
          "Daily skin care and moisturising of the lower leg",
          "Regular walking and ankle exercises to maintain calf pump function",
          "Annual duplex review to catch any new reflux early",
        ],
      },
    ],
    prevention: [
      {
        title: "Treat vein disease before the skin changes",
        desc: "The most effective prevention is closing a refluxing vein while the skin is still healthy. Almost every ulcer we see had years of warning signs first.",
      },
      {
        title: "Take skin discolouration seriously",
        desc: "Brown staining at the inner ankle is not a cosmetic issue. It is a formal stage of venous disease and a clear signal to get scanned.",
      },
      {
        title: "Moisturise daily",
        desc: "Dry, cracked skin on the lower leg is the entry point for infection and the starting point for many ulcers. A simple emollient used daily is genuinely preventive.",
      },
      {
        title: "Wear compression consistently",
        desc: "Stockings only work on the days you wear them. Consistency matters far more than the strength of the compression.",
      },
      {
        title: "Keep walking",
        desc: "Calf pump function is the leg's own defence against venous pressure. Even short, frequent walks preserve it as you get older.",
      },
      {
        title: "Protect the leg from injury",
        desc: "On skin that is already damaged, a minor knock can start an ulcer. Long trousers, careful footwear, and prompt attention to any break in the skin all help.",
      },
    ],
    complications: [
      {
        title: "Chronic non-healing wound",
        desc: "Without correcting the underlying vein, an ulcer can remain open for years, dominating daily life with dressing changes, odour, and restricted activity.",
      },
      {
        title: "Recurrent infection",
        desc: "Repeated cellulitis in a damaged leg causes further lymphatic injury, and each episode leaves the leg more swollen and more vulnerable than before.",
      },
      {
        title: "Severe pain and loss of mobility",
        desc: "Advanced ulcers are frequently painful, particularly at night, and the resulting immobility weakens the calf pump further, creating a vicious cycle.",
      },
      {
        title: "Marjolin ulcer",
        desc: "A rare but serious complication in which a squamous cell carcinoma develops in a long-standing wound. Any ulcer that fails to improve over three months should be biopsied.",
      },
      {
        title: "High recurrence after healing",
        desc: "Where the underlying reflux is never treated, more than half of healed ulcers reopen within a year. Treating the vein cuts that rate substantially.",
      },
    ],
    faqs: [
      {
        q: "Why has my ulcer not healed with dressings?",
        a: "Because the cause is inside the vein, not on the skin. As long as the pressure in the leg veins stays abnormally high, the wound bed cannot get the blood supply it needs to close. Dressings manage the surface while the real problem continues underneath.",
      },
      {
        q: "How long does healing take?",
        a: "Most venous ulcers heal within six to twelve weeks once the refluxing vein has been treated and proper compression is in place. Very large or long-standing ulcers, and those with post-thrombotic damage, take longer.",
      },
      {
        q: "Will it come back?",
        a: "Recurrence drops sharply once the underlying vein is treated. The patients who stay healed are the ones who keep wearing compression hosiery, look after the skin, and attend annual review.",
      },
      {
        q: "Is the vein procedure safe at my age?",
        a: "Yes. Endovenous ablation is done under local anaesthesia with no general anaesthetic and no hospital stay. We regularly treat patients in their seventies and eighties, and age alone is not a reason to withhold treatment.",
      },
      {
        q: "Do I have to wear stockings forever?",
        a: "For a leg that has ulcerated, long-term compression is the single most effective way to prevent recurrence. Modern hosiery is far more comfortable than older bandages, and application aids make it manageable.",
      },
    ],
  },
];

export function getCondition(slug: string) {
  return conditionContent.find((c) => c.slug === slug);
}
