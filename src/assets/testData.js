export function SampleQuestions() {
  const data = [
    {
      question: 'What are the current trends in the tech sector?',
    },
    {
      question: 'Can you provide real-time quotes for Tesla?',
    },
    {
      question: 'How do I interpret the option chain data for Apple stocks?',
    },
    {
      question: 'What is the predicted performance of Nifty for this week?',
    },
    {
      question: 'How can GammaVantage help improve my trading strategy?',
    },
    {
      question: 'Can I set up alerts for specific stock movements?',
    },
    {
      question: 'What are the key indicators for evaluating a sector trend?',
    },
    {
      question: 'Explain the latest updates in the automotive sector.',
    },
    {
      question: "How do I use GammaVantage's AI to track market volatility?",
    },
    {
      question: 'What’s the forecast for the energy sector over the next quarter?',
    },
  ]
  return data
}

export function SampleBlogs() {
  const data = [
    {
      title: 'AI in Trading: The Future of F&O Markets',
      description:
        'Discover how artificial intelligence is reshaping futures and options trading with real-time insights and predictive analytics.',
    },
    {
      title: 'Mastering Option Chains: A Beginner’s Guide',
      description:
        'A step-by-step guide to understanding option chains and leveraging them for smarter trading decisions.',
    },
    {
      title: 'Sector Trends You Can’t Ignore in 2024',
      description:
        'Explore the top sectoral trends and how they impact market movements, helping you stay ahead of the curve.',
    },
    {
      title: 'Trading with Real-Time Data: Why It Matters',
      description:
        'Learn the importance of real-time data in fast-moving markets and how it can enhance your trading strategy.',
    },
    {
      title: 'Top 5 Indicators for Evaluating Stock Performance',
      description:
        'Get acquainted with essential indicators that help assess stock performance and support data-driven decisions.',
    },
    {
      title: 'Avoiding Common Mistakes in F&O Trading',
      description:
        'Identify frequent pitfalls in F&O trading and strategies to help you make more calculated, confident trades.',
    },
    {
      title: 'How to Set Effective Alerts for Market Movements',
      description:
        'Find out how to set customized alerts to stay informed of crucial stock and sector changes in real time.',
    },
    {
      title: 'Breaking Down Market Sentiment for Traders',
      description:
        'An analysis of market sentiment indicators and how they can guide your trading strategies.',
    },
    {
      title: 'A Guide to Using GammaVantage’s AI Bot for Trading Insights',
      description:
        'Learn how to make the most of GammaVantage’s WhatsApp AI bot for instant access to valuable market insights.',
    },
    {
      title: 'The Rise of Renewable Energy Stocks: Opportunities and Risks',
      description:
        'Examine the growth of renewable energy stocks, key drivers, and what to consider before investing.',
    },
  ]

  return data
}

export async function SampleAnswers() {
  const dummyAnswers = [
    {
      answer:
        'The tech sector is experiencing steady growth, with AI and cloud computing driving momentum. Analysts predict a 5% rise over the next quarter due to increased demand in enterprise tech solutions.',
    },
    {
      answer:
        "Tesla's current real-time quote is $789.45, up by 2.3% today. Market sentiment is positive following recent innovations in battery technology.",
    },
    {
      answer:
        "Apple's option chain indicates strong open interest at the $150 strike price, signaling high demand. Traders often interpret this as support at that level.",
    },
    {
      answer:
        "Nifty's performance forecast suggests a slight bullish trend this week, with sectoral growth in banking and IT. Market volatility may increase due to global economic updates.",
    },
    {
      answer:
        'GammaVantage helps refine your trading strategy by providing real-time data, sector trends, and AI-driven insights tailored to F&O trading.',
    },
    {
      answer:
        'Yes, you can set up custom alerts to track stock price changes, news updates, and significant shifts in option chain data through our alert system.',
    },
    {
      answer:
        'Key indicators for evaluating sector trends include moving averages, volume changes, and market sentiment scores. GammaVantage provides these in an easy-to-interpret format.',
    },
    {
      answer:
        'The automotive sector shows high volatility due to supply chain challenges and fluctuating demand. Industry insiders expect stabilization within Q4.',
    },
    {
      answer:
        'GammaVantage AI can monitor volatility indexes and real-time changes, alerting you to shifts in market stability across key sectors.',
    },
    {
      answer:
        'Energy sector forecasts indicate moderate growth, driven by increased renewable energy investments and steady oil prices. Analysts project a 3-4% increase in sector value next quarter.',
    },
  ]
  const randomIndex = Math.floor(Math.random() * dummyAnswers.length)

  await sleep(5000)
  return dummyAnswers[randomIndex]
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
