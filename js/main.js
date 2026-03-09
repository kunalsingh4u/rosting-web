// Massive Dynamic Roast Generator (500+ unique roasts PER category PER spice level)
// By combining 8 Starts x 8 Mids x 8 Ends = 512 mathematically unique sentences per spice level per target.

const fragments = {
    // ---------------- THE CLASS REP (CR) ----------------
    cr: {
        mild: {
            starts: [
                "Your main achievement is", "You act like the MLA of the batch just by", "Please stop", "Your daily cardio is", 
                "The only thing you are good at is", "Your entire personality is based on", "It's honestly impressive how much time you spend", "You basically live to be"
            ],
            mids: [
                "saying 'Yes Ma'am' before anyone else", "forwarding WhatsApp messages", "reminding the teacher about the assignment", 
                "shouting 'Guys silence please!'", "collecting 50 rupees for the teacher's day gift", "sending the Zoom link 2 minutes early", 
                "arranging the projector cables every morning", "asking 'Sir attendance?' when the bell rings"
            ],
            ends: [
                "and it's getting annoying.", "while everyone ignores you.", "and you think it makes you a leader.", 
                "which is why no one invites you to the canteen.", "and that's literally your absolute peak.", 
                "and the whole class has a separate WhatsApp group without you.", "and no, the HOD still doesn't know your name.", "which is honestly just tragic."
            ]
        },
        medium: {
            starts: [
                "Sending the syllabus PDF one night before", "Negotiating attendance like you're trading stocks", "Getting added to the 'Faculty Official' group", 
                "Thinking the professors actually like you", "Creating a poll for 'Who is coming tomorrow'", "Acting like the syllabus is a state secret",
                "Calling the professor directly to check class timings", "Sending paragraphs in the group chat"
            ],
            mids: [
                "doesn't make you a hero", "inflated your ego to dangerous levels", "is literally just a trauma response", 
                "makes you look like an unpaid intern", "is a coping mechanism for having no real friends", "when literally everyone is trying to sleep",
                "is exactly why you get left on 'seen'", "while the boys are coordinating a mass bunk"
            ],
            ends: [
                "because you're just trying to pass too.", "while they just use you as a human notification bell.", "and everyone knows it.", 
                "and it's honestly embarrassing.", "so please stop acting like the CEO of our batch.", "which is why your 'leadership' is a joke.",
                "and your resume will only highlight your WhatsApp admin skills.", "and it's not going to get you placed."
            ]
        },
        ghost: {
            starts: [
                "When you graduate, your resume will just say", "You sacrificed your entire college life just so", 
                "Nobody ever voted for you, you just", "You'll still be asking", "Your legacy will simply be",
                "You ruined every single mass bunk because", "Your entire existence revolves around", "You act like the supreme commander but"
            ],
            mids: [
                "'Successfully forwarded 10,000 notices'", "the HOD remembers your first name", "raised your hand when everyone else was asleep", 
                "'Sir attendance' on your dying breath", "the guy who ruined every fun moment", "you wanted to get 2 extra internal marks",
                "being a glorified Google Calendar notification", "you are literally just a fleshy alarm clock"
            ],
            ends: [
                "because you have zero actual skills.", "while the rest of us actually lived our lives.", "and the teachers still forget who you are.", 
                "which makes you a complete NPC.", "and nobody will ever respect you for it.", "so take your clip board and leave.",
                "which proves you peaked in high school.", "and absolutely nobody is going to miss you after graduation."
            ]
        }
    },

    // ---------------- THE COORDINATOR ----------------
    coordinator: {
        mild: {
            starts: [
                "Collecting Rs. 500 for a 'Tech Fest'", "You create a new WhatsApp group", "Writing 'Exciting prizes to be won!!'", 
                "Wearing a blazer in 40-degree heat", "Running around with an empty clipboard", "Screaming into a megaphone",
                "Acting busy during the cultural fest", "Taking 500 photos of yourself"
            ],
            mids: [
                "where the winner gets a printed Wikipedia certificate", "for every single minor task like it's a sickness", 
                "when the prize is a 50 rupee pen", "just to stand outside the auditorium", "to pretend you have actual responsibilities",
                "at freshers who literally just want to go home", "while avoiding any actual heavy lifting", "next to an unlit lamp"
            ],
            ends: [
                "is why everyone ignores your messages.", "and it is extremely cringey.", "which is why your events always flop.",
                "and frankly, nobody even knows what your role is.", "and you're just doing it for the Instagram bio update.",
                "so please just stop spamming our phones.", "and your 'management skills' are a complete joke.", "which makes you incredibly annoying."
            ]
        },
        medium: {
            starts: [
                "You spam 'Register Now! Last few slots!'", "Acting stressed during the fest", "You spend 3 months organizing an event", 
                "Begging your friends to buy passes", "Designing Canva posters at 3 AM", "Calling yourself an 'Event Head'",
                "Threatening to cancel the DJ night", "Hounding sponsors for 200 rupees"
            ],
            mids: [
                "when literally 0 people have registered", "but you're really just walking from the canteen to the stage", 
                "just so you can post a blurry photo in a suit on LinkedIn", "because the auditorium is totally empty",
                "that look like a 2012 Microsoft Word document", "when all you actually did was order samosas",
                "that nobody even wanted in the first place", "like you're a Wall Street broker"
            ],
            ends: [
                "and it's honestly pathetic.", "which is just a massive waste of your degree.", "and your resume is completely empty otherwise.",
                "so stop pretending to be a CEO.", "which proves you basically have no actual technical skills.",
                "and we all wish we had just stayed in the hostel.", "because your entire personality is a fake hurry.", "and it is truly insufferable."
            ]
        },
        ghost: {
            starts: [
                "You call yourself an 'Event Manager'", "Begging first-years to attend the seminar", "The only coordinating you'll be doing in 2 years",
                "You peaked in college organizing 'Treasure Hunts'", "You are a glorified wedding planner", "Your entire committee is literally",
                "You think holding a walkie-talkie makes you powerful", "You wasted a 4-year technical degree"
            ],
            mids: [
                "but couldn't manage to get a decent CGPA", "so the auditorium doesn't look empty for the Chief Guest", 
                "is coordinating your shift timings at a BPO", "because your actual career is completely lost",
                "for a bunch of teenagers who don't care", "just a pyramid scheme for free college t-shirts",
                "but you're just shouting at the guy bringing chairs", "just to fail at basic crowd management"
            ],
            ends: [
                "and eventually, you'll realizing you learned nothing.", "because you traded your academics for a plastic badge.", 
                "and the only thing you coordinated was your own unemployment.", "which is why your LinkedIn is tragic to look at.",
                "so stop pretending you are making a difference.", "and the 'certificates' won't pay your rent.", 
                "which makes your existence absolutely pointless.", "and I sincerely hope you find a real job someday."
            ]
        }
    },

    // ---------------- THE PLACEMENT CELL ----------------
    placement: {
        mild: {
            starts: [
                "Sending motivational quotes via email", "Calling a sketchy startup a 'Core Company'", "Threatening to block us from placements", 
                "Telling us to 'dress formals'", "Forwarding random LinkedIn articles", "Organizing 8 AM aptitude tests",
                "Setting the dress code to 'strict business'", "Adding massive red banners to the portal"
            ],
            mids: [
                "won't hide the fact that there are zero companies visiting", "just because they pay 15k a month", 
                "because someone wore blue jeans", "like it will magically improve our coding skills", 
                "when the company website is clearly fake", "that are completely irrelevant to our field",
                "for an online exam taken from the hostel bed", "for an internship that pays in 'exposure'"
            ],
            ends: [
                "is honestly insulting.", "and it's not fooling anyone.", "which just shows how useless your department is.", 
                "and we are all tired of pretending to care.", "so please stop clogging our inboxes.", "and it just proves you have zero industry connections.",
                "which is why the alumni association ignores you.", "and no one respects you."
            ]
        },
        medium: {
            starts: [
                "Advertising 'Highest Package 45 LPA' on the main gate", "Suddenly announcing '60% throughout criteria'", "Making us attend 5-day soft skills training", 
                "Bragging about '100% placement'", "Forcing us to take an aptitude test", "Promising FAANG companies",
                "Bringing in alumni to give 'motivation'", "Saying 'communication is key'"
            ],
            mids: [
                "while the actual average is 3.36 LPA", "the night before the online assessment", "where the trainer just reads a PPT", 
                "when 90% of them are in a BPO", "for a role that doesn't even exist", "but delivering a local call center",
                "who are literally still unemployed themselves", "while completely ignoring actual technical skills"
            ],
            ends: [
                "is basically a scam.", "and it completely ruins our mental health.", "which is why nobody takes you seriously.", 
                "and the alumni association is laughing at you.", "and we all know you're just manipulating the data.",
                "so drop the fake enthusiasm.", "because you guys clearly have no actual network.", "and we are thoroughly depressed by it."
            ]
        },
        ghost: {
            starts: [
                "Your department is essentially a delivery pipeline", "You act like you're doing us a huge favor", "The only dream you've actually fulfilled",
                "Your existence on this campus", "You reject students for 'low attendance'", "You act like industry professionals",
                "You blame the students for 'lack of skills'", "You proudly display a 3 LPA offer letter"
            ],
            mids: [
                "for cheap labor to mass IT recruiters", "by begging a consulting firm to hire 200 people", "is ending the dreams of 500 engineering students", 
                "is a crime against ambitious freshers", "as if your placements are even worth showing up for", "but you're literally just failed salespeople",
                "when you invited a company that went bankrupt the next week", "like you've cured a global disease"
            ],
            ends: [
                "and it's a completely broken system.", "and you should be ashamed of yourselves.", "which proves you have failed at your one job.", 
                "so please stop acting superior.", "and your entire operation is a massive joke.", "because you are trading our futures for PR.",
                "and no one will ever thank you for your 'service'.", "which makes you the true villains of this college."
            ]
        }
    },

    // ---------------- THE HOD ----------------
    hod: {
        mild: {
            starts: [
                "Denying a genuine ML project", "Waiting outside your cabin for 2 hours", "Using a 15-year-old PowerPoint presentation", 
                "Expecting absolute silence", "Demanding a hardcopy report", "Checking if shirts are tucked in",
                "Confiscating phones during a seminar", "Complaining about 'this generation'"
            ],
            mids: [
                "because 'It's too common'", "just to get a leave application signed", "and still getting confused by the animations", 
                "while teaching an outdated syllabus", "when literally everything is submitted via Google Form", "instead of checking if the code actually works",
                "when you are the one playing Candy Crush", "because you don't know how to connect to Wi-Fi"
            ],
            ends: [
                "is exactly why this college is failing.", "shows how terrible your time management is.", "and yet you call yourself an academic.", 
                "proves your PhD is completely irrelevant today.", "which is why no one respects you.", "and it's entirely pathetic.",
                "which is why everybody sleeps in your class.", "and you're just becoming a living fossil."
            ]
        },
        medium: {
            starts: [
                "Demanding a perfectly formatted 50-page spiral-bound report", "Refusing to admit you are wrong", "Saying 'In my days...'", 
                "Grading papers based purely on handwriting", "Taking out your frustration on students", "Rejecting a project proposal",
                "Screaming at the lab assistant", "Forcing everyone to attend a useless webinar"
            ],
            mids: [
                "just to throw it in the corner of your cabin", "even when the code compiles and runs perfectly in front of you", 
                "to avoid answering a modern technical question you don't know", "because you don't actually know the correct formulas", 
                "because the management yelled at you this morning", "because it used a framework newer than 2012",
                "to pretend that you have actual authority", "just so you can send a screenshot to the principal"
            ],
            ends: [
                "is the definition of toxic academia.", "and it just proves you haven't opened a book since 1995.", "which is why no one respects your 'authority'.", 
                "and everyone knows you are blindly guessing.", "and it's honestly a very sad display of arrogance.", "and you are actively destroying our careers.",
                "because your entire career is built on outdated trivia.", "which makes you a massive joke to the entire batch."
            ]
        },
        ghost: {
            starts: [
                "Your ego is so massive it has its own gravitational pull", "You terrorize 20-year-olds during vivas", "Your entire educational timeline is basically",
                "If academia was a meritocracy", "You act like the supreme dictator of a small island", "You ruin internal marks", "You sit in your AC cabin", "Your knowledge base is basically a 404 Error"
            ],
            mids: [
                "but your technical knowledge fits on a 1MB floppy disk", "purely to compensate for failing in the corporate sector", 
                "becoming a teacher because you couldn't pass a technical interview", "you wouldn't even clear the first round for a junior role", 
                "because outside this building, literally nobody cares about you", "just because a student proved you wrong in front of the class",
                "collecting a paycheck while contributing absolutely nothing to science", "but you somehow demand god-like respect from teenagers"
            ],
            ends: [
                "and it is incredibly sad to witness.", "and your students are just waiting for you to retire.", "which makes you the final boss of irrelevance.", 
                "so take your outdated syllabus and leave us alone.", "and you are the reason students hate the education system.",
                "which completely proves you are a fraud.", "and nobody will remember you when you finally leave.", "and you are a disgrace to the word 'Professor'."
            ]
        }
    },

    // ---------------- ENFORCER ----------------
    enforcer: {
        mild: {
            starts: [
                "Stopping someone at the gate", "Yelling 'Tuck in your shirt!'", "Taking random rounds in the corridor", 
                "Blowing your whistle at break time", "Checking ID cards at the library", "Staring aggressively at freshers",
                "Asking 'Where is your pass?'", "Locking the gate at exactly 9:01"
            ],
            mids: [
                "because their ID ribbon is the wrong color", "like untucked shirts cause mass unemployment", "looking for couples like it's a moral crusade", 
                "as if you're guarding a high-security prison", "like we are trying to smuggle nuclear codes", "to make yourself feel physically intimidating",
                "when you clearly recognize us from the last 3 years", "just to make 50 people stand in the sun"
            ],
            ends: [
                "is honestly pathetic.", "and you need to chill out.", "which shows you have way too much free time.", 
                "and it doesn't make anyone respect you.", "so please get a real hobby.", "and it's just really sad to watch.",
                "which just proves you are miserable.", "and you're completely annoying."
            ]
        },
        medium: {
            starts: [
                "You act like the supreme commander", "Confiscating mobile phones", "Measuring hair length and checking shoes", 
                "Locking the main gate to stop us from eating outside", "Screaming at hostellers", "Marching around the canteen",
                "Threatening to call our parents", "Acting like a detective"
            ],
            mids: [
                "but you're just guarding a tier-3 college", "and acting like you just defused a bomb", "like you're a disappointed parent instead of a guard", 
                "because you enjoy the tiny bit of power you have", "to compensate for your own miserable life", "interrupting people who are just trying to eat lunch",
                "because somebody was sitting too close to someone else", "when you are literally just a glorified hall monitor"
            ],
            ends: [
                "and it's a totally fake power trip.", "because nobody outside this campus listens to you.", "and even the professors think you're annoying.", 
                "which is just sad to watch.", "and you really need a therapist.", "so please leave us alone.", "and it is incredibly cringe.", "which makes you the campus clown."
            ]
        },
        ghost: {
            starts: [
                "You get a massive power trip harassing teenagers", "Your entire existence is built on finding petty faults", "The only authority you will ever possess in life", "When you go home", 
                "You are basically a failed cop", "If this college closed down", "You terrorize 18-year-olds", "Your entire life's achievement"
            ],
            mids: [
                "because literally nobody respects your authority outside", "and if the college closed down you'd yell at kids in a park", 
                "is a plastic whistle and a fake shiny badge", "even your own family probably ignores your commands", 
                "taking out your deep-seated frustrations on 19-year-olds", "you would be completely unemployable anywhere else",
                "because your own dreams were completely crushed years ago", "is preventing a student from taking a shortcut to the lab"
            ],
            ends: [
                "and you are completely irrelevant to our futures.", "and you know deep down that your job is a joke.", "so please just open the gate and let us live.", 
                "and we will forget you exist the moment we graduate.", "which is the definition of a pathetic existence.", "and you are nothing but a nuisance.",
                "so stop pretending you matter.", "and I genuinely pity your sad, controlling mindset."
            ]
        }
    },

    // ---------------- SENIOR ----------------
    senior: {
        mild: {
            starts: [
                "Giving 'DSA karle' advice", "Writing 'Upcoming SDE' in your bio", "Telling freshers 'CGPA doesn't matter'", 
                "Acting like the Wolf of Dalal Street", "Hosting a 'guidance session'", "Wearing the college fest t-shirt every day",
                "Calling us 'juniors' to sound dominant", "Commenting 'Reach' on LinkedIn posts"
            ],
            mids: [
                "when you just failed a reverse linked-list question", "when you don't even have a single interview scheduled", 
                "because you are sitting on a 6.2 yourself", "because you bought 500 rupees of Dogecoin", 
                "when you literally have nothing else going on", "because it's the only clean piece of clothing you own",
                "when you are literally just 8 months older than us", "like it's going to somehow magically land you a FAANG job"
            ],
            ends: [
                "is hilarious.", "and nobody is buying it.", "which just exposes your insecurity.", "and we can see right through the act.",
                "and it's honestly tough to watch.", "so please get a reality check.", "which makes you look totally desperate.", "and everyone is laughing at you."
            ]
        },
        medium: {
            starts: [
                "Hosting a 'How to crack FAANG' lecture", "Treating first-years like your loyal subjects", "Referring to yourself in the third person", 
                "Spamming your LeetCode screenshot", "Acting like a mentor", "Giving unsolicited startup advice",
                "Bragging about 'networking'", "Pretending to be busy"
            ],
            mids: [
                "despite having 3 active backlogs in core subjects", "making them do your assignments and calling it 'networking'", 
                "like you're Elon Musk instead of an unemployed 22-year-old", "when it was a basic array sum problem", 
                "because you copy-pasted your entire final year project", "when your only startup idea is a 'food delivery app for college'",
                "when you just force freshers to share your Instagram posts", "while sitting in the canteen for 6 hours straight"
            ],
            ends: [
                "and it is severely embarrassing.", "which proves you are actually incompetent.", "and your entire batch already knows you're useless.", 
                "so please stop embarrassing yourself on LinkedIn.", "and you are a massive fraud.", "which proves your ego is entirely unearned.",
                "so please leave the freshers alone.", "and it's just deeply pathetic."
            ]
        },
        ghost: {
            starts: [
                "You're a terrifying warning to all juniors", "You leech off freshers for validation", "Your life is such a blackhole of failure", 
                "Nobody actually looks up to you out of respect", "You are the ghost of college future", "You think you are an absolute legend",
                "The only thing you've mastered in 4 years", "You act like the godfather of the campus"
            ],
            mids: [
                "of exactly what happens when you have infinite ego but zero skills", "because everyone in your own batch knows you are a fraud", 
                "that you have to pretend to be a 'startup founder' to cope", "they're just afraid you'll ruin their internal marks", 
                "a walking disaster of bad decisions and fake confidence", "but you're literally just the guy who failed M2 three times",
                "is manipulating first-years into buying you cigarettes", "but outside this gate you are completely irrelevant"
            ],
            ends: [
                "and we just humor you until you finally leave.", "and you will end up working for one of us.", "so take your unsolicited advice and get a real job.", 
                "and you are the punchline to every inside joke.", "which makes you perfectly useless.", "and nobody will miss you next year.",
                "and your entire existence is a cautionary tale.", "so drop the act and study for your backlogs."
            ]
        }
    },

    // ---------------- PUPPET PROFESSOR ----------------
    puppet: {
        mild: {
            starts: [
                "Saying 'I have to check with HOD sir'", "Reading directly from a PPT", "Saying 'Is this a fish market?!'", 
                "Marking attendance twice", "Asking us to refer to the textbook", "Threatening to cut internal marks",
                "Yelling at the backbenchers", "Forgetting what topic you were teaching"
            ],
            mids: [
                "in response to literally every single question we ask", "that you clearly downloaded from SlideShare in 2016", 
                "the second someone drops a pen on the floor", "because you don't trust your own eyesight", 
                "because you forgot the answer yourself", "because someone asked a slightly difficult question",
                "to pretend like you actually control the classroom", "and then blaming the class for 'distracting' you"
            ],
            ends: [
                "is your only teaching strategy.", "and it puts the entire class to sleep.", "which proves you shouldn't be teaching.", 
                "and we could literally learn this faster on YouTube.", "which makes you a terrible educator.", "and it's frankly amusing.",
                "and we are all just waiting for the bell to ring.", "so please just stop talking."
            ]
        },
        medium: {
            starts: [
                "Marking a perfectly correct answer wrong", "Enforcing the 75% attendance rule mercilessly", "Giving zero marks in internals", 
                "Acting strict during lab viva", "Refusing to allow bathroom breaks", "Sucking up to the HOD",
                "Defending totally illogical college rules", "Pretending you are a 'strict' evaluator"
            ],
            mids: [
                "just because 'it doesn't match the exact wording in the book'", "because deep down you know nobody would attend otherwise", 
                "to the guy who corrected your glaring mistake on the board", "by asking questions that aren't even in the syllabus", 
                "like we are children in primary school", "while completely ignoring the actual needs of the students",
                "because you are terrified of losing your job", "when you are literally grading based on handwriting"
            ],
            ends: [
                "proves you are incredibly insecure.", "and it's a pathetic way to cling to power.", "which just shows you're a completely hollow NPC.", 
                "and you are ruining the education system.", "and everyone knows you have zero real-world experience.", "which is why no batch will ever remember you fondly.",
                "and it is incredibly toxic.", "which makes you the worst type of academic."
            ]
        },
        ghost: {
            starts: [
                "You have absolutely no spine and no original thoughts", "If the HOD told you that 2+2=5", "You sacrificed your entire backbone", 
                "You are the spineless jellyfish of academia", "You enforce the management's stupid rules", "You have completely given up on actual teaching",
                "You project your own failures onto 20-year-olds", "You are basically an automated grading machine"
            ],
            mids: [
                "existing purely to blindly execute management's demands", "you would eagerly update your slides and fail anyone who argued", 
                "for a tiny cabin, free Wi-Fi, and a 20k salary", "a completely empty vessel with a marker pen", 
                "harder than the people who actually created them", "just so you can secure a tiny, miserable paycheck",
                "because you know you couldn't survive one day in the industry", "with zero empathy and a massive inferiority complex"
            ],
            ends: [
                "and it is disgusting to watch.", "and you will never earn our genuine respect.", "so stop acting like you have any real authority.", 
                "and you're basically a glorified voice recorder.", "and nobody will shed a tear when you leave.", "which is the textbook definition of a pathetic career.",
                "and your entire existence is just sad.", "so please quit and save us from your incompetence."
            ]
        }
    },

    // ---------------- AMBASSADOR ----------------
    ambassador: {
        mild: {
            starts: [
                "Spamming the WhatsApp group with referral links", "Adding 'Campus Director' to your bio", "Forwarding 10 promotional messages", 
                "Begging people to register", "Posting screenshots of a 'certificate'", "Calling everyone 'Connections'",
                "Messaging people you've never spoken to", "Wearing a lanyard from a fake startup"
            ],
            mids: [
                "won't make you a millionaire startup founder", "when you're just free labor for an ed-tech company", 
                "during exam week when everyone is stressed", "so you can get a cheap, low-quality T-shirt", 
                "that anyone can generate with a Google Form", "like you're some kind of influencer",
                "just to send them a 'discount code' for a useless course", "to make it look like you have an actual job"
            ],
            ends: [
                "is just sad.", "and you are basically a human pop-up ad.", "which makes you the most annoying person alive.", 
                "and you need to re-evaluate your life choices.", "so please stop polluting my feed.", "and literally nobody cares.",
                "which is entirely pathetic.", "and you need to stop."
            ]
        },
        medium: {
            starts: [
                "You beg people to attend a 'Free Masterclass'", "You think you're building a 'network'", "Adding 50 hashtags to your LinkedIn post", 
                "Interrupting a conversation", "Changing your profile picture", "Acting like a corporate executive",
                "Promoting a 'Hackathon'", "Saying 'Let's connect!'"
            ],
            mids: [
                "that turns out to be a 2-hour sales pitch", "but you're just actively destroying your social life", 
                "about a random hackathon you didn't even win", "just to talk about an 'amazing learning opportunity'", 
                "to include a tacky brand frame", "when you are literally an unpaid intern",
                "that requires a 500 rupee entry fee", "when all you really want is a referral bonus"
            ],
            ends: [
                "and even your friends mute your stories.", "and you're not a marketer, you're a pawn.", "which is why we leave you on seen.", 
                "and literally nobody cares.", "which is incredibly cringey.", "and everyone is laughing behind your back.",
                "so stop being a walking advertisement.", "which proves you are entirely fake."
            ]
        },
        ghost: {
            starts: [
                "You are the lowest form of corporate parasite", "You will graduate with no real skills", "Your friends don't reply to you, they mute you", 
                "You traded your dignity", "Your entire college personality", "You are the human equivalent of malware",
                "You exploit your own classmates", "You desperately cling to fake titles"
            ],
            mids: [
                "trading your dignity for a digital certificate of participation", "but proudly frame a letter saying 'Top Ambassador'", 
                "because your existence is pure, unfiltered spam", "to become an unpaid billboard for a scam startup", 
                "is built around begging for likes and shares", "invading our DMs with completely useless promotional garbage",
                "just so you can get a free water bottle from a shady company", "because you have absolutely no genuine talent"
            ],
            ends: [
                "and no HR is ever going to read that trash.", "and the 'company' will forget you exist tomorrow.", "so please stop polluting my DMs.", 
                "and you are a walking pyramid scheme.", "which makes you utterly repulsive.", "so stop pretending you are making an impact.",
                "and it is severely disgusting.", "and I hope your internet gets disconnected forever."
            ]
        }
    },

    // ---------------- COMPUTER SCIENCE ----------------
    cs: {
        mild: {
            starts: [
                "Your entire GitHub is", "You call yourself a 'Full Stack Developer'", "Thinking dark mode makes you code faster",
                "Bragging about knowing Python", "Buying a mechanical keyboard", "Putting 'HTML' on your resume",
                "Staring at a terminal", "Copying code from a YouTube tutorial"
            ],
            mids: [
                "just repositories you've forked from tutorials", "but you get stuck centering a div", "while typing at 20 words per minute",
                "when you just learned how to print 'Hello World'", "to type your basic array loops louder", "like it's a massive achievement",
                "to pretend you are hacking the mainframe", "and then forgetting to change the variable names"
            ],
            ends: [
                "is hilarious.", "and it's honestly sad.", "which proves you know nothing.", "and you're fundamentally useless.",
                "so please just switch to a different major.", "and nobody is impressed.", "which makes you a massive poser.", "and it's super cringey."
            ]
        },
        medium: {
            starts: [
                "Using 'It works on my machine'", "Ctrl+C and Ctrl+V", "Spending more time on VS Code themes",
                "Arguing about which JS framework is better", "Pretending to understand Web3", "Deploying a simple React app",
                "Calling yourself an 'AI Engineer'", "Writing horrible spaghetti code"
            ],
            mids: [
                "as an excuse for every presentation", "is the only framework you have truly mastered", "than actually writing logic",
                "when you can't even write raw CSS", "because you bought an NFT once", "and calling it a startup",
                "because you used an API key", "and threatening to quit when asked to comment it"
            ],
            ends: [
                "is your only skill.", "and we all know it.", "and you will fail the technical round.", "which is why your pull requests get rejected.",
                "and it is painfully embarrassing.", "so completely re-evaluate your life.", "and it's a completely fake flex.", "which proves you are terrible."
            ]
        },
        ghost: {
            starts: [
                "You spent 4 years studying Computer Science", "Your final year project was bought for Rs. 2000", "You will eventually realize your B.Tech",
                "You act like the supreme hacker of the campus", "You pride yourself on your LeetCode profile", "Your entire coding identity",
                "You are terrified of actual algorithmic challenges", "You look down on other branches"
            ],
            mids: [
                "just to realize ChatGPT writes better code", "and you still couldn't explain it during the viva", "was just a waiting period for an MBA",
                "but your code crashes if a user clicks too fast", "but you can't build a single real-world application", "is a completely fabricated lie built on StackOverflow",
                "so you hide behind copying open-source projects", "despite only knowing how to run 'npm install'"
            ],
            ends: [
                "which means you wasted your life.", "and you are a disgrace to the degree.", "so just give up now.", "and you are completely incompetent.",
                "which makes you a total fraud.", "and you have zero actual software engineering potential.", "so please stop embarrassing yourself.", "and you will be replaced by a bot."
            ]
        }
    },

    // ---------------- MECHANICAL ----------------
    mech: {
        mild: {
            starts: [
                "You still wear that dirty blue lab coat", "Carrying a drafter everywhere", "Your branch's gender ratio",
                "Bragging about fixing a bike", "Talking about torque and horsepower", "Thinking you are Tony Stark",
                "Walking around with grease on your hands", "Complaining about thermodynamics"
            ],
            mids: [
                "like it's a badge of honor", "thinking you're going to build Iron Man suits", "is basically an engineering tragedy",
                "when you just tightened the mirrors", "when you ride a 10-year old Activa", "when you barely passed engineering graphics",
                "to look like you actually did some work today", "when you copy-pasted the entire assignment"
            ],
            ends: [
                "and it is pathetic.", "which is frankly depressing.", "and no one is impressed.", "so please grow up.",
                "and it's incredibly sad.", "which proves you are delusional.", "and everyone knows you're faking it.", "which makes you a joke."
            ]
        },
        medium: {
            starts: [
                "In 4 years, the only machine you operated", "You argue 'Mech is an evergreen branch'", "Using AutoCAD 2007",
                "Learning to weld for 5 minutes", "Drawing complex gear systems", "Calculating fluid dynamics",
                "Mocking CS students for coding", "Sitting in a heat transfer lab"
            ],
            mids: [
                "is the xerox machine outside college", "while applying for software testing roles", "because your department computers are trash",
                "and acting like a master blacksmith", "just to get an IT job where drawing is irrelevant", "while entirely miscalculating your own GPA",
                "while secretly practicing Python at night", "while totally failing to understand basic physics"
            ],
            ends: [
                "proves your entire degree is a lie.", "and it's completely hypocritical.", "and you should just switch to IT.", "which is completely embarrassing.",
                "and it shows you have no future.", "so please stop lying to yourself.", "and it makes absolutely no sense.", "which proves your incompetence."
            ]
        },
        ghost: {
            starts: [
                "Core company package is 15k", "You spent years studying thermodynamics", "The only friction you successfully engineered",
                "Your department is basically a time capsule", "You act superior to everyone", "Your mechanical engineering degree",
                "You brag about being 'core'", "You spent thousands of hours in the workshop"
            ],
            mids: [
                "so you're going to an IT mass recruiter", "just to write SQL scripts for a bank", "was between you and the placement cell",
                "where nobody has learned anything new since 1985", "but you will definitely end up in an Excel-sheet job", "is practically useless in the modern economy",
                "but you will literally accept any 3 LPA code-monkey job", "just to be entirely replaced by a software automation script"
            ],
            ends: [
                "and your parents are so disappointed.", "which makes you a complete failure.", "so just accept your fate.", "and you are living in denial.",
                "which makes you incredibly sad.", "and you are a massive hypocrite.", "so please stop defending a dying era.", "and you have wasted 4 years."
            ]
        }
    },

    // ---------------- ELECTRICAL ----------------
    ee: {
        mild: {
            starts: [
                "You spend 3 hours in the lab", "Your breadboard looks like", "The only successful circuit you completed",
                "Shocking yourself with 5 volts", "Trying to read a resistor code", "Complaining about Kirchhoff's laws",
                "Carrying a multimeter around", "Smelling burnt plastic"
            ],
            mids: [
                "only to realize the multimeter's battery was dead", "a bowl of colored spaghetti that caught on fire", "was the trip from the hostel to the canteen",
                "and acting like you almost died", "and getting it completely wrong", "because you can't figure out basic addition",
                "to pretend you are an actual engineer", "because you reversed the polarity again"
            ],
            ends: [
                "and it is hilarious.", "which is honestly a safety hazard.", "and that's an absolute joke.", "so please stop embarrassing yourself.",
                "and it's entirely pathetic.", "which makes you totally incompetent.", "and no one buys your fake genius.", "and you're lucky you haven't burned the place down."
            ]
        },
        medium: {
            starts: [
                "Memorizing massive derivations", "You fear your lab instructor", "Your department has the strictest checking",
                "Drawing incredibly complex circuit diagrams", "Getting frustrated at AC loops", "Solving 3-page integral equations",
                "Telling everyone your syllabus is the hardest", "Failing the machines lab"
            ],
            mids: [
                "just to forget them the second you walk out", "more than you fear taking a live 220V shock", "and the absolute lowest core placement rate",
                "that look like modern art vomit", "when you don't even understand DC circuits", "just to calculate pure nonsense",
                "when literally nobody asked or cares", "because you couldn't identify a transformer"
            ],
            ends: [
                "and it destroys your mental health.", "which is completely toxic.", "and it isn't worth it.", "which perfectly summarizes your confused brain.",
                "and you should honestly switch majors.", "so stop acting like a martyr.", "and your GPA proves it.", "which makes your entire existence depressing."
            ]
        },
        ghost: {
            starts: [
                "Your HOD's mindset has more resistance", "You study power grids and microprocessors", "Your branch is just Computer Science",
                "Your entire academic career is a lie", "You pride yourself on surviving a tough branch", "You are the most depressed student on campus",
                "Your degree is a direct path to", "You suffered through power electronics"
            ],
            mids: [
                "than a 1 MegaOhm resistor", "just to end up debugging Java code", "but with 100% more torture and no jobs",
                "built on random guesswork during viva exams", "but you will still end up in the exact same IT company", "because you chose a field with no future",
                "absolute misery and unemployment", "just to realize nobody hires core electrical engineers"
            ],
            ends: [
                "and your degree is useless.", "and you regret every single day of it.", "so just cry quietly.", "and you are a total fraud.",
                "which makes your suffering completely pointless.", "and I genuinely pity your life choices.", "so give up now.", "and you wasted a vast amount of time."
            ]
        }
    },

    // ---------------- DEFAULT (Fallback etc) ----------------
    default: {
        // Fallback robust generator
        mild: {
            starts: ["You somehow managed to"], mids: ["ruin the easiest task possible"], ends: ["and it shows."]
        },
        medium: {
            starts: ["Please stop acting like"], mids: ["you hold the secrets of the universe"], ends: ["because you're fooling nobody."]
        },
        ghost: {
            starts: ["Your entire existence"], mids: ["is a colossal waste of bandwidth"], ends: ["and you bring absolutely zero value to society."]
        }
    }
};

