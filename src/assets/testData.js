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

export function SampleAnswers() {
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
  return dummyAnswers[randomIndex]
}
