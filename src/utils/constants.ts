const NavLinks = {
    "Active Duty": { 
        headerLabel: "💰 Active Duty Pay & Allowances", 
        links: [
            { 
                navLabel: "Full Compensation Calculator", 
                isStarred: false,
                to: "/full-compensation-calculator", 
                cardIcon: "💰", 
                description: "See your total military pay — base pay, BAH, BAS, COLA, special pays, taxes — and what civilian salary you'd need to match it.",
                cardTag: "Most Popular"
            },
            { 
                navLabel: "BAH Calculator", 
                isStarred: false,
                to: "/bah-calculator",
                cardIcon: "🏠",
                description: "Look up 2026 Basic Allowance for Housing by ZIP code and rank. 40,959 ZIP codes, all ranks.",
                cardTag: undefined
            },
            { 
                navLabel: "BAH Rates By Base", 
                isStarred: false,
                to: "/bah-rates-by-base",
                cardIcon: "🏗️",
                description: "Compare BAH across 30 major installations side by side.",
                cardTag: undefined
            },
            {
                navLabel: "2026 Pay Charts",
                isStarred: false,
                to: "/2026-pay-charts",
                cardIcon: "📊",
                description: "View the complete base pay tables for all ranks and years of service.",
                cardTag: undefined
            },
            { 
                navLabel: "CONUS COLA Calculator", 
                isStarred: false,
                to: "/conus-cola-calculator",
                cardIcon: "📍",
                description: "Calculate your stateside Cost of Living Allowance for 18 high-cost areas (2,612 ZIP codes).",
                cardTag: undefined
            },
            { 
                navLabel: "OCONUS COLA Calculator", 
                isStarred: false,
                to: "/oconus-cola-calculator",
                cardIcon: "🌍",
                description: "Overseas COLA for 239 duty stations across 46 countries.",
                cardTag: undefined
            },
            { 
                navLabel: "OHA Calculator", 
                isStarred: false,
                to: "/oha-calculator",
                cardIcon: "🏡",
                description: "Overseas Housing Allowance for 29 bases in Germany, Japan, Korea, Italy, UK, Spain.",
                cardTag: undefined
            },
            { 
                navLabel: "Cost of Living Compare", 
                isStarred: false,
                to: "/cost-of-living-compare",
                cardIcon: "⚖️",
                description: "Compare living costs between duty station areas.",
                cardTag: undefined
            },
        ]
    },
    "Guard & Reserve": { 
        headerLabel: "🛡️ Guard & Reserve", 
        links: [
            { 
                navLabel: "Guard/Reserve Pay Calculator", 
                isStarred: false,
                to: "/guard-reserve-calculator",
                cardIcon: "🛡️",
                description: "Drill pay, annual training income, Tricare Reserve Select savings, and total annual compensation.",
                cardTag: undefined
            },
        ]
    },
    "Financial Planning": { 
        headerLabel: "📈 Financial Planning", 
        links: [
            { 
                navLabel: "TSP Calculator", 
                isStarred: true,
                to: "/tsp-calculator",
                cardIcon: "📈",
                description: "Project your TSP growth with BRS matching, promotion-aware pay, fund allocation, and retirement income estimates.",
                cardTag: "NEW"
            },
            { 
                navLabel: "PCS Move Calculator", 
                isStarred: false,
                to: "/pcs-calculator",
                cardIcon: "📦",
                description: "DLA, mileage, per diem, TLE, and PPM/DITY move profit estimator.",
                cardTag: "NEW"
            },
            { 
                navLabel: "VA Home Loan Calculator", 
                isStarred: false,
                to: "/va-home-loan-calculator",
                cardIcon: "🏡",
                description: "VA loan vs conventional mortgage — see how much you save with zero down, no PMI.",
                cardTag: undefined
            },
        ]
    },
    "Education": { 
        headerLabel: "🎓 Education Benefits", 
        links: [
            { 
                navLabel: "Education Benefits Calculator", 
                isStarred: true,
                to: "/education-benefits-calculator",
                cardIcon: "🎓",
                description: "Compare GI Bill vs VR&E vs Tuition Assistance side by side. See the total dollar value of each benefit.",
                cardTag: "HIGH VALUE"
            },
            { 
                navLabel: "VR&E Eligibility Screener", 
                isStarred: false,
                to: "/vre-eligibility-screener",
                cardIcon: "📋",
                description: "Check if you qualify for the VA's most valuable education benefit — 48 months, no tuition cap.",
                cardTag: undefined
            },
            { 
                navLabel: "GI Bill Transfer Calculator", 
                isStarred: false,
                to: "/gi-bill-transfer-calculator",
                cardIcon: "👨‍👩‍👧",
                description: "See the dollar value of transferring your GI Bill to family — with 529 plan equivalent.",
                cardTag: undefined
            },
        ]
    },
    "Transitioning": { 
        headerLabel: "🔄 Transitioning", 
        links: [
            { 
                navLabel: "MOS → Civilian Job Translator", 
                isStarred: false,
                to: "/mos-to-civilian-job-translator",
                cardIcon: "🔄",
                description: "AI translates your military job into civilian careers with salary ranges, resume bullets, and recommended certifications.",
                cardTag: "AI POWERED"
            },
            { 
                navLabel: "Transition Timeline", 
                isStarred: true,
                to: "/transition-timeline",
                cardIcon: "📅",
                description: "Month-by-month separation planning checklist and action items.",
                cardTag: undefined
            }
            
        ]
    },
    "Veterans": { 
        headerLabel: "🎖️ Veterans", 
        links: [
            { 
                navLabel: "VA Rating Estimator", 
                isStarred: false,
                to: "/va-rating-estimator",
                cardIcon: "📝",
                description: "Estimate your combined VA disability rating and monthly compensation.",
                cardTag: undefined
            },
            { 
                navLabel: "VA Compensation Rates", 
                isStarred: false,
                to: "/va-comp-rates",
                cardIcon: "💵",
                description: "2026 VA disability monthly payment amounts by rating and dependents.",
                cardTag: undefined
            },
            { 
                navLabel: "Retirement Calculator", 
                isStarred: false,
                to: "/retirement-calculator",
                cardIcon: "🏖️",
                description: "High-3 vs BRS pension projections with VA disability and TSP overlay.",
                cardTag: undefined
            },
        ]
    },  
    "Resources": { 
        headerLabel: "", 
        links: [
            { 
                navLabel: "Blog & Guides", 
                isStarred: false,
                to: "/blog-guides",
                cardIcon: "",
                description: "",
                cardTag: undefined
            },
            { 
                navLabel: "All Tools & Guides", 
                isStarred: false,
                to: "/all-tools-guides",
                cardIcon: "",
                description: "",
                cardTag: undefined
            },
        ]
    }
}

const BlogPreview = {
    headerLabel: "📝 Latest Guides",
    posts: [
        {
            title: "VR&E Explained: The Benefit Worth More Than the GI Bill",
            category: "Education",
            description: "",
            to: "/blog/vre-chapter-31-explained"
        },
        {
            title: "",
            category: "Education",
            description: "",
            to: "/"
        },
    ]
}

const APPLICATION = {
    baseURL: "https://milmultiplier.com",
    gtagManagerArgs: {
        gtmId: "G-MPJ0J8R8EZ",
    },
}

export { NavLinks, BlogPreview, APPLICATION };