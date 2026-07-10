const PROFILE = {
	name: "Peculiar Uzoma",
	title: "Data Analyst",
	location: "Nigeria",
	email: "uzomapeculiar1@gmail.com",
	resume: "Certificates/Uzoma Peculiar's Resume.pdf",
	photo: "images/DSC_0055.jpg",
	linkedin: "https://www.linkedin.com/in/peculiar-uzoma-5a9116235",
	github: "https://github.com/UzomaPeculiar",
	whatsapp: "https://wa.me/2348162145354",
	telegram: "https://t.me/prxua",
	tagline: "I help teams make better decisions with clean data, clear dashboards, and analysis that ties back to business goals.",
	summary: "Economics graduate from Covenant University with hands-on experience across the full analytics stack — from SQL queries and Python pipelines to executive-ready Power BI and Tableau dashboards. Google Data Analytics certified, with consulting simulations completed at BCG and Accenture.",
	education: {
		degree: "BSc. Economics",
		school: "Covenant University, Ogun State"
	}
};

const SKILL_GROUPS = [
	{
		label: "Languages & Querying",
		skills: ["Python", "SQL", "DAX"]
	},
	{
		label: "Visualization & BI",
		skills: ["Power BI", "Tableau", "Excel", "Matplotlib", "Seaborn"]
	},
	{
		label: "Analysis & Libraries",
		skills: ["Pandas", "NumPy", "Plotly", "Data Cleaning", "Statistical Analysis"]
	},
	{
		label: "Workflow",
		skills: ["ETL", "Data Modeling", "A/B Testing", "Data Storytelling", "Git"]
	}
];

const EXPERIENCE = [
	{
		org: "BCG — Virtual Experience",
		role: "Data Science Simulation",
		period: "2025",
		highlights: [
			"Built a random forest model for customer churn prediction",
			"Delivered executive summary with actionable retention insights"
		]
	},
	{
		org: "Accenture — Virtual Experience",
		role: "Data Analytics Simulation",
		period: "2024",
		highlights: [
			"Cleaned and modeled 7 datasets for a social media client",
			"Presented content trend insights to stakeholders via deck and video"
		]
	},
	{
		org: "InternCareer",
		role: "Data Scientist Intern (Virtual)",
		period: "2024",
		highlights: [
			"Built interactive Power BI dashboard on global terrorism patterns",
			"Completed end-to-end analysis from data prep to visualization"
		]
	}
];

