import Link from 'next/link';

export const metadata = {
  title: 'AI Feedback Assistant - Automated Guest Feedback & Insights',
  description: 'Collect and analyze guest feedback automatically with DineMate.ai. Sentiment analysis, real-time alerts, and actionable insights to improve service quality. Boost ratings and enhance guest satisfaction.',
  keywords: 'AI feedback collection, guest satisfaction analysis, restaurant reviews automation, sentiment analysis, customer feedback AI, service improvement',
  openGraph: {
    title: 'AI Feedback Assistant - Smart Guest Feedback Management',
    description: 'Automate feedback collection and get actionable insights. Boost guest satisfaction and improve service quality with AI.',
  },
};

export default function AIFeedbackAssistant() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">AI Voice Agent for Restaurants - Feedback Assistant</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automated guest feedback & insights powered by our ai voice agent for restaurants — Turn every review into actionable intelligence
          </p>
        </section>

        {/* Main Content */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="background-glass rounded-lg overflow-hidden">
              <img 
                src="/img/websites/friends_inrestuarant.webp" 
                alt="Intelligent Feedback Analysis" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="gradient-text text-3xl mb-6">Actionable Guest Insights</h2>
              <p className="text-gray-300 mb-4">
                Automatically collect feedback via SMS, email, and QR codes using our ai voice agent for restaurants. Our AI analyzes sentiment, identifies trends, and alerts you to issues before they become problems.
              </p>
              <p className="text-gray-300 mb-6">
                Transform guest opinions into operational improvements with real-time dashboards and automated reporting.
              </p>
              <Link href="/contact" className="button">
                See Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Comprehensive Feedback System</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <span>💬</span> Multi-Channel Collection
              </h3>
              <p className="text-gray-300">Gather feedback via SMS, email, QR codes, and in-app surveys</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <span>🧠</span> Sentiment Analysis
              </h3>
              <p className="text-gray-300">AI understands context and emotions in guest responses</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <span>🚨</span> Real-Time Alerts
              </h3>
              <p className="text-gray-300">Get notified immediately about negative experiences</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <span>📈</span> Trend Tracking
              </h3>
              <p className="text-gray-300">Identify patterns and track improvements over time</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">What You'll Discover</h2>
          <div className="space-y-4">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold mb-2">Service Quality Metrics</h3>
              <p className="text-gray-300">Track staff performance and service speed across all touchpoints</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold mb-2">Food Quality Insights</h3>
              <p className="text-gray-300">Identify popular dishes and areas for menu improvement</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold mb-2">Operational Issues</h3>
              <p className="text-gray-300">Spot problems with cleanliness, wait times, or facilities</p>
            </div>
          </div>
        </section>

        {/* Advanced Analytics */}
        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-8 text-center">AI-Powered Sentiment Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-2xl mb-4">Deep Learning Insights</h3>
              <p className="text-gray-300 mb-4">
                Our advanced ai voice agent for restaurants doesn't just collect feedback - it understands context, emotion, and intent. Identify emerging issues before they become problems and recognize positive trends to amplify.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Natural language understanding</li>
                <li>• Emotion detection in reviews</li>
                <li>• Topic clustering and categorization</li>
                <li>• Predictive issue identification</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4">Actionable Reporting</h3>
              <p className="text-gray-300 mb-4">
                Transform raw feedback into clear action items. Automatically generate reports for management, alert relevant team members to issues, and track improvement over time with beautiful dashboards.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Daily, weekly, and monthly reports</li>
                <li>• Department-specific insights</li>
                <li>• Trend analysis and forecasting</li>
                <li>• Benchmark against competitors</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Feedback Channels */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Collect Feedback Everywhere</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="background-glass p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-xl mb-3">SMS & Text</h3>
              <p className="text-gray-300">Send post-visit surveys via text message. High response rates with convenient one-tap feedback.</p>
            </div>
            <div className="background-glass p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="font-bold text-xl mb-3">Email Surveys</h3>
              <p className="text-gray-300">Automated email campaigns with branded surveys. Perfect for detailed feedback collection.</p>
            </div>
            <div className="background-glass p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📷</div>
              <h3 className="font-bold text-xl mb-3">QR Codes</h3>
              <p className="text-gray-300">Table tents and receipt QR codes for instant feedback while the experience is fresh.</p>
            </div>
            <div className="background-glass p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="font-bold text-xl mb-3">Web Forms</h3>
              <p className="text-gray-300">Embedded forms on your website for online order feedback and general inquiries.</p>
            </div>
            <div className="background-glass p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-bold text-xl mb-3">Review Monitoring</h3>
              <p className="text-gray-300">Aggregate Google, Yelp, and TripAdvisor reviews for comprehensive sentiment tracking.</p>
            </div>
            <div className="background-glass p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-xl mb-3">Social Media</h3>
              <p className="text-gray-300">Monitor and analyze mentions, comments, and direct messages across social platforms.</p>
            </div>
          </div>
        </section>

        {/* Competitive Intelligence */}
        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-8 text-center">Competitive Intelligence</h2>
          <p className="text-gray-300 mb-6 text-center max-w-3xl mx-auto">
            Don't just track your own performance - see how you stack up against local competitors and industry benchmarks.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-3">Competitive Analysis</h3>
              <p className="text-gray-300">Track competitor reviews and ratings to identify opportunities and stay ahead.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-3">Market Positioning</h3>
              <p className="text-gray-300">Understand your strengths and weaknesses relative to similar restaurants in your area.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-3">Industry Benchmarks</h3>
              <p className="text-gray-300">Compare your metrics against industry standards and top performers in your category.</p>
            </div>
          </div>
        </section>

        {/* Use Case Examples */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Real-World Applications</h2>
          <div className="space-y-4">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Improve Online Reputation</h3>
              <p className="text-gray-300">Catch dissatisfied guests before they leave negative public reviews. Proactive issue resolution can turn potential 1-star reviews into 5-star experiences.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Staff Training & Development</h3>
              <p className="text-gray-300">Identify training opportunities based on guest feedback. Recognize top performers and provide targeted coaching where needed.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Menu Optimization</h3>
              <p className="text-gray-300">Discover which dishes guests love and which need improvement. Make data-driven decisions about menu changes and seasonal specials.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Marketing Insights</h3>
              <p className="text-gray-300">Understand what guests love most about your restaurant. Use authentic feedback in marketing campaigns and social media content.</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16 background-glass p-12 rounded-2xl">
          <h2 className="gradient-text text-3xl mb-8 text-center">Impact Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">5x</div>
              <p className="text-gray-300">More feedback collected</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">80%</div>
              <p className="text-gray-300">Response rate via SMS</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">92%</div>
              <p className="text-gray-300">Issue resolution rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">4.8</div>
              <p className="text-gray-300">Average rating increase</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="background-glass p-12 rounded-2xl text-center">
          <h2 className="gradient-text mb-4">Turn Feedback Into Growth</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Start making data-driven decisions with comprehensive guest insights
          </p>
          <Link href="/contact" className="button">
            Start Collecting Feedback
          </Link>
        </section>
      </div>
    </div>
  );
}

