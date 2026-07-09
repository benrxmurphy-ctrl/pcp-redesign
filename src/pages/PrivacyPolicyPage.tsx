import Breadcrumb from '../components/Breadcrumb';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string, id?: string) => void;
}

const sections = [
  {
    number: '1',
    title: 'Definitions',
    content: (
      <ul className="list-none space-y-2 text-white/60 text-sm leading-relaxed">
        {[
          ['BUYER', 'means the person who buys or agrees to buy the Goods from the Seller;'],
          ['CONDITIONS', 'means the terms and conditions of sale set out in this document and any special terms and conditions agreed in writing by the Seller;'],
          ['CONTRACT', 'means a contract implied or actual, between the Seller and the Buyer for the sale and purchase of Goods in accordance with these Conditions;'],
          ['DELIVERY DATE', 'means the date specified by the Seller when the Goods are to be delivered, or the date on which delivery takes place, whichever is later;'],
          ['DELIVERY DESTINATION', 'means the location specified in a Contract for the delivery of the Goods ordered by the Buyer under that Contract;'],
          ['GOODS', 'means the articles which the Buyer agrees to purchase from the Seller;'],
          ['SELLER', 'means Power and Chemical Plant Ltd., T/A PCP Group, PCP House, Ballymore Eustace, Co. Kildare, W91W275, Ireland.'],
        ].map(([term, def]) => (
          <li key={term} className="flex gap-2">
            <span className="text-white font-semibold shrink-0">{term} –</span>
            <span>{def}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '2',
    title: 'Conditions Applicable',
    content: (
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">
        <p>2.1 These Conditions shall apply to all Contracts to the exclusion of all other terms and conditions including any terms or conditions which the Buyer may purport to apply under any purchase order, confirmation of order, or similar document.</p>
        <p>2.2 All orders for Goods shall be deemed to be an offer by the Buyer to purchase Goods pursuant to these Conditions.</p>
        <p>2.3 Payment of initial invoice shall be deemed conclusive evidence of the Buyer's acceptance of these Conditions.</p>
        <p>2.4 Any variation to these Conditions (including any special terms and conditions agreed between the parties) shall be inapplicable unless expressly agreed in writing by the Seller. The Buyer acknowledges that it has not relied on any statement, promise or representation made or given by or on behalf of the Seller which is not set out in a Contract.</p>
        <p>2.5 Quotations issued by the Seller do not constitute an offer by the Seller to supply the Goods referred to therein.</p>
      </div>
    ),
  },
  {
    number: '3',
    title: 'Price',
    content: (
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">
        <p>3.1 In such cases where the Goods are sold by reference to the Seller's price list, the price payable for the Goods shall be the price stipulated in the Seller's quotation current at the date of the Contract, or the date on which the Goods were ordered by the Buyer (as applicable). Otherwise, the price payable for the Goods shall be the price agreed upon by the Seller and the Buyer.</p>
        <p>3.2 The Seller reserves the right to increase from time to time the current price list without giving written notification to the Buyer due to the volatile nature of the raw materials used and specific market conditions.</p>
        <p>3.3 The price is exclusive of VAT (or any similar tax) or any tax or duty relating to manufacture, transport, export, import, sale or delivery of the goods which shall be due at the rate ruling on the date of the Seller's invoice.</p>
        <p>3.4 All prices are quoted in Euros unless otherwise specified, and all payments must be made in Euros unless otherwise agreed in writing by the Seller.</p>
      </div>
    ),
  },
  {
    number: '4',
    title: 'Delivery',
    content: (
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">
        <p>4.1 Delivery shall take place by such method as the Seller may in its absolute discretion decide, to the location specified by the Buyer (the "Delivery Destination"), on or as close to the Delivery Date as is reasonably practicable in all the circumstances. For the avoidance of doubt, the Delivery Date is approximate only, and unless otherwise expressly agreed in writing by the Seller, time is not of the essence for delivery.</p>
        <p>4.2 Costs of packaging and delivery shall be included in the price of the Goods, unless otherwise stated in the Sale Invoice.</p>
        <p>4.3 No delay in the delivery of the Goods shall affect the price of the Goods or entitle the Buyer to reject any delivery or any further instalment or part of the order or any other order from the Buyer or to repudiate the Contract or the order.</p>
        <p>4.4 The Buyer's attention is drawn to the provisions in Condition 9.1.3.</p>
        <p>4.5 If, for any reason, the Buyer fails to accept delivery of any of the Goods when they are ready for delivery, or the Seller is unable to deliver the Goods on time because the Buyer has not provided appropriate instructions, documents, licences or authorisations, the Seller may store the Goods until delivery, whereupon the Buyer shall be liable for all related costs and expenses (including, without limitation, storage and insurance).</p>
        <p>4.6 Subject to the other provisions of these Conditions the Seller shall not be liable for any direct, indirect or consequential loss, costs, damages, charges or expenses caused directly or indirectly by a delay in the delivery of the Goods (even if caused by the Seller's negligence), nor shall any delay entitle the Buyer to terminate or rescind the Contract.</p>
      </div>
    ),
  },
  {
    number: '5',
    title: 'Payment',
    content: (
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">
        <p>5.1 Unless the Contract provides otherwise, subject to 5.3, payment of the price, VAT and any other tax, duty, insurance, storage or delivery charges shall be due as detailed in the quotation or based on the Seller's agreement.</p>
        <p>5.2 In the event that payment is to be made by a letter of credit then it shall be an express condition of the Contract that the letter of credit is irrevocable and is drawn on or confirmed by a bank in the Republic of Ireland.</p>
        <p>5.3 All payments payable to the Seller under the Contract shall become due immediately on its termination despite any other provision.</p>
        <p>5.4 Time for payment shall be of the essence.</p>
        <p>5.5 The Buyer may not withhold payment of any invoice or other amount due to the Seller by reason of any right of set-off or counterclaim which the Buyer may have or allege to have or for any reason whatsoever.</p>
      </div>
    ),
  },
  {
    number: '6',
    title: 'Late Payment',
    content: (
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">
        <p>6.1 In the event that the Buyer fails to make payment of any invoice within its due date for payment then the Seller shall be entitled to (without limitation):</p>
        <ul className="ml-4 space-y-2">
          <li>6.1.1 Charge interest on such invoice from the date of the invoice until the date of payment at a rate of 8% above the base rate from time to time in force at the European Central Bank;</li>
          <li>6.1.2 Charge additional interest in accordance with the European Communities (Late Payment in Commercial Transactions) Regulations 2002;</li>
          <li>6.1.3 Suspend or cancel deliveries of any Goods due to the Buyer;</li>
          <li>6.1.4 Appropriate any payment made by the Buyer to such of the Goods as the Seller may in its sole discretion think fit.</li>
        </ul>
        <p>6.2 The rights and remedies of the Seller set forth hereto are cumulative, not exclusive.</p>
        <p>6.3 The Seller shall be entitled to exercise these remedies notwithstanding that risk and/or title to the Goods may not have passed to the Buyer.</p>
      </div>
    ),
  },
  {
    number: '7',
    title: 'Risk and Title',
    content: (
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">
        <p>7.1 Risk in the Goods shall pass to the Buyer according to delivery terms specified in the Sale Invoice (Incoterms 2010), or upon collection by the Buyer, whichever is earlier.</p>
        <p>7.2 The Seller accepts no responsibility for any loss, damage or shortage which may occur to the Goods in transit after risk has passed to the Buyer.</p>
        <p>7.3 Title to the Goods shall not pass to the Buyer until such time as the Seller has received in cash or cleared funds, full payment of the price of the Goods and all other goods and services agreed to be sold.</p>
        <p>7.4 Until title passes, the Buyer shall hold the Goods as fiduciary agent and bailee of the Seller, keeping them separate from other goods, properly stored, protected, insured and identified as the Seller's property.</p>
        <p>7.5 Any Goods repossessed by the Seller may be resold on such terms as the Seller may in its absolute discretion determine.</p>
        <p>7.8 Upon termination of the Contract, howsoever caused, the Seller's rights contained in this Condition shall remain in effect.</p>
        <p>7.9 No returns may be made without Seller's written approval. Buyer shall pay all return shipping charges to the location designated by Seller. Restocking fees may be charged at Seller's discretion.</p>
      </div>
    ),
  },
  {
    number: '8',
    title: 'Warranty',
    content: (
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">
        <p>8.1 Subject to the provisions of Condition 9, the Seller warrants that the Goods will correspond with their specification at the time of delivery and will be free from defect in both materials and workmanship for a period of twelve (12) months from the Delivery Date.</p>
        <p>8.2 All other warranties, conditions or terms relating to the fitness for purpose, quality or condition of the Goods, whether express or implied by statute, common law or otherwise, are excluded to the fullest extent permitted by law.</p>
      </div>
    ),
  },
  {
    number: '9',
    title: 'Limitation of Liability',
    content: (
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">
        <p>9.1 The Seller shall be under no liability to the Buyer in respect of any defect arising from wear and tear, wilful damage, negligence, abnormal working conditions, failure to follow the Seller's instructions, misuse or alteration of the Goods without the Seller's approval.</p>
        <p>9.2 Where any valid claim in respect of any of the Goods is notified to the Seller in accordance with these Conditions, the Seller shall be entitled to fix or replace the Goods free of charge, or at its sole discretion refund the price of the Goods. Upon undertaking either of these steps the Seller shall have no further liability to the Buyer.</p>
        <p>9.3 Any claim by Buyer arising out of this Contract shall be provided to Seller by written notice no later than 90 days after the date the Goods were delivered. Buyer unconditionally waives any and all claims not made within this period.</p>
      </div>
    ),
  },
  {
    number: '10',
    title: 'Intellectual Property Rights',
    content: (
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">
        <p>10.1 All intellectual property rights and all other rights in the Goods and the Seller's website shall be owned by the Seller, the Seller's agents, subcontractors, consultants and employees as appropriate.</p>
        <p>10.2 The Buyer shall indemnify the Seller on a full indemnity basis against any and all actions, costs, claims, proceedings, accounts and damages in respect of any infringement of any patent, registered design, copyright, trademark or other intellectual property rights resulting from compliance by the Seller with the Buyer's specific instructions.</p>
      </div>
    ),
  },
  {
    number: '11',
    title: 'Data Protection',
    content: (
      <p className="text-white/60 text-sm leading-relaxed">
        The Buyer acknowledges and agrees that details of the Buyer's name, address and payment record may be submitted to a credit reference agency, and personal data will be processed by and on the Seller's behalf in connection with the Goods.
      </p>
    ),
  },
  {
    number: '12',
    title: 'Termination of Contract',
    content: (
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">
        <p>12.1 Unless otherwise agreed by Seller and Buyer in writing, no Contract or work order may be terminated by Buyer except by mutual agreement in writing. If agreeable, goods may be returned subject to a restocking charge of 35% of contract value, plus collection fee.</p>
        <p>12.2 Termination of a Contract is subject to: (i) Buyer paying for all undelivered Goods which are completely manufactured and allocatable to Buyer at the time of receipt of notice of termination; and (ii) Buyer paying all costs incurred by Seller with regard to Goods not completely manufactured, plus a pro rata portion of normal profit on the Contract.</p>
      </div>
    ),
  },
  {
    number: '13',
    title: 'General Provisions',
    content: (
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">
        <p>13.1 These Conditions shall be governed by and construed in accordance with Irish law and the parties hereby submit to the non-exclusive jurisdiction of the Irish Courts.</p>
        <p>13.2 Any dispute arising out of or in connection with the Contract shall be settled by consultation between the Parties. In the event of failure within 60 days, the matter shall be finally resolved by arbitration under UNCITRAL Rules, with the seat of arbitration in Dublin, Ireland.</p>
        <p>13.3 No forbearance or indulgence by the Seller shall be regarded as any waiver of any of these Conditions.</p>
        <p>13.4 The Seller may cancel any Contract at any time before the Goods are delivered by giving written notice, upon which the Seller shall promptly repay any sums paid in respect of the Goods.</p>
        <p>13.5 The Seller reserves the right to sub-contract the whole or any part of the Contract.</p>
        <p>13.6 Any provision of these Conditions which is, or may be, void or unenforceable shall be deemed severable and shall not affect any other provision of the Contract.</p>
        <p>13.7 Any notice under or in connection with these Conditions shall be in writing and shall be served by registered post or by hand on the party.</p>
      </div>
    ),
  },
  {
    number: '14',
    title: 'Technical Advice or Observation',
    content: (
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">
        <p>14.1 At Buyer's request, Seller may provide certain limited observation and/or technical advice associated with the sale and/or use of the Goods. Seller reserves the right to establish limits on the total time allocated to Buyer for such Services.</p>
        <p>14.2 Services are offered in an advisory capacity only, and Buyer assumes full responsibility for its use or non-use of such Services. Seller makes no warranty, expressed or implied, as to the services.</p>
        <p>14.3 Each party shall indemnify and defend the other Party and shall be responsible for all losses, damages, claims, liabilities arising out of Services, where arising out of injury, disease, or death of that party's own employees, or loss of or damage to that party's own property.</p>
        <p>14.4 When visiting each other's premises, Buyer and Seller and their respective personnel shall observe all rules or regulations that are in force on such premises. Buyer shall inform Seller of hazards reasonably associated with the provision of the Services.</p>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="bg-brand-dark pt-20">
      {/* Header */}
      <section className="py-20 px-4 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Standard Terms<br />
            <span className="text-brand-orange">&amp; Conditions</span>
          </h1>
          <p className="text-white/50 text-sm max-w-2xl">
            Power and Chemical Plant Ltd., T/A PCP Group — PCP House, Ballymore Eustace, Co. Kildare, W91W275, Ireland.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="px-4 py-3 bg-brand-dark-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: 'Terms & Conditions' }]} onNavigate={onNavigate} />
        </div>
      </div>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          {sections.map((section) => (
            <div key={section.number} className="border-t border-white/10 pt-8">
              <div className="flex items-start gap-5 mb-4">
                <div className="w-8 h-8 bg-brand-orange flex items-center justify-center shrink-0 text-white text-xs font-bold">
                  {section.number}
                </div>
                <h2 className="text-white font-bold text-lg uppercase tracking-wide pt-1">{section.title}</h2>
              </div>
              <div className="ml-13 pl-0 md:pl-13">
                {section.content}
              </div>
            </div>
          ))}

          <div className="border-t border-white/10 pt-8 text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Power and Chemical Plant Ltd., T/A PCP Group. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