const PROJECTS = [
	{
		title: "Financial Loan Analysis",
		tool: "Python",
		impact: "Portfolio risk assessment across loan applications and repayments",
		desc: "End-to-end analysis using Pandas, NumPy, Matplotlib, Seaborn, and Plotly to evaluate funded amounts, borrower profiles, and repayment patterns.",
		link: "https://github.com/UzomaPeculiar/Financial-Loan-Analysis-Python",
		image: "images/Financial Loan.png",
		featured: true
	},
	{
		title: "HR Analytics Dashboard",
		tool: "Power BI",
		impact: "Workforce attrition and demographics at a glance for HR leaders",
		desc: "Interactive dashboard tracking employee distribution, attrition trends, and performance metrics to support retention decisions.",
		link: "https://github.com/UzomaPeculiar/HR-Analytics-Dashboard/blob/main/Power%20BI%20HR%20Dashboard.pbix",
		image: "images/HR Analytics.png",
		featured: true
	},
	{
		title: "Walmart Sales Analysis",
		tool: "SQL",
		impact: "Inventory and branch performance insights for retail operations",
		desc: "SQL analysis covering customer segments, branch performance, and temporal sales trends to guide inventory and targeting strategy.",
		link: "https://github.com/UzomaPeculiar/Walmart-Sales-Analysis-SQL/blob/main/Walmart%20Analysis.sql",
		image: "images/Walmart.png",
		featured: true
	},
	{
		title: "Bank Loan Dashboard",
		tool: "Excel",
		impact: "Real-time KPI tracking for loan portfolio risk management",
		desc: "Excel dashboard with MTD/MoM metrics, regional maps, and good/bad loan breakdowns for lending team decision support.",
		link: "https://github.com/UzomaPeculiar/Bank-Loan-Excel-Dashboard/blob/main/Bank%20Loan%20Summary%20and%20Overview.xlsx",
		image: "images/Bank Loan.png",
		featured: true
	},
	{
		title: "British Airways Reviews",
		tool: "Tableau",
		impact: "Service quality trends from customer review data",
		desc: "Tableau visualization of customer reviews to surface satisfaction patterns and areas for service improvement.",
		link: "https://github.com/UzomaPeculiar/British-Airways/blob/main/British%20Airways%20Reviews.twbx",
		image: "images/British Airways Review.png",
		featured: true
	},
	{
		title: "YouTube Analysis",
		tool: "Python",
		impact: "Engagement patterns across top streaming channels",
		desc: "Exploratory analysis of top YouTube streamers to uncover audience engagement drivers and content strategy insights.",
		link: "https://github.com/UzomaPeculiar/YouTube-Analysis-Project/blob/main/YouTube%20Analysiss.ipynb",
		image: "images/Youtube Analysis.png",
		featured: true
	},
	{
		title: "Global Terrorism Dashboard",
		tool: "Power BI",
		impact: "Interactive exploration of worldwide terrorism patterns",
		desc: "Power BI dashboard built during InternCareer virtual internship to visualize geographic and temporal terrorism trends.",
		link: "https://github.com/UzomaPeculiar/InternCareer-Global-Terrorism-Dashboard/blob/main/InternCareer%20Terrorism.pbix",
		image: "images/Terrorism.png"
	},
	{
		title: "Data Professionals Survey",
		tool: "Power BI",
		impact: "Industry snapshot of skills, salaries, and career paths",
		desc: "Dashboard visualizing global survey data on demographics, compensation trends, and skill preferences in the data field.",
		link: "https://github.com/UzomaPeculiar/Data-Professional-Survey-Dashboard/blob/main/Data%20Professional%20Suvey%20Dashboard.pbix",
		image: "images/Data Professional Survey.png"
	},
	{
		title: "Pizza Sales Dashboard",
		tool: "Power BI",
		impact: "Retail sales patterns to optimize promotions and inventory",
		desc: "Power BI dashboard answering top categories, customer profiles, and peak sales windows for a pizza retail business.",
		link: "https://github.com/UzomaPeculiar/Pizza-Sales-Analysis-SQL-Power-BI/blob/main/Pizza.pbix",
		image: "images/Pizza Sales Report.png"
	},
	{
		title: "Marathon Analysis",
		tool: "Python",
		impact: "Athlete performance and race popularity insights for organizers",
		desc: "Analysis of 2020 USA ultramarathon data exploring age, speed, and participation trends using Pandas and Seaborn.",
		link: "https://github.com/UzomaPeculiar/Marathon-Analysis-Project",
		image: "images/Marathon.png"
	},
	{
		title: "Movies Correlation",
		tool: "Python",
		impact: "Budget-to-revenue relationships in the film industry",
		desc: "Correlation analysis of budget, gross revenue, votes, and runtime with heatmap visualization.",
		link: "https://github.com/UzomaPeculiar/Movies-Correlation",
		image: "images/Movies Correlation.png"
	},
	{
		title: "Airbnb Listings — NYC",
		tool: "Python",
		impact: "Pricing and listing trends across New York City",
		desc: "EDA on NYC Airbnb data uncovering neighborhood patterns, pricing drivers, and occupancy trends.",
		link: "https://github.com/UzomaPeculiar/New-York-Air-BnB-Listing-Python",
		image: "images/Air BnB.png"
	},
	{
		title: "Pizza Sales Analysis",
		tool: "SQL",
		impact: "Bestseller identification and marketing optimization",
		desc: "SQL analysis to promote top performers, improve underperformers, and refine customer targeting.",
		link: "https://github.com/UzomaPeculiar/Pizza-Sales-Analysis-SQL-Power-BI/blob/main/Pizza%20Sales%20Analysis.sql",
		image: "images/Pizza sql.png"
	},
	{
		title: "Retail Sales Analysis",
		tool: "SQL",
		impact: "Category and customer insights for retail strategy",
		desc: "Built and queried a retail sales database to answer questions on top categories, customer profiles, and peak periods.",
		link: "https://github.com/UzomaPeculiar/Retail-Sales-Analysis-SQL/blob/main/Retail%20Sales.sql",
		image: "images/Retail Analysis.png"
	},
	{
		title: "Monday Coffee Analysis",
		tool: "SQL",
		impact: "Market potential scoring by city and revenue metrics",
		desc: "SQL queries on coffee sales covering Q4 revenue, growth rates, and city-level market opportunity analysis.",
		link: "https://github.com/UzomaPeculiar/Monday-Coffee-Analysis-SQL/blob/main/Monday%20Coffee%20Project.sql",
		image: "images/Monday Coffee.png"
	},
	{
		title: "Road Accident Analysis",
		tool: "Excel",
		impact: "UK road safety trends for policy and planning",
		desc: "Excel dashboard analyzing and visualizing UK road accident data across regions and time periods.",
		link: "https://github.com/UzomaPeculiar/Road-Accident-Excel-Dashboard",
		image: "images/Road Accident.png"
	},
	{
		title: "Accounting Ledger",
		tool: "Excel",
		impact: "Full Q1 financial statements from transaction data",
		desc: "Financial ledger with Trial Balance, Income Statement, and Balance Sheet for a small business.",
		link: "Excel/Accounting Ledger.xlsx",
		image: "images/Ledger 2.png"
	},
	{
		title: "Coffee Sales Dashboard",
		tool: "Excel",
		impact: "2019–2022 sales trends for loyalty and pricing decisions",
		desc: "Excel dashboard tracking sales by coffee type, country, and top customers across four years.",
		link: "https://github.com/UzomaPeculiar/Coffee-Sales-Excel-Dashboard/blob/main/Coffee%20Sales%20Excel.xlsx",
		image: "images/Coffee Sales Excel.png"
	},
	{
		title: "Bike Sales Dashboard",
		tool: "Excel",
		impact: "Customer segmentation from 1,000 purchase records",
		desc: "Analysis of income, commute, age, education, and regional patterns in bike purchase behavior.",
		link: "https://github.com/UzomaPeculiar/Bike-Sales-Excel-Dashboard/blob/main/Bike%20Sales%20Dashboard.xlsx",
		image: "images/Bike Sales.png"
	},
	{
		title: "King County House Sales",
		tool: "Tableau",
		impact: "Price and location drivers in Washington housing market",
		desc: "Tableau dashboard visualizing house prices, features, and geographic distribution in King County, WA.",
		link: "https://github.com/UzomaPeculiar/King-County-House-Sale/blob/main/King%20County%20House.twbx",
		image: "images/House Sales Dashboard.png"
	},
	{
		title: "HR Resources Dashboard",
		tool: "Tableau",
		impact: "Hiring, retention, and department-level workforce trends",
		desc: "Interactive Tableau dashboard on demographics, tenure, salary, and performance across departments.",
		link: "https://github.com/UzomaPeculiar/HR-Tableau-Dashboard",
		image: "images/HR Summary.png"
	}
];