let currentSpice = 'moderate'; // Internal default state

document.addEventListener('DOMContentLoaded', () => {

    // 1. Particle System Setup
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    let particleColor = 'rgba(255, 170, 0, 0.8)'; // default medium

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 100;
            this.size = Math.random() * 3 + 1;
            this.speedY = Math.random() * -3 - 1;
            this.speedX = Math.random() * 2 - 1;
            this.life = 1;
            this.decay = Math.random() * 0.02 + 0.005;
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.life -= this.decay;
        }
        draw() {
            ctx.globalAlpha = Math.max(0, this.life);
            ctx.fillStyle = particleColor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let spawnRate = currentSpice === 'ghost' ? 5 : (currentSpice === 'medium' ? 2 : 1);
        
        for(let i=0; i<spawnRate; i++) {
            particles.push(new Particle());
        }

        particles.forEach((p, index) => {
            p.update();
            p.draw();
            if (p.life <= 0) {
                particles.splice(index, 1);
            }
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // 2. Spice Level Logic
    const spiceBtns = document.querySelectorAll('.spice-btn');
    
    spiceBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            spiceBtns.forEach(b => b.classList.remove('active'));
            const level = btn.dataset.level;
            btn.classList.add('active');
            
            currentSpice = level;
            document.body.className = `spice-${level}`;
            
            if(level === 'mild') particleColor = 'rgba(0, 255, 136, 0.7)';
            if(level === 'medium') particleColor = 'rgba(255, 170, 0, 0.8)';
            if(level === 'ghost') particleColor = 'rgba(255, 0, 0, 0.9)';
        });
    });

    const defaultBtn = document.querySelector('.spice-btn[data-level="medium"]');
    if(defaultBtn) defaultBtn.click();

    // 3. Dynamic Roasting Generator Engine
    // Mathematically calculates combinations: 8*8*8 = 512 dynamic unique options per category per level!
    function generateDynamicRoast(targetKey, spiceKey) {
        if (!fragments[targetKey] || !fragments[targetKey][spiceKey]) {
            targetKey = 'default';
            if(!fragments[targetKey][spiceKey]) spiceKey = 'medium';
        }
        
        let pool = fragments[targetKey][spiceKey];
        let start = pool.starts[Math.floor(Math.random() * pool.starts.length)];
        let mid = pool.mids[Math.floor(Math.random() * pool.mids.length)];
        let end = pool.ends[Math.floor(Math.random() * pool.ends.length)];
        
        return `${start} ${mid} ${end}`;
    }

    // Attach to the current roast button on whichever page we are on
    const roastBtn = document.getElementById('roastBtn');
    const roastDisplay = document.getElementById('roastDisplay');

    if (roastBtn && roastDisplay) {
        // CRITICAL BUGFIX: Detect target from `data-target` or `data-dept` or fallback
        const target = document.body.dataset.target || document.body.dataset.dept || 'default';

        roastBtn.addEventListener('click', () => {
            const dynamicRoastText = generateDynamicRoast(target, currentSpice);
            
            roastDisplay.style.transition = 'none';
            roastDisplay.style.opacity = '0';
            roastDisplay.style.transform = 'scale(0.95)';
            
            if (currentSpice === 'ghost') {
                document.body.classList.remove('shake-it');
                void document.body.offsetWidth;
                document.body.classList.add('shake-it');
                
                try {
                    const actx = new (window.AudioContext || window.webkitAudioContext)();
                    const osc = actx.createOscillator();
                    const gain = actx.createGain();
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(100, actx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(10, actx.currentTime + 0.3);
                    gain.gain.setValueAtTime(0.5, actx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.3);
                    osc.connect(gain);
                    gain.connect(actx.destination);
                    osc.start();
                    osc.stop(actx.currentTime + 0.3);
                } catch(e) { }
            }

            setTimeout(() => {
                roastDisplay.textContent = `"${dynamicRoastText}"`;
                roastDisplay.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                roastDisplay.style.opacity = '1';
                roastDisplay.style.transform = 'scale(1)';
            }, 50);
        });
    }

    // 4. Massive Comment Bramhand Logic
    const dynamicComments = [
        "Bro woke up and chose violence against the HOD 💀", "Literally copy pasted my entire project from GitHub...", 
        "My multimeter gives random numbers. Just writing 5V and submitting.", "I will definitely go to an IT company after studying IC engines.", 
        "They said FAANG was coming. It was just an alumni on a Zoom call.", "Bro told me to build a startup, bro hasn't submitted lab files yet.", 
        "They put 'Brand Ambassador' in their bio. My eyes are bleeding.", "This guy reminded the teacher about the assignment... bruh.", 
        "Wait, you guys are getting 3 LPA? I'm getting 2.5 🤡", "The professor marked me absent while I was maintaining eye contact with him.", 
        "The CR really asked for extra classes on a Saturday. Psycho behavior.", "I came to college to learn engineering, left with trauma and a nicotine addiction.", 
        "Tuck your shirt in? Sir I haven't slept in 48 hours.", "The HOD's logic gives me unhandled promise rejections in my brain.", 
        "Seniors be like 'network is net-worth' while wearing the same hoodie for 3 weeks.", "Coordinator asking for funds like he's running an NGO."
    ];

    const postCommentBtn = document.getElementById('postCommentBtn');
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');

    if(postCommentBtn && commentInput && commentsList) {
        
        // Auto-populate random comments
        for(let i=0; i<3; i++) {
            createCommentFromText(dynamicComments[Math.floor(Math.random() * dynamicComments.length)], false);
        }

        postCommentBtn.addEventListener('click', postComment);
        commentInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') postComment();
        });

        function createCommentFromText(text, animate=true) {
            const users = [
                '@savage_fresher', '@backbencher_pro', '@tired_engineer', '@canteen_legend', 
                '@bunk_master', '@proxy_god', '@dead_inside_coder', '@cgpa_destroyer', '@last_bench_ceo'
            ];
            const randomUser = users[Math.floor(Math.random() * users.length)];

            const newComment = document.createElement('div');
            newComment.className = animate ? 'comment-msg new-comment' : 'comment-msg';
            newComment.innerHTML = `<span class="user">${randomUser}:</span> ${text}`;
            
            commentsList.appendChild(newComment);
            
            if(animate) {
                setTimeout(() => {
                    newComment.classList.remove('new-comment');
                }, 10);
            }
        }

        function postComment() {
            const text = commentInput.value.trim();
            if(text.length === 0) return;
            createCommentFromText(text, true);
            commentInput.value = '';
            commentsList.scrollTop = commentsList.scrollHeight;
        }
    }
});
