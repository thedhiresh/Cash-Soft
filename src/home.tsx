import React from "react";
import {
  ArrowRight,
  Wallet,
  PiggyBank,
  Users,
  Bell,
  Award,
  TrendingUp,
} from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#083E96] to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Student Finance
                <span className="text-red-400"> Made Simple</span>
              </h1>

              <p className="mt-6 text-lg text-blue-100">
                Split expenses, manage budgets, send money, track spending,
                and earn rewards — all in one smart platform.
              </p>

              <div className="flex gap-4 mt-8">
                <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                  Get Started
                  <ArrowRight size={18} />
                </button>

                <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition">
                  Login
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src="/dashboard-preview.png"
                alt="CashSoft Dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              Why Choose Cash-Soft?
            </h2>
            <p className="text-gray-600 mt-4">
              Everything students need to manage money effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <FeatureCard
              icon={<Users />}
              title="Expense Splitting"
              description="Split rent, food, travel, and group expenses instantly."
            />

            <FeatureCard
              icon={<PiggyBank />}
              title="Budget Management"
              description="Create budgets and get alerts before overspending."
            />

            <FeatureCard
              icon={<Wallet />}
              title="Money Transfers"
              description="Send and receive money using student IDs or usernames."
            />

            <FeatureCard
              icon={<TrendingUp />}
              title="Finance Dashboard"
              description="Monitor income, expenses, balances, and spending trends."
            />

            <FeatureCard
              icon={<Award />}
              title="Credit Rewards"
              description="Earn points for smart financial habits."
            />

            <FeatureCard
              icon={<Bell />}
              title="SMS Notifications"
              description="Stay informed even without internet access."
            />

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <StatCard value="24/7" label="Access Anywhere" />
            <StatCard value="100%" label="Secure Transactions" />
            <StatCard value="Instant" label="Expense Splitting" />
            <StatCard value="Smart" label="Budget Tracking" />

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#083E96] text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready to Take Control of Your Money?
          </h2>

          <p className="mt-6 text-blue-100 text-lg">
            Join Cash-Soft today and start managing your finances smarter.
          </p>

          <button className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold">
            Create Free Account
          </button>

        </div>
      </section>

    </div>
  );
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
    <div className="text-blue-700 mb-4">{icon}</div>

    <h3 className="text-xl font-semibold mb-2">{title}</h3>

    <p className="text-gray-600">{description}</p>
  </div>
);

type StatCardProps = {
  value: string;
  label: string;
};

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="bg-white p-8 rounded-xl shadow">
    <h3 className="text-3xl font-bold text-blue-800">{value}</h3>
    <p className="text-gray-600 mt-2">{label}</p>
  </div>
);

export default Home;