const CERTIFICATES = [
	{
		title: "Google Data Analytics Professional Certificate",
		issuer: "Google / Coursera",
		link: "https://coursera.org/share/efd870e4b3c6f21b67f868e961a21dbe",
		image: "Certificates/Google Data Analytics.jpg",
		highlight: "End-to-end analyst workflow: SQL, spreadsheets, R, and Tableau",
		featured: true
	},
	{
		title: "BCG Data Science Job Simulation",
		issuer: "Forage / BCG",
		link: "https://www.theforage.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_QwXfJtFbDSxPeQeqG_1751233008836_completion_certificate.pdf",
		image: "Certificates/BCG_completion_certificate_page-0001.jpg",
		highlight: "Customer churn analysis with Python and random forest modeling",
		featured: true
	},
	{
		title: "Accenture Data Analytics Simulation",
		issuer: "Forage / Accenture",
		link: "https://www.theforage.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_QwXfJtFbDSxPeQeqG_1719681405643_completion_certificate.pdf",
		image: "Certificates/Accenture North America completion_certificate.jpg",
		highlight: "Client-facing analysis of 7 datasets with stakeholder presentation",
		featured: true
	},
	{
		title: "Excel to Power BI",
		issuer: "Coursera",
		link: "https://coursera.org/share/7cd852e55798df1666f9fe462576fa44",
		image: "Certificates/Excel to Power BI.jpg",
		highlight: "Data modeling, DAX, and interactive dashboard design",
		featured: true
	},
	{
		title: "Data Engineering Essentials",
		issuer: "Coursera",
		link: "https://coursera.org/share/8ca3cbc4584b3843e808d1f9ad4b49d0",
		image: "Certificates/Coursera AO9XFUJA2C6I_page-0001.jpg",
		highlight: "ETL pipelines, data warehousing, and database design"
	},
	{
		title: "Python 3 Programming Specialization",
		issuer: "University of Michigan / Coursera",
		link: "https://www.coursera.org/account/accomplishments/specialization/R53RM2UMLELP",
		image: "Certificates/Python 3.jpg",
		highlight: "OOP, APIs, data structures, and production Python workflows"
	},
	{
		title: "Google AI Essentials",
		issuer: "Google / Coursera",
		link: "https://coursera.org/share/68431270faab5f4e072ea39f133b8edf",
		image: "Certificates/Google AI Cert.jpg",
		highlight: "Prompt engineering and responsible AI in analytics workflows"
	},
	{
		title: "SQL Fundamentals",
		issuer: "SoloLearn",
		link: "#",
		image: "Certificates/sololearn_SQL_certificate.jpg",
		highlight: "Query writing, data retrieval, and database management"
	},
	{
		title: "Soft Skills & Employability",
		issuer: "Jobberman",
		link: "#",
		image: "Certificates/jobberman_certificate.png",
		highlight: "Professional communication and workplace productivity"
	},
	{
		title: "Prompt Engineering (LLM)",
		issuer: "OBTranslate / Covenant University",
		link: "#",
		image: "Certificates/OBTranslate - Covenant University Certificate - Prompt Engineering (LLM)_PDF_page_1.jpg",
		highlight: "Large language model interaction and prompt design"
	}
];

const TOOL_PAGES = {
	"Python": "python.html",
	"Power BI": "BI.html",
	"Excel": "Excel.html",
	"SQL": "SQL.html",
	"Tableau": "Tab.html"
};
