import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const formatMoney = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

const plans = [
  {
    number: "01",
    name: "Fellowship",
    descriptor: "Build your foundation",
    audience: "For candidates who want a structured starting point and a strong peer community.",
    price: "$499",
    interval: "/month",
    features: [
      "Full course library and core workshops",
      "Weekly group office hours",
      "One personalized resume review each month",
      "Peer community and practice resources",
    ],
    href: "/join?program=fellowship",
    action: "Choose Fellowship",
  },
  {
    number: "02",
    name: "Mentor Intensive",
    descriptor: "Make the work personal",
    audience: "For candidates actively recruiting who need direct feedback and a tighter plan.",
    price: "$1,499",
    interval: "/month",
    features: [
      "Everything in the Fellowship",
      "Four private mentor sessions each month",
      "Two full mock interviews each month",
      "A tailored outreach and application plan",
    ],
    href: "/join?program=intensive",
    action: "Choose Intensive",
  },
  {
    number: "03",
    name: "Offer Partnership",
    descriptor: "Stay supported through the offer",
    audience: "For candidates who want deeper coaching with part of the fee linked to a result.",
    price: "$499",
    interval: "/month",
    features: [
      "Everything in the Mentor Intensive",
      "Six private mentor sessions each month in total",
      "Three mock interviews each month in total",
      "Offer evaluation and negotiation guidance",
    ],
    href: "/join?program=partnership",
    action: "Apply for Partnership",
  },
];

export default function ProgramPricing() {
  const [annualBase, setAnnualBase] = useState(120000);
  const successFee = Math.min((annualBase / 12) * 0.1, 2000);

  return (
    <section className="section pricing-section" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-heading pricing-heading">
          <div>
            <span className="eyebrow">Ways to work together</span>
            <h2 id="pricing-title">Choose the support that fits.</h2>
          </div>
          <p className="lead">
            Each program is billed monthly while you are enrolled. Start with
            the course library, add private mentorship, or link part of the fee to an offer.
          </p>
        </div>

        <div className="program-pricing-grid">
          {plans.map((plan) => (
            <article
              className={`program-price-card${plan.number === "03" ? " offer-card" : ""}`}
              key={plan.name}
            >
              <div className="program-price-top">
                <span>{plan.number} / {plan.descriptor}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{plan.name}</h3>
              <p className="program-price-audience">{plan.audience}</p>
              <div className="program-price-amount">
                <strong>{plan.price}</strong>
                <span>{plan.interval}</span>
              </div>
              {plan.number === "03" && (
                <p className="program-success-line">
                  + 10% of your first month’s base pay after you start a qualifying role.
                  One payment, capped at $2,000.
                </p>
              )}
              <ul className="program-price-features">
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <Link
                href={plan.href}
                className={`btn ${plan.number === "03" ? "btn-light" : "btn-secondary"}`}
              >
                {plan.action} <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <div className="offer-explainer" aria-labelledby="offer-explainer-title">
          <div className="offer-explainer-copy">
            <span className="eyebrow">Offer Partnership, explained</span>
            <h3 id="offer-explainer-title">Monthly coaching. One possible success fee.</h3>
            <p>
              The program is $499 per month while you are enrolled. If you accept and
              start a qualifying full-time finance or consulting role within
              12 months, the additional fee is 10% × (annual base salary ÷ 12),
              up to $2,000. We invoice once, 30 days after your first paycheck;
              nothing is deducted from payroll. Bonuses, equity, and signing
              awards are excluded.
            </p>
            <p className="offer-fine">
              No qualifying role started means no success fee. Monthly program
              charges still apply while enrolled. Coaching does not guarantee an offer.
            </p>
          </div>
          <div className="offer-calculator">
            <label htmlFor="annual-base">See what the fee could be</label>
            <div className="offer-base-value">
              <strong>{formatMoney(annualBase)}</strong>
              <span>annual base salary</span>
            </div>
            <input
              id="annual-base"
              type="range"
              min="60000"
              max="240000"
              step="10000"
              value={annualBase}
              onChange={(event) => setAnnualBase(Number(event.target.value))}
              aria-valuetext={`${formatMoney(annualBase)} annual base salary`}
            />
            <div className="offer-range-labels"><span>$60k</span><span>$240k</span></div>
            <dl className="offer-breakdown">
              <div><dt>One month of coaching</dt><dd>$499</dd></div>
              <div><dt>One-time success fee</dt><dd>{formatMoney(successFee)}</dd></div>
              <div className="offer-total"><dt>Illustrative example</dt><dd>{formatMoney(499 + successFee)}</dd></div>
            </dl>
            <p>Example shows one month plus a possible success fee. Additional months are billed separately. Your written agreement sets the applicable terms.</p>
          </div>
        </div>
        <p className="pricing-bottom-note">
          All prices are in USD per month, except the one-time success fee. No payment is collected on this site; the coaching application is a preview.
        </p>
      </div>
    </section>
  );
}
