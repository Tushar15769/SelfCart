import React from 'react';
import '../styles/LandingPage.css';

export default function LandingPage() {
  return (
    <>
      <div className="barcode-strip"></div>

      <nav>
        <div className="nav-inner">
          <div className="logo">
            <span className="dot"></span>SelfCart
          </div>
          <div className="nav-links">
            <a href="#problem">Problem</a>
            <a href="#how">How it works</a>
            <a href="#why">Why blockchain</a>
            <a href="#benefits">Benefits</a>
            <a href="#architecture">Architecture</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Queue-free retail checkout</div>
            <h1>
              Scan. Pay.
              <br />
              <em>Walk out.</em>
            </h1>
            <p className="lede">
              A phone-based checkout system where every receipt is mathematically impossible to fake — verified in seconds, trusted by everyone, owned by no one.
            </p>
            <div className="cta-row">
              <a href="#how" className="btn btn-primary">
                See how it works →
              </a>
              <a href="#why" className="btn btn-ghost">
                Why blockchain, honestly
              </a>
            </div>
          </div>
          <div className="receipt-wrap">
            <div className="receipt" id="receipt">
              <div className="rhead">SELFCART</div>
              <div className="rsub">DIGITAL RECEIPT · UPI VERIFIED</div>
              <div className="rline" style={{ animationDelay: '.2s' }}>
                <span>Amul Milk 1L</span>
                <span>₹66</span>
              </div>
              <div className="rline" style={{ animationDelay: '.5s' }}>
                <span>Whole Wheat Bread</span>
                <span>₹48</span>
              </div>
              <div className="rline" style={{ animationDelay: '.8s' }}>
                <span>Basmati Rice 5kg</span>
                <span>₹410</span>
              </div>
              <div className="rline" style={{ animationDelay: '1.1s' }}>
                <span>Toor Dal 1kg</span>
                <span>₹142</span>
              </div>
              <div className="rdiv"></div>
              <div className="rline rtotal" style={{ animationDelay: '1.4s' }}>
                <span>TOTAL</span>
                <span>₹666.00</span>
              </div>
              <div className="rline rhash" style={{ animationDelay: '1.7s' }}>
                <span>0x9f3a…c71d — anchored on Stellar</span>
              </div>
              <div className="rqr" style={{ animationDelay: '2s', background: 'none' }}>
                <svg viewBox="0 0 29 29" width="78" height="78" fill="currentColor" style={{ display: 'block' }}>
                  {/* Finder Pattern Top Left */}
                  <rect x="0" y="0" width="7" height="7" />
                  <rect x="1" y="1" width="5" height="5" fill="#fff" />
                  <rect x="2" y="2" width="3" height="3" />

                  {/* Finder Pattern Top Right */}
                  <rect x="22" y="0" width="7" height="7" />
                  <rect x="23" y="1" width="5" height="5" fill="#fff" />
                  <rect x="24" y="2" width="3" height="3" />

                  {/* Finder Pattern Bottom Left */}
                  <rect x="0" y="22" width="7" height="7" />
                  <rect x="1" y="23" width="5" height="5" fill="#fff" />
                  <rect x="2" y="24" width="3" height="3" />

                  {/* Alignment Pattern Bottom Right */}
                  <rect x="20" y="20" width="5" height="5" />
                  <rect x="21" y="21" width="3" height="3" fill="#fff" />
                  <rect x="22" y="22" width="1" height="1" />

                  {/* Random QR code pixels */}
                  <rect x="8" y="0" width="1" height="3" />
                  <rect x="10" y="1" width="2" height="1" />
                  <rect x="13" y="0" width="3" height="2" />
                  <rect x="17" y="1" width="1" height="4" />
                  <rect x="19" y="0" width="2" height="1" />
                  <rect x="8" y="4" width="4" height="1" />
                  <rect x="13" y="3" width="2" height="3" />
                  <rect x="16" y="5" width="3" height="1" />
                  <rect x="20" y="3" width="1" height="3" />
                  <rect x="22" y="8" width="1" height="4" />
                  <rect x="24" y="9" width="3" height="2" />
                  <rect x="0" y="8" width="3" height="1" />
                  <rect x="2" y="10" width="2" height="3" />
                  <rect x="5" y="8" width="1" height="4" />
                  <rect x="8" y="8" width="2" height="2" />
                  <rect x="11" y="9" width="4" height="1" />
                  <rect x="11" y="11" width="1" height="3" />
                  <rect x="13" y="13" width="3" height="2" />
                  <rect x="17" y="9" width="2" height="3" />
                  <rect x="20" y="11" width="1" height="4" />
                  <rect x="22" y="13" width="4" height="1" />
                  <rect x="27" y="10" width="2" height="2" />
                  <rect x="0" y="14" width="4" height="2" />
                  <rect x="5" y="15" width="2" height="1" />
                  <rect x="8" y="13" width="1" height="4" />
                  <rect x="10" y="15" width="2" height="2" />
                  <rect x="13" y="16" width="3" height="1" />
                  <rect x="17" y="14" width="1" height="3" />
                  <rect x="19" y="16" width="2" height="2" />
                  <rect x="22" y="15" width="3" height="1" />
                  <rect x="26" y="14" width="1" height="4" />
                  <rect x="28" y="16" width="1" height="2" />
                  <rect x="0" y="18" width="2" height="2" />
                  <rect x="3" y="17" width="1" height="3" />
                  <rect x="5" y="19" width="3" height="1" />
                  <rect x="9" y="19" width="1" height="3" />
                  <rect x="11" y="18" width="2" height="1" />
                  <rect x="14" y="19" width="4" height="1" />
                  <rect x="19" y="19" width="1" height="2" />
                  <rect x="21" y="18" width="2" height="2" />
                  <rect x="25" y="19" width="3" height="1" />
                  <rect x="8" y="23" width="2" height="1" />
                  <rect x="11" y="22" width="1" height="3" />
                  <rect x="13" y="24" width="3" height="1" />
                  <rect x="17" y="22" width="1" height="4" />
                  <rect x="26" y="22" width="2" height="1" />
                  <rect x="25" y="24" width="1" height="3" />
                  <rect x="27" y="26" width="2" height="1" />
                  <rect x="8" y="26" width="4" height="1" />
                  <rect x="13" y="27" width="2" height="2" />
                  <rect x="16" y="26" width="3" height="1" />
                </svg>
              </div>
              <div className="rtick" style={{ animationDelay: '2.3s' }}>
                <span>✓</span>
                <span>VERIFIED AT EXIT</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="divider"></div>

      <section id="problem">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">The problem</div>
            <h2>{"It's not really about queues."}</h2>
            <p>
              {"Self-checkout kiosks already tried to fix the line — and just moved it. What's left underneath is a three-way trust problem nobody's actually solved."}
            </p>
          </div>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="pnum">01 — THE STORE</div>
              <h3>{"Doesn't trust the shopper"}</h3>
              <p>
                {"Self-scan makes under-scanning trivial — scan two items, bag five, walk out. Kiosks don't stop this; they just remove a cashier's eyes from the process."}
              </p>
            </div>
            <div className="problem-card">
              <div className="pnum">02 — THE SHOPPER</div>
              <h3>{"Doesn't trust the receipt"}</h3>
              <p>
                {"Is the payment actually recorded correctly? Can the app or the store quietly alter a bill after the fact? Today, the shopper has no way to check."}
              </p>
            </div>
            <div className="problem-card">
              <div className="pnum">03 — EVERYONE</div>
              <h3>{"Doesn't trust the proof"}</h3>
              <p>
                {"Paper receipts fade and tear. Screenshots can be edited in thirty seconds. Nothing about today's \"proof of purchase\" actually proves anything."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="how">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How SelfCart works</div>
            <h2>Four steps, entirely from your phone.</h2>
            <p>No kiosk. No new hardware for the store. No crypto wallet for the shopper.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="sindex">STEP 01</div>
              <div className="scontent">
                <h3>Scan</h3>
                <p>
                  {"Open the app and scan each product's barcode with your phone camera — the same motion as scanning a QR code. The cart total updates live as you go."}
                </p>
              </div>
            </div>
            <div className="step">
              <div className="sindex">STEP 02</div>
              <div className="scontent">
                <h3>Pay</h3>
                <p>
                  {"Tap \"Pay\" and settle the bill through whatever you already use — Google Pay, PhonePe, Paytm, UPI, or a card. Completely normal payment, nothing new to learn."}
                </p>
              </div>
            </div>
            <div className="step">
              <div className="sindex">STEP 03</div>
              <div className="scontent">
                <h3>Get a tamper-proof receipt</h3>
                <p>
                  {"The instant payment succeeds, the system fingerprints the exact bill — items, amount, store, timestamp — and anchors that fingerprint to the Stellar blockchain."}
                </p>
                <div className="note">
                  {"Think of it as writing your bill on paper, then having thousands of independent witnesses stamp a copy at the same moment. After that, nobody — not the store, not a hacker, not even SelfCart itself — can quietly change it. Your money still moves over UPI as normal; the blockchain only handles the proof."}
                </div>
              </div>
            </div>
            <div className="step">
              <div className="sindex">STEP 04</div>
              <div className="scontent">
                <h3>Walk out</h3>
                <p>
                  {"At the exit, a checker scans your QR code. The app looks up the receipt directly on the blockchain — not the store's private database — compares it to your cart, and shows a green tick if it matches. No line, no manual check, nothing to fake."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="why">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">The honest answer</div>
            <h2>Why not just use a normal database?</h2>
            <p>
              {"A fair question. Here's the real comparison — no hand-waving."}
            </p>
          </div>
          <div className="compare">
            <div className="compare-col col-without">
              <div className="compare-col-head">Without blockchain</div>
              <div className="compare-row">
                {"The store's database could technically be edited by an admin, or hacked outright."}
              </div>
              <div className="compare-row">
                {"The checker has to trust the app's word that a bill is genuine."}
              </div>
              <div className="compare-row">
                {"Receipts only work inside one store's own system."}
              </div>
              <div className="compare-row">
                {"Loyalty points stay stuck inside one store's app."}
              </div>
            </div>
            <div className="compare-col col-with">
              <div className="compare-col-head">With blockchain</div>
              <div className="compare-row">
                {"The receipt record can't be secretly altered by anyone once it's written."}
              </div>
              <div className="compare-row">
                {"The checker's scanner checks a public, independent record — no trust required."}
              </div>
              <div className="compare-row">
                {"A receipt built this way can work across stores and brands, with no shared private database."}
              </div>
              <div className="compare-row">
                {"Loyalty and trust points become portable tokens, usable across participating stores."}
              </div>
            </div>
          </div>
          <p style={{ marginTop: '28px', fontSize: '15px', color: '#3a4640', maxWidth: '64ch' }}>
            {"The blockchain's job here is narrow and specific: make \"proof of an honest, paid bill\" something nobody can fake or quietly edit — it never touches the actual money."}
          </p>
        </div>
      </section>

      <div className="divider"></div>

      <section id="payment">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Payment</div>
            <h2>Pay exactly how you already pay.</h2>
            <p>
              {"No crypto wallet, no new balance to top up, nothing new to trust. Money moves instantly, exactly like scanning a QR at any counter today — SelfCart never shows a shopper the word \"blockchain\" unless they go looking for it."}
            </p>
          </div>
          <div className="pay-badges">
            <span className="pay-badge">Google Pay</span>
            <span className="pay-badge">PhonePe</span>
            <span className="pay-badge">Paytm</span>
            <span className="pay-badge">BHIM / UPI</span>
            <span className="pay-badge">{"Debit & credit cards"}</span>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="benefits">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Built-in incentives</div>
            <h2>Rewarding for both sides of the counter.</h2>
            <p>
              Points and scores are tracked off-chain like any normal loyalty system, and checkpointed to the blockchain periodically — fast, nearly free, and still tamper-proof.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-col">
              <h3>For the shopper</h3>
              <div className="benefit-item">
                <div className="bname">Trust score</div>
                <p>
                  Every honest, mismatch-free exit raises your score. Higher trust means fewer random re-checks and a faster walk-out over time.
                </p>
              </div>
              <div className="benefit-item">
                <div className="bname">Loyalty points</div>
                <p>
                  {"Portable across participating stores, instead of locked inside one brand's app."}
                </p>
              </div>
            </div>
            <div className="benefit-col">
              <h3>For the shopkeeper</h3>
              <div className="benefit-item">
                <div className="bname">Reputation score</div>
                <p>
                  Every store with low fraud and dispute rates builds reputation that can lower platform fees over time.
                </p>
              </div>
              <div className="benefit-item">
                <div className="bname">Volume rewards</div>
                <p>
                  High, honest transaction volume earns a share of fees back as redeemable credit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="architecture">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{"What's actually built"}</div>
            <h2>Simple architecture, on purpose.</h2>
          </div>
          <table className="arch">
            <thead>
              <tr>
                <th>Part</th>
                <th>What it does</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shopper App</td>
                <td>{"Phone camera scans barcodes, shows a live cart total, and a single \"Pay\" button."}</td>
              </tr>
              <tr>
                <td>Payment</td>
                <td>{"Connects to UPI / Google Pay / PhonePe — real rupees, no crypto involved."}</td>
              </tr>
              <tr>
                <td>Receipt Engine</td>
                <td>Fingerprints the bill and writes it to the blockchain the moment payment succeeds.</td>
              </tr>
              <tr>
                <td>QR Code</td>
                <td>Generated post-payment, linking to the verified on-chain receipt.</td>
              </tr>
              <tr>
                <td>Checker App</td>
                <td>{"Scans the shopper's QR, pulls the record from the blockchain, matches it against the cart, shows a green tick or a mismatch."}</td>
              </tr>
              <tr>
                <td>{"Trust & Loyalty"}</td>
                <td>Tracks scores normally, periodically checkpoints a summary on-chain for portability.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="barcode-strip"></div>

      <section className="pitch">
        <div className="wrap">
          <blockquote>
            {"\"Shoppers scan their own products, pay however they normally would, and get a receipt that's "}
            <span>mathematically impossible to fake</span>
            {". A checker scans it at the exit and instantly knows it's real — no queues, no kiosks, no trust issues.\""}
          </blockquote>
        </div>
      </section>

      <div className="divider"></div>

      <section id="diff">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Why this is different</div>
            <h2>{"What already exists doesn't remove the trust problem."}</h2>
          </div>
          <div className="diff-row">
            <div className="dname">Self-checkout kiosks</div>
            <p>
              {"Toshiba, NCR, Diebold and similar systems just move the queue to a machine — they don't remove the underlying trust problem between store and shopper."}
            </p>
          </div>
          <div className="diff-row">
            <div className="dname">Store-only scan-and-go</div>
            <p>
              {"Existing scan-and-go pilots keep receipts inside a store's own private database. A checker still has to trust that system blindly, and it doesn't work across different brands."}
            </p>
          </div>
          <div className="diff-row edge">
            <div className="dname">{"SelfCart's edge"}</div>
            <p>
              {"Phone-based scanning plus a receipt that's provably real to anyone, from any store — with no store hardware and no shared private database between competing retailers."}
            </p>
          </div>
        </div>
      </section>

      <footer>
        {"SELFCART — UPI payments for money movement · Blockchain for tamper-proof receipts & portable trust"}
      </footer>
    </>
  );
}
